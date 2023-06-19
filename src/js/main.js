const introText = document.querySelectorAll('.intro-text');
const introBtn = document.querySelector('.intro-btn');
const racoon = document.querySelector('.racoon');
const intro = document.querySelector('.intro');
const nav = document.querySelector('.navbar');
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

const navHandler = () => {
	const navbar = document.querySelector('.navbar');
	const oldBurgerIcon = document.querySelector('.burger-icon');
	const mnavItems = document.querySelectorAll('.mobile-nav a');
	const oldNavListBackground = document.querySelector('.nav-list-background');
	const reveal = () => {
		burgerIcon.classList.toggle('active');
		navbar.classList.toggle('active');
	};
	const close = () => {
		burgerIcon.classList.remove('active');
		navbar.classList.remove('active');
	};
	const burgerIcon = oldBurgerIcon.cloneNode(true);
	burgerIcon.addEventListener('click', reveal);
	oldBurgerIcon.replaceWith(burgerIcon);
	mnavItems.forEach((oldItem) => {
		const item = oldItem.cloneNode(true);
		item.addEventListener('click', close);
		oldItem.replaceWith(item);
	});
	const navListBackground = oldNavListBackground.cloneNode();
	navListBackground.addEventListener('click', close);
	oldNavListBackground.replaceWith(navListBackground);
};

const headerParallaxHandler = () => {
	if (viewportWidth < 768) {
		const intro = document.querySelector('.intro');
		intro.classList.remove('fixed');
		return;
	}

	const offsetY = window.scrollY;
	const rate = window.scrollY * 0.1;
	const opacityValue = 1 / (offsetY / 100 + 1);

	introText[0].style.transform = `translate(${rate * 14}px)`;
	introText[1].style.transform = `translate(${rate * -3}px)`;
	introText[2].style.transform = `translate(${rate * 16}px)`;
	introText[3].style.transform = `translate(${rate * 17}px)`;
	introText[4].style.transform = `translate(${rate * -9}px)`;
	introText[5].style.transform = `translate(${rate * 17.5}px)`;

	if (offsetY > window.innerHeight) {
		intro.style.pointerEvents = 'none';
		intro.style.opacity = '0';
	} else {
		introBtn.style.opacity = `${opacityValue}`;
		racoon.style.opacity = `${opacityValue}`;
		intro.style.pointerEvents = 'all';
		intro.style.opacity = '1';
	}
};

