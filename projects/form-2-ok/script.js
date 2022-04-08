var emailInput = document.querySelector('.email');
var emailLabel = document.querySelectorAll('.email-label span');
var passwordInput = document.querySelector('.password');
var passwordLabel = document.querySelectorAll('.password-label span');

emailInput.addEventListener('focus', () => {
  if (emailInput.value === '') {
    emailLabel.forEach(label => label.classList.add('active'));
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value === '') {
    emailLabel.forEach(label => label.classList.remove('active'));
  }
});

passwordInput.addEventListener('focus', () => {
  if (passwordInput.value === '') {
    passwordLabel.forEach(label => label.classList.add('active'));
  }
});

passwordInput.addEventListener('blur', () => {
  if (passwordInput.value === '') {
    passwordLabel.forEach(label => label.classList.remove('active'));
  }
});