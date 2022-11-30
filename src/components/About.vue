<template>
  <div class="about-container">
    <div class="desc">
      <div class="image-container">
        <img src="../assets/pp.jpg" alt="profile-photo" class="profile-img" />
        <img src="../assets/eiffel.jpg" alt="eiffel-photo" class="hover-img" />
      </div>
      <div class="text">
        <div class="desc-text">
          <span class="title">
            Hey! <br />
            I am Sezgi Altan,
            <span style="color: var(--primary-text-color)">
              Frontend & UI Developer</span
            >
          </span>
          <span>
            I am 4th grade <b>Computer Engineering </b> Student at
            <b>Pamukkale University</b> and Core-team member at
            <b>Pausiber, Pamukkale University Cyber-Security Community.</b>
            <br />
            <br />
            Working on building web applications as weekend projects. <br />
            In addition to sharing my own projects on GitHub, I'm attempting to
            contribute to open-source projects.
          </span>
        </div>
        <div class="goToNow">
          <router-link to="/now" class="goToNow-link">
            What am I doing now?
            <i class="fas fa-angles-right"></i>
          </router-link>
        </div>
        <Contact />
      </div>
    </div>
    <div class="icon-container">
      <i class="fa-solid fa-angles-down bounce" @click="scrollDown"></i>
    </div>
  </div>
</template>

<script setup>
import Contact from "./Contact.vue";

const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight * 2,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.about-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  .desc {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .image-container {
      width: 25%;
      position: relative;

      img {
        border-radius: 10px;
        width: 100%;
        max-width: 500px;
        object-fit: cover;
        transition: 0.2s all ease-in-out;
        filter: grayscale(0%) brightness(100%) sepia(0%) hue-rotate(0)
          saturate(100%);
      }

      & .hover-img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        bottom: 0;
        object-fit: contain;
        opacity: 0;
        transition: 0.2s opacity ease-in-out;
      }

      &:hover .hover-img {
        opacity: 1;
      }
    }

    .text {
      // margin-left: 100px;
      width: 50%;
      letter-spacing: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left !important; // Fix

      .title {
        display: block;
        font-size: 36px;
        font-weight: bolder;
        margin-bottom: 20px;
      }
      span {
        font-size: 20px;
        line-height: 1.5;
        font-weight: 500;

        b {
          font-weight: 700;
        }
      }
    }
  }
  .icon-container {
    margin-top: 60px;
    i.bounce {
      font-size: 36px;
      animation: bounce 1s infinite;
      cursor: pointer;
      transition: 0.2s all ease-in-out;

      &:hover {
        color: var(--primary-text-color);
      }
    }
  }
}

.goToNow {
  margin-top: 17px;

  .goToNow-link {
    color: #fff;
    font-weight: 600;
    transition: 0.2s all ease-in-out;
    text-align: center;

    i {
      transition: 0.2s all ease-in-out;
    }
    &:hover {
      i {
        color: var(--primary-text-color);
        transform: translateX(5px);
      }
    }
  }
}
</style>
