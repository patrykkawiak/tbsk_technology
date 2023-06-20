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
    let isExpanded = burgerIcon.getAttribute('aria-expanded')
    if(isExpanded == 'false'){
      isExpanded = false
    }
    else {
      isExpanded = true
    }
    burgerIcon.setAttribute('aria-expanded', !isExpanded)
	};
	const close = () => {
		burgerIcon.classList.remove('active');
    burgerIcon.setAttribute('aria-expanded', 'false')
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
    introBtn.style.opacity = '1'
    racoon.style.opacity = '1'
    introText.forEach(text => {
      text.style.transform = 'translate(0, 0)'
    })
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
const prevSection = document.querySelector('.services');
const nextSection = document.querySelector('.parallax-hero');
const projectsParallaxHandler = () => {
	if (viewportWidth < 992){
    nextSection.style.transform = 'translate(0, 0)'
    return 
  }
  const projectsShowcase = document.querySelector('.projects-desktop-cnt .projects-showcase');
  const projects = document.querySelectorAll('.projects-desktop-cnt .project')
  let prevSectionOffset = prevSection.offsetTop;
	const sectionHeading = document.querySelector('.projects .section__heading');
  const scrollValue = window.scrollY
	let firstAnchorPoint =
		prevSectionOffset +
		prevSection.offsetHeight +
		sectionHeading.offsetHeight +
    Math.floor(nav.offsetHeight / 2)
	let secondAnchorPoint = nextSection.offsetTop - window.innerHeight + Math.floor(nav.offsetHeight / 2)
  if (scrollValue < firstAnchorPoint) {
    projectsShowcase.style.transform = `translate(0, Calc(-100% + ${window.innerHeight}px))`
  }
  else if (scrollValue > secondAnchorPoint){
    projectsShowcase.style.transform = `translate(0, ${(projects.length - 1) * window.innerHeight}px)`
  }
  else if (scrollValue > firstAnchorPoint) {
    projectsShowcase.style.transform = `translate(0, Calc(-100% + ${window.innerHeight + (scrollValue - firstAnchorPoint) * 2}px))`
  }
}

const firstSection = document.querySelector('.processes');
const secondSection = document.querySelector('.characteristics');
const parallaxHero = document.querySelector('.parallax-hero');

const handleParallaxSection = () => {
	if (viewportWidth < 992){
    secondSection.style.transform = 'translate(0, 0)'
    parallaxHero.style.height = '0'
    return
  }  
  const firstAnchor = parallaxHero.offsetTop - window.scrollY
  const secondAnchor = firstAnchor + viewportWidth
  parallaxHero.style.height = `Calc(${window.innerHeight + viewportWidth}px - 5rem)`
  if(secondAnchor <= 0) {
    firstSection.style.transform = `translate(-${viewportWidth}px, 0)`
    secondSection.style.transform = `translate(0, ${secondAnchor}px)`
  }
  else if(firstAnchor <= 0) {
    firstSection.style.transform = `translate(${firstAnchor}px, 0)`
    secondSection.style.transform =  `translate(Calc(100% + ${firstAnchor}px), 0)`
  }
  else {
    firstSection.style.transform = `translate(0, ${firstAnchor}px)`
    secondSection.style.transform = `translate(100%, ${firstAnchor}px)`
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
  headerParallaxHandler()
	if (viewportWidth <= 768) {
		navHandler();
	}
	if (viewportWidth >= 992) return;
  handleParallaxSection();
  projectsParallaxHandler()
	cardsActivatorHandler();
});
