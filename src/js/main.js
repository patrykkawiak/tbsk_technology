const burgerIcon = document.querySelector('.burger-icon')
const navbar = document.querySelector('.mobile-nav')

const introText = document.querySelectorAll('.intro-text')
const introBtn = document.querySelector('.intro-btn')

const mnavItem = document.querySelectorAll('.mobile-nav a')

const viewportWidth = window.innerWidth

const cards = document.querySelectorAll('.services__cards .card')

/* window functions */

window.onload = () => {
	cardsActivatorHandler()
}

window.onscroll = () => {
	headerParralaxHandler()
}

const cardsActivatorHandler = () => {
	if (viewportWidth > 992) return

	cards.forEach(card => {
		card.addEventListener('click', () => {
			cards.forEach(el => {
				if (el.classList.contains('active')) {
					el.classList.remove('active')
				}
			})
			card.classList.add('active')
		})

		card.addEventListener('touchstart', () => {
			cards.forEach(el => {
				if (el.classList.contains('active')) {
					el.classList.remove('active')
				}
			})
			card.classList.add('active')
		})
	})
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

const headerParralaxHandler = () => {
	if (viewportWidth < 992) {
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
	}
}

navCloseHandler()
navRevealHandler()
