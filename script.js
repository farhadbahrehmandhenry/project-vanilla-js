var projectsContainer = document.querySelector('.projects-container');

var projects = [
  {name: 'Simple Calculator', link: './projects/calculator-ok', image: '/calc.png'},
  {name: 'Exchange Calculator', link: './projects/exchange-rate-calculator-ok', image: '/image/exchange.png'},
  {name: 'Expense Tracker', link: './projects/expense-tracker-ok', image: '/image/expense.png'},
  {name: 'Flash Cards', link: './projects/flash-card-ok', image: '/flash.png'},
  {name: 'Flip Card', link: './projects/flip-card-ok', image: '/flip.png'},
  {name: 'Form', link: './projects/form-ok', image: '/form.png'},
  {name: 'Form 2', link: './projects/form-2-ok', image: '/image/formTwo.png'},
  {name: 'Full Page Scroll', link: './projects/full-page-scroll-effect-ok', image: '/full-page-scroll.png'},
  {name: 'Hangman', link: './projects/hangman-ok', image: '/hangman.png'},
  {name: 'Infinite Scroll', link: './projects/infinite-scrolling-ok', image: '/infinite-scroll.png'},
  {name: 'Infinite Scroll 2', link: './projects/infinite-scrolling-2-ok', image: '/image/infinite-2.png'},
  {name: 'Meal Finder', link: './projects/meal-finder-ok', image: '/image/meal.jpg'},
  {name: 'Popup Modal', link: './projects/modal-ok', image: '/modal.png'},
  {name: 'Movie Seat Booking', link: './projects/movie-seat-booking-app-ok', image: '/movie.png'},
  {name: 'Music Player', link: './projects/music-player-ok', image: '/images/music.png'},
  {name: 'Simple Navbar', link: './projects/navbar-ok', image: '/navbar.png'},
  {name: 'Simple Navbar 2', link: './projects/navbar-2-ok', image: '/image/navbar-2.png'},
  {name: 'Simple Navbar 3', link: './projects/land-page-ok', image: '/image/land.jpg'},
  {name: 'Parallex Effect', link: './projects/parallex-effect-ok', image: '/images/parallex.png'},
  {name: 'Progress Bar', link: './projects/progress-bar-ok', image: '/progress.png'},
  {name: 'Simple Search Bar', link: './projects/search-bar-ok', image: '/search.png'},
  {name: 'Speech Text Reader', link: './projects/speech-text-reader-ok', image: '/image/speech.png'},
  {name: 'Text Animation', link: './projects/text-animation-ok', image: '/text.png'},
  {name: 'Typing Game', link: './projects/typing-game-ok', image: '/image/typing.png'},  
  {name: 'Custom Video Player', link: './projects/video-player-ok', image: '/image/video.png'},
  {name: 'Video Background', link: './projects/video-background-ok', image: '/image/background.png'},
  {name: 'Lyric Finder', link: './projects/lyric-finder-ok', image: '/image/lyric.png'},
  {name: 'Breath App', link: './projects/breathe-ok', image: '/image/breathing.png'},
  {name: 'Ping Pong', link: './projects/ping-pong-ok', image: '/image/ping-pong.png'},
  {name: 'New Year Countdown', link: './projects/new-year-ok', image: '/image/year.png'},
  {name: 'Sortable List', link: './projects/sortable-list-ok', image: '/sortable-list.png'},
  {name: 'Guess the Number', link: './projects/guess-the-number-ok', image: '/image/guess-number.png'},
  {name: 'Quote Generator', link: './projects/quote-generator-ok', image: '/image/quoting.png'},
  {name: 'Picture In Picture', link: './projects/picture-in-picture-ok', image: '/image/pictureInPicture.png'},
  {name: 'Joke Teller', link: './projects/joke-teller-ok', image: '/image/joke.png'},
  {name: 'Light Dark Mode', link: './projects/light-dark-mode-ok', image: '/image/light-dark.png'},
  {name: 'Rock Paper Scissors', link: './projects/rock-paper-scissors-ok', image: '/image/rock-paper-scissors.png'},
  {name: 'NASA', link: './projects/nasa-ok', image: '/image/nasa.png'},
  {name: 'KANBAN', link: './projects/kanban-ok', image: '/image/kanban.png'},
  {name: 'Paint', link: './projects/paint-ok', image: ''},
  {name: 'Pong', link: './projects/pong-ok', image: ''},
  {name: 'Expanding Pics', link: './projects/expanding-pic-ok', image: '/image/expand.png'},
  {name: 'Blurry Loading', link: './projects/blurry-ok', image: '/image/blurry.jpg'},
  {name: 'Steps', link: './projects/steps-ok', image: '/image/steps.png'},
  {name: 'Scroll Animation', link: './projects/scroll-animation-ok', image: '/image/scroll-animation.png'},
  {name: 'Split Landing', link: './projects/split-ok', image: '/image/split.png'},
  {name: 'FAQ', link: './projects/faq-ok', image: '/image/faq.png'},
  {name: 'Random Picker', link: './projects/random-picker-ok', image: '/random-picker.png'},
  {name: 'Animated Navigation', link: './projects/animated-navigation-ok', image: '/animated-nav.png'},
  {name: 'Drink Water', link: './projects/water-ok', image: '/water.png'},
  {name: 'Movie DB', link: './projects/movie-db-ok', image: '/image/movie-db.png'},
  {name: 'Background Slider', link: './projects/background-slider-ok', image: '/image/background-slider.png'},
  {name: 'Class Object Tutorial', link: './configs/class-ok', image: '/class.png'},
  {name: 'Tables', link: './projects/table-ok', image: '/table.png'},
  {name: 'Clock', link: './projects/clock-ok', image: '/clock.png'},
  {name: 'Click Effect', link: './projects/click-effect-ok', image: '/click-effect.png'},
  {name: 'Drawing Pad', link: './projects/drawing-pad-ok', image: '/drawing-pad.png'},
  {name: 'Loading', link: './projects/loading-ok', image: '/loading.png'},
  {name: 'Gradiant Effect', link: './projects/gradiant-effect-ok', image: '/graidiant-effect.png'},
  {name: 'Sticky Nav', link: './projects/sticky-nav-ok', image: '/sticky-nav.png'},
  {name: 'Vertical Slider', link: './projects/vertical-slider-ok', image: '/image/vertical-slider.png'},
  {name: 'Github API', link: './projects/github-ok', image: '/github.png'},
  {name: 'Heart', link: './projects/heart-ok', image: '/image/heart-ok.png'},
  {name: 'Autotype', link: './projects/autotype-ok', image: '/autotype.png'},
  {name: 'Password Generator', link: './projects/password-generator-ok', image: '/pass-generator.png'},
  {name: 'Good Bad Ugly', link: './projects/good-bad-ugly-ok', image: '/good-bad-ugly.png'},

];

window.addEventListener('DOMContentLoaded', () => {
  projects.forEach(project => {
    var projectEl = document.createElement('div');
    var projectImageEl = document.createElement('img');
    var projectTitleEl = document.createElement('div');
  
    projectEl.className = 'card';
    projectImageEl.src = `${project.link}${project.image}`;
    projectTitleEl.className = 'card-name';
    projectTitleEl.innerText = project.name;
  
    projectEl.appendChild(projectImageEl);
    projectEl.appendChild(projectTitleEl);
    projectEl.addEventListener('click', () => window.open(`${project.link}/index.html`, '_blank'));

    projectsContainer.appendChild(projectEl);
  });
});
