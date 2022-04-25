import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

var baseUrl = "https://provinces.open-api.vn/api/?depth=1";

export default new Vuex.Store({
  state: {
    search: "",
    citys: [],
    selectCitys: [],
    filterCitys: [],
  },
  getters: {
    getCitys(state) {
      return state.citys;
    },
    getSearch(state) {
      return state.search;
    },
    getSelectCitys(state) {
      return state.selectCitys;
    },
    getFilterCitys(state) {
      return state.filterCitys;
    },
  },
  actions: {
    getCitys({ commit }) {
      axios
        .get(baseUrl)
        .then((response) => {
          commit("setCitys", response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    addSelectField({ commit }, city) {
      commit("addSelectCitys", city);
    },
    removeSelectField({ commit }, city) {
      commit("removeSelectCitys", city);
    },
    filterSearch({ commit }, value) {
      commit("filterCitys", value);
    },
  },
  mutations: {
    setCitys(state, citys) {
      state.citys = citys;
    },
    addSelectCitys(state, city) {
      state.selectCitys.push(city.name);
    },
    removeSelectCitys(state, name) {
      let index = state.selectCitys.indexOf(name);
      state.selectCitys.splice(index, 1);
    },
    filterCitys(state, word) {
      state.search = word;
      word = word.trim().toLowerCase();
      state.citys = state.filterCitys.filter((city) =>
        city.name.toLowerCase().includes(word)
      );
    },
  },
});