// Processes - list
const processesInfo = [
	{
		heading: 'Jak przebiegają rozmowy?',
		text: 'Zaczynamy od określenia świadczonej usługi. Jeżeli jest to budowa lub projektowanie, to pytamy czy istnieje jakieś logo, bądź wizytówka firmy. Następnie zapytamy o treści, które miałyby się znaleźć na stronie. Na podstawie tego tworzymy wyłącznie strukturę i wyceniamy projekt. Następnie zaczynamy projektować.',
		button: 'Konsultacja',
	},
	{
		heading: 'Jak wygląda prezentacja projektu?',
		text: 'Po skończeniu projektu strony, przedstawiamy go Tobie do ocenienia. Wtedy przyjmujemy wszelkie uwagi dot. doboru kolorów, budowy sekcji itd. Tłumaczymy też, czemu pewne elementy muszą zawierać niektóre cechy. Później nanosimy wszelkie zmiany.',
		button: 'Prezentacja',
	},
	{
		heading: 'Czym jest etap zatwierdzenia?',
		text: 'To krok, w którym decydujesz się na podjęcie lub odrzucenie naszych usług. Jeżeli zlecisz nam stworzenie strony, to przekażemy Ci ile prawdopodobnie zajmie to nam czasu. Dodatkowo będziemy potrzebowali dokładnych treści, które mają się finalnie znaleźć na Twojej witrynie.',
		button: 'Zatwierdzenie',
	},
	{
		heading: 'Wykonanie projektu!',
		text: 'Ten krok zostaw nam! Od razu zabierzemy się do tworzenia Twojej wymarzonej wizytówki internetowej. Podczas tego czasu możesz nam przekazać wszelkie dodatkowe informacje, a my weźmiemy je pod uwagę. Po zakończonej pracy zostało tylko umieścić ją na hostingu.',
		button: 'Wykonanie',
	},
];
const processTitle = document.querySelector('.processes-content-title');
const processText = document.querySelector('.processes-content-text');
const processBtns = document.querySelectorAll('.processes-list-item');
const chengeProcess = (e) => {
	const btn = e.target;

	if (btn.classList.contains('active')) {
		return;
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
	for (let i = 0; i < processesInfo.length; i++) {
		if (processBtns[i].classList.contains('active')) {
			processTitle.textContent = processesInfo[i].heading;
			processText.textContent = processesInfo[i].text;
			return;
		}
	}
};

/* PROJECTS PARALLAX */

const parallaxSection = document.querySelector('.projects-desktop-cnt');
const parallaxItems = document.querySelectorAll('.projects-parallax');
const prevSection = document.querySelector('.services');
const nextSection = document.querySelector('.processes');
let viewport = window.innerWidth;
let prevSectionOffset = prevSection.offsetTop;

const projectsParallaxHandler = () => {
	if (viewport < 992) return;
	const sectionHeading = document.querySelector('.projects .section__heading');
	let firstAnchorPoint =
		prevSectionOffset +
		prevSection.offsetHeight +
		sectionHeading.offsetHeight +
		nav.offsetHeight;
	let secondAnchorPoint =
		nextSection.offsetTop -
		nextSection.offsetHeight +
		sectionHeading.offsetHeight;
	const projectsDesktopCnt = document.querySelector('.projects-desktop-cnt');
	projectsDesktopCnt.style.height = `Calc(600vh + ${sectionHeading.offsetHeight}px)`;

	let scrollTop = window.scrollY;
	// let scrollToAnchor = nextSection.offsetHeight + nextSection.offsetTop
	if (scrollTop >= firstAnchorPoint) {
		parallaxSection.classList.add('fixed-pr');
	}
	if (scrollTop >= secondAnchorPoint || scrollTop < firstAnchorPoint) {
		parallaxSection.classList.remove('fixed-pr');
	}
	if (scrollTop >= secondAnchorPoint) {
		parallaxItems[0].style.transform = `translate(0, 0)`;
		parallaxItems[1].style.transform = `translate(0, 4200px)`;
	}

	if (parallaxSection.classList.contains('fixed-pr')) {
		parallaxItems[0].style.transform = `translate(0px, -${
			scrollTop - firstAnchorPoint
		}px)`;
		parallaxItems[1].style.transform = `translate(0px, ${
			scrollTop - firstAnchorPoint
		}px)`;
	}
	if (scrollTop < firstAnchorPoint) {
		parallaxItems[0].style.transform = 'translate(0, 0)';
		parallaxItems[1].style.transform = 'translate(0, 0)';
	}
	if (
		!parallaxSection.classList.contains('.fixed-pr') &&
		scrollTop >= secondAnchorPoint
	) {
		//o ilość sekcji * 200vh
		parallaxItems[1].style.transform = `translateY(200vh)`;
	}
};

const firstSection = document.querySelector('.processes');
const secondSection = document.querySelector('.characteristics');
const parallaxHero = document.querySelector('.parallax-hero');

const handleParallaxSection = () => {
<<<<<<< HEAD
	if (viewportWidth < 992) return
	let scrollPermision
  const sectionOffSet = firstSection.offsetTop
  const navHeight = nav.offsetHeight
  parallaxHero.style.height = `${viewportWidth + navHeight - window.innerHeight}px`
	const scrollValue = window.scrollY
	let rate = scrollValue - sectionOffSet
  if(rate > viewportWidth){
    scrollPermision = false
    firstSection.style.transform = `translate(-${viewportWidth}px, ${viewportWidth}px)`
		secondSection.style.transform = `translate(0, ${viewportWidth - window.innerHeight + navHeight}px)`
  }
  else if(rate <= 0) {
    scrollPermision = false
    firstSection.style.transform = `translate(0, 0)`
		secondSection.style.transform = `translate(100%, -100%)`
  }
  else {
    scrollPermision = true
  }
	if (scrollPermision) {
    firstSection.style.transform = `translate(-${rate}px, ${rate}px)`
		secondSection.style.transform = `translate(Calc(100% - ${rate}px), Calc(-100% + ${rate}px))`
=======
	if (viewportWidth < 992) return;
	let scrollPermision;
	const sectionOffSet = firstSection.offsetTop;
	const navHeight = nav.offsetHeight;
	parallaxHero.style.height = `${
		viewportWidth + navHeight - window.innerHeight
	}px`;
	const scrollValue = window.scrollY;
	const rate = scrollValue - sectionOffSet;
	console.log(rate);
	if (rate > viewportWidth) {
		scrollPermision = false;
		firstSection.style.transform = `translate(-${viewportWidth}px, ${viewportWidth}px)`;
		secondSection.style.transform = `translate(0, ${
			viewportWidth - window.innerHeight + navHeight
		}px)`;
	} else if (rate <= 0) {
		scrollPermision = false;
		firstSection.style.transform = `translate(0, 0)`;
		secondSection.style.transform = `translate(100%, -100%)`;
	} else {
		scrollPermision = true;
>>>>>>> main
	}
	if (scrollPermision) {
		firstSection.style.transform = `translate(-${rate}px, ${rate}px)`;
		secondSection.style.transform = `translate(Calc(100% - ${rate}px), Calc(-100% + ${rate}px))`;
	}
};

// parallax Items

const parallaxTexts = document.querySelectorAll('.characteristics-item');
const handleParallaxItems = (e) => {
	if (e.target.classList.contains('reset-pos')) {
		e.target.classList.remove('reset-pos');
	}
	e.target.classList.add('add-pos');

	let x = e.clientX;
	let y = e.clientY;
	const middleX = e.target.offsetWidth / 2;
	const middleY = e.target.offsetHeight / 2;
	let finalX = (middleX - x) / 40;
	let finalY = (middleY - y) / 40;

	parallaxTexts.forEach((text) => {
		if (text.classList.contains('reset-pos')) {
			text.classList.remove('reset-pos');
		}
		text.classList.add('add-pos');

		text.style.setProperty('--transform-y', `${finalY}px`);
		text.style.setProperty('--transform-x', `${finalX}px`);
	});
};

secondSection.addEventListener('mousemove', handleParallaxItems);
secondSection.addEventListener('mouseout', () => {
	parallaxTexts.forEach((text) => {
		text.classList.add('reset-pos');
		text.classList.remove('add-pos');
	});
});

// functions actions

window.onload = () => {
	headerParallaxHandler();
	if (viewportWidth <= 768) {
		navHandler();
	}
	projectsParallaxHandler();
	handleParallaxSection();
};

processBtns.forEach((btn) => btn.addEventListener('click', chengeProcess));

window.addEventListener('click', (e) => {
	cardOutsideHandler(e);
});

window.addEventListener('scroll', () => {
	headerParallaxHandler();
	projectsParallaxHandler();
	handleParallaxSection();
});

window.addEventListener('resize', () => {
	viewportWidth = window.innerWidth;
	if (viewportWidth <= 768) {
		navHandler();
	}
	if (viewportWidth >= 992) return;
	cardsActivatorHandler();
});
