export default function Modal() {
	// SASS certificate
	const modalSS = document.querySelector(".myModalSS");
	const imgSS = document.querySelector(".certImgSass");
	const modalImgSS = document.querySelector(".imgSS");
	// Bootstrap certificate
	const modalBS = document.querySelector(".myModalBS");
	const imgBS = document.querySelector(".certImgBS");
	const modalImgBS = document.querySelector(".imgBS");

	// JS certificate
	const modalJS = document.querySelector(".myModalJS");
	const imgJS = document.querySelector(".certImgJS");
	const modalImgJS = document.querySelector(".imgJS");

	// JS II certificate
	const modalJSS = document.querySelector(".myModalJSS");
	const imgJSS = document.querySelector(".certImgJSS");
	const modalImgJSS = document.querySelector(".imgJSS");

	// React II certificate
	const modalRE = document.querySelector(".myModalRE");
	const imgRE = document.querySelector(".certImgRE");
	const modalImgRE = document.querySelector(".imgRE");

	const modalPHP = document.querySelector(".myModalPHP");
	const imgPHP = document.querySelector(".certImgPHP");
	const modalImgPHP = document.querySelector(".imgPHP");

	// give each modal background functionality to close on click
	document.querySelectorAll(".modal").forEach((modal) => {
		modal.onclick = function () {
			modal.style.display = "none";
		};
	});

	// SASS onclick event
	imgSS.onclick = function () {
		modalSS.style.display = "block";
		modalImgSS.src = this.src;
		if (window.innerWidth < 700) {
			modalImgSS.style.width = "95vw";
		} else {
			modalImgSS.style.width = "55vw";
		}
	};

	// Boostrap onclick event
	imgBS.onclick = function () {
		modalBS.style.display = "block";
		modalImgBS.src = this.src;
		if (window.innerWidth < 700) {
			modalImgBS.style.width = "95vw";
		} else {
			modalImgBS.style.width = "55vw";
		}
	};

	// JS onclick event
	imgJS.onclick = function () {
		modalJS.style.display = "block";
		modalImgJS.src = this.src;
		if (window.innerWidth < 700) {
			modalImgJS.style.width = "95vw";
		} else {
			modalImgJS.style.width = "55vw";
		}
	};

	// JS II onclick event
	imgJSS.onclick = function () {
		modalJSS.style.display = "block";
		modalImgJSS.src = this.src;
		if (window.innerWidth < 700) {
			modalImgJSS.style.width = "95vw";
		} else {
			modalImgJSS.style.width = "55vw";
		}
	};

	// React II onclick event
	imgRE.onclick = function () {
		modalRE.style.display = "block";
		modalImgRE.src = this.src;
		if (window.innerWidth < 700) {
			modalImgRE.style.width = "95vw";
		} else {
			modalImgRE.style.width = "55vw";
		}
	};
	imgPHP.onclick = function () {
		modalPHP.style.display = "block";
		modalImgPHP.src = this.src;
		if (window.innerWidth < 700) {
			modalImgPHP.style.width = "95vw";
		} else {
			modalImgPHP.style.width = "55vw";
		}
	};
}
