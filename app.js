var loginButton = document.querySelector('.loginButton');
var signUpButton = document.querySelector('.signUpButton');
var overLay = document.querySelector('.overLay')
var loginModal = document.querySelector('.LoginModal')
var signUpModal = document.querySelector('.SignUpModal')
var Close = document.querySelector('.close')
var SClose = document.querySelector('.Sclose')
var body = document.querySelector('body')


Close.addEventListener('click', () => {
    loginModal.classList.add('hidden')
    overLay.classList.add('hidden')
})
SClose.addEventListener('click', () => {
    signUpModal.classList.add('hidden')
    overLay.classList.add('hidden')
})

loginButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden')
    overLay.classList.remove('hidden')
})
signUpButton.addEventListener('click', () => {
    signUpModal.classList.remove('hidden')
    overLay.classList.remove('hidden')
})
body.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.key === "Enter") {
        signUpModal.classList.add('hidden')
        overLay.classList.add('hidden')
        loginModal.classList.add('hidden')
    }
})