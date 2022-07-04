export default function Modal() {
  const modal = document.getElementById("myModal");
  const img = document.getElementById("certImgSass");
  const modalImg = document.getElementById("img01");
  const modalBg = document.querySelector(".modal");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "55vw";
    modalBg.addEventListener("click", () => {
      modal.style.display = "none";
    })
  };
}