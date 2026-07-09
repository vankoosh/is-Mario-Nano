// import showCV from './showCV.js';
// import showCVwidth from './showCVwidth.js';
import Modal from './modal.js';
import fadeInElementsOnScroll from "./fadeInElementsOnScroll.js";

const sectionTitles = document.querySelectorAll(".section-title");
const footerDate = document.querySelector(".contact-section__date");
const waterIcon = document.querySelector(".water-icon");
let vHeight = window.innerHeight;
let vWidth = window.innerWidth;

// set the length of the vertical line along the whole page according to the length of the body
function setBottomVerLine() {
	const line = document.querySelector(".line");
	line.style.bottom = "-" + (document.body.scrollHeight - vHeight) + "px";
}

function setFooterDate() {
	footerDate.textContent = new Date().getFullYear();
}

waterIcon.addEventListener("click", () => {
	document.querySelector(".video").classList.toggle("hidden")
});

window.addEventListener("scroll", () => {
	sectionTitles.forEach((title) => {
		const fromTop = title.getBoundingClientRect().top;

		if (fromTop < vHeight && vWidth > 767) {
			title.style.letterSpacing = (vHeight - fromTop) * 0.017 + "px";
		}

		if (fromTop < -50 && vWidth > 767) {
			title.style.letterSpacing = "1px";
		}
	});

	setBottomVerLine();
	fadeInElementsOnScroll();
});

//fade in landing page elements right after onload
window.addEventListener(
	"DOMContentLoaded",
	() => {
		(() => {
			const hi = document.querySelector(".front-section__hi-text p:first-child");
			const name = document.querySelector(".front-section__hi-text p:last-child");
			const meet = document.querySelector(".front-section__headline");
			const cta = document.querySelector(".front-section__cta");
			const circle = document.querySelector(".circle");
			const line = document.querySelector(".line");
			// const navbar = document.querySelector(".nav__small");

			setTimeout(() => {
				hi.style.transition = "0.8s";
				hi.style.opacity = "1";
				vWidth < 2300 ? (hi.style.top = "-35px") : (hi.style.top = "-70px");
				circle.style.transition = "0.8s";
				line.style.transition = "0.8s";
				circle.style.left = "10vw";
				line.style.left = "calc(10vw + 6px)";
			}, 1000);
			setTimeout(() => {
				name.style.transition = "opacity 4s";
				name.style.opacity = "1";
			}, 10);
			setTimeout(() => {
				meet.style.transition = "opacity 0.8s";
				meet.style.opacity = "1";
			}, 1600);
			setTimeout(() => {
				cta.style.transition = "opacity 0.8s";
				cta.style.opacity = "1";
				// navbar.style.bottom = "2.5rem";
			}, 1900);
		})();

		// scrollTo();
		setBottomVerLine();
		Modal();
		setFooterDate();
	},
	true
);