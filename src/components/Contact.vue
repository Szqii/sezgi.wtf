<template>
  <div class="contact">
    <div class="contact-text">Feel free to contact</div>

    <div class="contact-link-container">
      <div class="contact-link linkedin">
        <a
          href="
              https://www.linkedin.com/in/sezgi-altan/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div class="contact-link twitter">
        <a
          href="
              https://www.twitter.com/sezgiwtf"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div class="contact-link github">
        <a
          href="
              https://www.github.com/Szqii"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="contact-link instagram">
        <a
          href="
             http://www.instagram.com/sezgi.wtf"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="contact-link email">
        <a
          href="
              mailto:szqii.altn@gmail.com"
          target="_blank"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  color: var(--primary-text-color);
  font-weight: 600;
  .contact-text {
    margin-bottom: 10px;
  }
  .contact-link-container {
    display: flex;

    .contact-link {
      font-size: 30px;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      transition: 0.2s all ease-in-out;
      border-radius: 50%;

      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
}
</style>
