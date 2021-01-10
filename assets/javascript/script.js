const form = document.getElementById('email-collector')
const email = document.getElementById('email')
const messagePopUp = document.querySelector('.message')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const emailValue = email.value.trim()

  if (emailValue === '') {
    setError('Input can not be blank')
  } else if (!isEmail(emailValue)) {
    setError('Oops! Please check your email')
  } else {
    setSuccess('Check your inbox for a confirmation mail')
  }
}

function setError(message) {
  messagePopUp.innerText = message
  messagePopUp.className = 'message error'
}

function setSuccess(message) {
  messagePopUp.innerText = message
  messagePopUp.className = 'message success'
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
