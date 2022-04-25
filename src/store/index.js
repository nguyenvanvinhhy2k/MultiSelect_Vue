<template>
  <div class="">
    <div class="Container">
      <input
        @click="handleClick"
        style="margin-top: 55px"
        type="text"
        placeholder="Chọn Thành Phố"
        @input="handleInput"
      />
      <span>
        <svg
          @click="handleClick"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 8 4"
          fill="none"
        >
          <path d="M8 0H0L4 4L8 0Z" fill="#666666" /></svg
      ></span>
      <div class="content" v-show="focused">
        <div
          class="content_option"
          v-for="city in filterCitys"
          :key="city.code"
        >
          <input
            class="content_checkbox checked"
            type="checkbox"
            @change="selectedCitys($event, city)"
            :checked="selectCitys.some((item) => item == city.name)"
          />
          <div class="content_text">{{ city.name }}</div>
        </div>
      </div>
      <div class="Containerr" v-if="selectCitys.length > 0">
        <div
          class="Container_text"
          v-for="selectCity in selectCitys"
          :key="selectCity"
        >
          <p class="">{{ selectCity }}</p>
          <span @click="removeSelectCity(selectCity)"
            ><img src="../assets/remove.jpg" alt=""
          /></span>
        </div>
      </div>
      <div class="content_button" v-show="focused">
        <button
          :class="{ 'disabled-btn': selectCitys.length >= 0 }"
          @click="focused = !focused"
          class="button1"
        >
          Đồng ý
        </button>
        <button @click="focused = false" class="button2">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "MultiSelect",
  data() {
    return {
      focused: false,
      show: true,
      search: "",
    };
  },
  watch: {
    search: {
      handler(val) {
        let newFilterCitys = [];
        if (val !== "") {
          newFilterCitys = this.citys.filter((data) =>
            data.name.toLowerCase().includes(val.toLowerCase())
          );
        } else {
          newFilterCitys = JSON.parse(JSON.stringify(this.citys));
        }
        this.setFilterCitys(newFilterCitys);
      },
      immediate: true,
    },
  },
  async created() {
    await this.getListCity();
  },

  computed: {
    ...mapState({
      selectCitys: (state) => state.selectCitys,
    }),
    ...mapGetters({
      citys: "getCitys",
      filterCitys: "getFilterCitys",
    }),
  },

  mounted() {},

  methods: {
    ...mapActions({ getListCity: "getCitys" }),
    ...mapMutations({ setFilterCitys: "setFilterCitys" }),
    handleClick() {
      this.focused = !this.focused;
    },
    ...mapActions({
      addSelectField: "addSelectField",
      removeSelectField: "removeSelectField",
    }),
    handleInput(e) {
      this.search = e.target.value
    },
    selectedCitys(e, city) {
      if (e.target.checked) {
        this.addSelectField(city);
      } else {
        this.removeSelectField(city.name);
      }
    },
    removeSelectCity(city) {
      this.removeSelectField(city);
    },
  },
};
</script>

<style scoped></style>
