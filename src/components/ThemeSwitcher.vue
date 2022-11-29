<template>
  <div
    v-for="(colorItem, index) in themeColors"
    :key="index"
    :style="{ backgroundColor: colorItem.color }"
    @click="changeTheme(colorItem.color)"
  ></div>
</template>

<script setup>
import { themeColors } from "../data/themeColors.js";
const root = document.documentElement;
const changeTheme = (color) => {
  console.log("Theme changed");
  root.style.setProperty("--primary-text-color", color);
};
</script>

<style lang="scss" scoped>
div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}
</style>
