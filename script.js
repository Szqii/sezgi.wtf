const homeBtn = document.querySelector(".home-section-btn");
const aboutBtn = document.querySelector(".about-section-btn");
const projectsBtn = document.querySelector(".project-section-btn");
const contactList = document.querySelector(".contact-list");
const skills = document.querySelector(".skills");

const checkContactList = () => {
  if (contactList.classList.contains("hidden")) {
    contactList.classList.remove("hidden");
  }
};

const checkSkills = () => {
  if (skills.classList.contains("hidden")) {
    skills.classList.remove("hidden");
  }
};

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
    skills.classList.add("hidden");
    homeBtn.classList.add("active");
    projectsBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    checkContactList();
  }
  if (section === "about-section") {
    skills.classList.add("hidden");
    homeBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    aboutBtn.classList.add("active");
    checkContactList();
  }
  if (section === "project-section") {
    contactList.classList.add("hidden");
    homeBtn.classList.remove("active");
    projectsBtn.classList.add("active");
    aboutBtn.classList.remove("active");
    checkSkills();
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
