<template>
  <div class="swiper-container">
    <h4> <i class="fa-solid fa-arrow-left-long swipeLeft"></i> Swipe it! <i
        class="fa-solid fa-arrow-right-long swipeRight"></i></h4>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :loop="true" :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }">
      <swiper-slide v-for="(project, index) in projectsArray" :key="index">
        <img :src="require('../assets/project-images/' + project.image)" alt="" />
        <a class="website-link" :href="project.websiteURL" target="_blank">
          {{ project.name }} <font-awesome-icon icon="fa-solid fa-link" />
        </a>

        <a :href="project.githubURL" target="_blank" class="github-corner" aria-label="View source on GitHub">
          <svg width="100" height="100" viewBox="0 0 250 250" style="
            fill: #151513;
            color: var(--primary-text-color);
            position: absolute;
            top: 0;
            border: 0;
            right: 0;
          " aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor" style="transform-origin: 130px 106px" class="octo-arm"></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor" class="octo-body"></path>
          </svg>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper";
import { projectsArray } from "../data/projects.js";

const modules = [Autoplay, EffectCards];
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .github-corner {
    .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    &:hover .octo-arm {
      animation: none;
    }
  }
}

.github-corner:hover {
  .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

div.swiper-container {
  margin: auto;

  h4 {
    margin-bottom: 20px;
    text-align: center;

    i.swipeLeft {
      animation: swipeL 1s infinite;
    }

    i.swipeRight {
      animation: swipeR 1s infinite;
    }
  }
}

.swiper {
  width: 60vw;
  height: 35vw;

}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  position: relative;

  img {
    max-width: 100%;
    border-radius: 25px;
    height: 100%;
  }

  .website-link {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--primary-text-color);
    background-color: black;
    padding: 10px;
  }
}

@media (max-width: 1024px) {
  .swiper {
    width: 80vw;
    height: 45vw;
  }
  .website-link {
    font-size: 16px;
  }
}
</style>
