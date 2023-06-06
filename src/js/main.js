const burgerIcon = document.querySelector('.burger-icon');
const navbar = document.querySelector('.mobile-nav');

const introText = document.querySelectorAll('.intro-text');
const introBtn = document.querySelector('.intro-btn');
const mnavItem = document.querySelectorAll('.mobile-nav a');

let viewportWidth = window.innerWidth;

const cards = document.querySelectorAll('.services__cards .card');

const cardsActivatorHandler = () => {
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			cards.forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			card.classList.add('active');
		});

		card.addEventListener('touchend', () => {
			cards.forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			card.classList.add('active');
		});
	});
};

const cardOutsideHandler = (e) => {
	if (!e.target.classList.contains('card')) {
		cards.forEach((card) => {
			card.classList.remove('active');
		});
	}
};

const navRevealHandler = () => {
	burgerIcon.addEventListener('click', () => {
		burgerIcon.classList.toggle('active');
		navbar.classList.toggle('active');
	});
};

const navCloseHandler = () => {
	mnavItem.forEach((item) => {
		item.addEventListener('click', () => {
			burgerIcon.classList.remove('active');
			navbar.classList.remove('active');
		});
	});
};

const headerParallaxHandler = () => {
	if (viewportWidth < 768) {
		const intro = document.querySelector('.intro');
		intro.classList.remove('fixed');
		return;
	}

	const offsetY = window.pageYOffset;
	const rate = window.pageYOffset * 0.5;
	const opacityValue = offsetY / 100;

	introText[0].style.transform = `translate(${rate * 8}px)`;
	introText[1].style.transform = `translate(${rate * -3}px)`;
	introText[2].style.transform = `translate(${rate * 6}px)`;
	introText[3].style.transform = `translate(${rate * 7}px)`;
	introText[4].style.transform = `translate(${rate * -9}px)`;
	introText[5].style.transform = `translate(${rate * 11}px)`;

	introBtn.style.opacity = `${0.5 / opacityValue}`;
	if (offsetY >= 200) {
		introBtn.style.opacity = 0;
		introBtn.style.display = 'none';
	} else {
		introBtn.style.display = 'block';
	}

	if (offsetY >= 800) {
		introText.forEach((text) => (text.style.display = 'none'));
	} else {
		introText.forEach((text) => (text.style.display = 'block'));
	}
};

// Processes - accordions

const accordions = document.querySelectorAll('.accordion-heading');

const openAccordion = (e) => {
	if (e.target.nextElementSibling.classList.contains('active')) {
		e.target.nextElementSibling.classList.remove('active');
	} else {
		closeAllAccordions();
		e.target.nextElementSibling.classList.toggle('active');
	}
};

const closeAllAccordions = () => {
	const accordionContent = document.querySelectorAll('.accordion-content');
	accordionContent.forEach((el) => {
		el.classList.remove('active');
	});
};

const accordionOutsideHandler = (e) => {
	if (
		e.target.classList.contains('accordion-heading') ||
		e.target.classList.contains('accordion-content')
	)
		return;
	closeAllAccordions();
};
// Processes - list

const processTitle = document.querySelector('.processes-content-title');

const processText = document.querySelector('.processes-content-text');

const processBtns = document.querySelectorAll('.processes-list-box');

const chengeProcess = (e) => {
	const btn = e.target;

	if (btn.classList.contains('active')) {
	} else {
		closeAllProcesses();
		btn.classList.toggle('active');
	}
	setContent();
};

const closeAllProcesses = () => {
	processBtns.forEach((btn) => btn.classList.remove('active'));
};

const setContent = () => {
	if (processBtns[0].classList.contains('active')) {
		processTitle.textContent = 'Jak przebiegają rozmowy?';
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque placeat, possimus consectetur, tenetur voluptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?`;
	} else if (processBtns[1].classList.contains('active')) {
		processTitle.textContent = 'Jak wygląda prezentacja projektu?';
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, ptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?`;
	} else if (processBtns[2].classList.contains('active')) {
		processTitle.textContent = 'Co to jest zatwierdzenie?';
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, conseumque autem odit veniam, tenetur illo tempora?`;
	} else if (processBtns[3].classList.contains('active')) {
		processTitle.textContent = 'Wykonanie projektu!';
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque placeat, possimus consectetur, tenetur voluptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?ellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque plac`;
	}
};

// parallax section
const firstSection = document.querySelector('.processes');
const secondSection = document.querySelector('.characteristics');
const sectionOffSet = firstSection.offsetTop;
const nav = document.querySelector('.navbar');
const navHeight = nav.offsetHeight;

const handleParallaxSection = () => {
	if (viewportWidth < 992) return;
	let scrollPermision;
	const scrollValue = window.scrollY;
	const rate = parseInt((scrollValue - sectionOffSet) / 10);
	const firstAnchor = sectionOffSet - navHeight <= scrollValue;

	if (firstAnchor && !secondSection.classList.contains('static')) {
		firstSection.classList.add('parallax-sticky');
		scrollPermision = true;
	}

	const secondSectionRect = secondSection.getBoundingClientRect();
	const firstSectionRect = firstSection.getBoundingClientRect();
	const secondSectionTop = secondSectionRect.top;
	const firstSectionTop = firstSectionRect.top;
	if (rate > 100 && secondSectionTop === firstSectionTop) {
		secondSection.classList.add('static');
		firstSection.classList.remove('parallax-sticky');
		firstSection.classList.add('parallax-static');
		scrollPermision = false;
	} else {
		if (secondSection.classList.contains('static')) {
			const secondOffSet = secondSection.offsetTop;
			if (secondOffSet - navHeight >= scrollValue) {
				firstSection.classList.add('parallax-sticky');
				firstSection.classList.remove('parallax-static');
				secondSection.classList.remove('static');
				scrollPermision = true;
			}
			scrollPermision = false;
		} else {
			scrollPermision = true;
		}
	}

	if (scrollPermision) {
		secondSection.style.transform = `translateX(-${rate}%)`;
		firstSection.style.transform = `translateX(-${rate}%)`;
	}

};

// functions actions

const handleRemoveDOMElements = () => {
	const mobileProcesses = document.querySelector('.processes-mobile');
	// mobileProcesses.remove();
	// dodac dynamiczna werjse na PC...
};
window.onload = () => {
	headerParallaxHandler();
	setContent();
	if (viewportWidth >= 992) handleRemoveDOMElements();
};

processBtns.forEach((btn) => btn.addEventListener('click', chengeProcess));

accordions.forEach((accordion) =>
	accordion.addEventListener('click', openAccordion)
);

window.onclick = (e) => {
	accordionOutsideHandler(e);
	cardOutsideHandler(e);
};

window.onscroll = () => {
	headerParallaxHandler();
	handleParallaxSection();
};
navCloseHandler();
navRevealHandler();

window.onresize = () => {
	let viewportWidth = window.innerWidth;

	if (viewportWidth >= 992) return;
	cardsActivatorHandler();
};
