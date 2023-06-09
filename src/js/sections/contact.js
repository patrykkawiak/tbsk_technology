const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const formBox = document.querySelector('.form-box')

btn.addEventListener('click', function () {
	formBox.classList.remove('hidden')
})
cross.addEventListener('click', function () {
	formBox.classList.add('hidden')
})

window.addEventListener('click', (e) => {
  if(e.target != formBox || e.target != btn){
    formBox.classList.add('hidden')
  }
})



