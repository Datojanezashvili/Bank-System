// page 1 DOM code
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const buttonInput = document.getElementById('button-input')

// code that will go to second page if email & password field is filled

buttonInput.addEventListener('click', () => {
    if(emailInput.value && passwordInput.value) {
        window.open('index-page-2.html')
    } else {
        alert('There is no input to go to second page')
    }
})

console.log(buttonInput);