var card = document.querySelector('.card');
var countEl = document.querySelector('.like h4 .count');
var time = 0;
var count = 0;

var heart = (e) => {
  var {x, y} = e.target.getBoundingClientRect();
  var position = {x: e.clientX, y: e.clientY};
  var heartEl = document.createElement('div');

  heartEl.className = 'heart-img';
  heartEl.style.left = `calc(${position.x - x}px - 1.5rem)`;
  heartEl.style.top = `calc(${position.y - y}px - 1.5rem)`;
  card.appendChild(heartEl);

  count++;
  countEl.innerHTML = count;

  setTimeout(() => heartEl.remove(), 700);
}

card.addEventListener('click', (e) => {
  if (time === 0) time = new Date().getTime();
  else {
    if (new Date().getTime() - time < 800) heart(e);
    else time = new Date().getTime();
  }
});
