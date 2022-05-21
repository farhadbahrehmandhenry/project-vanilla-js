var container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', async() => {
  for (var i = 0; i < 30; i++) {
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    var innerHtml = `    
      <div class="card-container">
        <div class="card">
          <img class="image animated-bg" src="" alt="">
          <div class="descripton-container">
            <h4></h4><span class="animated-bg"></span>
            <p></p><span class="animated-bg"></span><span class="animated-bg"></span><span class="animated-bg"></span>
          </div>
          <div class="user-container">
            <img class="user-image" src="" alt=""><span class="animated-bg"></span>
            <div class="portfolio">
              <div class="name"></div><span class="animated-bg"></span>
              <a href="" target="_blank"></a><span class="animated-bg"></span>
            </div>
          </div>
        </div>
      </div>
    `
    cardContainer.innerHTML = innerHtml;

    container.appendChild(cardContainer);
  }

  setTimeout(async() => {
    var images = localStorage.getItem('images') !== null ? JSON.parse(localStorage.getItem('images')) : [];
    var getUsers = async() => {
      var imagesData = await fetch('https://api.unsplash.com/collections?page=1&per_page=100&client_id=aJxAMhnsvA4dAe5EsdeN5Ol6OrlX25fyZYO4jzrEYoA');
      return await imagesData.json();
    }
  
    if (images.length === 0) {
      images = await getUsers();
      localStorage.setItem('users', JSON.stringify(images));
    }

    container.innerHTML = '';
  
    images.forEach(image => {
      var cardContainer = document.createElement('div');
      cardContainer.className = 'card-container';
  
      var innerHtml = `    
        <div class="card-container">
          <div class="card">
            <img class="image" src=${image.cover_photo.urls.regular} alt=${image.cover_photo.alt_description}>
            <div class="descripton-container">
              <h4>Description</h4>
              <p>${image.description ? image.description : "is simply dummy text of the printing and typesetting"}</p>
            </div>
            <div class="user-container">
              <img class="user-image" src=${image.user.profile_image.small} alt=${image.user.first_name}>
              <div class="portfolio">
                <div class="name">${image.user.first_name}</div>
                <a href=${image.user.portfolio_url} target="_blank">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      `
      cardContainer.innerHTML = innerHtml;
  
      if (image.user.portfolio_url === null) {
        var anchorTag = cardContainer.getElementsByTagName('a')[0];
        anchorTag.style.pointerEvents = 'none';
        anchorTag.style.cursor = 'default';
        anchorTag.style.color = 'black';
      }
  
      container.appendChild(cardContainer);
    });
  }, 3000);
});
