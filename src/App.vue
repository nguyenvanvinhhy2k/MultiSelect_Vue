<template>
  <div id="app" class="container mt-10">
    <Mutltiselect />
    <MultiSelectPage />
  </div>
</template>

<script>
import Mutltiselect from "./components/Multiselect.vue";
import MultiSelectPage from "./components/MutltiselectPage.vue";
export default {
  components: {
    Mutltiselect,
    MultiSelectPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  margin: 0 auto;
  font-size: 13px;
}
.Container_text {
  display: flex;
  align-items: center;
  width: 30%;
  height: 31px;
  border-radius: 40px;
  background: #f8f8f8;
  margin-top: 8px;
  margin-left: 12px;
  margin-bottom: 8px;
}
.button1 {
  width: 120px;
  height: 32px;
  margin: 10px 8px;
  float: left;
  background: #dcdcdc;
  border-radius: 4px;
  border: none;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
span {
  margin-right: 10px;
}
.button2 {
  width: 80px;
  float: left;
  font-family: "Noto Sans";
  font-style: normal;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  height: 32px;
  margin: 10px 8px;
  color: #007bc3;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  border-radius: 4px;
}
.content {
  position: absolute;
  width: 480px;
  right: 0;
  height: 205px;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);
  border-radius: 4px;
  overflow-y: auto;
}
input :hover {
  background-color: #fff;
}
.content::-webkit-scrollbar {
  width: 8px;
  height: 20px;
  display: block;
  border-radius: 6px;
  background: #dcdcdc;
}
.content_option {
  display: flex;
  padding: 10px;
}
.content_option:hover {
  background: #e7f1fd;
}
.Containerr {
  position: absolute;
  width: 480px;
  margin: 10px auto;
  display: flex;
  background-color: #fff;
  min-height: 55px;
  border: 1px solid #007bc3;
  box-shadow: 0 0 8px rgb(0 123 195 / 32%);
  border-radius: 4px;
  cursor: pointer;
  flex-wrap: wrap;
}
.Container {
    margin: 0 auto;
    width: 480px;
    position: relative;
}
.content_checkbox {
  width: 18px;
  height: 18px;
  margin-right: 7px;
  position: relative;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #000;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 2px;
}
.content_checkbox::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  width: 8px;
  height: 6px;
  transition: 120ms transform ease-in-out;
  background-color: #fff;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
.content_checkbox:checked::before {
  transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
}

input {
  width: 480px;
  padding: 10px;
  background-color: #fff;
  height: 55px;
  border: 1px solid #007bc3;
  box-shadow: 0 0 8px rgb(0 123 195 / 32%);
  border-radius: 4px;
  cursor: pointer;
}
input:checked {
  outline: none;
  border: none;
  background-color: #45d1c9;
  color: #fff;
  width: 18px;
  height: 18px;
}
.content_text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  width: 430px;
  display: flex;
  align-items: center;
  color: #333333;
}
.icon {
  cursor: pointer;
  position: relative;
  float: right;
  z-index: 999;
  top: -29px;
  right: 3%;
}
.content_button {
  position: absolute;
  width: 480px;
  left: -4px;
  top: 288%;
}
.disabled-btn {
  background: #007bc3;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
