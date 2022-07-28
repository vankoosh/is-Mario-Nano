const fadeInElementsOnScroll = () => {
  const storyElem = document.querySelector("#story-container p");
  const cv = document.querySelector("#cv");
  const skills = document.querySelector(".my-skills");
  const cert1 = document.querySelector("#cert1");
  const cert2 = document.querySelector("#cert2");
  const cert3 = document.querySelector("#cert3");
  const cert4 = document.querySelector("#cert4");
  const cert5 = document.querySelector("#cert5");

  console.log(cv.getBoundingClientRect().top - window.scrollY);

  if (storyElem.getBoundingClientRect().top - window.scrollY < -50) {
    storyElem.style.opacity = "1";
    storyElem.style.marginTop = "2rem";
  }

  if (cv.getBoundingClientRect().top - window.scrollY < 0) {
    cv.style.marginTop = "5rem";
    cv.style.opacity = "1";
  }

  if (skills.getBoundingClientRect().top - window.scrollY < -650) {
    skills.style.marginTop = "2rem";
    skills.style.opacity = "1";
  }

  if (cert1.getBoundingClientRect().top - window.scrollY < -1100) {
    cert1.style.transition = "all 1s";
    cert1.style.marginTop = "0rem";
    cert1.style.opacity = "1";
    cert2.style.transition = "all 0.5s linear 0.2s";
    cert2.style.marginTop = "0rem";
    cert2.style.opacity = "1";
    cert3.style.transition = "all 0.5s linear 0.3s";
    cert3.style.marginTop = "0rem";
    cert3.style.opacity = "1";
    cert4.style.transition = "all 0.5s linear 0.4s";
    cert4.style.marginTop = "0rem";
    cert4.style.opacity = "1";
    cert5.style.transition = "all 0.5s linear 0.5s";
    cert5.style.marginTop = "0rem";
    cert5.style.opacity = "1";
  }
};

export default fadeInElementsOnScroll;
