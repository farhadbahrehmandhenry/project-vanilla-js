var canvas = document.getElementById('canvas');
var increaseEl = document.getElementById('increase');
var decreaseEl = document.getElementById('decrease');
var clearEl = document.getElementById('clear');
var sizeEl = document.getElementById('size');
var colorEl = document.getElementById('color');
var ctx = canvas.getContext('2d');
var size = 5;
var isPressed = false;
var color = 'black';
var x, y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    var x2 = e.offsetX;
    var y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

increaseEl.addEventListener('click', () => {
  size++;
  if (size > 50) size = 50;
  sizeEl.innerText = size;
});

decreaseEl.addEventListener('click', () => {
  size--;

  if (size < 5) size = 5;
  sizeEl.innerText = size;
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color
  ctx.fillStyle = color;
  ctx.lineWidth = size*2;
  ctx.stroke();
}
