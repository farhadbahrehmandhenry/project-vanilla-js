var text = document.querySelector('.text');
var strText = text.textContent;
var splitText = strText.split('');

text.textContent = '';

for (var i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let count = 0;
let timer = setInterval(() => {
  var span = text.querySelectorAll('span')[count];
  span.classList.add('fade');
  count++;

  if (count === splitText.length) {
    clearInterval(timer);

    timer = null;
  }
}, 50);
