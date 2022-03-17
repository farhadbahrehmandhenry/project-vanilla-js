var parallex = (element, distance, speed) => {
  document.querySelector(element).style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', (e) => {
  if (document.querySelector('.mj-right').getBoundingClientRect().top > 0) {
    parallex('.mj-right', window.scrollY, 0.3);
    parallex('.mj-left', window.scrollY, 0.73);
    parallex('.mj-one', window.scrollY, 1.7);
    parallex('.mj-two', window.scrollY, 1.6);
    parallex('.mj-three', window.scrollY, 1.2);
    parallex('.mj-four', window.scrollY, -1.3);
  
    var mainText = document.querySelector('.title');
  
    console.log((window.innerHeight), window.scrollY, document.querySelector('.mj-left').getBoundingClientRect())
    mainText.style.opacity = Math.abs(window.scrollY / 1000 - 1);
  }
});
