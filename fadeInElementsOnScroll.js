const fadeInElementsOnScroll = () => {
  const storyElem = document.querySelector("#story-container p");
  const cv = document.querySelector("#cv");

  // console.log(storyElem.getBoundingClientRect().top - window.scrollY);
  console.log(cv.getBoundingClientRect().top - window.scrollY);

  if (storyElem.getBoundingClientRect().top - window.scrollY < 0) {
    storyElem.style.opacity = "1";
  }

  if (cv.getBoundingClientRect().top - window.scrollY < 0) {
    setTimeout(() => {
      cv.style.opacity = "1";
    }, 1000);
  }

};

export default fadeInElementsOnScroll;