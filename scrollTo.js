

export default function scrollTo() {
  console.log('module scrollTo.js loaded...')
  
homeLink.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

aboutLink.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 1050, left: 0, behavior: "smooth" });
});

workLink.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 3000, left: 0, behavior: "smooth" });
});

contactLink.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 4550, left: 0, behavior: "smooth" });
});
}