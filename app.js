const mailRegExp = /^(?=.*[@.])[a-zA-Z0-9@.]+$/
const passwordRegExp = /^.{4,16}$/
const mailInput = document.querySelector('.mailInput')
const passwordInput = document.querySelector('.passwordInput')
const loginResult = document.querySelector('.loginResult')
const check = document.querySelector('.Check')

check.addEventListener('click', () => {
    if (mailRegExp.test(mailInput.value)) {
        if (passwordRegExp.test(passwordInput.value)) {
            loginResult.textContent = "Регистрация пройдена!"
        } else {
            loginResult.textContent = "Ошибка пароля!!!"
        }
    } else {
        loginResult.textContent = "Ошибка электронной почты!!!"
    }
})