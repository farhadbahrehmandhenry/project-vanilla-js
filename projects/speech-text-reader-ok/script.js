var customTextboxBtn = document.querySelector('.custom-box-btn');
var textContainer = document.querySelector('.text-container ');
var popupContainer = document.querySelector('.popup-container');
var popupCloseBtn = document.querySelector('.close-btn');
var voiceDropdown = document.querySelector('.voice-dropdown');
var readBtn = document.querySelector('.read-btn');
var textsContainer = document.querySelector('.texts-container');
var textbox = document.querySelector('.custum-textbox');

var texts = [
  {text: "I'm Hungry", image: "./image/hungry.jpg"},
  {text: "I'm Thirsty", image: "./image/thirsty.jpg"},
  {text: "I'm Tired", image: "./image/tired.jpg"},
  {text: "I'm Hurt", image: "./image/hurt.jpg"},
  {text: "I'm Happy", image: "./image/happy.jpg"},
  {text: "I'm Angry", image: "./image/angry.jpg"},
  {text: "I'm Sad", image: "./image/sad.jpg"},
  {text: "I'm Scared", image: "./image/scared.jpg"},
  {text: "I want to go outside", image: "./image/outside.jpg"},
  {text: "I want to go home", image: "./image/home.jpg"},
  {text: "I want to go to school", image: "./image/school.jpg"},
  {text: "I want to go to grandma", image: "./image/grandma.jpg"},
];

var voices = [];

function getVoices() {
  setTimeout(() => {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
      const option = document.createElement('option');
  
      option.value = voice.name;
      option.innerText = `${voice.name} ${voice.lang}`;
  
      voiceDropdown.appendChild(option);
    });
  }, 300);
}

var message = new SpeechSynthesisUtterance();

texts.forEach(text => {
  var textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  textContainer.innerHTML = `
    <img class="image" src=${text.image} alt="loadig...">
    <div class="text">${text.text}</div>
  `;

  textContainer.addEventListener('click', () => {
    message.text = text.text;
    speechSynthesis.speak(message)
    textContainer.classList.add('active');

    setTimeout(() => textContainer.classList.remove('active'), 800);
  });

  textsContainer.appendChild(textContainer);
});

customTextboxBtn.addEventListener('click', () => {
  popupContainer.classList.add('show');

  getVoices();
});

popupCloseBtn.addEventListener('click', () => {
  popupContainer.classList.remove('show');
});

voiceDropdown.addEventListener('change', (e) => {
  message.voice = voices.find(voice => voice.name === e.target.value);
});

readBtn.addEventListener('click', () => {
  if (textbox.value) {
    message.text = textbox.value;
    speechSynthesis.speak(message);
  }
});

speechSynthesis.addEventListener('voiceschanged', () => {
  getVoices();
});
