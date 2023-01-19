<template>
  <div class="theme-switcher-container">
    <div
      class="theme-color"
      v-for="(colorItem, index) in themeColors"
      :key="index"
      :style="{ backgroundColor: colorItem.color }"
      @click="changeTheme(colorItem.color)"
      :class="{ active: colorItem.color === currentTheme }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { themeColors } from "../data/themeColors.js";

const root = document.documentElement;
var currentTheme = ref("");

onMounted(() => {
  getTheme();
});

const changeTheme = (color) => {
  root.style.setProperty("--primary-text-color", color);
  currentTheme.value = color;
  saveTheme();
};

// Get theme from local Storage
const getTheme = () => {
  if (localStorage.getItem("theme")) {
    currentTheme.value = localStorage.getItem("theme");
    root.style.setProperty("--primary-text-color", currentTheme.value);
  } else {
    currentTheme.value = themeColors[0].color;
    root.style.setProperty("--primary-text-color", currentTheme.value);
  }
};

// Save theme to local Storage
const saveTheme = () => {
  localStorage.setItem("theme", currentTheme.value);
};
</script>

<style lang="scss" scoped>
.theme-switcher-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 100px;
}
.theme-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

.active {
  border: 2px solid #fff;
}

@media (max-width: 768px) {
  .theme-switcher-container {
    right: 20px;
  }
}
</style>
