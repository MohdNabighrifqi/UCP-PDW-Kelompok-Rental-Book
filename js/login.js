// login.js
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    // Simple email validation
    if (email === 'admin@net.co.id') {
        if (password === '123') { // Replace 'adminpassword' with the actual admin password
            // Set cookie for logged-in admin
            document.cookie = "user=admin; path=/";
            // Redirect to admin dashboard
            window.location.href = 'admin_dashboard.html';
        } else {
            alert('Email Address atau Password salah, harap coba lagi lur');
        }
    } else {
        // Replace this part with the actual user validation logic
        if (email !== '' && password !== '') {
            // For other users, redirect to index.html
            document.cookie = `user=${email}; path=/`;
            window.location.href = 'index.html';
        } else {
            alert('Email Address atau Password salah, harap coba lagi lur');
        }
    }
    
    return false; // Prevent form submission
}
