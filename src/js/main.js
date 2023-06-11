const introText = document.querySelectorAll('.intro-text')
const introBtn = document.querySelector('.intro-btn')
let viewportWidth = window.innerWidth

const cards = document.querySelectorAll('.services__cards .card')

const cardsActivatorHandler = () => {
	cards.forEach(card => {
		card.addEventListener('click', () => {
			cards.forEach(el => {
				if (el.classList.contains('active')) {
					el.classList.remove('active')
				}
			})
			card.classList.add('active')
		})

		card.addEventListener('touchend', () => {
			cards.forEach(el => {
				if (el.classList.contains('active')) {
					el.classList.remove('active')
				}
			})
			card.classList.add('active')
		})
	})
}

const cardOutsideHandler = e => {
	if (!e.target.classList.contains('card')) {
		cards.forEach(card => {
			card.classList.remove('active')
		})
	}
}

const navHandler = () => {
  const navbar = document.querySelector('.mobile-nav')
  const oldBurgerIcon = document.querySelector('.burger-icon')
  const mnavItems = document.querySelectorAll('.mobile-nav a')
  const oldNavListBackground = document.querySelector('.nav-list-background')
  const reveal = () => {
    console.log('reveal');
    burgerIcon.classList.toggle('active')
    navbar.classList.toggle('active')
  }
  const close = () => {
    burgerIcon.classList.remove('active')
    navbar.classList.remove('active')
  }
  const burgerIcon = oldBurgerIcon.cloneNode(true)
  burgerIcon.addEventListener('click', reveal)
  oldBurgerIcon.replaceWith(burgerIcon)
  mnavItems.forEach(oldItem => {
    const item = oldItem.cloneNode(true)
    item.addEventListener('click', close)
    oldItem.replaceWith(item)
  })
  const navListBackground = oldNavListBackground.cloneNode()
  navListBackground.addEventListener('click', close)
  oldNavListBackground.replaceWith(navListBackground)
}

const headerParallaxHandler = () => {
	if (viewportWidth < 768) {
		const intro = document.querySelector('.intro')
		intro.classList.remove('fixed')
		return
	}

	const offsetY = window.pageYOffset
	const rate = window.pageYOffset * 0.5
	const opacityValue = offsetY / 100

	introText[0].style.transform = `translate(${rate * 8}px)`
	introText[1].style.transform = `translate(${rate * -3}px)`
	introText[2].style.transform = `translate(${rate * 6}px)`
	introText[3].style.transform = `translate(${rate * 7}px)`
	introText[4].style.transform = `translate(${rate * -9}px)`
	introText[5].style.transform = `translate(${rate * 11}px)`

	introBtn.style.opacity = `${0.5 / opacityValue}`
	if (offsetY >= 200) {
		introBtn.style.opacity = 0
		introBtn.style.display = 'none'
	} else {
		introBtn.style.display = 'block'
	}

	if (offsetY >= 800) {
		introText.forEach(text => (text.style.display = 'none'))
	} else {
		introText.forEach(text => (text.style.display = 'block'))
	}
}

// Processes - accordions

const accordions = document.querySelectorAll('.accordion-heading')

const openAccordion = e => {
	if (e.target.nextElementSibling.classList.contains('active')) {
		e.target.nextElementSibling.classList.remove('active')
	} else {
		closeAllAccordions()
		e.target.nextElementSibling.classList.toggle('active')
	}
}

const closeAllAccordions = () => {
	const accordionContent = document.querySelectorAll('.accordion-content')
	accordionContent.forEach(el => {
		el.classList.remove('active')
	})
}

const accordionOutsideHandler = e => {
	if (e.target.classList.contains('accordion-heading') || e.target.classList.contains('accordion-content')) return
	closeAllAccordions()
}
// Processes - list

const processTitle = document.querySelector('.processes-content-title')

const processText = document.querySelector('.processes-content-text')

const processBtns = document.querySelectorAll('.processes-list-item')

const chengeProcess = e => {
	const btn = e.target

	if (btn.classList.contains('active')) {
    return
	} else {
		closeAllProcesses()
		btn.classList.toggle('active')
	}
	setContent()
}

const closeAllProcesses = () => {
	processBtns.forEach(btn => btn.classList.remove('active'))
}

const setContent = () => {
	if (processBtns[0].classList.contains('active')) {
		processTitle.textContent = 'Jak przebiegają rozmowy?'
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque placeat, possimus consectetur, tenetur voluptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?`
	} else if (processBtns[1].classList.contains('active')) {
		processTitle.textContent = 'Jak wygląda prezentacja projektu?'
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, ptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?`
	} else if (processBtns[2].classList.contains('active')) {
		processTitle.textContent = 'Co to jest zatwierdzenie?'
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, conseumque autem odit veniam, tenetur illo tempora?`
	} else if (processBtns[3].classList.contains('active')) {
		processTitle.textContent = 'Wykonanie projektu!'
		processText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam dolore voluptate quisquam est impedit molestiae laboriosam, unde reprehenderit ullam, nesciunt nobis repellat repellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque placeat, possimus consectetur, tenetur voluptas est illo nobis harum praesentium asperiores! Cumque autem odit veniam, tenetur illo tempora?ellendus? Ea minima voluptatum temporibus quam delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis saepe, cumque plac`
	}
}

/* PROJECTS PARALLAX */

const parallaxSection = document.querySelector('.projects-desktop-cnt')
const parallaxItems = document.querySelectorAll('.projects-parallax')
const prevSection = document.querySelector('.services')
const nextSection = document.querySelector('.processes')
let viewport = window.innerWidth
let prevSectionOffset = prevSection.offsetTop

