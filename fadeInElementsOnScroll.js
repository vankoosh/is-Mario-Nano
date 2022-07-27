const fadeInElementsOnScroll = () => {
  const storyElem = document.querySelector("#story-container p");
  const cv = document.querySelector("#cv");

  // console.log(storyElem.getBoundingClientRect().top - window.scrollY);
  console.log(cv.getBoundingClientRect().top - window.scrollY);

  if (storyElem.getBoundingClientRect().top - window.scrollY < 0) {
    storyElem.style.opacity = "1";
    storyElem.style.marginTop = "2rem";
  }

  if (cv.getBoundingClientRect().top - window.scrollY < 0) {
    setTimeout(() => {
      cv.style.opacity = "1";
      cv.style.marginTop = "5rem";
    }, 1000);
  }

};

export default fadeInElementsOnScroll;