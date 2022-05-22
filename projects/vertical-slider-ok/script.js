var leftSide = document.querySelector('.left-container');
var rightSide = document.querySelector('.right-container');
var upButton = document.querySelector('.up-btn');
var downButton = document.querySelector('.down-btn');
var slidesLength = document.querySelectorAll('.right-container > div').length;

var activeSlideIndex = 0;
leftSide.style.top = `-${(slidesLength - 1) * 100}` +'vh'; 

upButton.addEventListener('click', () => {
  activeSlideIndex++;

  if (activeSlideIndex >= slidesLength) activeSlideIndex = 0;
  var {clientHeight} = document.documentElement;
  rightSide.style.transform = `translateY(-${(clientHeight * activeSlideIndex)}px)`;
  leftSide.style.transform = `translateY(${(clientHeight * activeSlideIndex)}px)`;
});

downButton.addEventListener('click', () => {
  activeSlideIndex--;

  if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  var {clientHeight} = document.documentElement;
  rightSide.style.transform = `translateY(-${(clientHeight * activeSlideIndex)}px)`;
  leftSide.style.transform = `translateY(${(clientHeight * activeSlideIndex)}px)`;
});