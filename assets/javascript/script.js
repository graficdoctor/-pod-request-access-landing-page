const form = document.getElementById('email-collector')
const email = document.getElementById('email')
const messagePopUp = document.querySelector('.message')
const emailValue = email.value.trim()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  if (emailValue === '') {
    message.classList.remove('valid')
    message.classList.add('invalid')
    message.innerHTML = 'You forgot to enter your address'
  } else if (!isEmail(emailValue)) {
    message.classList.remove('valid')
    message.classList.add('invalid')
    message.innerHTML = 'Oops, something went wrong'
  } else {
    message.classList.add('valid')
    message.classList.remove('invalid')
    message.innerHTML = 'Your email address is valid'
  }
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
