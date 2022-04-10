var items = document.querySelectorAll('li');
var itemsContainer = document.querySelector('.items');
var toggle = document.querySelector('.toggle');
var one = document.querySelector('.one');
var two = document.querySelector('.two');

toggle.addEventListener('click', () => {
  itemsContainer.classList.toggle('hide');

  if (itemsContainer.classList.contains('hide')) {
    toggle.classList.add('close');
    items.forEach(item => {
      item.style.opacity = 0;
      item.style.width = 0;
    });

    one.style.animation = 'rotateOne 0.2s infinite';
    two.style.animation = 'rotateTwo 0.2s infinite';

    setTimeout(() => {
      one.style.animation = '';
      two.style.animation = '';
    }, 1500);
  }
  else {
    toggle.classList.remove('close');
    items.forEach(item => {
      item.style.opacity = 1;
      item.style.width = '6rem';
    });

    one.style.animation = 'rotateOne 0.2s infinite';
    two.style.animation = 'rotateTwo 0.2s infinite';

    setTimeout(() => {
      one.style.animation = '';
      two.style.animation = '';
    }, 1000);
  }
});