var signupBtn = document.querySelector('.signup');
var modal = document.querySelector('.modal');
var cancelBtn = document.querySelector('.cancel');
var registerBtn = document.querySelector('.register');

signupBtn.addEventListener('click', () => {
  modal.className = 'modal active';
});

cancelBtn.addEventListener('click', () => {
  modal.className = 'modal';
});

window.addEventListener('click', (e) => {
  e.target == modal ? (modal.className = 'modal') : false;
});
