const fadeInElementsOnScroll = (vWidth, storyElem, skillElem, certificatesElem, workElem) => {
	const storyObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in-from-right");
			}
		});
	}, {
		root: null, rootMargin: '0px', threshold: 0.6
	});

	const skillObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-up");
			}
		});
	}, { root: null, rootMargin: '0px', threshold: 0.5 });

	storyObserver.observe(storyElem);
	skillElem.forEach(skill => skillObserver.observe(skill));

	certificatesElem.forEach((cert, index) => {
		cert.style.transitionDelay = `${index * 150}ms`;
		skillObserver.observe(cert);
	});

	workElem.forEach((card, index) => {
		card.style.transitionDelay = `${index * 150}ms`;
		skillObserver.observe(card);
	});
};

export default fadeInElementsOnScroll;
