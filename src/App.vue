<template>
  <Loading v-if="loading" />
  <router-view v-else></router-view>
</template>

<script setup>
import Loading from "./components/Loading.vue";
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 4000);
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap");
@import url(./css/animations.css);
@import url(./css/scrollbar.css);

:root {
  --primary-text-color: #4fff23;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #000;
  color: #fff;
  font-family: "IBM Plex Mono", monospace;
  animation: fadeIn 4s ease-in-out 3.8s 1; // 4s delay, 1 iteration
}

a {
  text-decoration: none;
  color: #fff;
}

#app {
  max-width: 100%;
  height: 100%;
}
</style>
