var contents = document.querySelectorAll('.content');
var {clientHeight} = document.documentElement;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var adjustContent = (content) => {
  var {top} = content.getBoundingClientRect();

  if (clientHeight - top >= 150) {
    content.classList.add('show')
  }
  else {
    content.classList.remove('show')
  }
}

contents.forEach(content => adjustContent(content));

window.addEventListener('scroll', (e) => {
  contents.forEach(content => adjustContent(content));
});
