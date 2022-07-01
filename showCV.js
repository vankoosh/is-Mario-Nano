export default function showCV() {
  const shortStory = document.querySelector("#story-text");
  const hiddenStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");
  
  storyBtn.addEventListener("click", () => {
    if (hiddenStory.classList.contains("hide")) {
      shortStory.style.opacity = "0";
      hiddenStory.classList.add("show");
      shortStory.classList.add("hide");
      hiddenStory.classList.remove("hide");
      shortStory.classList.remove("show");
      shortStory.classList.remove("fade-in");
      hiddenStory.classList.add("fade-in");
      hiddenStory.style.opacity = "1";
    } else {
      shortStory.style.opacity = "1";
      shortStory.classList.add("show");
      hiddenStory.classList.add("hide");
      shortStory.classList.remove("hide");
      hiddenStory.classList.remove("show");
      hiddenStory.classList.remove("fade-in");
      shortStory.classList.add("fade-in");
    }
  })

  storyBtn.addEventListener("click", () => {
    const styleStory = getComputedStyle(shortStory).opacity;
    const styleHidden = getComputedStyle(hiddenStory).opacity;

  })
}