// Validate the registration form
function validateRegistrationForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorDiv = document.getElementById('error');
  
    if (!emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
      errorDiv.textContent = 'All fields are required.';
      return false;
    }
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorDiv.textContent = 'Passwords do not match.';
      return false;
    }
  
    return true;
  }
  
  // Validate the login form
  function validateLoginForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error');
  
    if (!emailInput.value || !passwordInput.value) {
      errorDiv.textContent = 'All fields are required.';
      return false;
    }
  
    return true;
  }
  