// import scrollTo from "./scrollTo.js";
// import showCV from './showCV.js';
// import showCVwidth from './showCVwidth.js';
import Modal from './modal.js';
import fadeInElementsOnScroll from "./fadeInElementsOnScroll.js";

const aboutTitle = document.querySelector(".about-me");
const workTitle = document.querySelector(".my-work");
const skillsTitle = document.querySelector(".skills");
const contactTitle = document.querySelector(".contact");
let vHeight = window.innerHeight;
let vWidth = window.innerWidth;

// set the length of the vertical line along the whole page according to the length of the body
function setBottomVerLine() {
	const line = document.querySelector(".line");
	line.style.bottom = "-" + (document.body.scrollHeight - vHeight) + "px";
}

document.querySelector(".water-icon").addEventListener("click", () => {
	document.querySelector(".video").classList.toggle("hidden")
});

window.addEventListener("scroll", () => {
	// function to change letter spacing on scroll on big section headers
	(() => {
		let aboutFromTop = aboutTitle.getBoundingClientRect().top;
		let workFromTop = workTitle.getBoundingClientRect().top;
		let skillsFromTop = skillsTitle.getBoundingClientRect().top;
		let contactFromTop = contactTitle.getBoundingClientRect().top;

		if (aboutFromTop < vHeight && vWidth > 991) {
			aboutTitle.style.letterSpacing =
				(vHeight - aboutFromTop) * 0.017 + "px";
		}

		if (aboutFromTop < -50 && vWidth > 991) {
			aboutTitle.style.letterSpacing = 1 + "px";
		}

		if (workFromTop < vHeight && vWidth > 991) {
			workTitle.style.letterSpacing =
				(vHeight - workFromTop) * 0.017 + "px";
		}

		if (workFromTop < -50 && vWidth > 991) {
			workTitle.style.letterSpacing = 1 + "px";
		}

		if (skillsFromTop < vHeight && vWidth > 991) {
			skillsTitle.style.letterSpacing =
				(vHeight - skillsFromTop) * 0.017 + "px";
		}

		if (skillsFromTop < -50 && vWidth > 991) {
			skillsTitle.style.letterSpacing = 1 + "px";
		}

		if (contactFromTop < vHeight && vWidth > 991) {
			contactTitle.style.letterSpacing =
				(vHeight - contactFromTop) * 0.017 + "px";
		}

		if (contactFromTop < -50 && vWidth) {
			contactTitle.style.letterSpacing = 1 + "px";
		}
	})();

	setBottomVerLine();
	fadeInElementsOnScroll();
});

window.addEventListener(
	"DOMContentLoaded",
	() => {

		//fade in landing page elements right after onload
		(() => {
			const hi = document.querySelector(".hi-text p:first-child");
			const name = document.querySelector(".hi-text p:last-child");
			const meet = document.querySelector(".meet");
			const cta = document.querySelector(".cta");
			const circle = document.querySelector(".circle");
			const line = document.querySelector(".line");
			const navbar = document.querySelector(".nav__small");

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
				navbar.style.bottom = "2.5rem";
			}, 1900);
		})();

		// scrollTo();
		setBottomVerLine();
		Modal();
	},
	true
);