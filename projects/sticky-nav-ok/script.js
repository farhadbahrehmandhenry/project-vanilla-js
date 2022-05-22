var navBar = document.querySelector('.nav');

window.addEventListener('scroll', (e) => {
  var {scrollHeight, scrollTop, clientHeight} = document.documentElement;

  console.log(scrollHeight, scrollTop, clientHeight)

  if (scrollTop > clientHeight / 2) {
    navBar.classList.add('change');
  }
  else {
    navBar.classList.remove('change');
  }
});