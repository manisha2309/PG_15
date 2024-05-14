//Get references to the DOM elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listener to the login form
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform form validation
    if (validateEmail(emailInput) && validatePassword(passwordInput)) {
        // If both email and password are valid, proceed to the next page
        window.location.href = "address.html";
        // Save the login address entered
        saveLoginAddress(emailInput.value);
    }
});

// Function to validate email
function validateEmail(emailInput) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailInput.value.match(mailformat)) {
        return true;
    } else {
        alert("Invalid email address.");
        emailInput.focus();
        return false;
    }
}

// Function to validate password
function validatePassword(passwordInput) {
    if (passwordInput.value.trim() === "") {
        alert("Password cannot be empty.");
        passwordInput.focus();
        return false;
    }
    return true;
}

// Function to save the login address entered
function saveLoginAddress(email) {
    // Save the email address to localStorage for later use
    localStorage.setItem('loginEmail', email);
}


