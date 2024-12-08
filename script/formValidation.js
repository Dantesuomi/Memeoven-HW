document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = document.querySelector('input[name="username"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var gender = document.querySelector('select[name="gender"]').value;
        var birthday = document.querySelector('input[name="birthday"]').value;

        var messageElement = document.getElementById('message');
        if (!username || !email || !password || !gender || !birthday) {
            messageElement.innerHTML = '<p class="alert alert-danger">Nooo, you forgot your Birthday </p>';
        } else {
            messageElement.innerHTML = '<p class="alert alert-success">Submission successful, we sold your data to CIA</p>';
            document.getElementById('signupForm').reset();
        }
    });
});