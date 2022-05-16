var button = document.querySelector('.button');

button.addEventListener('click', (e) => {
  var {x, y} = button.getBoundingClientRect();
  var bubble = document.createElement('div');
  bubble.style.backgroundColor = 'blue';
  bubble.style.width = '1px';
  bubble.style.height = '1px';
  bubble.style.borderRadius = '50%';
  bubble.style.animation = 'scaleBubble 1s 0.3s ease-out';
  bubble.style.position = 'absolute';
  bubble.style.zIndex = '2';
  bubble.style.left = `${e.clientX - x}px`;
  bubble.style.top = `${e.clientY - y}px`;

  button.appendChild(bubble);
  setTimeout(() => bubble.remove(), 1300);
});