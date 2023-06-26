const makeCustomElement = (type, classes, text) => {
	const element = document.createElement(type);
	if (classes) {
		classes.forEach((cssClass) => element.classList.add(cssClass));
	}
	if (text) {
		element.textContent = text;
	}
	return element;
};

const renderProcessMobile = (section, accordions) => {
	const isMade = document.querySelector('.processes-mobile');
	const desktopVersion = document.querySelector('.processes-desktop');
	if (desktopVersion) {
		desktopVersion.remove();
	}
	if (!isMade) {
		const processesMobile = makeCustomElement('div', ['processes-mobile']);
		const accordionsBlock = makeCustomElement('div', ['accordions']);
		accordions.forEach((accordion, index) => {
			const accordionBlock = makeCustomElement('div', ['accordion']);
			const heading = makeCustomElement('button', ['accordion-heading']);
      heading.setAttribute('aria-controls', `processes-accordion-${index+1}`)
      heading.setAttribute('aria-expanded', 'false')
      heading.setAttribute('aria-label', 'Zwija lub rozwija treść bloku akordeonu')
			const arrow = makeCustomElement('i', ['bx', 'bx-down-arrow-circle']);
			heading.append(arrow, accordion.button);
			const content = makeCustomElement('div', ['accordion-content']);
        content.setAttribute('id', `processes-accordion-${index+1}`)
			const label = makeCustomElement(
				'h3',
				['accordion-label'],
				accordion.heading
			);
			const text = makeCustomElement('p', ['accordion-text'], accordion.text);
			content.append(label, text);
			accordionBlock.append(heading, content);
			accordionsBlock.append(accordionBlock);
		});
		processesMobile.append(accordionsBlock);
		section.append(processesMobile);
	}
};

const renderProcessDestkop = (section, processes) => {
	const isMade = document.querySelector('.processes-desktop');
	const mobileVersion = document.querySelector('.processes-mobile');
	if (mobileVersion) {
		mobileVersion.remove();
	}
	if (!isMade) {
		const processesDesktop = makeCustomElement('div', ['processes-desktop']);
		const processesCnt = makeCustomElement('div', ['processes-ctn']);
		const processesList = makeCustomElement('div', ['processes-list']);
		const processesListBox = makeCustomElement('div', ['processes-list-box']);
		processes.forEach((process) => {
			const processesListItem = makeCustomElement('button', [
				'processes-list-item',
			]);
			const dot = makeCustomElement('div', ['dot']);
			const text = makeCustomElement(
				'span',
				['processes-list-item-text'],
				process.button
			);
			
			processesListItem.append(dot, text);
			processesListBox.append(processesListItem);
		});
		processesList.append(processesListBox);
		processesListBox.childNodes[0].classList.add('active');
		const processesContent = makeCustomElement('div', ['processes-content']);
		const processesContentTitle = makeCustomElement(
			'h3',
			['processes-content-title'],
			processes[0].heading
		);
		const processesContentText = makeCustomElement(
			'p',
			['processes-content-text'],
			processes[0].text
		);
		processesContent.append(processesContentTitle, processesContentText);
		processesCnt.append(processesList, processesContent);
		processesDesktop.append(processesCnt);
		section.append(processesDesktop);
	}
};

const handleProjectLazyLoad = (imgBox) => {
	const img = imgBox.querySelector('img');
	const imgLoaded = () => {
		imgBox.classList.add('loaded');
	};
	if (img.complete) {
		imgLoaded();
	} else {
		img.addEventListener('load', imgLoaded);
	}
};

