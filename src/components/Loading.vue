<template>
  <div class="pulse"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.pulse {
  height: 100px;
  width: 200px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.pulse:after {
  content: "";
  display: block;
  background: url("../assets/loading.svg") 0 0 no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-animation: 2s pulse linear infinite;
  -moz-animation: 2s pulse linear infinite;
  -o-animation: 2s pulse linear infinite;
  animation: 2s pulse linear infinite;
  clip: rect(0, 0, 100px, 0);
}
.pulse:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 2px;
  right: 2px;
  bottom: 0;
  top: 16px;
  margin: auto;
  height: 3px;
}
</style>
