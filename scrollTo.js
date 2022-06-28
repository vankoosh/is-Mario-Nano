export default function scrollTo() {
  console.log("module scrollTo.js loaded...");
  const body = document.body;
  const docEl = document.documentElement;
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;

  homeLink.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  aboutLink.addEventListener("click", () => {
    const elem = document.querySelector("#about-me");
    const box = elem.getBoundingClientRect();
    const top = box.top + scrollTop - clientTop;
    document.documentElement.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  });

  workLink.addEventListener("click", () => {
    const elem = document.querySelector("#my-work");
    const box = elem.getBoundingClientRect();
    const top = box.top + scrollTop - clientTop;
    document.documentElement.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  });

  contactLink.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 4550,
      left: 0,
      behavior: "smooth",
    });
  });
}
