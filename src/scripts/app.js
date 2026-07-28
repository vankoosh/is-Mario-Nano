import modal from './modal.js';
import fadeInElementsOnScroll from './fadeInElementsOnScroll.js';

const sectionTitles = document.querySelectorAll('.section-title');
const footerDate = document.querySelector('.contact-section__date');
const waterIcon = document.querySelector('.water-icon');
const line = document.querySelector('.line');
const hi = document.querySelector('.front-section__hi-text-greeting');
const name = document.querySelector('.front-section__hi-text-name');
const headline = document.querySelector('.front-section__headline');
const cta = document.querySelector('.front-section__cta');
const circle = document.querySelector('.circle');
const circleStatic = document.querySelector('.circle-static');
const navbar = document.querySelector(".navbar");
const storyImage = document.querySelector(".about-section__story-image");
const storyElem = document.querySelector(".about-section__story-text");
const skillElem = document.querySelectorAll(".skills-section__skill");
const certificatesElem = document.querySelectorAll(".certificates-section__cert-image-container")

let vHeight;
let vWidth;

function setFooterDate() {
	footerDate.textContent = new Date().getFullYear();
}

waterIcon.addEventListener('click', () => {
	document.querySelector('.video').classList.toggle('show-video')
});

window.addEventListener('scroll', () => {
	let isStoryElemFadeIn = storyElem.classList.contains("fade-in-from-right");
	sectionTitles.forEach((title) => {
		const fromTop = title.getBoundingClientRect().top;

		if (fromTop < vHeight && vWidth >= 768) {
			title.style.letterSpacing = (vHeight - fromTop) * 0.015 + 'px';
		}

		if (fromTop < -50 && vWidth >= 768) {
			title.style.letterSpacing = '1px';
		}
	});

	if (isStoryElemFadeIn && vWidth >= 576) {
		storyImage.classList.add("fade-in");
	}

	syncLine();
	syncCircleStaticScale();
	fadeInElementsOnScroll(vWidth, storyElem, skillElem, certificatesElem);

	const distanceFromBottom = document.body.scrollHeight - window.scrollY - vHeight;
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	navbar.style.bottom = distanceFromBottom <= 3 * rem ? '2.5rem' : '0.5rem';
});

function syncCircleStatic() {
	if (window.innerWidth >= 768) {
		const circleLeft = circle.getBoundingClientRect().left;
		circleStatic.style.left = circleLeft + 'px';
	}
}

function syncCircleStaticScale() {
	const circleRect = circle.getBoundingClientRect();
	const staticRect = circleStatic.getBoundingClientRect();
	const intersects = (
		circleRect.left < staticRect.right &&
		circleRect.right > staticRect.left &&
		circleRect.top < staticRect.bottom &&
		circleRect.bottom > staticRect.top
	);
	circleStatic.style.transform = intersects ? 'scale(1.5)' : 'scale(1)';
}

function syncLine() {
	const circleRect = circle.getBoundingClientRect();
	const staticRect = circleStatic.getBoundingClientRect();
	const top = Math.min(circleRect.top, staticRect.top);
	const bottom = Math.max(circleRect.bottom, staticRect.bottom);
	line.style.position = 'fixed';
	line.style.left = circleRect.left + circleRect.width / 2 + 'px';
	line.style.top = (top + 5) + 'px';
	line.style.height = (bottom - top - 5) + 'px';
	line.style.bottom = '';
}

window.addEventListener('resize', () => {
	vHeight = window.innerHeight;
	vWidth = window.innerWidth;
	syncCircleStatic();
	syncLine();
	syncCircleStaticScale();
});

window.addEventListener('load', () => {
	vWidth = window.innerWidth;
	vHeight = window.innerHeight
	setTimeout(() => {
		hi.style.opacity = '1';
		hi.style.top = '-35px';
		syncCircleStatic();
		syncLine();
		syncCircleStaticScale();

	}, 1000);
	setTimeout(() => {
		name.style.opacity = '1';
	}, 10);
	setTimeout(() => {
		headline.style.opacity = '1';
	}, 1300);
	setTimeout(() => {
		cta.style.opacity = '1';
	}, 1300);
	setTimeout(() => {
		navbar.style.bottom = '0.5rem';
	}, 1300);

	modal();
	setFooterDate();
	},
	true
);