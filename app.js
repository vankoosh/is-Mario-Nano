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

// import scrollTo from "./scrollTo.js";
// import showCV from './showCV.js';
// import showCVwidth from './showCVwidth.js';
import Modal from './modal.js';
import fadeInElementsOnScroll from "./fadeInElementsOnScroll.js";

// ----------------- END OF IMPORTS




// set the length of the vertical line along the whole page according to the length of the body
const setBottomVerLine = () => {
  const line = document.querySelector("#line");
  line.style.bottom = "-" + (document.body.scrollHeight - vHeight) + "px";
}



// function to change letter spacing on scroll 
window.addEventListener("scroll", () => {
  const changeLetterSpacing = () => {
    let aboutFromTop = aboutTitle.getBoundingClientRect().top;
    let workFromTop = workTitle.getBoundingClientRect().top;
    let skillsFromTop = skillsTitle.getBoundingClientRect().top;
    let contactFromTop = contactTitle.getBoundingClientRect().top;

    if (aboutFromTop < window.innerHeight && vWidth > 900) {
      aboutTitle.style.letterSpacing =
        (window.innerHeight - aboutFromTop) * 0.017 + "px";
    }

    if (aboutFromTop < -50 && vWidth > 900) {
      aboutTitle.style.letterSpacing = 1 + "px";
    }

    if (workFromTop < window.innerHeight && vWidth > 900) {
      workTitle.style.letterSpacing =
        (window.innerHeight - workFromTop) * 0.017 + "px";
    }

    if (workFromTop < -50 && vWidth > 900) {
      workTitle.style.letterSpacing = 1 + "px";
    }

    if (skillsFromTop < window.innerHeight && vWidth > 900) {
      skillsTitle.style.letterSpacing =
        (window.innerHeight - skillsFromTop) * 0.017 + "px";
    }

    if (skillsFromTop < -50 && vWidth > 900) {
      skillsTitle.style.letterSpacing = 1 + "px";
    }

    if (contactFromTop < window.innerHeight && vWidth > 900) {
      contactTitle.style.letterSpacing =
        (window.innerHeight - contactFromTop) * 0.017 + "px";
    }

    if (contactFromTop < -50 && vWidth) {
      contactTitle.style.letterSpacing = 1 + "px";
    }
  };

  changeLetterSpacing();
  setBottomVerLine();
  fadeInElementsOnScroll();
});


// add/remove outline button on every element on page. purely for development purposes

// let clicked = false;

// document.querySelector("#outline").addEventListener("click", () => {
//   const list = document.getElementsByTagName("*");
//   if (!clicked) {
//     for (let item of list) {
//       item.classList.add("outline");
//       clicked = true;
//     }
//   } else {
//     for (let item of list) {
//       item.classList.remove("outline");
//       clicked = false;
//     }
//   }
// });

const fadeInGreet = () => {
  const hi = document.querySelector("#hi-text p:first-child");
  const name = document.querySelector("#hi-text p:last-child");
  const meet = document.querySelector("#meet");
  const cta = document.querySelector("#cta");
  const circle = document.querySelector("#circle");
  const line = document.querySelector("#line");
  const navbar = document.querySelector("#nav__small");
  
  setTimeout(() => {
    hi.style.transition = "0.8s"
    hi.style.opacity = "1";
    vWidth < 2300 ? (hi.style.top = "-35px") : (hi.style.top = "-70px");
    circle.style.transition = "0.8s"
    line.style.transition = "0.8s"
    circle.style.left = "10vw"
    line.style.left = "calc(10vw + 6px)";
  }, 1000);
  setTimeout(() => {
    name.style.transition = "opacity 0.8s"
    name.style.opacity = "1";
  }, 1300);
  setTimeout(() => {
    meet.style.transition = "opacity 0.8s"
    meet.style.opacity = "1";
  }, 1600);
  setTimeout(() => {
    cta.style.transition = "opacity 0.8s"
    cta.style.opacity = "1";
    navbar.style.bottom = "2.5rem";
  }, 1900);
}

// on pageload function
window.addEventListener(
  "DOMContentLoaded",
  () => {
    isVarsConnected();
    scrollTo();
    setBottomVerLine();
    // showCVwidth();
    Modal();
    fadeInGreet();
  },
  true
);

