const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const confirmpasswordInput = document.getElementById('confirmpassword');
const toggleconfirmPassword = document.getElementById('toggleconfirmPassword');
const confirmpassword = document.getElementById('confirmpassword');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById("password_error");
const confirmpassword_error = document.getElementById("confirmpassword_error");
const confirmpassword_match = document.getElementById("confirmpassword_match");
const popup = document.querySelector('.popup');
const okButton = popup.querySelector('button');

let isToggleClicked = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isToggleClicked) {
        isToggleClicked = false;
        return;
    }

    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (name.value === '' || name.value == null) {
        name_error.innerHTML = "Name is required";
        name_error.style.color = "red";
        isValid = false;
    } else {
        name_error.innerHTML = '';
    }

    if (!email.value.match(email_check)) {
        email_error.innerHTML = "Valid Email is required";
        email_error.style.color = "red";
        isValid = false;
    } else {
        email_error.innerHTML = '';
    }

    if (password.value === '' || password.value == null) {
        password_error.innerHTML = "Password is required";
        password_error.style.color = "red";
        isValid = false;
    } else {
        password_error.innerHTML = '';
    }

    if (confirmpassword.value === '' || confirmpassword.value == null) {
        confirmpassword_error.innerHTML = "Confirm Password is required";
        confirmpassword_error.style.color = "red";
        isValid = false;
    } else if (password.value !== confirmpassword.value) {
        confirmpassword_match.innerHTML = "Passwords don't match";
        confirmpassword_match.style.color = "red";
        isValid = false;
    } else {
        confirmpassword_error.innerHTML = '';
        confirmpassword_match.innerHTML = "Passwords match";
        confirmpassword_match.style.color = "green";
    }

    if (isValid) {
        popup.querySelector('p').textContent = "THANK YOU. Your details have been submitted.";
        popup.style.display = 'block';
    }
});

togglePassword.addEventListener('click', (e) => {
    isToggleClicked = true;
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
    e.stopPropagation();
});

toggleconfirmPassword.addEventListener('click', (e) => {
    isToggleClicked = true;
    const isConfirmPassword = confirmpasswordInput.type === 'password';
    confirmpasswordInput.type = isConfirmPassword ? 'text' : 'password';
    toggleconfirmPassword.textContent = isConfirmPassword ? 'Hide' : 'Show';
    e.stopPropagation();
});

okButton.addEventListener('click', () => {
    popup.style.display = 'none';
    form.reset();
    name_error.innerHTML = '';
    email_error.innerHTML = '';
    password_error.innerHTML = '';
    confirmpassword_error.innerHTML = '';
    confirmpassword_match.innerHTML = '';
});

popup.style.display = 'none';
