import {
  hIh3,
  aboutTitle,
  aboutLink,
  workLink,
  workTitle,
  contactLink,
  contactTitle,
  vHeightElem,
  vWidthElem,
  isVarsConnected,
  vHeight,
  vWidth,
  scrollElem
} from "./vars.js";

import scrollTo from "./scrollTo.js";

// -----------------IMPORTS

function trackWindowSize() {
  vHeightElem.textContent = window.innerHeight;
  vWidthElem.textContent = window.innerWidth;
  window.onresize = trackWindowSize;
}


window.addEventListener("DOMContentLoaded", () => {
  isVarsConnected();
  scrollTo();
  trackWindowSize();  
  },
  true
);

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  // let aboutFromTop = aboutTitle.getBoundingClientRect().top;
  // console.log(aboutFromTop);
  scrollElem.innerText = window.scrollY;
  hIh3.style.top = -scrollPos * 0.15 + "px";
  // aboutTitle.style.fontSize = scrollPos * 0.03 + "px";
  // workTitle.style.fontSize = (scrollPos - 1000) * 0.03 + "px";
  // contactTitle.style.fontSize = (scrollPos - 3000) * 0.03 + "px";

  const changeFontSize = () => {
    let aboutFromTop = aboutTitle.getBoundingClientRect().top;
    let workFromTop = workTitle.getBoundingClientRect().top;
    let contactFromTop = contactTitle.getBoundingClientRect().top;
    if (aboutFromTop < window.innerHeight) {
      aboutTitle.style.fontSize =
        (window.innerHeight - aboutFromTop) * 0.04 + "px";
    }
    if (workFromTop < window.innerHeight) {
      workTitle.style.fontSize =
        (window.innerHeight - workFromTop) * 0.04 + "px";
    }
    if (contactFromTop < window.innerHeight) {
      contactTitle.style.fontSize =
        (window.innerHeight - contactFromTop) * 0.04 + "px";
    }
  };
  changeFontSize();
});


// and then add to html navbar items <div><a href="javascript:void(0)" id="homeLink">.home()</a></div>

document.querySelector('#outline').addEventListener("click", () => {
  const list = document.getElementsByTagName('*');
  for (let item in list) {
    console.log(item);
  }
})