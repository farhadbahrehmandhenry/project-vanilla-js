var movieContainer = document.querySelector('.movies-container');
var checkOrderBtn = document.querySelector('.check-order-btn ');

var movies = [
  {rank: 1, title: 'The Shawshank Redemption'},
  {rank: 2, title: 'The Godfather'},
  {rank: 3, title: 'The Dark Knight'},
  {rank: 4, title: 'The Godfather: Part II'},
  {rank: 5, title: '12 Angry Men'},
  {rank: 6, title: 'Schindler\'s List'},
  {rank: 7, title: 'The Lord of the Rings: The Return of the King'},
  {rank: 8, title: 'Pulp Fiction'},
  {rank: 9, title: 'The Lord of the Rings: The Fellowship of the Ring'},
  {rank: 10, title: 'The Good, the Bad and the Ugly'},
];

var indices = [];
var listItems = [];
var dragStartIndex = 0;

while (indices.length < 10) {
  var randomIndex = Math.floor(Math.random() * 10);

  if (!indices.includes(randomIndex)) {
    indices.push(randomIndex);
  }
}

indices.forEach((index, i) => {
  var movieEl = document.createElement('div');
  var movieid = document.createElement('div');
  var movieTitle = document.createElement('div');
  var icon = document.createElement('div');

  movieEl.className = 'movie';
  movieEl.setAttribute('data-index', i);

  movieid.className = 'id';
  movieid.innerText = i + 1;

  movieTitle.className = 'title';
  movieTitle.innerText = movies[index].title;

  icon.className = 'icon';

  movieEl.setAttribute('draggable', true);
  movieEl.appendChild(movieid);
  movieEl.appendChild(movieTitle);
  movieEl.appendChild(icon);
  movieContainer.appendChild(movieEl); 

  listItems.push(movieEl);

  addEventListeners();
});

function dragStart() {
  // console.log('Event: ', 'dragstart');
  // + makes it a number
  dragStartIndex = +this.closest('.movie').getAttribute('data-index');
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  var allMovies = document.querySelectorAll('.movie');
  var tempTitle = allMovies[fromIndex].querySelector('.title').innerText;

  allMovies[fromIndex].querySelector('.title').innerText = allMovies[toIndex].querySelector('.title').innerText;
  allMovies[toIndex].querySelector('.title').innerText = tempTitle;
}

// Check the order of list items
function checkOrder() {
  var allMovies = document.querySelectorAll('.movie');

  allMovies.forEach((movie, index) => {
    var movieTitle = movie.querySelector('.title').innerText.trim();

    if (movies[index].title !== movieTitle) {
      movie.classList.add('wrong');
    } else {
      movie.classList.remove('wrong');
      movie.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.movie');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', dragDrop);
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
  });
}

checkOrderBtn.addEventListener('click', checkOrder);
