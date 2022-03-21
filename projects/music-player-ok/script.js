var cover = document.querySelector('.cover');
var musicContainer = document.querySelector('.music-container');
var musicPlayer = document.querySelector('.music-player');
var navigation = document.querySelector('.navigation');
var prev = document.querySelector('.prev-btn');
var play = document.querySelector('.play-btn');
var stop = document.querySelector('.stop-btn');
var next = document.querySelector('.next-btn');
var audio = document.querySelector('.audio');
var progressContainer = document.querySelector('.progress-container');
var progress = document.querySelector('.progress');
var musicTitle = document.querySelector('.music-title');
var totalTime = document.querySelector('.total-time');
var currentTimeEl = document.querySelector('.current-time');

// change button's border's color on click
// add stop button 
// reset animation on cover click 
// transition to right 
// background color

var audios = [
  {imgSrc: './images/dust.jpeg', src: './audio/another-one-bites-the-dust.mp3', name: 'Another One Bites the Dust'},
  {imgSrc: './images/bad.png', src: './audio/bad.mp3', name: 'The Bad'},
  {imgSrc: './images/bohemian.png', src: './audio/bohemian.mp3', name: 'Bohemian Rhapsody'},
  {imgSrc: './images/dirty-diana.png', src: './audio/dirty-diana.mp3', name: 'Dirty Diana'},
];

var currentIndex = 0;
var pausedTime = 0;

audio.src = audios[0].src;

cover.addEventListener('click', () => {
  cover.classList.toggle('visible');
  musicContainer.classList.toggle('visible');
  musicPlayer.classList.toggle('visible');
  prev.classList.toggle('visible');
  play.classList.toggle('visible');
  next.classList.toggle('visible');
  stop.classList.toggle('visible');

  setTimeout(() => {
    if (cover.classList.contains('visible')) {
      cover.src = `${audios[currentIndex].imgSrc}`;
      musicTitle.innerText = audios[currentIndex].name;

      totalTime.innerText = getTime(audio.duration);
    }
    else {
      cover.src = './images/cover.svg';
    }
  }, 2500);
});

play.addEventListener('click', () => {
  playAudio();
});

audio.addEventListener('timeupdate', (e) => {
  var {duration, currentTime} = e.srcElement;
  var width = progressContainer.clientWidth;
  var progressUnit = (width * currentTime) /duration;

  progress.style.width = `${progressUnit}px`;

  totalTime.innerText = duration !== NaN ? getTime(duration) : '00:00';
  currentTimeEl.innerText = duration !== NaN ? getTime(currentTime) : '00:00';

  if (currentTime === duration) nextAudio();
});

next.addEventListener('click', () => {
  nextAudio();
});

prev.addEventListener('click', () => {
  prevAudio();
});

progressContainer.addEventListener('click', (e) => {
  var width = progressContainer.clientWidth;
  var {offsetX} = e;
  var {duration, currentTime} = audio;

  audio.currentTime = (duration * offsetX) / width;
});

var playAudio = () => {
  if (musicPlayer.classList.contains('play')) {
    musicPlayer.classList.remove('play');
    play.querySelector('img').src = './icons/play.svg';

    audio.pause();
    pausedTime = audio.currentTime;
  }
  else {
    musicPlayer.classList.add('play');
    play.querySelector('img').src = './icons/pause.svg';

    audio.src = `${audios[currentIndex].src}`

    if (pausedTime !== 0) {
      audio.currentTime = pausedTime;
      audio.play();
    } 
    else {
      audio.play();
    }
  }
}

var nextAudio = () => {
  progress.style.width = 0;
  pausedTime = 0;

  if (currentIndex < audios.length - 1) {
    currentIndex++;
  }
  else {
    currentIndex = 0;
  }

  cover.src = audios[currentIndex].imgSrc;
  audio.src = audios[currentIndex].src;
  musicTitle.innerText = audios[currentIndex].name;

  setTimeout(() => {
    totalTime.innerText = audio.duration !== NaN ? getTime(audio.duration) : '00:00';
  }, 200);

  if (musicPlayer.classList.contains('play')) {
    audio.play();
  }
}

var prevAudio = () => {
  progress.style.width = 0;
  pausedTime = 0;
  
  if (currentIndex > 0) {
    currentIndex--;
  }
  else {
    currentIndex = audios.length - 1;
  }

  cover.src = `${audios[currentIndex].imgSrc}`;
  audio.src = `${audios[currentIndex].src}`;
  musicTitle.innerText = audios[currentIndex].name;

  setTimeout(() => {
    totalTime.innerText = audio.duration !== NaN ? getTime(audio.duration) : '00:00';
  }, 200);

  if (musicPlayer.classList.contains('play')) {
    audio.play();
  }
}

var getTime = (time) => {
  var sec = Math.floor(time % 60);
  var min = Math.floor(time / 60);
  var secString = sec <= 9 ? `0${sec}` : sec;
  var minString = min <= 9 ? `0${min}` : min;

  return `${minString}:${secString}` === 'NaN:NaN' ? '00:00' : `${minString}:${secString}`;
}