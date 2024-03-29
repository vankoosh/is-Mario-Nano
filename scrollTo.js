export default function scrollTo() {
  
  homeLink.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  aboutLink.addEventListener("click", () => {
    const fromTop = document.querySelector("#about-me").offsetTop;
    document.documentElement.scrollTo({
      top: fromTop - 80,
      left: 0,
      behavior: "smooth",
    });
  });

  workLink.addEventListener("click", () => {
    const fromTop = document.querySelector("#my-work").offsetTop;
    document.documentElement.scrollTo({
      top: fromTop - 140,
      left: 0,
      behavior: "smooth",
    });
  });

  ctaLink.addEventListener("click", () => {
    const fromTop = document.querySelector("#my-work").offsetTop;
    document.documentElement.scrollTo({
      top: fromTop - 140,
      left: 0,
      behavior: "smooth",
    });
  });

  contactLink.addEventListener("click", () => {
    const fromTop = document.querySelector("#contact").offsetTop;
    document.documentElement.scrollTo({
      top: fromTop - 50,
      left: 0,
      behavior: "smooth",
    });
  });
}
