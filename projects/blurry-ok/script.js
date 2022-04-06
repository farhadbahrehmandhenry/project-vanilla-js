var loadText = document.querySelector('.loading');
var bg = document.querySelector('.bg');

var load = 0;
var int = setInterval(blurring, 30);

function blurring() {
  load++;

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  loadText.innerText = `${load}%`;

  if (load > 99) clearInterval(int);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}