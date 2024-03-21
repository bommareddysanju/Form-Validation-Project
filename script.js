const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission

    // Validate for name
    const name = myForm.elements.name.value.trim();
    const nameError = document.querySelector('#name + .errorMessage');
    const nameInput = document.getElementById('name');
    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameInput.parentNode.classList.add('error');
        nameInput.parentNode.classList.remove('success');
    } else {
        nameError.textContent = '';
        nameInput.parentNode.classList.add('success');
        nameInput.parentNode.classList.remove('error');
    }

    // Validate for email
    const email = myForm.elements.email.value.trim();
    const emailError = document.querySelector('#email + .errorMessage');
    const emailInput = document.getElementById('email');
    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailInput.parentNode.classList.add('error');
        emailInput.parentNode.classList.remove('success');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.parentNode.classList.add('error');
        emailInput.parentNode.classList.remove('success');
    } else {
        emailError.textContent = '';
        emailInput.parentNode.classList.add('success');
        emailInput.parentNode.classList.remove('error');
    }

    // Validate for phone number
    const phone = myForm.elements.phone.value.trim();
    const phoneError = document.querySelector('#phone + .errorMessage');
    const phoneInput = document.getElementById('phone');
    if (phone === '') {
        phoneError.textContent = 'Phone number is required.';
        phoneInput.parentNode.classList.add('error');
        phoneInput.parentNode.classList.remove('success');
    } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        phoneInput.parentNode.classList.add('error');
        phoneInput.parentNode.classList.remove('success');
    } else {
        phoneError.textContent = '';
        phoneInput.parentNode.classList.add('success');
        phoneInput.parentNode.classList.remove('error');
    }

    // Validate password
    const password = myForm.elements.password.value.trim();
    const passwordError = document.querySelector('#password + .errorMessage');
    const passwordInput = document.getElementById('password');
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        passwordInput.parentNode.classList.add('error');
        passwordInput.parentNode.classList.remove('success');
    } else if (password.length < 8) {
        passwordError.textContent = 'Password is expected to be 8 characters.';
        passwordInput.parentNode.classList.add('error');
        passwordInput.parentNode.classList.remove('success');
    } else {
        passwordError.textContent = '';
        passwordInput.parentNode.classList.add('success');
        passwordInput.parentNode.classList.remove('error');
    }

    // Validate confirm password
    const confirmPassword = myForm.elements.confirmPassword.value.trim();
    const confirmPasswordError = document.querySelector('#confirmPassword + .errorMessage');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm Password is required.';
        confirmPasswordInput.parentNode.classList.add('error');
        confirmPasswordInput.parentNode.classList.remove('success');
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.parentNode.classList.add('error');
        confirmPasswordInput.parentNode.classList.remove('success');
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordInput.parentNode.classList.add('success');
        confirmPasswordInput.parentNode.classList.remove('error');
    }

    // Submit the form if there are no errors
    if (nameError.textContent === '' && emailError.textContent === '' && phoneError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') {
        myForm.submit();
    }
});
