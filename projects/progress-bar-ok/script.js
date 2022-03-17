var progressBar = document.querySelector('.progress-bar');

var count = 10;

setInterval(() => {
  progressBar.style.setProperty('--width', count);
  count += 1;

  if (count > 100) {
    clearInterval();
    count = 10;
  }
}, 100);