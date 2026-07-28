export default function modal() {
	document.querySelectorAll(".modal").forEach((modalEl) => {
		modalEl.addEventListener("click", () => {
			modalEl.style.display = "none";
		});
	});

	document.querySelectorAll(".certificates-section__cert-image").forEach((img) => {
		img.addEventListener("click", function () {
			const modalEl = this.closest(".certificates-section__cert-image-container").nextElementSibling;
			const modalImg = modalEl.querySelector(".modal-content");
			modalEl.style.display = "block";
			modalImg.src = this.src;
			modalImg.style.width = window.innerWidth < 700 ? "95vw" : "55vw";
		});
	});
}
