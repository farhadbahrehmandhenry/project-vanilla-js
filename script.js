var projectsContainer = document.querySelector('.projects-container');

var projects = [
  {name: 'Simple Calculator', link: './projects/calculator-ok/index.html', image: './projects/calculator-ok/calc.png'},
  {name: 'Exchange Calculator', link: './projects/exchange-rate-calculator-ok/index.html', image: './projects/exchange-rate-calculator-ok/image/exchange.png'},
  {name: 'Expense Tracker', link: './projects/expense-tracker-ok/index.html', image: './projects/expense-tracker-ok/image/expense.png'},
  {name: 'Flash Cards', link: './projects/flash-card-ok/index.html', image: './projects/flash-card-ok/flash.png'},
  {name: 'Flip Card', link: './projects/flip-card-ok/index.html', image: './projects/flip-card-ok/flip.png'},
  {name: 'Form', link: './projects/form-ok/index.html', image: './projects/form-ok/form.png'},
  {name: 'Full Page Scroll', link: './projects/full-page-scroll-effect-ok/index.html', image: './projects/full-page-scroll-effect-ok/full-page-scroll.png'},
  {name: 'Hangman', link: './projects/hangman-ok/index.html', image: './projects/hangman-ok/hangman.png'},
  {name: 'Infinite Scroll', link: './projects/infinite-scrolling-ok/index.html', image: './projects/infinite-scrolling-ok/infinite-scroll.png'},
  {name: 'Infinite Scroll 2', link: './projects/infinite-scrolling-2-ok/index.html', image: './projects/infinite-scrolling-2-ok/image/infinite-2.png'},
  {name: 'Meal Finder', link: './projects/meal-finder-ok/index.html', image: './projects/meal-finder-ok/image/meal.jpg'},
  {name: 'Popup Modal', link: './projects/modal-ok/index.html', image: './projects/modal-ok/modal.png'},
  {name: 'Movie Seat Booking', link: './projects/movie-seat-booking-app-ok/index.html', image: './projects/movie-seat-booking-app-ok/movie.png'},
  {name: 'Music Player', link: './projects/music-player-ok/index.html', image: './projects/music-player-ok/images/music.png'},
  {name: 'Simple Navbar', link: './projects/navbar-ok/index.html', image: './projects/navbar-ok/navbar.png'},
  {name: 'Parallex Effect', link: './projects/parallex-effect-ok/index.html', image: './projects/parallex-effect-ok/images/parallex.png'},
  {name: 'Progress Bar', link: './projects/progress-bar-ok/index.html', image: './projects/progress-bar-ok/progress.png'},
  {name: 'Simple Search Bar', link: './projects/search-bar-ok/index.html', image: './projects/search-bar-ok/search.png'},
  {name: 'Speech Text Reader', link: './projects/speech-text-reader-ok/index.html', image: './projects/speech-text-reader-ok/image/speech.png'},
  {name: 'Text Animation', link: './projects/text-animation-ok/index.html', image: './projects/text-animation-ok/text.png'},
  {name: 'Typing Game', link: './projects/typing-game-ok/index.html', image: './projects/typing-game-ok/image/typing.png'},  
  {name: 'Custom Video Player', link: './projects/video-player-ok/index.html', image: './projects/video-player-ok/image/video.png'},
  {name: 'Lyric Finder', link: './projects/lyric-finder-ok/index.html', image: './projects/lyric-finder-ok/image/lyric.png'},
  {name: 'Breath App', link: './projects/breathe-ok/index.html', image: './projects/breathe-ok/image/breathing.png'},
  {name: 'Ping Pong', link: './projects/ping-pong-ok/index.html', image: './projects/ping-pong-ok/image/ping-pong.png'},
  {name: 'New Year Countdown', link: './projects/new-year-ok/index.html', image: './projects/new-year-ok/image/year.png'},
  {name: 'Sortable List', link: './projects/sortable-list-ok/index.html', image: './projects/sortable-list-ok/sortable-list.png'},
  {name: 'Guess the Number', link: './projects/guess-the-number-ok/index.html', image: './projects/guess-the-number-ok/image/guess-number.png'},
  {name: 'Quote Generator', link: './projects/quote-generator-ok/index.html', image: './projects/quote-generator-ok/image/quoting.png'},
  {name: 'Picture In Picture', link: './projects/picture-in-picture-ok/index.html', image: './projects/picture-in-picture-ok/image/pictureInPicture.png'},
  {name: 'Joke Teller', link: './projects/joke-teller-ok/index.html', image: './projects/joke-teller-ok/image/joke.png'},
  {name: 'Light Dark Mode', link: './projects/light-dark-mode-ok/index.html', image: './projects/light-dark-mode-ok/image/light-dark.png'},
  {name: 'Class Object Tutorial', link: './configs/class-ok/index.html', image: './configs/class-ok/class.png'},
];

window.addEventListener('DOMContentLoaded', () => {
  projects.forEach(project => {
    var projectEl = document.createElement('div');
    var projectImageEl = document.createElement('img');
    var projectTitleEl = document.createElement('div');
  
    projectEl.className = 'card';
    projectImageEl.src = project.image;
    projectTitleEl.className = 'card-name';
    projectTitleEl.innerText = project.name;
  
    projectEl.appendChild(projectImageEl);
    projectEl.appendChild(projectTitleEl);
    projectEl.addEventListener('click', () => window.open(project.link, '_blank'));

    projectsContainer.appendChild(projectEl);
  });
});
