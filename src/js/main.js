const mobileMenuToggler = document.querySelector('.nav__navbar--mobile-toggler')
const mobileNavbar = document.querySelector('.nav__navbar--mobile')
const mobileMenu = document.querySelector('.nav-mobile__menu')
const mobileMenuItems = document.querySelectorAll('.nav-mobile__menu-content-item')
const mobileMenuShadow = document.querySelector('.nav-mobile__menu-shadow')
const desktopNavbar = document.querySelector('.nav__navbar--desktop')
const header = document.querySelector('header')

const positionElementsBasedOnNavbar = () => {
	const navbarBorder = 1
	const navbarHeight = mobileNavbar.clientHeight + navbarBorder
	mobileMenu.style.height = `Calc(100vh - ${navbarHeight}px)`
	header.style.marginTop = `${navbarHeight}px`
	header.style.minHeight = `Calc(100vh - ${navbarHeight}px)`
}

const toggleNavbar = () => {
	const isMobile = document.body.clientWidth < 992 ? true : false
	if (isMobile) {
		desktopNavbar.classList.add('hidden')
		mobileNavbar.classList.remove('hidden')
	} else {
		mobileNavbar.classList.add('hidden')
		desktopNavbar.classList.remove('hidden')
	}
}

const handleMobileToggle = () => {
	const getActive = mobileMenuToggler.getAttribute('data-active')
	const isActive = getActive === 'true' ? true : false
	mobileMenuToggler.setAttribute('data-active', !isActive)
	mobileMenu.setAttribute('data-expanded', !isActive)
}

mobileMenuToggler.addEventListener('click', handleMobileToggle)
mobileMenuItems.forEach(item => item.addEventListener('click', handleMobileToggle))
mobileMenuShadow.addEventListener('click', handleMobileToggle)

window.addEventListener('resize', () => {
	positionElementsBasedOnNavbar()
	toggleNavbar()
})
positionElementsBasedOnNavbar()
toggleNavbar()
