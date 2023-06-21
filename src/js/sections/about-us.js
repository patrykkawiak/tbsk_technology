const rotatingBlockItems = document.querySelectorAll('.rotating-block-item')
const blockItemIndicators = document.querySelectorAll('.rotating-block-indicators .dot')
const fadingInfoBlocks = document.querySelectorAll('.fading-info-item')
const handleRotate = index => {
	rotatingBlockItems[index].classList.remove('rotateShow')
	rotatingBlockItems[index].classList.add('rotateHide')
	blockItemIndicators[index].classList.remove('active')
	fadingInfoBlocks[index].classList.add('not-visible')
	let next = index + 1
	if (next === rotatingBlockItems.length) {
		next = 0
	}
	rotatingBlockItems[next].classList.remove('standby')
	rotatingBlockItems[next].classList.add('rotateShow')
	rotatingBlockItems[next].classList.remove('rotateHide')
	setTimeout(() => {
		blockItemIndicators[next].classList.add('active')
		fadingInfoBlocks[next].classList.remove('not-visible')
	}, 500)
	return next
}

const handleAboutUs = () => {
	let index = 0
	setInterval(() => {
		index = handleRotate(index)
	}, 4000)
}

handleAboutUs()