const projectsParallaxHandler = () => {
	if (viewport < 992) return
  const sectionHeading = document.querySelector('.projects .section__heading')
  let firstAnchorPoint = prevSectionOffset + prevSection.offsetHeight + sectionHeading.offsetHeight
  let secondAnchorPoint = nextSection.offsetTop - nextSection.offsetHeight + sectionHeading.offsetHeight / 2
  const projectsDesktopCnt = document.querySelector('.projects-desktop-cnt')
  projectsDesktopCnt.style.height = `Calc(600vh + ${sectionHeading.offsetHeight}px)`

	let scrollTop = window.scrollY
	// let scrollToAnchor = nextSection.offsetHeight + nextSection.offsetTop
	if (scrollTop >= firstAnchorPoint) {
		parallaxSection.classList.add('fixed-pr')
	}
	if (scrollTop >= secondAnchorPoint || scrollTop < firstAnchorPoint) {
		parallaxSection.classList.remove('fixed-pr')
	}
	if (scrollTop >= secondAnchorPoint) {
		parallaxItems[0].style.transform = `translateY(0)`
	}

	if (parallaxSection.classList.contains('fixed-pr')) {
		parallaxItems[0].style.transform = `translate(0px, -${scrollTop - firstAnchorPoint}px)`
		parallaxItems[1].style.transform = `translate(0px, ${scrollTop - firstAnchorPoint}px)`
	}
  if (window.scrollY < firstAnchorPoint){
    parallaxItems[0].style.transform = 'translate(0, 0)'
    parallaxItems[1].style.transform = 'translate(0, 0)'
  }

	if (!parallaxSection.classList.contains('.fixed-pr') && scrollTop >= secondAnchorPoint) {
		parallaxItems[1].style.transform = `translateY(1000vh)`
	}
}

const firstSection = document.querySelector('.processes')
const secondSection = document.querySelector('.characteristics')
const sectionOffSet = firstSection.offsetTop
const nav = document.querySelector('.navbar')
const navHeight = nav.offsetHeight
const handleParallaxSection = () => {
	if (viewportWidth < 992) return
	let scrollPermision
	const scrollValue = window.scrollY
	const rate = parseInt((scrollValue - sectionOffSet) / 10)
	const firstAnchor = sectionOffSet - navHeight <= scrollValue

	if (firstAnchor && !secondSection.classList.contains('static')) {
		firstSection.classList.add('parallax-sticky')
		scrollPermision = true
	} else {
		firstSection.classList.remove('parallax-sticky')
	}

	if (!firstSection.classList.contains('parallax-sticky') && !firstSection.classList.contains('parallax-static')) {
		secondSection.style.transform = `translateX(0)`
		firstSection.style.transform = `translateX(0)`
	}

	const secondSectionRect = secondSection.getBoundingClientRect()
	const firstSectionRect = firstSection.getBoundingClientRect()
	const secondSectionTop = secondSectionRect.top
	const firstSectionTop = firstSectionRect.top

	if (rate > 100 && secondSectionTop === firstSectionTop) {
		firstSection.classList.remove('parallax-sticky')
		firstSection.classList.add('parallax-static')
		secondSection.style.marginTop = `${firstSectionTop + navHeight * 2}px`
		secondSection.classList.add('static')
		scrollPermision = false
	} else {
		if (secondSection.classList.contains('static')) {
			const secondOffSet = secondSection.offsetTop
			if (secondOffSet - navHeight >= scrollValue) {
				firstSection.classList.add('parallax-sticky')
				firstSection.classList.remove('parallax-static')
				secondSection.classList.remove('static')
				secondSection.style.marginTop = '0'
				scrollPermision = true
			}
			scrollPermision = false
		} else {
			scrollPermision = true
		}
	}

	if (scrollPermision) {
		secondSection.style.transform = `translateX(-${rate}%)`
		firstSection.style.transform = `translateX(-${rate}%)`
	}

	if (rate >= 100) {
		secondSection.classList.remove('quick-fix')
	} else if (rate <= 100) {
		secondSection.classList.add('quick-fix')
	}
}

// parallax Items

const parallaxTexts = document.querySelectorAll('.characteristics-item')
const handleParallaxItems = e => {
	if (e.target.classList.contains('reset-pos')) {
		e.target.classList.remove('reset-pos')
	}
	e.target.classList.add('add-pos')

	let x = e.clientX
	let y = e.clientY
	const middleX = e.target.offsetWidth / 2
	const middleY = e.target.offsetHeight / 2
	let finalX = (middleX - x) / 40
	let finalY = (middleY - y) / 40

	parallaxTexts.forEach(text => {
		if (text.classList.contains('reset-pos')) {
			text.classList.remove('reset-pos')
		}
		text.classList.add('add-pos')

		text.style.setProperty('--transform-y', `${finalY}px`)
		text.style.setProperty('--transform-x', `${finalX}px`)
	})
}

secondSection.addEventListener('mousemove', handleParallaxItems)
secondSection.addEventListener('mouseout', () => {
	parallaxTexts.forEach(text => {
		text.classList.add('reset-pos')
		text.classList.remove('add-pos')
	})
})

// functions actions

window.onload = () => {
	headerParallaxHandler()
  if(viewportWidth <= 768){
    navHandler()
  }
}

processBtns.forEach(btn => btn.addEventListener('click', chengeProcess))

accordions.forEach(accordion => accordion.addEventListener('click', openAccordion))

window.addEventListener('click', e => {
	accordionOutsideHandler(e)
	cardOutsideHandler(e)
})

window.addEventListener('scroll', () => {
	headerParallaxHandler()
	projectsParallaxHandler()
	handleParallaxSection()
})

window.addEventListener('resize', () => {
  let viewportWidth = window.innerWidth
  if(viewportWidth <= 768){
    navHandler()
  }
	if (viewportWidth >= 992) return
	cardsActivatorHandler()
})
