// eslint-disable-next-line no-undef
emailjs.init('Hhpvi3dgfNV-eaXKW')

const btn = document.querySelector('.buttoners')
const cross = document.querySelector('.cross')
const formBox = document.querySelector('.form-box')
const notifications = document.querySelector('.notifications')
const notificationMessages = {
  cooldown: 'Błąd podczas wysyłania maila.<br>Osiągnięto limit maili wynoszący: <span class="highlight">3</span>.<br>Spróbuj 24h po wysłaniu ostatniego maila.',
  error: 'Błąd podczas wysyłania maila.<br>Spróbuj ponownie później.',
  success: ' E-mail pomyślnie wysłano.<br>Liczba maili możliwych do wysłania<br>w ciągu następnych 24h: <span class="highlight"></span>.'
}
const opennedForm = formBox.querySelector('.open-form-inner')
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
    formBox.setAttribute('aria-hidden', 'true')
    enableScroll()
  }
}

const resetForm = () => {
  const inputs = form.querySelectorAll('input')
  const textarea = form.querySelector('textarea')
  inputs.forEach(input => {
    input.value = ''
  })
  textarea.value = ''
}

const createNotification = (isSuccess, message) => {
  const notification = document.createElement('div')
  notification.setAttribute('data-success', isSuccess)
    const p = document.createElement('p')
    p.innerHTML = message
    notification.append(p)
    if(message == notificationMessages.success){
      const cookies = document.cookie.split(';')
      const limitCookie = cookies.find(cookie => cookie.trim().startsWith('limit'))
      const limitValue = 3 - +limitCookie.split('=')[1]
      const highlightSpan = p.querySelector('.highlight')
      highlightSpan.append(limitValue)
    }
  notification.classList.add('notification')
  notifications.append(notification)
  setTimeout(() => {
    notification.classList.add('shown')
    setTimeout(() => {
      notification.classList.remove('shown')
      setTimeout(() => {
        notification.remove()
      }, 500)
    }, 5000)
  }, 100)
}

btn.addEventListener('click', function () {
  disableScroll()
	formBox.setAttribute('aria-hidden', 'false')
})
cross.addEventListener('click', function () {
  enableScroll()
	formBox.setAttribute('aria-hidden', 'true')
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
      const twoHours = 120 * 60 * 1000
      const date = new Date()
      date.setTime(date.getTime() + twoHours)
      document.cookie = `emailCooldown = emailCooldown; expires =  ${date}`
      document.cookie = `limit=3; expires = ${date}`
      resetForm()
      formBox.setAttribute('aria-hidden', 'true')
      enableScroll()
      createNotification('false', notificationMessages.cooldown)
    }
    else {
      const contactServiceId = 'service_pk7b8o3'
      const contactFormId = 'template_ykytfdk'
      // eslint-disable-next-line no-undef
      emailjs.sendForm(contactServiceId, contactFormId, form)
      .then(() => {
        formBox.setAttribute('aria-hidden', 'true')
        enableScroll()
        resetForm()
        setSendLimit(++limitValue)
        createNotification('true', notificationMessages.success)
      })
      .catch(() => {
        createNotification('false', notificationMessages.error)
      })
    }
  }
  else {
    formBox.classList.add('hidden')
    enableScroll()
    createNotification('false', notificationMessages.cooldown)
  }
})

window.addEventListener('click', (e) => closeFormIfOutside(e))


