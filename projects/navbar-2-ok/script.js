var hamburger = document.querySelector('.bars-container');
var overlay = document.querySelector('.overlay');
var navItems = document.querySelectorAll('li');

var handleClick = () => {
  hamburger.classList.toggle('change');
  overlay.classList.toggle('active');

  if (overlay.classList.contains('active')) {
    overlay.classList.add('in');
    overlay.classList.remove('out');
  } 
  else {
    overlay.classList.add('out');
    overlay.classList.remove('in');
  }

  navItems.forEach(item => {
    if (item.classList.contains('slide-in')) {
      item.classList.remove('slide-in');
      item.classList.add('slide-out');
    }
    else {
      item.classList.add('slide-in');
      item.classList.remove('slide-out');
    }
  });
}

hamburger.addEventListener('click', handleClick);
navItems.forEach(item => item.addEventListener('click', handleClick));