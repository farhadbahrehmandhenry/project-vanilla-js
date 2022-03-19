var toggleSwitch = document.querySelector('input[type="checkbox"]');
var nav = document.querySelector('nav');
var toggleIcon = document.querySelector('.toggle-icon');
var image1 = document.querySelector('#image1');
var image2 = document.querySelector('#image2');
var image3 = document.querySelector('#image3');
var textBox = document.querySelector('.text-box');

var mode = localStorage.getItem('mode') === null ? 'light' : localStorage.getItem('mode');

var replaceImages = (mode) => {
  image1.src = `image/one-${mode}.svg`;
  image2.src = `image/two-${mode}.svg`;
  image3.src = `image/three-${mode}.svg`;
}

var switchDarkLightMode = (isLight) => {
  nav.style.backgroundColor = isLight ? 'rgba(255, 255, 255, 0.4)' :'rgba(0, 0, 0, 0.4)';
  textBox.style.backgroundColor = isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)';

  toggleIcon.children[0].innerText = isLight ? 'Light Mode' : 'Dark Mode';

  isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

  replaceImages(isLight ? 'light' : 'dark');
  localStorage.setItem('mode', isLight ? 'light' : 'dark');
}

toggleSwitch.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    switchDarkLightMode(false);
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    switchDarkLightMode(true)
  }
});

document.documentElement.setAttribute('data-theme', mode);
