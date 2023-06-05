const burgerIcon = document.querySelector('.burger-icon')
const navbar = document.querySelector('.mobile-nav')

const introText = document.querySelectorAll('.intro-text')
const introBtn = document.querySelector('.intro-btn')

const mnavItem = document.querySelectorAll('.mobile-nav a')

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

const navRevealHandler = () => {
	burgerIcon.addEventListener('click', () => {
		burgerIcon.classList.toggle('active')
		navbar.classList.toggle('active')
	})
}

const navCloseHandler = () => {
	mnavItem.forEach(item => {
		item.addEventListener('click', () => {
			burgerIcon.classList.remove('active')
			navbar.classList.remove('active')
		})
	})
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

// functions actions

accordions.forEach(accordion => accordion.addEventListener('click', openAccordion))

window.onclick = e => {
	accordionOutsideHandler(e)
	cardOutsideHandler(e)
}

window.onload = () => {
	headerParallaxHandler()
}

window.onscroll = () => {
	headerParallaxHandler()
}
navCloseHandler()
navRevealHandler()

window.onresize = () => {
	let viewportWidth = window.innerWidth

	if (viewportWidth >= 992) return
	cardsActivatorHandler()
}
