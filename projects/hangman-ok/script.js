var wordEl = document.querySelector('.word');
var wrongLetterEl = document.querySelector('.wrong-letters');
var playAgainBtn = document.querySelector('.play');
var popup = document.querySelector('.popup-container');
var notification = document.querySelector('.notification-container');
var finalMessage = document.querySelector('.final-message');
var figureParts = document.querySelectorAll('.figure-part');

fetch('https://random-word-api.herokuapp.com/word?number=10')
  .then((data) => data.json())
  .then((words) => {
    var availableWords = [...words];
    var selectedWord =
      availableWords[Math.floor(Math.random() * availableWords.length)];
    var correctLetters = [];
    var wrongLetters = [];

    var displayWord = () => {
      var splitedSelectedWord = selectedWord.split('');

      wordEl.innerHTML = `${splitedSelectedWord
        .map((letter) => {
          return `<span class="letter">${
            correctLetters.includes(letter) ? letter : ''
          }</span>`;
        })
        .join('')}`; // because we want to have this html as string not as array

      var innerWord = wordEl.innerText.replace(/\n/g, '');

      if (innerWord === selectedWord) {
        finalMessage.innerText = 'You won!';
        popup.style.display = 'flex';
      }
    };

    displayWord();

    window.addEventListener('keydown', (e) => {
      console.log(e);

      if (e.code.includes('Key')) {
        if (!correctLetters.includes(e.key) && !wrongLetters.includes(e.key)) {
          if (selectedWord.includes(e.key)) {
            correctLetters.push(e.key);
            displayWord();
          } else if (!wrongLetters.includes(e.key)) {
            wrongLetters.push(e.key);
            wrongLetterEl.innerText = wrongLetters.join(',');
            figureParts[wrongLetters.length - 1].style.display = 'flex';

            if (wrongLetters.length === 6) {
              finalMessage.innerText = `He's dead! \n It was ${selectedWord}`;
              popup.style.display = 'flex';
            }
          }
        } else {
          notification.classList.add('show');

          setTimeout(() => {
            notification.classList.remove('show');
          }, 2000);
        }

        displayWord();
      }
    });

    playAgainBtn.addEventListener('click', () => {
      correctLetters = [];
      wrongLetters = [];
      wrongLetterEl.innerText = '';

      availableWords.splice(availableWords.indexOf(selectedWord), 1);
      selectedWord =
        availableWords[Math.floor(Math.random() * availableWords.length)];

      popup.style.display = 'none';

      figureParts.forEach((part) => {
        part.style.display = 'none';
      });

      displayWord();
    });
  });
