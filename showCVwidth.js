export default function showCVwidth() {
  const shortStory = document.querySelector("#story-text");
  const hiddenStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");

  storyBtn.addEventListener("click", () => {
    if (getComputedStyle(shortStory).opacity == 1) {
      console.log(getComputedStyle(shortStory).opacity);
      shortStory.style.opacity = "0";
      hiddenStory.style.opacity = "1";
      // hiddenStory.style.transition = "opacity 2s";
    } else {
      shortStory.style.opacity = "1";
      shortStory.style.transition = "opacity 2s";
      hiddenStory.style.opacity = "0";
    }
  });
}
