const fadeInElementsOnScroll = (vWidth, storyElem, skillElem, certificatesElem) => {
	const storyObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in-from-right");
				entry.target.classList.remove("fade-out-to-right");
			} else {
				entry.target.classList.add("fade-out-to-right");
				entry.target.classList.remove("fade-in-from-right");
			}
		});
	}, {
		root: null, rootMargin: '0px', threshold: vWidth < 576 ? 0.2 : 0.6
	});

	const skillObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-up");
			} else {
				entry.target.classList.remove("fade-up");
			}
		});
	}, { root: null, rootMargin: '75px', threshold: 1 });

	storyObserver.observe(storyElem);
	skillElem.forEach(skill => skillObserver.observe(skill));
	certificatesElem.forEach((cert, index) => {
		cert.style.transitionDelay = `${index * 150}ms`;
		skillObserver.observe(cert);
	});
};

export default fadeInElementsOnScroll;
