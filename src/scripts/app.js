import Modal from './modal.js';
import fadeInElementsOnScroll from './fadeInElementsOnScroll.js';

const sectionTitles = document.querySelectorAll('.section-title');
const footerDate = document.querySelector('.contact-section__date');
const waterIcon = document.querySelector('.water-icon');
const line = document.querySelector('.line');
const hi = document.querySelector('.front-section__hi-text-greeting');
const name = document.querySelector('.front-section__hi-text-name');
const meet = document.querySelector('.front-section__headline');
const cta = document.querySelector('.front-section__cta');
const circle = document.querySelector('.circle');
const circleStatic = document.querySelector('.circle-static');
const navbar = document.querySelector(".nav__small");
let vHeight = window.innerHeight;
let vWidth = window.innerWidth;

// set the length of the vertical line along the whole page according to the length of the body
function setBottomVerLine() {
	line.style.bottom = '-' + (document.body.scrollHeight - vHeight) + 'px';
}

function setFooterDate() {
	footerDate.textContent = new Date().getFullYear();
}

waterIcon.addEventListener('click', () => {
	document.querySelector('.video').classList.toggle('hidden')
});

window.addEventListener('scroll', () => {
	sectionTitles.forEach((title) => {
		const fromTop = title.getBoundingClientRect().top;

		if (fromTop < vHeight && vWidth > 767) {
			title.style.letterSpacing = (vHeight - fromTop) * 0.015 + 'px';
		}

		if (fromTop < -50 && vWidth > 767) {
			title.style.letterSpacing = '1px';
		}
	});

	syncLine();
	setBottomVerLine();
	fadeInElementsOnScroll();

	const distanceFromBottom = document.body.scrollHeight - window.scrollY - vHeight;
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	navbar.style.bottom = distanceFromBottom <= 3 * rem ? '2.5rem' : '0.5rem';
});

function syncCircleStatic() {
	if (window.innerWidth >= 768) {
		const circleLeft = circle.getBoundingClientRect().left;
		circleStatic.style.left = circleLeft + 'px';
		circleStatic.style.opacity = 1;
	}
}

function syncLine() {
	const circleRect = circle.getBoundingClientRect();
	const staticRect = circleStatic.getBoundingClientRect();
	const top = Math.min(circleRect.top, staticRect.top);
	const bottom = Math.max(circleRect.bottom, staticRect.bottom);
	line.style.position = 'fixed';
	line.style.left = circleRect.left + circleRect.width / 2 + 'px';
	line.style.top = top + 'px';
	line.style.height = (bottom - top) + 'px';
	line.style.bottom = '';
}

window.addEventListener('resize', () => {
	vHeight = window.innerHeight;
	vWidth = window.innerWidth;
	syncCircleStatic();
	syncLine();
});

window.addEventListener('load', () => {
	setTimeout(() => {
		hi.style.transition = '0.8s';
		hi.style.opacity = '1';
		vWidth < 2300 ? (hi.style.top = '-35px') : (hi.style.top = '-70px');
		circle.style.left = vWidth < 992 ? 'calc(5rem - 6px)' : 'calc(8rem - 6px)';
		line.style.left = vWidth < 992 ? '5rem' : '8rem';
		syncCircleStatic();
		syncLine();

	}, 1000);
	setTimeout(() => {
		name.style.transition = 'opacity 4s';
		name.style.opacity = '1';
	}, 10);
	setTimeout(() => {
		meet.style.transition = 'opacity 0.8s';
		meet.style.opacity = '1';
	}, 1600);
	setTimeout(() => {
		cta.style.transition = 'opacity 0.8s';
		cta.style.opacity = '1';
	}, 1900);

	setBottomVerLine();
	Modal();
	setFooterDate();
	},
	true
);