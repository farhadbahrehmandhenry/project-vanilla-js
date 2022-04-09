var container = document.querySelector('.container');

var questions = [
  {q: 'Who is your hero?', a: 'My mother'},
  {q: 'If you could live anywhere, where would it be?', a: 'Shiraz'},
  {q: 'What is your biggest fear?', a: 'War'},
  {q: 'What would you change about yourself if you could?', a: 'Exercise more'},
  {q: 'What really makes you angry?', a: 'Driving my car'},
];

questions.forEach(q => {
  var questionContainer = document.createElement('div');
  var actionBtn = document.createElement('div');
  var answer = document.createElement('div');
  var question = document.createElement('div');

  questionContainer.className = 'question-container';
  actionBtn.className = 'action-button';
  answer.className = 'answer';
  question.className = 'question';
  question.innerText = q.q;
  answer.innerText = q.a;

  questionContainer.appendChild(actionBtn);
  questionContainer.appendChild(question);
  questionContainer.appendChild(answer);
  container.appendChild(questionContainer);

  actionBtn.addEventListener('click', () => {
    answer.classList.toggle('show');
    questionContainer.classList.toggle('active');
    actionBtn.classList.toggle('open');
  });
});


