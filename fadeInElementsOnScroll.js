const fadeInElementsOnScroll = () => {
  const storyElem = document.querySelector("#story-container p");
  const cv = document.querySelector("#cv");
  const skills = document.querySelector(".my-skills");

  // console.log(storyElem.getBoundingClientRect().top - window.scrollY);
  console.log(skills.getBoundingClientRect().top - window.scrollY);

  if (storyElem.getBoundingClientRect().top - window.scrollY < -50) {
    storyElem.style.opacity = "1";
    storyElem.style.marginTop = "2rem";
  }

  if (cv.getBoundingClientRect().top - window.scrollY < -200) {
    cv.style.marginTop = "5rem";
    cv.style.opacity = "1";
  }

  if (skills.getBoundingClientRect().top - window.scrollY < -800) {
    skills.style.marginTop = "2rem";
    skills.style.opacity = "1";
  }
};

export default fadeInElementsOnScroll;
