document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');
    
    // Clear previous messages
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    
    // Validate passwords match
    if (password !== confirmPassword) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Passwords do not match!';
        return;
    }
    
    // Validate password length
    if (password.length < 6) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Password must be at least 6 characters long!';
        return;
    }
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    
    // Store user data in localStorage
    const userData = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
        registeredAt: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('edvoraUser', JSON.stringify(userData));
    localStorage.setItem('edvoraLoggedIn', 'true');
    
    // Prepare email content
    const emailBody = `New User Registration on Edvora:
    
First Name: ${firstName}
Middle Name: ${middleName || 'N/A'}
Last Name: ${lastName}
Email: ${email}
Registration Date: ${new Date().toLocaleString()}

---
This is an automated email from Edvora registration system.`;
    
    // Send email using FormSubmit (free service, no backend needed)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('firstName', firstName);
    formData.append('middleName', middleName);
    formData.append('lastName', lastName);
    formData.append('_subject', 'New Edvora User Registration');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    
    messageDiv.className = 'message success';
    messageDiv.textContent = 'Registration successful! Redirecting...';
    
    // Send email to your address
    fetch('https://formsubmit.co/anicetocunha21@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log('Email sent successfully');
    })
    .catch(error => {
        console.error('Email sending failed:', error);
        // Still allow registration even if email fails
    });
    
    // Redirect to home page after 2 seconds
    setTimeout(() => {
        window.location.href = 'edvora.html';
    }, 2000);
});
