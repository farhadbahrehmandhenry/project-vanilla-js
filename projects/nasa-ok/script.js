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
var loadMoreBtn = document.querySelector('.load-more-btn');

window.addEventListener('DOMContentLoaded', async() => {
  var apiKey = 'DEMO_KEY';
  var count = 10;
  var url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  localStorage.getItem('mainCards') !== null ? getPhotosFromLocalStorage() : await getPhotosFromAPI();

  function renderCards(cards, parentEl) {
    parentEl.innerHTML = '';
    var icon = parentEl === mainContainer ? '+' : 'X';
    var title = parentEl === mainContainer ? 'ADD TO FAVORITES' : 'REMOVE FROM FAVORITES';

    cards.forEach((card, index) => {
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
      addBtnElement.setAttribute('data-index', index);
      descriptionP.className = 'truncate';
      imageElement.className = 'image';
      titleElement.innerText = card.title;
      imageElement.src = card.url;
      descriptionP.innerText = card.explanation.replace(/[\r\n]/gm, '');
      addBtnElement.title = title;
      addBtnElement.innerText = icon;
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

      addBtnElement.addEventListener('click', (e) => {
        var mainCards = JSON.parse(localStorage.getItem('mainCards'));
        var favoriteCards = localStorage.getItem('favoriteCards') !== null ? JSON.parse(localStorage.getItem('favoriteCards')) : [];
        var updatedMainCards;

        if (addBtnElement.parentElement.classList.contains('added')) {
          addBtnElement.parentElement.classList.remove('added');

          if (favoriteCards.some(c => c.title === card.title)) {
            var newFavorites = favoriteCards.filter(c => c.title !== card.title);
            localStorage.setItem('favoriteCards', JSON.stringify(newFavorites));   

            renderCards(newFavorites, favoritesContainer);
          }

          updatedMainCards = mainCards.map(c => {
            if (c.title === card.title) {
              c.favorite = false;
            }
  
            return c;
          });

          renderCards(updatedMainCards, mainContainer);
        }
        else {
          addBtnElement.parentElement.classList.add('added');

          updatedMainCards = mainCards.map(c => {
            if (c.title === card.title) {
              c.favorite = true;
            }
  
            return c;
          });

          if (!favoriteCards.some(c => c.title === card.title)) {
            favoriteCards.push(card);
            localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));   
          }
          else {
            var newFavorites = favoriteCards.filter(c => c.title !== card.title);
            localStorage.setItem('favoriteCards', JSON.stringify(newFavorites));   

            updatedMainCards = mainCards.map((c, index) => {
              if (c.title === card.title) {
                c.favorite = false;

                var selecteCards = document.querySelectorAll(`[data-index="${index}"]`);

                console.log(selecteCards)
                selecteCards.forEach(c => {
                  c.parentElement.classList.remove('added');
                })
              }
    
              return c;
            });

            renderCards(newFavorites, favoritesContainer);
            renderCards(updatedMainCards, mainContainer);
          }
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
    var cardsData = response.json();
    
    cardsData.then(cards => {
      renderCards(cards, mainContainer);

      localStorage.setItem('mainCards', JSON.stringify(cards));
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

  loadMoreBtn.addEventListener('click', async() => {
    await getPhotosFromAPI();
  });
});
