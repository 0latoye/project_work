// script.js

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('.login.form .button');
    var signupButton = document.querySelector('.registration.form .button');

    loginButton.addEventListener('click', validateLoginForm);
    signupButton.addEventListener('click', validateSignupForm);
});

function validateLoginForm() {
    var email = document.querySelector('.login.form input[type="text"]').value;
    var password = document.querySelector('.login.form input[type="password"]').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password');
    } else {
        // Perform login logic here
        alert('Login successful!');
    }
}

function validateSignupForm() {
    var email = document.querySelector('.registration.form input[type="text"]').value;
    var password = document.querySelector('.registration.form input[type="password"]').value;
    var confirmPassword = document.querySelector('.registration.form input[type="password"]:last-child').value;

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please enter all fields');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        // Perform signup logic here
        alert('Signup successful!');
    }
}

