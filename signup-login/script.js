// document.addEventListener('DOMContentLoaded', function () {
//     var loginButton = document.querySelector('.login.form .button');
//     var signupButton = document.querySelector('.registration.form .button');

//     loginButton.addEventListener('click', validateLoginForm);
//     signupButton.addEventListener('click', validateSignupForm);
// });

// function validateLoginForm(event) {
//     var email = document.querySelector('.login.form input[type="text"]').value;
//     var password = document.querySelector('.login.form input[type="password"]').value;

//     if (email.trim() === '' || password.trim() === '') {
//         alert('Please enter both email and password');
//         event.preventDefault(); // Prevent form submission
//     } else {
//         // Perform login logic here
//         alert('Login successful!');
//     }
// }

// function validateSignupForm(event) {
//     var email = document.querySelector('.registration.form input[type="text"]').value;
//     var password = document.querySelector('.registration.form input[type="password"]').value;
//     var confirmPassword = document.querySelector('.registration.form input[type="password"]:last-child').value;

//     if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
//         alert('Please enter all fields');
//         event.preventDefault(); // Prevent form submission
//     } else if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         event.preventDefault(); // Prevent form submission
//     } else {
//         // Perform signup logic here
//         alert('Signup successful!');
//     }
// }
document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('.login.form .button');
    var signupButton = document.querySelector('.registration.form .button');

    loginButton.addEventListener('click', validateLoginForm);
    signupButton.addEventListener('click', validateSignupForm);

    // Check if user is logged in and redirect to dashboard
    checkLoggedInUser();
});

function checkLoggedInUser() {
    var userEmail = localStorage.getItem('userEmail');

    // if (userEmail) {
    //     window.location.href = '../user_dashboard/index.html'; // Redirect to the dashboard page
    // }
}

function validateLoginForm(event) {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password');
        event.preventDefault(); // Prevent form submission
    } else {
        // Perform login logic here
        localStorage.setItem('userEmail', email);
        alert('Login successful!');
        // window.location.href = '../user_dashboard/index.html'; // Redirect to the dashboard page
        window.location.href = '../user_dashboard/index.html'; 
    }
}

function validateSignupForm(event) {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please enter all fields');
        event.preventDefault(); // Prevent form submission
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault(); // Prevent form submission
    } else {
        // Perform signup logic here
        localStorage.setItem('userEmail', email);
        alert('Signup successful!');
        // window.location.href = '../user_dashboard/index.html'; // Redirect to the dashboard page
        // window.location.href = '../user_dashboard/index.html'; 
    }
}