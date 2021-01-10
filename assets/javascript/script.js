const form = document.getElementById('email-collector')
const email = document.getElementById('email')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const emailValue = email.value.trim()

  function setError(message) {
    errorMessage.innerText = message
    errorMessage.classList.add('error-message')
  }

  if (emailValue === '') {
    setError('Input can not be blank')
  } else if (!isEmail(emailValue)) {
    setError('Oops! Please check your email')
  }
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
