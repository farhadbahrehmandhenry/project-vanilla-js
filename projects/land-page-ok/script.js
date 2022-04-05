var toggle = document.querySelector('.toggle');
var container = document.querySelector('.container');
var nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  container.classList.toggle('open');
  nav.classList.toggle('open');
});