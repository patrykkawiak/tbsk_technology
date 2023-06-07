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
const formControls = form.querySelectorAll('.form-controls')
function handleBackspaceOnFormControls(e, index) {
	const input = e.target
	input.value = ''
  console.log(index);
  if(index === 0){
    return
  }
  const prevControl = formControls[index-1]
  prevControl.focus()
}


function handleArrowLeftOnFormControls(index) {
	if(index === 0) {
    return
  }
  const prevControl = formControls[index-1]
  prevControl.focus()
}

function handleArrowRightOnFormControls(index) {
	if(index === formControls.length-1) {
    return
  }
  const nextControl = formControls[index+1]
  nextControl.focus()
}

formControls.forEach((control, index) => {
  control.addEventListener('keyup', e => {
    if (e.key === 'Backspace') {
      handleBackspaceOnFormControls(e, index)
    }
    else if (e.key === 'ArrowRight') {
      handleArrowRightOnFormControls(index)
    }
    else if (e.key === 'ArrowLeft') {
      handleArrowLeftOnFormControls(index)
    }
  })
  control.addEventListener('input', () => {
    if (control.hasFocus()) {
      if (control.value != '') {
        handleArrowRightOnFormControls(index)
      }
    }
  })
})
