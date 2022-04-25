<template>
<div class="">
    <h3 v-for="i in cityss" :key="i">{{i.name}} </h3>
    <h2 style="color:red" v-for="day in days" :key="day.code">{{day.name}}</h2>
</div>
</template>

<script>
// import axios from 'axios'
export default {
    name: "MultiSelectPage",
    data() {
        return {
            days: [],
        };
    },
    computed: {
        cityss() {
            return this.$store.getters.cityss.name
        }
    },
}
</script>

<style scoped></style>
