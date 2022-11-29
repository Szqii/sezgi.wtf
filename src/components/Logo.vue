<template>
  <span>{{ logoText }}</span>
</template>

<script setup>
const logoText = "<S />";
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Shalimar&display=swap");

span {
  //   font-family: "Yuji Boku", serif;
  font-family: "Shalimar", cursive;

  position: absolute;
  top: 20px;
  left: 100px;
  font-size: 48px;
  font-weight: bolder;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  user-select: none;

  &:hover {
    color: transparent;
    animation: colourRotateForwards 2s linear infinite;
  }
}
</style>
