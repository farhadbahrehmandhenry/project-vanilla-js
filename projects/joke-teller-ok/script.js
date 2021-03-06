var jokeBtn = document.querySelector('.joke-bth');
var jokeText = document.querySelector('.joke');
var has = document.querySelectorAll('.ha');

var message = new SpeechSynthesisUtterance();
var readyToTellJoke = true;
var hasEnabledVoice = false;

message.onend = () => {
  has.forEach(ha => {
    ha.style.display = 'flex';
  });

  setTimeout(() => {
    has.forEach(ha => {
      ha.style.display = 'none';
    });

    jokeText.innerHTML = '';
    readyToTellJoke = true;
  }, 3000);
}

var getJoke = async() => {
  var response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single');
  var jokeObject = await response.json();

  return jokeObject.joke;
}

jokeBtn.addEventListener('click', async() => {
  if (readyToTellJoke) {
    readyToTellJoke = false;

    var joke = await getJoke();

    jokeText.innerText = joke;
    message.text = joke;
    speechSynthesis.speak(message);
  }
});