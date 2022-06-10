// const hIh3 = document.querySelector("#hi-im");
const aboutTitle = document.querySelector("#about-me");
const aboutLink = document.querySelector("#aboutLink");
const workLink = document.querySelector("#workLink");
const workTitle = document.querySelector("#my-work");
const skillsTitle = document.querySelector("#skills");
const contactLink = document.querySelector("#contactLink");
const contactTitle = document.querySelector("#contact");
const vHeightElem = document.querySelector("#height");
const vWidthElem = document.querySelector("#width");
const scrollElem = document.querySelector("#scroll");
let vHeight = window.innerHeight;
let vWidth = window.innerWidth;

const isVarsConnected = () => {
  console.log('module vars.js is loaded...')
}

export {
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
  scrollElem,
  vHeight,
  vWidth,
  isVarsConnected,
};
