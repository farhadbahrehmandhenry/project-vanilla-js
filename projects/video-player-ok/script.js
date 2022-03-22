var video = document.querySelector('.video');
var play = document.querySelector('#play');
var stop = document.querySelector('#stop');
var progress = document.querySelector('#progress');
var timeStamp = document.querySelector('#time-stamp');
var container = document.querySelector('.container');
var controls = document.querySelector('.controls');

var toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

var updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-1x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-1x"></i>';
  }
};

var updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  var min = Math.floor(video.currentTime / 60);
  var sec = Math.floor(video.currentTime % 60);

  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;

  timeStamp.innerHTML = `${min}:${sec}`;
};

var stopVideo = () => {
  video.ariaCurrent = 0;
  video.pause();
};

var setVideoProgress = (e) => {
  video.currentTime = video.duration * (e.target.valueAsNumber / 100);
};

video.addEventListener('click', () => {
  toggleVideoStatus();
});

video.addEventListener('pause', () => {
  updatePlayIcon();
});

video.addEventListener('play', () => {
  updatePlayIcon();
});

video.addEventListener('timeupdate', () => {
  updateProgress();
});

play.addEventListener('click', () => {
  toggleVideoStatus();
});

stop.addEventListener('click', () => {
  stopVideo();
});

progress.addEventListener('change', (e) => {
  setVideoProgress(e);
});

container.addEventListener('mousemove', (e) => {
  var {x, y, width, height, top, bottom, left, right} = container.getBoundingClientRect();
  var {clientX, clientY} = e;
  var shouldToggle = clientX >= left && clientX <= right && clientY >= bottom - 120 && clientY <= bottom;

  if (shouldToggle) {
    if (!controls.classList.contains('show')) controls.classList.add('show');
  }
  else if (controls.classList.contains('show')) controls.classList.remove('show');
});
