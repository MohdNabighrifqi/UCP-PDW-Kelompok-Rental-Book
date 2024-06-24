// JavaScript for Login page

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    // Get values from form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    // Example: Validate form fields
    if (email && password) {
        // Example: Perform AJAX request or other actions
        alert(`Submitting login form with Email: ${email} and Password: ${password}`);
    } else {
        alert('Please fill in all fields.');
    }
}

// Add event listener to form submit button
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', handleSubmit);
});
