export default function showCVwidth() {
  const shortStory = document.querySelector("#story-text");
  const hiddenStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");
  const cv = document.querySelector("#cv a");
  const lss = document.querySelector("#long-story-short");
  const switchBtn = document.querySelector("#long-story-btn p");

  storyBtn.addEventListener("click", () => {

    if (getComputedStyle(shortStory).opacity == 1) {
      shortStory.style.opacity = "0";
      cv.style.zIndex = "10";
      setTimeout(() => {
        lss.style.transition = "opacity 0.5s";
        lss.style.opacity = "1";
        lss.innerText = "Long story...";
        hiddenStory.style.transition = "opacity 0.5s";
        hiddenStory.style.opacity = "1";
        switchBtn.innerText = "Back to short story..."
      },300)
    } else {
      hiddenStory.style.opacity = "0";
      lss.style.opacity = "0";
      cv.style.zIndex = "-10";
      setTimeout(() => {
        lss.style.transition = "opacity 0.5s";
        lss.style.opacity = "1";
        lss.innerText = "Long story short...";
        shortStory.style.transition = "opacity 0.5s";
        shortStory.style.opacity = "1";
        switchBtn.innerText = "Click for long story and see CV...";
      },300)
    }
  });
}
