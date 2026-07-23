const fadeInElementsOnScroll = (storyElem) => {
	const skillsContainer = document.querySelector(".skills-section__skills-container");
	const cert1 = document.querySelector(".cert1");
	const cert2 = document.querySelector(".cert2");
	const cert3 = document.querySelector(".cert3");
	const cert4 = document.querySelector(".cert4");
	const cert5 = document.querySelector(".cert5");
	const cert6 = document.querySelector(".cert6");

	const callback = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in");
				entry.target.classList.remove("fade-out");
			} else {
				entry.target.classList.add("fade-out");
				entry.target.classList.remove("fade-in");
			}
		});
	};

	const options = {
		root: null,
		rootMargin: '-200px',
		threshold: 0.2
	};

	if (skillsContainer.getBoundingClientRect().top - window.scrollY < -650) {
		// skills.style.marginTop = "2rem";
		skillsContainer.style.opacity = "1";
	}

	const observer = new IntersectionObserver(callback, options);

	observer.observe(storyElem);

	const skills = document.querySelectorAll(".skills-section__skill");
	const skillObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("skill-visible");
			} else {
				entry.target.classList.remove("skill-visible");
			}
		});
	}, { root: null, rootMargin: '100px', threshold: 0.2 });

	skills.forEach(skill => skillObserver.observe(skill));

	if (cert1.getBoundingClientRect().top - window.scrollY < -1100) {
		cert1.style.transition = "all 1s";
		cert1.style.marginTop = "0rem";
		cert1.style.opacity = "1";
		cert2.style.transition = "all 0.5s linear 0.2s";
		cert2.style.marginTop = "0rem";
		cert2.style.opacity = "1";
		cert3.style.transition = "all 0.5s linear 0.3s";
		cert3.style.marginTop = "0rem";
		cert3.style.opacity = "1";
		cert4.style.transition = "all 0.5s linear 0.4s";
		cert4.style.marginTop = "0rem";
		cert4.style.opacity = "1";
		cert5.style.transition = "all 0.5s linear 0.5s";
		cert5.style.marginTop = "0rem";
		cert5.style.opacity = "1";
		cert6.style.transition = "all 0.5s linear 0.6s";
		cert6.style.marginTop = "0rem";
		cert6.style.opacity = "1";
	}
};

export default fadeInElementsOnScroll;
