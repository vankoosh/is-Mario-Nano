export default function nameSticky() {
  const nameElem = document.querySelector(".mario-name");
  const nameFromTop = nameElem.getBoundingClientRect().top;

  //TODO make a object with css styling for both cases and add it inline into html with if statement

  if (nameFromTop < 0) {
    nameElem.style.position = "fixed";
    nameElem.style.top = "0";
  } else {
    nameElem.style.position = "relative";
  }
  // console.log(nameFromTop);
}
