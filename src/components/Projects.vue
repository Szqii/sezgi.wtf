<template>
  <div class="projects-section">
    <div class="skills">
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          alt="Javascript"
      /></a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          alt="Typescript"
      /></a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        target="_blank"
        rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          alt="HTML5"
      /></a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          alt="React"
      /></a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          alt="Vue"
      /></a>
      <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          alt="CSS3"
      /></a>
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
          alt="Sass"
      /></a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/tailwindcss-colored.svg"
          alt="tailwindcss"
      /></a>
      <a href="https://mui.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/materialui-colored.svg"
          alt="materialui"
      /></a>
      <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          alt="Bootstrap"
      /></a>
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
          alt="Heroku"
      /></a>
      <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
          alt="Firebase"
      /></a>
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer"
        ><img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          alt="Figma"
      /></a>
    </div>
    <h2 class="projects-section-title">Projects & Skillset</h2>
    <Swiper />
  </div>
</template>

<script setup>
import Swiper from "./Swiper.vue";
</script>

<style lang="scss" scoped>
.projects-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .projects-section-title {
    margin-top: 30px;
  }
}

.skills {
  width: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  a {
    margin: 10px 0;
    width: 74px;
    text-align: center;
    img {
      width: 44px;
      transition: 0.2s all ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
