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

// ----------------- END OF IMPORTS

const setBottomVerLine = () => {
  const line = document.querySelector("#line");
  line.style.bottom = "-" + (document.body.scrollHeight - vHeight) + "px";
  // console.log(document.body.scrollHeight);
};

window.addEventListener(
  "DOMContentLoaded",
  () => {
    isVarsConnected();
    scrollTo();
    setBottomVerLine();
  },
  true
);

// CHANGE FONT SIZE BASED ON TOP EL POSITION
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

// and then add to html navbar items <div><a href="javascript:void(0)" id="homeLink">.home()</a></div>

let clicked = false;

document.querySelector("#outline").addEventListener("click", () => {
  const list = document.getElementsByTagName("*");
  if (!clicked) {
    for (let item of list) {
      item.classList.add("outline");
      clicked = true;
      console.log("Outline Btn Clicked");
    }
  } else {
    for (let item of list) {
      item.classList.remove("outline");
      clicked = false;
    }
  }
});
