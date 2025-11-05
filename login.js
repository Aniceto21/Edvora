document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Get stored user data
    const storedUserData = localStorage.getItem('edvoraUser');
    
    if (!storedUserData) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'No account found. Please register first.';
        return;
    }
    
    const userData = JSON.parse(storedUserData);
    
    // Validate credentials
    if (userData.email === email && userData.password === password) {
        messageDiv.className = 'message success';
        messageDiv.textContent = 'Login successful! Redirecting...';
        
        // Set logged in status
        localStorage.setItem('edvoraLoggedIn', 'true');
        
        // Redirect to home page after successful login
        setTimeout(() => {
            window.location.href = 'edvora.html';
        }, 1500);
    } else {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Invalid email or password!';
    }
});
