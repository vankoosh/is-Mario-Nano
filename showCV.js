export default function showCV() {
  const shortStory = document.querySelector("#story-text");
  const hiddenStory = document.querySelector("#hidden-story");
  const storyBtn = document.querySelector("#long-story-btn p");
  
  storyBtn.addEventListener("click", () => {
    
    if (hiddenStory.classList.contains("hide")) {
      shortStory.classList.add("hide");
      hiddenStory.classList.remove("hide");
      shortStory.classList.remove("show");
      hiddenStory.classList.add("show");
    }else{
      shortStory.classList.remove("hide");
      shortStory.classList.add("show");
      hiddenStory.classList.add("hide");
      hiddenStory.classList.remove("show");
    }
  })
}