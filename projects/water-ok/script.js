var glasses = document.querySelectorAll('.glass');
var fullHalf = document.querySelector('.full-half');
var emptyHalfContainer = document.querySelector('.empty-half-container');
var emptyHalf = document.querySelector('.empty-half');

glasses.forEach((glass, index) => {
  glass.addEventListener('click', () => {
    var drankWater = index + 1;
    var drankWaterPecent = (drankWater * 250 * 100) / 2000;

    fullHalf.innerText = `${drankWaterPecent}%`;
    fullHalf.style.height = `${drankWaterPecent}%`;
    emptyHalfContainer.style.height = `${100 - drankWaterPecent}%`;
    emptyHalf.innerText = `${(2000 - (2000 * drankWaterPecent / 100)) / 1000}L`;

    glasses.forEach(g => g.classList.remove('full'));
    glasses.forEach((g, i) => {
      if (drankWater - 1 >= i) {
        g.classList.add('full');
      }
    });
  });
});