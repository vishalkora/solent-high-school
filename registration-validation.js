document.addEventListener('DOMContentLoaded', function () {
    // This event listener ensures that the JavaScript code is executed after the HTML content is fully loaded

    var registrationForm = document.getElementById('registrationForm');
    // Get the registration form element by its ID

    registrationForm.addEventListener('submit', function (event) {
        // Add a submit event listener to the form

        event.preventDefault();
        // Prevent the default form submission behavior

        var firstName = document.getElementById('firstName').value.trim();
        var surname = document.getElementById('surname').value.trim();
        var mobileNumber = document.getElementById('mobileNumber').value.trim();
        var genderInputs = document.querySelectorAll('input[name="gender"]');
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        var isValid = true;
        // Create a flag to track form validity, set to true by default

        if (firstName === '') {
            isValid = false;
            alert('Please enter your first name.');
            // Check if the first name is empty
        }

        if (surname === '') {
            isValid = false;
            alert('Please enter your surname.');
            // Check if the surname is empty
        }

        if (mobileNumber === '' || mobileNumber.length !== 11 || isNaN(mobileNumber)) {
            isValid = false;
            alert('Please enter a valid 11-digit mobile number.');
            // Check if the mobile number is empty, not 11 digits, or not numeric
        }

        var genderSelected = false;
        genderInputs.forEach(function (input) {
            if (input.checked) {
                genderSelected = true;
            }
        });
        if (!genderSelected) {
            isValid = false;
            alert('Please select your gender.');
            // Check if a gender option is selected
        }

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
            isValid = false;
            alert('Password must contain at least one digit, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.');
            // Check if the password meets the specified criteria using a regular expression
        }

        if (password !== confirmPassword) {
            isValid = false;
            alert('Passwords do not match.');
            // Check if the password and confirm password fields match
        }

        if (isValid) {
            registrationForm.reset();
            // Show success modal
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });
});
