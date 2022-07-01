export default function showCVwidth() {
  const shortStory = document.querySelector("#story-text");
  const hiddenStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");

  storyBtn.addEventListener("click", () => {
    if (getComputedStyle(shortStory).opacity == 1) {
      shortStory.style.opacity = "0";
      hiddenStory.style.transition = "opacity 1s";
      hiddenStory.style.opacity = "1";
    } else {
      hiddenStory.style.opacity = "0";
      shortStory.style.transition = "opacity 1s";
      shortStory.style.opacity = "1";
    }
  });
}
