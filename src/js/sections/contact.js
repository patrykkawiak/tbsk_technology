// eslint-disable-next-line no-undef
emailjs.init('Hhpvi3dgfNV-eaXKW')

const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const formBox = document.querySelector('.form-box')
const opennedForm = document.querySelector('.open-form-inner')
const form = document.querySelector('.contact form')
const formTelephoneControls = document.querySelectorAll('.form-controls')

const numbers = '0123456789'
const disableScroll = () => {
  const scrollTop = window.scrollY
  window.onscroll = function () {
    window.scrollTo({
      top: scrollTop,
      behavior: 'instant',
    })
  }
}

const handleArrowRight = (control) => {
  const nextControl = control.nextElementSibling
  if(nextControl){
    nextControl.focus()
  }
}

const handleArrowLeft = (control) => {
  const prevControl = control.previousElementSibling
  if(prevControl){
    prevControl.focus()
  }
}

const handleInput = (key, control) => {
  if(key == 'Backspace') {
    if(control.value == ''){
      handleArrowLeft(control)
    }
    else {
      control.value = ''
    }
  }
  else {
    if(control.value != ''){
      handleArrowRight(control)
    }
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
formTelephoneControls.forEach(control => {
  control.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight'){
      handleArrowRight(control)
    }
    else if(e.key == 'ArrowLeft'){
      handleArrowLeft(control)
    }
    else {
      handleInput(e.key, control)
    }
  })
  control.addEventListener('input', (e) => {
    if(!numbers.includes(e.target.value)){
      e.target.value = ''
    }
  })
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const setSendLimit = (value) => {
    const day = 24 * 60 * 60 * 1000
    const date = new Date()
    date.setTime(date.getTime() + day)
    document.cookie = `limit=${value}; expires = ${date}`
  }
  
  const cookies = document.cookie.split(';')
  const cooldownCookie = cookies.find(cookie => cookie.trim().startsWith('emailCooldown'))
  if(!cooldownCookie){
    let limitCookie = cookies.find(cookie => cookie.trim().startsWith('limit'))
    let limitValue
    if(!limitCookie){
      limitValue = 0
    }
    else {
      limitValue = +limitCookie.split('=')[1]
    }
    if(limitValue >= 3){
      //modal ze sie nie udalo, musisz odczekac 2 godziny
      const twoHours = 120 * 60 * 1000
      const date = new Date()
      date.setTime(date.getTime() + twoHours)
      document.cookie = `emailCooldown = emailCooldown; expires =  ${date}`
      document.cookie = `limit=3; expires = ${date}`
    }
    else {
      const contactServiceId = 'service_pk7b8o3'
      const contactFormId = 'template_ykytfdk'
      // eslint-disable-next-line no-undef
      emailjs.sendForm(contactServiceId, contactFormId, form)
      .then(() => {
        formBox.classList.add('hidden')
        const inputs = form.querySelectorAll('input')
        const textarea = form.querySelector('textarea')
        inputs.forEach(input => {
          input.value = ''
        })
        textarea.value = ''
        setSendLimit(++limitValue)
      })
      .catch(() => {
        //modal ze sie nie udalo, nieoczekiwany blad, sprobuj ponownie
      })
    }
  }
})

window.addEventListener('click', (e) => closeFormIfOutside(e))


