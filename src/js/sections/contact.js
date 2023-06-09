const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const forme = document.querySelector('.open-form-inner')
btn.addEventListener('click', function () {
	forme.classList.remove('fa-show')
})
cross.addEventListener('click', function () {
	forme.classList.add('fa-show')
})
