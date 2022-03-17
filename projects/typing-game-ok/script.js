var dificulty = document.querySelector('.difficulty-dropdown');
var start = document.querySelector('.start-btn');
var restart = document.querySelector('.restart-btn');
var remainingTime = document.querySelector('.remaining-time');
var scoreEl = document.querySelector('.score');
var typedWord = document.querySelector('.type-input');
var settings = document.querySelector('.settings');
var word = document.querySelector('.word');
var header = document.querySelector('.header');
var notification = document.querySelector('.score-notification-container');
var notificationScore = notification.querySelector('.final-score-notification');

var difficultySets = {easy: 5, medium: 4, hard: 3};
var words = [
  'thank', 'monstrous', 'print', 'copy', 'secretion', 'gate', 'bin',
  'hemisphere', 'cultivate', 'rifle', 'crystal', 'art', 'gradient',
  'valid', 'chemistry', 'other', 'heat', 'abridge', 'halt', 'exclusive'
];

var time = 10;
var randomWord;
var score = 0;

typedWord.focus();
var difficultyLevel = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

dificulty.value = difficultyLevel;
scoreEl.value = score;

var getRandomWord = () => {
  var index = Math.floor(Math.random() * 20);

  return words[index];
}

var addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

var updateScore = () => {
  scoreEl.value = score;
}

var updateTime = () => {
  remainingTime.value = `${time}s`;
  time--;

  if (time === -1) {
    removeIntervals();

    notification.classList.add('show');
    notificationScore.innerHTML = `Your final score is: ${score}`
  }
}

var removeIntervals = () => {
  var highestTimeoutId = setInterval(";");
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearInterval(i); 
  }
}

typedWord.addEventListener('input', (e) => {
  if (e.target.value === randomWord) {
    e.preventDefault();
    score++;
    typedWord.value= '';

    time += difficultySets[dificulty.value];

    addWordToDom();
    updateScore();
    updateTime();
  }
});

settings.addEventListener('click', () => {
  header.classList.toggle('visible');
});

start.addEventListener('click', () => {
  time = 10;
  score = 0;
  addWordToDom();
  removeIntervals();

  setInterval(updateTime, 1000);
});

restart.addEventListener('click', () => {
  location.reload();
});

dificulty.addEventListener('change', (e) => {
  localStorage.setItem('difficulty', e.target.value)
});
