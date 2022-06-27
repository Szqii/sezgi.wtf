const homeBtn = document.querySelector(".home-section-btn");
const aboutBtn = document.querySelector(".about-section-btn");
const projectsBtn = document.querySelector(".project-section-btn");

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      const section = entries[0].target.classList[0];
      setButtonActive(section);
    }
  },
  { threshold: [1] }
);

const setButtonActive = (section) => {
  if (section === "home-section") {
    homeBtn.classList.add("active");
    projectsBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
  }
  if (section === "about-section") {
    homeBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    aboutBtn.classList.add("active");
  }
  if (section === "project-section") {
    homeBtn.classList.remove("active");
    projectsBtn.classList.add("active");
    aboutBtn.classList.remove("active");
  }
};

observer.observe(document.querySelector(".home-section"));
observer.observe(document.querySelector(".about-section"));
observer.observe(document.querySelector(".project-section"));

const jumpTo = (anchor_id) => {
  var url = location.href;
  location.href = "#" + anchor_id;
  history.replaceState(null, null, url);
};
