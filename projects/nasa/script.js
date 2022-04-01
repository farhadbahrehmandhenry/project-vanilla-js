var addBtn = document.querySelector('.add-button');
var addBtnContaier = document.querySelector('.add-button-container');
var card = document.querySelector('.card');
var favoriteBtn = document.querySelector('.favorite-bth');
var mainContainer = document.querySelector('.main-container');
var favoritesContainer = document.querySelector('.favorite-container');
var mainNavigation = document.querySelector('.main-navigation');
var favoriteNavigation = document.querySelector('.favorite-navigation');
var backBtn = document.querySelector('.back-btn');
var resultsContainer = document.querySelector('.results-container');
var loader = document.querySelector('.loader');

window.addEventListener('DOMContentLoaded', async() => {
  var apiKey = 'DEMO_KEY';
  var count = 10;
  var url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  localStorage.getItem('mainCards') !== null ? getPhotosFromLocalStorage() : await getPhotosFromAPI();

  function renderCards(cards, parentEl) {
    parentEl.innerHTML = '';

    cards.forEach(card => {
      var cardElement = document.createElement('div');
      var imageAncherElement = document.createElement('a');
      var imageElement = document.createElement('img');
      var titleElement = document.createElement('h3');
      var descriptionElement = document.createElement('div');
      var descriptionP = document.createElement('p');
      var addBtnContainer = document.createElement('div');
      var addBtnElement = document.createElement('button');

      cardElement.className = 'card';
      titleElement.className = 'title';
      descriptionElement.className = 'description';
      addBtnContainer.className = 'add-button-container';
      addBtnElement.className = 'add-button';
      descriptionP.className = 'truncate';
      imageElement.className = 'image';
      titleElement.innerText = card.title;
      imageElement.src = card.url;
      descriptionP.innerText = card.explanation;
      addBtnElement.title = 'ADD TO FAVORITES';
      addBtnElement.innerText = '+';
      imageAncherElement.setAttribute('target', '_blank');
      imageAncherElement.href = card.hdurl;
      descriptionElement.title = card.explanation;

      if (card.favorite) {
        addBtnContainer.classList.add('added');
      }

      imageAncherElement.appendChild(imageElement);
      descriptionElement.appendChild(descriptionP);
      addBtnContainer.appendChild(addBtnElement);
      cardElement.appendChild(imageAncherElement);
      cardElement.appendChild(titleElement);
      cardElement.appendChild(descriptionElement);
      cardElement.appendChild(addBtnContainer);
      parentEl.appendChild(cardElement);

      cardElement.addEventListener('click', (e) => {
        var mainCards = JSON.parse(localStorage.getItem('mainCards'));
        var favoriteCards = localStorage.getItem('favoriteCards') !== null ? JSON.parse(localStorage.getItem('favoriteCards')) : [];
        var updatedMainCards;

        if (addBtnContainer.classList.contains('added')) {
          addBtnContainer.classList.remove('added');

          if (favoriteCards.some(c => c.copyright === card.copyright)) {
            var newFavorites = favoriteCards.filter(c => c.copyright !== card.copyright);
            localStorage.setItem('favoriteCards', JSON.stringify(newFavorites));   
          }

          var updatedMainCards = mainCards.map(c => {
            if (c.copyright === card.copyright) {
              c.favorite = false;
            }
  
            return c;
          });
        }
        else {
          addBtnContainer.classList.add('added');

          if (!favoriteCards.some(c => c.copyright === card.copyright)) {
            favoriteCards.push(card);
            localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));   
          }

          var updatedMainCards = mainCards.map(c => {
            if (c.copyright === card.copyright) {
              c.favorite = true;
            }
  
            return c;
          });
        }

        localStorage.setItem('mainCards', JSON.stringify(updatedMainCards));   
        renderCards(updatedMainCards, mainContainer);

        e.stopPropagation();
      });

      cardElement.addEventListener('mousedown', (e) => {
        var activeCard = (e.target.classList.contains('add-button-container') || e.target.classList.contains('add-button'));
      
        if (!activeCard && e.target.classList.contains('image')) {
          cardElement.classList.add('active');
        }
      });
      
      cardElement.addEventListener('mouseup', (e) => {
        var activeCard = e.target.classList.contains('add-button-container') || e.target.classList.contains('add-button')
      
        if (!activeCard && e.target.classList.contains('image')) {
          cardElement.classList.remove('active');
        }
      });
    });
  }

  function getPhotosFromLocalStorage() {
    renderCards(JSON.parse(localStorage.getItem('mainCards')), mainContainer);
  }
  
  async function getPhotosFromAPI() {
    resultsContainer.style.display = 'none';
    loader.style.display = 'flex';

    var response = await fetch(url);
    var cardsData = await response.json();
    
    localStorage.setItem('mainCards', JSON.stringify(cardsData));

    cardsData.then(cards => {
      renderCards(cards, mainContainer);

      resultsContainer.style.display = 'flex';
      loader.style.display = 'none';
    });
  }    

  favoriteBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    favoritesContainer.style.display = 'flex';
    mainNavigation.style.display = 'none';
    favoriteNavigation.style.display = 'flex';

    var favoriteCards = localStorage.getItem('favoriteCards') !== null ? JSON.parse(localStorage.getItem('favoriteCards')) : [];

    renderCards(favoriteCards, favoritesContainer);
  });

  backBtn.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    favoritesContainer.style.display = 'none';
    mainNavigation.style.display = 'flex';
    favoriteNavigation.style.display = 'none';
  });
});