const renderProject = (project, renderShowcase) => {
	const projectBlock = makeCustomElement('div', ['project', project.name]);
	const projectDesc = makeCustomElement('div', ['project-desc']);
	const descHeading = makeCustomElement('div', ['desc-heading']);
	const headingTag = makeCustomElement('small', ['heading-tag'], project.tag);
	const headingTitle = makeCustomElement(
		'h3',
		['heading-title'],
		project.title
	);
	descHeading.append(headingTitle, headingTag);
	const descContent = makeCustomElement('div', ['desc-content']);
	const contentMain = makeCustomElement('p', ['content-main'], project.content);
	const contentDate = makeCustomElement(
		'small',
		['content-date'],
		project.date
	);
	descContent.append(contentMain, contentDate);
	const descBtns = makeCustomElement('div', ['desc-btns']);
	const visitBtn = makeCustomElement('a', ['button', 'primary']);
	visitBtn.setAttribute('href', project.visit);
  visitBtn.setAttribute('target', '_blank')
	visitBtn.setAttribute('rel', 'noopener')
	const visitIcon = makeCustomElement('i', ['bx', 'bx-globe']);
	visitBtn.append('Odwiedź', visitIcon);
	const codeBtn = makeCustomElement('a', ['button', 'secondary']);
	codeBtn.setAttribute('href', project.code);
  codeBtn.setAttribute('target', '_blank')
	codeBtn.setAttribute('rel', 'noopener')
	const codeIcon = makeCustomElement('i', ['bx', 'bx-code-alt']);
	codeBtn.append('Code', codeIcon);
	descBtns.append(visitBtn, codeBtn);
	projectDesc.append(descHeading, descContent, descBtns);
	if (renderShowcase) {
		const projectShowcase = makeCustomElement('div', ['project-showcase']);
		const showcaseBox = makeCustomElement('div', ['showcase-box']);
		showcaseBox.style.backgroundImage = `url(./dist/img/${project.name}-placeholder.png)`;
		const showcaseImg = makeCustomElement('img', ['showcase-img']);
		showcaseImg.setAttribute(
			'alt',
			`Zdjęcie sekcji tytułowej na stronie ${project.name}`
		);
		showcaseImg.setAttribute('src', `./dist/img/${project.name}.webp`);
		showcaseImg.setAttribute('loading', 'lazy');
		showcaseBox.append(showcaseImg);
		handleProjectLazyLoad(showcaseBox);
		projectShowcase.append(showcaseBox);
		projectBlock.append(projectDesc, projectShowcase);
	} else {
		projectBlock.append(projectDesc);
	}
	return projectBlock;
};

const renderProjectsMobile = (section, projects) => {
	const isMade = document.querySelector('.projects-mobile-cnt');
	const desktopVersion = document.querySelector('.projects-desktop-cnt');
	if (desktopVersion) {
		desktopVersion.remove();
	}
	if (!isMade) {
		const projectsMobile = makeCustomElement('div', ['projects-mobile-cnt']);
		projects.forEach((project) => {
			const projectBlock = renderProject(project, true);
			projectsMobile.append(projectBlock);
		});
		section.append(projectsMobile);
	}
};

const renderProjectsDesktop = (section, projects) => {
	const isMade = document.querySelector('.projects-desktop-cnt');
	const mobileVersion = document.querySelector('.projects-mobile-cnt');
	if (mobileVersion) {
		mobileVersion.remove();
	}
	if (!isMade) {
		const projectsDesktop = makeCustomElement('div', ['projects-desktop-cnt']);
		const projectsDesc = makeCustomElement('div', [
			'projects-desc',
			'projects-parallax',
		]);
		projects.forEach((project) => {
			const projectBlock = renderProject(project);
			projectsDesc.append(projectBlock);
		});
		const projectsShowcase = makeCustomElement('div', [
			'projects-showcase',
			'projects-parallax',
		]);
		projects.forEach((project) => {
			const desktopShowcase = makeCustomElement('div', ['desktop-showcase']);
			const desktopShowcaseBox = makeCustomElement('div', [
				'desktop-showcase-box',
			]);
			desktopShowcaseBox.style.backgroundImage = `url('./dist/img/${project.name}-placeholder.png')`;
			const desktopShowcaseImg = makeCustomElement('img', [
				'desktop-showcase-img',
			]);
			desktopShowcaseImg.setAttribute('src', `./dist/img/${project.name}.webp`);
			desktopShowcaseImg.setAttribute(
				'alt',
				`Zdjęcie sekcji tytułowej na stronie ${project.name}`
			);
			desktopShowcaseBox.append(desktopShowcaseImg);
			handleProjectLazyLoad(desktopShowcaseBox);
			desktopShowcase.append(desktopShowcaseBox);
			projectsShowcase.append(desktopShowcase);
		});
		projectsDesktop.append(projectsDesc, projectsShowcase);
		section.append(projectsDesktop);
	}
};

const renderLink = (link) => {
	const listItem = makeCustomElement('li');
	const linkAnchor = makeCustomElement('a', ['nav-list-item'], link.text);
	linkAnchor.setAttribute('href', link.href);
	listItem.append(linkAnchor);
	return listItem;
};

const renderSocial = (social) => {
	const socialAnchor = makeCustomElement('a', ['nav-socials-item']);
	socialAnchor.setAttribute('rel', 'noopener');
	socialAnchor.setAttribute('href', social.href);
  socialAnchor.setAttribute('aria-label', social.label)
	const socialIcon = makeCustomElement('i', ['bx', `bxl-${social.icon}`]);
	socialAnchor.append(socialIcon);
	return socialAnchor;
};

