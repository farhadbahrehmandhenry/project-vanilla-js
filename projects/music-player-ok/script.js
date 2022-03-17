var cover = document.querySelector('.cover');
var musicContainer = document.querySelector('.music-container');
var musicPlayer = document.querySelector('.music-player');
var navigation = document.querySelector('.navigation');
var prev = document.querySelector('.prev-btn');
var play = document.querySelector('.play-btn');
var next = document.querySelector('.next-btn');
var audio = document.querySelector('.audio');
var progressContainer = document.querySelector('.progress-container');
var progress = document.querySelector('.progress');

// add time
// add song title
// change button's bordeer's color on click
// add stop button 
// reset animation on cover click 

var audios = [
  {imgSrc: './images/dust.jpeg', src: './audio/another-one-bites-the-dust.mp3', name: 'Another One Bites the Dust'},
  {imgSrc: './images/bad.png', src: './audio/bad.mp3', name: 'The Bad'},
  {imgSrc: './images/bohemian.png', src: './audio/bohemian.mp3', name: 'Bohemian Rhapsody'},
  {imgSrc: './images/dirty-diana.png', src: './audio/dirty-diana.mp3', name: 'Dirty Diana'},
];

var currentIndex = 0;

cover.addEventListener('click', () => {
  cover.classList.toggle('visible');
  musicContainer.classList.toggle('visible');
  musicPlayer.classList.toggle('visible');
  prev.classList.toggle('visible');
  play.classList.toggle('visible');
  next.classList.toggle('visible');

  setTimeout(() => {
    if (cover.classList.contains('visible')) {
      cover.src = `${audios[currentIndex].imgSrc}`;
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
});

next.addEventListener('click', () => {
  nextAudio();
});

prev.addEventListener('click', () => {
  progress.style.width = 0;

  if (currentIndex > 0) {
    currentIndex--;
  }
  else {
    currentIndex = audios.length - 1;
  }

  cover.src = `${audios[currentIndex].imgSrc}`;
  audio.src = `${audios[currentIndex].src}`;

  if (musicPlayer.classList.contains('play')) {
    audio.play();
  }
});

progressContainer.addEventListener('click', (e) => {
  var width = progressContainer.clientWidth;
  var {offsetX} = e;
  var {duration, currentTime} = audio;

  audio.currentTime = (duration * offsetX) / width;

  if (currentTime === duration) {
    nextAudio();
  }
});

var playAudio = () => {
  if (musicPlayer.classList.contains('play')) {
    musicPlayer.classList.remove('play');
    play.querySelector('img').src = './icons/play.svg';

    audio.pause();
  }
  else {
    musicPlayer.classList.add('play');
    play.querySelector('img').src = './icons/pause.svg';

    audio.src = `${audios[currentIndex].src}`
    audio.play();
  }
}

var nextAudio = () => {
  progress.style.width = 0;

  if (currentIndex < audios.length) {
    currentIndex++;
  }
  else {
    currentIndex = 0;
  }

  cover.src = `${audios[currentIndex].imgSrc}`;
  audio.src = `${audios[currentIndex].src}`;

  if (musicPlayer.classList.contains('play')) {
    audio.play();
  }
}