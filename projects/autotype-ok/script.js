var text = document.querySelector('h3');
var speedEl = document.querySelector('input');
var sentence = 'This is an auto type demo!';
var index = 0;
var speed = 1;

var type = () => {
  text.innerText = text.textContent + (sentence[index] === ' ' ? ' ' : sentence[index]);
  index++;

  if (index > sentence.length) {
    index = 0;
    text.innerText = '';
  }
}

var typeSpeed = setInterval(type, (320 - (speed * 20)));


speedEl.addEventListener('change', (e) => {
  speed = e.target.value;
  clearInterval(typeSpeed);
  typeSpeed = setInterval(type, (320 - (speed * 30)));
});
