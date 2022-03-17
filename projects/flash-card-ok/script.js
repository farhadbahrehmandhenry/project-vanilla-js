var addNewCardBtn = document.querySelector('.add-new-card-btn');
var addCardForm = document.querySelector('.add-card-container');
var closeCardForm = document.querySelector('.close-btn');
var addCardBtn = document.querySelector('.add-card-btn');
var questionInput = document.querySelector('.question-input');
var answerInput = document.querySelector('.answer-input');
var cardsEl = document.querySelector('.cards');
var pagination = document.querySelector('.pagination');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var paginationContainer = document.querySelector('.nevigation-container');
var card = document.querySelector('.next');
var cardContent = document.querySelector('.card-content');
var removeOneCardBtn = document.querySelector('.clear-this-cards-btn');
var removeAllCardBtn = document.querySelector('.clear-all-cards-btn');

var cards = localStorage.getItem('cards') === null ? [] : JSON.parse(localStorage.getItem('cards'));
var currentCardIndex = 0;

var renderCards = (question, answer) => {
  var cardsElements = document.querySelectorAll('.card');
  var cardEl = document.createElement('div');
  var cardElAnswer = document.createElement('div');
  var cardElQuestion = document.createElement('div');

  cardElQuestion.classList.add('card-question');
  cardElAnswer.classList.add('card-answer');

  cardElAnswer.innerText = answer;
  cardElQuestion.innerText = question;

  cardEl.appendChild(cardElQuestion);
  cardEl.appendChild(cardElAnswer);
  cardsEl.appendChild(cardEl);

  cardsElements.forEach(cardEl => cardEl.className = 'card');
  cardEl.className = 'card active';

  cardEl.addEventListener('click', () => {
    cardEl.classList.toggle('show-answer');
  });

  currentCardIndex = cards.length - 1;
  pagination.innerText = `${currentCardIndex + 1}/${cards.length}`;
  paginationContainer.classList.add('active');
}

removeOneCardBtn.addEventListener('click', () => {
  var cardsElements = document.querySelectorAll('.card');
  cardsElements.forEach(cardEl => cardEl.className = 'card');

  cards.splice(currentCardIndex - 1, 1);
  cardsEl.removeChild(cardsElements[currentCardIndex]);

  if (currentCardIndex > 0) {
    pagination.innerText = `${currentCardIndex}/${cards.length}`;
    currentCardIndex--;
  } else {
    if (cards.length === 0) {
      paginationContainer.classList.remove('active');
    } else {
      pagination.innerText = `${currentCardIndex + 1}/${cards.length}`;
    }
  }

  var cardsElements = document.querySelectorAll('.card');
  cardsElements.forEach((cardEl, index) => index === currentCardIndex ? cardEl.className = 'card active': cardEl.className = 'card');

  localStorage.setItem('cards', JSON.stringify(cards));

  if (cards.length === 0) {
    removeOneCardBtn.disabled = true;
    removeAllCardBtn.disabled = true;
  }
});

next.addEventListener('click', () => {
  if (currentCardIndex < cards.length- 1) {
    var cardsElements = document.querySelectorAll('.card');

    cardsElements.forEach(cardEl => cardEl.className = 'card');

    currentCardIndex++;
    pagination.innerText = `${currentCardIndex + 1}/${cards.length}`;

    cardsElements[currentCardIndex].className = 'card active';
  }
});

prev.addEventListener('click', () => {
  if (currentCardIndex > 0) {
    var cardsElements = document.querySelectorAll('.card');

    cardsElements.forEach(cardEl => cardEl.className = 'card');

    currentCardIndex--;
    pagination.innerText = `${currentCardIndex + 1}/${cards.length}`;

    cardsElements[currentCardIndex].className = 'card active';
  }
});

addNewCardBtn.addEventListener('click', () => {
  addCardForm.classList.toggle('active');
});

addCardBtn.addEventListener('click', () => {
  var question = questionInput.value;
  var answer = answerInput.value;

  if (!question.trim() || !answer.trim()) {
    alert('Question and Answer are required')
  } else {
    cards.push({question, answer});

    localStorage.setItem('cards', JSON.stringify(cards));

    removeOneCardBtn.disabled = false;
    removeAllCardBtn.disabled = false;

    renderCards(question, answer);
  }

  questionInput.value = '';
  answerInput.value = '';
});

closeCardForm.addEventListener('click', () => {
  addCardForm.classList.remove('active');
});

removeAllCardBtn.addEventListener('click', () => {
  cards = [];
  localStorage.setItem('cards', JSON.stringify(cards));

  while (cardsEl.firstChild) {
    cardsEl.removeChild(cardsEl.firstChild);
  }

  removeOneCardBtn.disabled = true;
  removeAllCardBtn.disabled = true;

  paginationContainer.classList.remove('active');
});

cards.forEach((card) => {
  renderCards(card.question, card.answer);
});

currentCardIndex = 0;
var cardsElements = document.querySelectorAll('.card');

if (cardsElements.length > 0) {
  cardsElements.forEach((cardEl, index) => {
    cardEl.className = 'card';

    if (index === 0) {
      cardEl.className = 'card active';
    }
  });

  pagination.innerText = `${1}/${cards.length}`;

  removeOneCardBtn.disabled = false;
  removeAllCardBtn.disabled = false;
}
