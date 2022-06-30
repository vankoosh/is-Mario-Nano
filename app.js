import {
  // hIh3,
  aboutTitle,
  aboutLink,
  workLink,
  workTitle,
  skillsTitle,
  contactLink,
  contactTitle,
  vHeightElem,
  vWidthElem,
  isVarsConnected,
  vHeight,
  vWidth,
  scrollElem,
} from "./vars.js";

import scrollTo from "./scrollTo.js";
import showCV from './showCV.js';

// ----------------- END OF IMPORTS




// set the length of the horizontal line along the whole page according to the length of the body
const setBottomVerLine = () => {
  const line = document.querySelector("#line");
  line.style.bottom = "-" + (document.body.scrollHeight - vHeight) + "px";
};



// change fontsize on scroll function
window.addEventListener("scroll", () => {
  const changeFontSize = () => {
    let aboutFromTop = aboutTitle.getBoundingClientRect().top;
    let workFromTop = workTitle.getBoundingClientRect().top;
    let skillsFromTop = skillsTitle.getBoundingClientRect().top;
    let contactFromTop = contactTitle.getBoundingClientRect().top;

    if (aboutFromTop < window.innerHeight && vWidth > 900) {
      aboutTitle.style.fontSize =
        (window.innerHeight - aboutFromTop) * 0.04 + "px";
    }

    if (aboutFromTop < 0 && vWidth > 900) {
      aboutTitle.style.fontSize = 10 + "px";
    }

    if (workFromTop < window.innerHeight && vWidth > 900) {
      workTitle.style.fontSize =
        (window.innerHeight - workFromTop) * 0.04 + "px";
    }

    if (workFromTop < 0 && vWidth > 900) {
      workTitle.style.fontSize = 10 + "px";
    }

    if (skillsFromTop < window.innerHeight && vWidth > 900) {
      skillsTitle.style.fontSize =
        (window.innerHeight - skillsFromTop) * 0.04 + "px";
    }

    if (skillsFromTop < 0 && vWidth) {
      skillsTitle.style.fontSize = 10 + "px";
    }

    if (contactFromTop < window.innerHeight && vWidth > 900) {
      contactTitle.style.fontSize =
        (window.innerHeight - contactFromTop) * 0.04 + "px";
    }
    if (contactFromTop < 0 && vWidth) {
      contactTitle.style.fontSize = 10 + "px";
    }
  };

  changeFontSize();
  setBottomVerLine();
});


// add/remove outline button on every element on page
let clicked = false;

document.querySelector("#outline").addEventListener("click", () => {
  const list = document.getElementsByTagName("*");
  if (!clicked) {
    for (let item of list) {
      item.classList.add("outline");
      clicked = true;
    }
  } else {
    for (let item of list) {
      item.classList.remove("outline");
      clicked = false;
    }
  }
});

// on pageload function
window.addEventListener(
  "DOMContentLoaded",
  () => {
    isVarsConnected();
    scrollTo();
    setBottomVerLine();
    showCV(); 
  },
  true
);