const renderMobileNavbar = (navbar, links, socials) => {
	const isMade = document.querySelector('.mobile-nav');
	const desktopVersion = document.querySelector('.desktop-nav');
	if (desktopVersion) {
		desktopVersion.remove();
	}
	if (!isMade) {
		const mobileNav = makeCustomElement('div', ['mobile-nav']);
		const logo = makeCustomElement('a', ['logo']);
		logo.setAttribute('href', '#');
		const logoImg = makeCustomElement('img', ['logo-img']);
		logoImg.setAttribute('src', './dist/img/logo.png');
		logoImg.setAttribute(
			'alt',
			'Logo przedstawiające szopa stworzonego z prostych kształtów geometrycznych.'
		);
		logo.append(logoImg);
		const burger = makeCustomElement('button', ['burger-icon']);
		for (let i = 0; i < 3; i++) {
			const burgerBar = makeCustomElement('div', ['bar']);
			burger.append(burgerBar);
		}
    burger.setAttribute('aria-label', 'Włącznik lub wyłącznik nawigacji mobilnej')
    burger.setAttribute('aria-expanded', 'false')
    burger.setAttribute('aria-controls', 'nav-list')
		const navList = makeCustomElement('ul', ['nav-list']);
		links.forEach((link) => {
			const linkLi = renderLink(link);
			navList.append(linkLi);
		});
    const navListSocialsLi = makeCustomElement('li', [])
      const navListSocials = makeCustomElement('div', [
        'socials',
        'nav-list-item',
      ]);
      socials.forEach((social) => {
        const socialLi = renderSocial(social);
        navListSocials.append(socialLi);
      });
      navListSocialsLi.append(navListSocials)
    const navListBackground = makeCustomElement('div', ['nav-list-background']);
    navList.setAttribute('id', 'nav-list')
		navList.append(navListSocialsLi);
		mobileNav.append(logo, burger, navList, navListBackground);
		navbar.append(mobileNav);
	}
};

const renderDesktopNavbar = (navbar, links, socials) => {
	const isMade = document.querySelector('.desktop-nav');
	const mobileVersion = document.querySelector('.mobile-nav');
	if (mobileVersion) {
		mobileVersion.remove();
	}
	if (!isMade) {
		const desktopNav = makeCustomElement('div', ['desktop-nav']);
		const navList = makeCustomElement('div', ['nav-list']);
		const linksLeft = makeCustomElement('ul', ['flex-left']);
		links.forEach((link) => {
			if (link.onLeft) {
				const linkLi = renderLink(link);
				linksLeft.append(linkLi);
			}
		});
		const logo = makeCustomElement('a', ['logo']);
      logo.setAttribute('href', '#')
		const logoImg = makeCustomElement('img', ['logo-img']);
		logoImg.setAttribute('src', './dist/img/logo.png');
		logoImg.setAttribute(
			'alt',
			'Logo przedstawiające szopa stworzonego z prostych kształtów geometrycznych.'
		);
		logo.append(logoImg);
		const rightContainer = makeCustomElement('div', ['flex-right']);
		const linksRight = makeCustomElement('ul', ['right-links']);
		links.forEach((link) => {
			if (!link.onLeft) {
				const linkLi = renderLink(link);
				linksRight.append(linkLi);
			}
		});
		const socialsBlock = makeCustomElement('ul', ['socials']);
		socials.forEach((social) => {
      const socialLi = makeCustomElement('li', ['nav-list-social'])
        const socialAnchor = renderSocial(social);
        socialLi.append(socialAnchor)
			socialsBlock.append(socialLi);
		});
		rightContainer.append(linksRight, socialsBlock);
		navList.append(linksLeft, logo, rightContainer);
		desktopNav.append(navList);
		navbar.append(desktopNav);
	}
}

const handleAOS = () => {
  const whoweareCards = document.querySelectorAll('.whoweare-item')
  const faqAccordions = document.querySelectorAll('.faq .accordion')
  if(window.innerWidth >= 992) {
    whoweareCards.forEach(card => {
      card.setAttribute('data-aos-offset', '900')
    })
    faqAccordions.forEach(accordion => {
      accordion.setAttribute('data-aos-offset', '400')
    })
  }
  else if(window.innerWidth >= 768) {
    whoweareCards.forEach(card => {
      card.setAttribute('data-aos-offset', '300')
    })
    faqAccordions.forEach(accordion => {
      accordion.setAttribute('data-aos-offset', '200')
    })
  }
}

