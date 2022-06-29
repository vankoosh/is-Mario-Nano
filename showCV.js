export default showCV = () => {
  const shortStory = document.querySelector("#story-text p");
  const longStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");
  
  let clicked = false;
  storyBtn.addEventListener("click", () => {
    shortStory.style.display ="none"
    longStory.style.display = "block";

  })
}