window.addEventListener('load', () => {
  var hamburger = document.querySelector('.hamburger');
  var hamburgerDivs = document.querySelectorAll('.hamburger div');
  var navItemsLi = document.querySelectorAll('.nav-items li');

  var applyNavItemsAnimation = () => {
    navItemsLi.forEach((li, i) => {
      if (li.style.animation) {
        li.style.animation = '';
      }   
      else {
        li.style.animation = `fadeIn 2s ease forwards ${i/7 + 0.6}s`;
      }
    });
  }

  hamburger.addEventListener('click', () => {
    var navItemsContainer = document.querySelector('.nav-items');
    navItemsContainer.classList.toggle('active');

    setTimeout(() => {
      applyNavItemsAnimation();

      hamburgerDivs.forEach(div => {
        if (navItemsContainer.classList.contains('active')) div.classList.add('opened');
        else div.classList.remove('opened');
      });
    }, 0)
  });

  window.addEventListener('resize', () => {
    document.querySelector('.nav-items').classList.remove('active');
    hamburgerDivs.forEach(div => div.classList.remove('opened'));
  });
});