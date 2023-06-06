const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const forme = document.querySelector('.open-form-inner')
btn.addEventListener('click', function () {
	forme.classList.remove('fa-show')
})
cross.addEventListener('click', function () {
	forme.classList.add('fa-show')
})

const form = document.querySelector('form')
const inputs = form.querySelectorAll('input')
const keys = {
	backspace: 8,
	arrowLeft: 37,
	arrowRight: 39,
}

function handleInput(e) {
	const input = e.target
	const nextInput = input.nextElementSibling
	if (nextInput && input.value) {
		nextInput.focus()
		if (nextInput.value) {
			nextInput.select()
		}
	}
}

function handlePaste(e) {
	e.preventDefault()
	const paste = e.clipboardData.getData('text')
	inputs.forEach((input, i) => {
		input.value = paste[i] || ''
	})
}

function handleBackspace(e) {
	const input = e.target
	if (input.value) {
		input.value = ''
		return
	}

	input.previousElementSibling.focus()
}

function handleArrowLeft(e) {
	const previousInput = e.target.previousElementSibling
	if (!previousInput) return
	previousInput.focus()
}

function handleArrowRight(e) {
	const nextInput = e.target.nextElementSibling
	if (!nextInput) return
	nextInput.focus()
}

form.addEventListener('input', handleInput)
inputs[0].addEventListener('paste', handlePaste)

inputs.forEach(input => {
	input.addEventListener('focus', e => {
		setTimeout(() => {
			e.target.select()
		}, 0)
	})

	input.addEventListener('keydown', e => {
    if(e.key === keys.backspace) {
      handleBackspace(e)
    }
    else if (e.key === keys.arrowLeft) {
      handleArrowLeft(e)
    }
    else if (e.key === keys.arrowRight) {
      handleArrowRight(e)
    }
		
	})
})
