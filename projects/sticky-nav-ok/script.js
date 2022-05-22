var navBar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  var {scrollTop, clientHeight} = document.documentElement;

  if (scrollTop > clientHeight / 2) navBar.classList.add('change');
  else navBar.classList.remove('change');
});