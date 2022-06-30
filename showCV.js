export default function showCV() {
  const shortStory = document.querySelector("#story-text");
  const longStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");
  
  let clicked = false;

  storyBtn.addEventListener("click", () => {
    if (!clicked) {
    shortStory.style.display = "none";
    longStory.style.display = "block";
      clicked = true;
    }
    if (clicked) {
      shortStory.style.display = "none";
      longStory.style.display = "block";
      clicked = false;
    }

  })
}