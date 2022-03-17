var messageEl = document.querySelector('.message');
var guessContainer = document.querySelector('.guess-container');
var guessedNumber = document.querySelector('.guessed-number');
var emoji = document.querySelector('.thinking');
var messageEl = document.querySelector('.message');
var playAgainBtn = document.querySelector('.play-again-btn');
var guessCountEl = document.querySelector('.guess-count');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new window.SpeechRecognition();
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;

recognition.start();

var onSpeak = (e) => {
  var message = e.results[0][0].transcript;

  guessContainer.classList.add('active');
  messageEl.classList.add('active');

  guessedNumber.innerText = message;

  var num = +message;

  if (Number.isNaN(num)) {
    messageEl.innerText = 'That is not a valid number!';
  } else if (num < 1 || num > 100) {
    messageEl.innerText = 'Number should be between 1 and 100!';
    emoji.src = './image/wrong.gif';
    return;
  } else if (num < randomNumber) {
    if (!guessCountEl.classList.contains('active')) {
      guessCountEl.classList.add('active');
    }
    messageEl.innerText = 'Go higher!';
    emoji.src = './image/up.gif';
    guessCount++;
    guessCountEl.innerText = `You guessed ${guessCount} times!`;
    return;
  } else if (num > randomNumber) {
    if (!guessCountEl.classList.contains('active')) {
      guessCountEl.classList.add('active');
    }
    messageEl.innerText = 'Go lower!';
    emoji.src = './image/down.gif';
    guessCount++;
    guessCountEl.innerText = `You guessed ${guessCount} times!`;
    return;
  } else if (num === randomNumber) {
    if (!guessCountEl.classList.contains('active')) {
      guessCountEl.classList.add('active');
    }
    messageEl.innerText = 'Congrats! You guessed it!';
    playAgainBtn.classList.add('active');
    emoji.src = './image/right.gif';
    guessCount++;
    guessCountEl.innerText = `You guessed ${guessCount} times!`;
    return;
  }
}

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());
playAgainBtn.addEventListener('click', () => window.location.reload());
