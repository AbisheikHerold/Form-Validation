document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Implement your validation logic here
    if (fullName.length < 5) {
        alert('Full Name must be at least 5 characters long.');
    } else if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
    } else if (phone.length !== 10 || phone === '123456789') {
        alert('Please enter a valid 10-digit phone number.');
    } else if (password.length < 8 || password === 'password' || password === fullName) {
        alert('Password must be at least 8 characters long and not be "password" or your name.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        // If all the conditions are met, the form can be submitted
        alert('Form submitted successfully.');
        this.submit();
    }
});
