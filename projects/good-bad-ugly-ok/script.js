var good = document.getElementById('good');
var bad = document.getElementById('bad');
var ugly = document.getElementById('ugly');

good.addEventListener('click', () => {
  if (bad.checked) bad.checked = false;
});

bad.addEventListener('click', () => {
  if (good.checked) good.checked = false;
});
