var container = document.querySelector('.container');
var text = document.querySelector('.text');

var totalTime = 7500;
var breateTime = (totalTime / 5) * 2;
var holdTime = totalTime / 5;

var breathAnimation = () => {
  text.innerText = 'In!';
  container.className = 'container shrink';

  setTimeout(() => {
    text.innerText = 'hold!';
      container.className = 'container';


    setTimeout(() => {
      text.innerText = 'Out!';
      container.className = 'container grow';

    }, holdTime);
  }, breateTime);
}

breathAnimation()

setInterval(breathAnimation, totalTime);
