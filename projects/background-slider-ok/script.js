var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var slides = document.querySelectorAll('.slide');
var index = 0

document.body.style.backgroundImage = slides[index].style.backgroundImage;

nextBtn.addEventListener('click', () => {
  if (index === 4) index = -1;

  index++;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  document.body.style.backgroundImage = slides[index].style.backgroundImage;
});

prevBtn.addEventListener('click', () => {
  if (index === 0) index = 5;

  index--;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  document.body.style.backgroundImage = slides[index].style.backgroundImage;
});