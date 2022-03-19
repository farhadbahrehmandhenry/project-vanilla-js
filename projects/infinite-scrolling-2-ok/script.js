var imageContainer = document.querySelector('.image-container');
var loader = document.querySelector('.loader');

var imageCount = 30;
var apiKey = 'aJxAMhnsvA4dAe5EsdeN5Ol6OrlX25fyZYO4jzrEYoA'
var apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;
var photos = [];
var loadCount = 0;
var readyToShow = false;
var totalImagesCount = 0;

var imageLoaded = () => {
  loadCount++;

  if (loadCount >= imageCount) {
    readyToShow = true;
    loader.style.display = 'none';
    imageContainer.style.display = 'flex';
  }
  else {
    loader.style.display = 'flex';
    imageContainer.style.display = 'none';
  }
}

var displayePhotos = () => {
  totalImagesCount = photos.length;

  photos.forEach(photo => {
    var {alt_description, links, urls} = photo;
    var item = document.createElement('a');
    var image = document.createElement('img');

    item.setAttribute('href', links.html);
    item.setAttribute('target', '_blank');

    image.title = alt_description;
    image.src = urls.regular;
    image.alt = alt_description;

    image.addEventListener('load', () => {
      imageLoaded();
    });

    item.appendChild(image);
    imageContainer.appendChild(item);
  });
}

var getPhotos = async() => {
  try {
    var response = await fetch(apiUrl);
    photos = await response.json();

    displayePhotos();
  }
  catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && readyToShow) {
    readyToShow = false;

    getPhotos();
  }
});

getPhotos();