const renderDesktopOrMobile = () => {
  const navbar = document.querySelector('.navbar')
  const processesSection = document.querySelector('.processes')
  const projectsSection = document.querySelector('.projects')
  const processes = [
      {
        heading: 'Jak przebiegają rozmowy?',
        text: 'Zaczynamy od określenia świadczonej usługi. Jeżeli jest to budowa lub projektowanie, to pytamy czy istnieje jakieś logo, bądź wizytówka przedsiębiorstwa. Następnie zapytamy o treści, które miałyby się znaleźć na stronie. Na podstawie tego tworzymy wyłącznie strukturę i wyceniamy projekt. Potem zaczynamy projektować.',
        button: 'Konsultacja',
      },
      {
        heading: 'Jak wygląda prezentacja projektu?',
        text: 'Po skończeniu projektu strony, przedstawiamy go Tobie do ocenienia. Wtedy przyjmujemy wszelkie uwagi dot. doboru kolorów, budowy sekcji itd. Tłumaczymy też, czemu pewne elementy muszą zawierać niektóre cechy. Później nanosimy wszelkie zmiany.',
        button: 'Prezentacja',
      },
      {
        heading: 'Czym jest etap zatwierdzenia?',
        text: 'To krok, w którym decydujesz się na podjęcie lub odrzucenie naszych usług. Jeżeli zlecisz nam stworzenie strony, to przekażemy Ci ile prawdopodobnie zajmie to nam czasu. Dodatkowo będziemy potrzebowali dokładnych treści, które mają się finalnie znaleźć na Twojej wizytówce.',
        button: 'Zatwierdzenie',
      },
      {
        heading: 'Wykonanie projektu!',
        text: 'Ten krok zostaw nam! Od razu zabierzemy się do tworzenia Twojej nowoczesnej, wymarzonej wizytówki internetowej. Podczas tego czasu możesz nam przekazać wszelkie dodatkowe informacje, a my weźmiemy je pod uwagę. Po zakończonej pracy zostało tylko umieścić ją na hostingu.',
        button: 'Wykonanie',
      }
  ]
  const projects = [
    {
      name: 'power',
      title: 'Power Kwidzyn',
      tag: 'Projekt i budowa',
      date: '8.05.2023',
      visit: 'https://power-kwidzyn.pl',
      code: 'https://github.com/patrykkawiak/OSK-Power-Kwidzyn',
      content: 'Power Kwidzyn to szkółka prawa jazdy, która przez długi czas miała słabo funkcjonującą, przestarzałą stronę internetową. Pomimo niepewności, właściciel działalności postanowił nam zaufać i końcowo jest zadowolony z o wiele lepszej wizytówki swojego biznesu w internecie.'
    },
    {
      name: 'rebax',
      title: 'Rebax',
      tag: 'Projekt i budowa',
      date: '26.04.2023',
      visit: 'https://rebax.pl',
      code: 'https://github.com/patrykkawiak/Rebax',
      content: 'Firma Rebax przed naszą usługą nie posiadała strony internetowej. Pomimo tego, że została wprowadzona do sieci niedawno, to dumnie prezentuje tę hurtownię budowlaną, wyświetlając się na pierwszych stronach przeglądarek internautów.'
    }
  ]
  const navLinks = [
    {
      text: 'Home',
      href: '#',
      onLeft: true,
    },
    {
      text: 'O nas',
      href: '#about-us',
      onLeft: true,
    },
    {
      text: 'Usługi',
      href: '#services',
      onLeft: true,
    },
    {
      text: 'FAQ',
      href: '#faq',
      onLeft: false
    },
    {
      text: 'Kontakt',
      href: '#contact',
      onLeft: false
    }
  ]
  const navSocials = [
    {
      icon: 'gmail',
      href: 'mailto:tbsktechnology@gmail.com',
      label: 'Link do maila grupowego'
    },
    {
      icon: 'facebook-square',
      href: '#',
      label: 'Link do facebooka'
    },
    {
      icon: 'linkedin-square',
      href: '#',
      label: 'Link do linkedin'
    }
  ]

  handleAOS()
	if (document.body.clientWidth >= 992) {
		renderProcessDestkop(processesSection, processes);
		renderProjectsDesktop(projectsSection, projects);
		renderDesktopNavbar(navbar, navLinks, navSocials);
	} else if (document.body.clientWidth >= 768) {
		renderProcessMobile(processesSection, processes);
		renderProjectsMobile(projectsSection, projects);
		renderDesktopNavbar(navbar, navLinks, navSocials);
	} else {
		renderProcessMobile(processesSection, processes);
		renderProjectsMobile(projectsSection, projects);
		renderMobileNavbar(navbar, navLinks, navSocials);
	}
};

window.addEventListener('resize', renderDesktopOrMobile);
renderDesktopOrMobile();
