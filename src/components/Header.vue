<template>
  <header>
    <div class="title">
      <h1>SEZGIALTAN</h1>
      <VueWriter
        :array="titleArray"
        :typeSpeed="70"
        :iterations="1"
        :eraseSpeed="50"
        :delay="500"
      />
    </div>
    <i class="fa-solid fa-angles-down bounce" @click="scrollDown"></i>
  </header>
</template>

<script setup>
import VueWriter from "vue-writer";
const titleArray = [".inquisitive", ".enthusiastic", ".web developer"];

const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&display=swap");

header {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Kanit", sans-serif;

  h1 {
    font-size: 72px;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    &:hover {
      color: transparent;
      animation: colourRotateForwards 2s linear infinite;
    }
  }
  .is-typed {
    text-align: end;
    font-size: 20px;
    color: var(--primary-text-color);
  }

  i {
    font-size: 36px;
    margin-top: 60px;
    animation: bounce 1s infinite;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: var(--primary-text-color);
    }
  }
}
</style>
