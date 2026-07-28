export default function modal() {
	document.querySelectorAll(".modal").forEach((modalEl) => {
		modalEl.addEventListener("click", () => {
			modalEl.style.display = "none";
			document.documentElement.classList.remove("modal-open");
			document.body.classList.remove("modal-open");
			// eslint-disable-next-line no-undef
			lenis.start();
		});
	});

	document.querySelectorAll(".certificates-section__cert-image").forEach((img) => {
		img.addEventListener("click", function () {
			const modalEl = this.closest(".certificates-section__cert-image-container").nextElementSibling;
			const modalImg = modalEl.querySelector(".modal-content");
			modalEl.style.display = "flex";
			modalImg.src = this.src;
			modalImg.style.width = "90vw";
			document.documentElement.classList.add("modal-open");
			document.body.classList.add("modal-open");
			// eslint-disable-next-line no-undef
			lenis.stop();
		});
	});
}
