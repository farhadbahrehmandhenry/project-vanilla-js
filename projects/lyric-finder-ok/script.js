var searchBtn = document.querySelector('.submit');
var searchInput = document.querySelector('.search-input');
var tbody = document.querySelector('tbody');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var artistNameEl = document.querySelector('.artist-name');
var lyricEl = document.querySelector('.lyric');
var songNameEl = document.querySelector('.song-name');

var apiUrl = 'https://api.lyrics.ovh';
var next = '';
var prev = '';

var showData = (songs) => {
  songs.data.forEach(song => {
    var albumName = song.album.title;
    var albumPicture = song.album.cover_medium;
    var artistPicture = song.artist.picture_medium;
    var artistName = song.artist.name;
    var songName = song.title;
  
    var row = document.createElement('tr');
    var artistField = document.createElement('td');
    var songtField = document.createElement('td');
    var getSongField = document.createElement('td');
  
    songtField.innerText = songName;
    artistField.innerText = artistName

    getSongField.addEventListener('click', async() => {
      var res = await fetch(`${apiUrl}/v1/${artistName}/${songName}`);
      var data = await res.json();
      var lyric = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

      lyricEl.innerHTML = lyric;
      artistNameEl.innerHTML = artistName;
      songNameEl.innerHTML = songName;
    });

    row.appendChild(artistField);
    row.appendChild(songtField);
    row.appendChild(getSongField);
    tbody.appendChild(row);    
  });
}

var searchSongs = async(term) => {
  var data = await fetch(`${apiUrl}/suggest/${term}`);
  var songs = await data.json();

  var total = songs.total;
  next = songs.next;
  prev = songs.prev;

  if (next) {
    nextBtn.disabled = false;
  }

  if (prev) {
    prevBtn.disabled = false;
  }

  showData(songs);
}

var navigate = async(url) => {
  var data = await fetch(`https://serene-shore-70276.herokuapp.com/${url}`);
  console.log(data)

  var songs = await data.json();

  var total = songs.total;
  next = songs.next;
  prev = songs.prev;

  tbody.innerHTML = '';

  if (next) {
    nextBtn.disabled = false;
  }

  if (prev) {
    prevBtn.disabled = false;
  }

  showData(songs);
}

nextBtn.addEventListener('click', () => {
  if (!nextBtn.disabled) {
    navigate(next);
  }
});

prevBtn.addEventListener('click', () => {
  if (!nextBtn.disabled) {
    navigate(prev);
  }
});

searchBtn.addEventListener('click', () => {
  var searchTerm = searchInput.value.trim();

  if (searchTerm) {
    searchSongs(searchTerm);
    searchInput.value = '';
    tbody.innerHTML = '';
  } else {
    alert('Search input can not be empty!');
  }
});
