const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const formBox = document.querySelector('.form-box')
const opennedForm = document.querySelector('.open-form-inner')

const disableScroll = () => {
  const scrollTop = window.scrollY

  window.onscroll = function () {
    window.scrollTo({
      top: scrollTop,
      behavior: 'instant',
    })
  }
}

const enableScroll = () => {
  window.onscroll = function () {}
}

const closeFormIfOutside = (e) => {
  if(!opennedForm.contains(e.target) && e.target != btn){
    formBox.classList.add('hidden')
    enableScroll()
  }
}

btn.addEventListener('click', function () {
  disableScroll()
	formBox.classList.remove('hidden')
})
cross.addEventListener('click', function () {
  enableScroll()
	formBox.classList.add('hidden')
})
<<<<<<< HEAD

window.addEventListener('click', (e) => closeFormIfOutside(e))



=======
>>>>>>> 2fbcbf730b59cc13f36e0b9a7b4b53ad95b9de33
