var actionButtons = document.querySelectorAll('.you-container .actions div');
var actionImg = document.querySelector('.action img');
var actionEl = document.querySelector('.action');
var youScoresEl = document.querySelector('.you-scores');
var robotScoresEl = document.querySelector('.robot-scores');

var actions = [
  {name: 'rock', image: './image/rock.png'},
  {name: 'paper', image: './image/paper.png'},
  {name: 'scissors', image: './image/scissors.png'}
];

var updateScore = (element) => {
  var score = document.createElement('div');

  score.className = 'score';

  element.appendChild(score);
}

var clearScores = () => {
  while (robotScoresEl.firstChild) {
    robotScoresEl.removeChild(robotScoresEl.firstChild);
  }
  while (youScoresEl.firstChild) {
    youScoresEl.removeChild(youScoresEl.firstChild);
  }

  actionImg.src = './image/robot.png';
}

actionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!Array.from(actionButtons).some(btn => btn.className.includes('selected'))) {
      btn.classList.add('selected');

      var btnName = btn.className.split(' ')[0];
      var randomIndex = Math.floor(Math.random() * 3);
      var action = actions[randomIndex];
      var robotScores = 
        (action.name === 'rock' && btnName === 'scissors') || 
        (action.name === 'scissors' && btnName === 'paper') || 
        (action.name === 'paper' && btnName === 'rock');

      actionImg.src = action.image;
      actionEl.classList.add('selected');

      if (btnName === action.name) result = 'it\'s a tie';
      else if (robotScores) updateScore(robotScoresEl);
      else updateScore(youScoresEl);
    }

    setTimeout(() => {
      btn.classList.remove('selected');
      actionEl.classList.remove('selected');
      actionImg.src = './image/robot.png';
    }, 1000);

    setTimeout(() => {
      if (Array.from(document.querySelectorAll('.robot-scores .score')).length === 5) {
        alert('Robot wins!');
        clearScores();
      } 
      else if (Array.from(document.querySelectorAll('.you-scores .score')).length === 5) {
        alert('You win!');
        clearScores();
      }
    }, 300);
  });
});
