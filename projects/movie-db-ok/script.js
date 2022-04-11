var searchInput = document.querySelector('.search-input');
var moviesContainer = document.querySelector('.movies');

var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d191ef5085b67d0e5d75a55bf7f92bd0&page=1`;
var searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=d191ef5085b67d0e5d75a55bf7f92bd0&query="`;
var imagePath = 'https://image.tmdb.org/t/p/w1280'

searchInput.focus();

var getMovies = async(url) => {
  var data = await fetch(url);
  var response = await data.json();

  showMovies(response.results);
}

var showMovies = (movies) => {
  moviesContainer.innerHTML = '';
  
  movies.forEach(movie => {
    var movieEl = document.createElement('div');
    var movieImg = document.createElement('img');
    var movieTitle = document.createElement('h4');
    var movieRating = document.createElement('div');
    var movieRatingStar = document.createElement('img');
    var ratingColor = '#9b2226';

    if (movie.vote_average >= 5 && movie.vote_average < 7) ratingColor = '#ee9b00'; 
    else if (movie.vote_average >= 7) ratingColor = '#52b788'; 


    movieEl.className = 'movie';
    movieTitle.className = 'title';
    movieRating.className = 'rating';
    movieRatingStar.src = './image/star.png'
    movieEl.title = movie.overview;
    movieImg.src = imagePath + movie.poster_path;
    movieTitle.innerText = movie.title;
    movieRating.innerText = movie.vote_average;
    movieRating.style.color = ratingColor;

    movieRating.appendChild(movieRatingStar);
    movieEl.appendChild(movieImg);
    movieEl.appendChild(movieTitle);
    movieEl.appendChild(movieRating);
    moviesContainer.appendChild(movieEl);
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' & e.target === searchInput) {
    var {value} = e.target;

    console.log(e.target, e.target.value)
    if (value.trim() !== '') {
      getMovies(searchUrl + value);
      searchInput.value = '';
    }
  }
});

getMovies(url);
