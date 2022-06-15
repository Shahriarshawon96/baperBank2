
document.getElementById('submit-button').addEventListener('click', function () {
    // email value
    const inputEmail = document.getElementById('email-input');
    const givenEmail = inputEmail.value;
    // password value
    const inputPassword = document.getElementById('password-input');
    const givePassword = inputPassword.value;

    // condition
    if (givenEmail == 'shawon@log.com' && givePassword == 'nai') {
        window.location.href = 'index.html'

    }

});


