const pricing = document.querySelector('.pricing')
const background = document.querySelector('.background-image-box')
let diagonal = Math.floor(Math.sqrt(Math.pow(pricing.clientWidth, 2) + Math.pow(pricing.clientHeight, 2)))

background.style.height = diagonal + 'px'
background.style.width = diagonal + 'px'
window.addEventListener('resize', () => {
	diagonal = Math.floor(Math.sqrt(Math.pow(pricing.clientWidth, 2) + Math.pow(pricing.clientHeight, 2)))
	background.style.height = diagonal + 'px'
	background.style.width = diagonal + 'px'
})
