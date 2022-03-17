var seatContainer = document.querySelector('.seat-container');
var moviesDropdown = document.querySelector('.movie-dropdown');
var seatCountElement = document.querySelector('.seat-count');
var priceElement = document.querySelector('.price');

// populate seats
for (var i = 0; i < 6; i++) {
  var seats = document.createElement('div');
  seats.className = 'seats';

  for (var j = 0; j < 8; j++) {
    var seat = document.createElement('div');
    seat.classList = 'seat';

    if (i === 0) seat.classList.add('occupied-seat');

    seats.appendChild(seat);
  }

  seatContainer.appendChild(seats);
}

// event listener
var seatsArr = document.querySelectorAll('.seat');
var selectedSeatCount = 0;
var TotalSum = 0;

moviesDropdown.addEventListener('change', (e) => {
  seatsArr.forEach((seat) => seat.classList.remove('selected-seat'));

  selectedSeatCount = 0;
  TotalSum = 0;

  seatCountElement.innerHTML = selectedSeatCount;
  priceElement.innerHTML = moviesDropdown.value * selectedSeatCount;

  localStorage.setItem('movieIndex', e.target.selectedIndex);
  localStorage.setItem('moviePrice', e.target.value);
});

seatsArr.forEach((seat) => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('occupied-seat')) {
      seat.classList.toggle('selected-seat');

      if (seat.classList.contains('selected-seat')) {
        selectedSeatCount++;
      } else {
        selectedSeatCount--;
      }
    }

    seatCountElement.innerHTML = selectedSeatCount;
    priceElement.innerHTML = moviesDropdown.value * selectedSeatCount;

    //save to local storage
    setTimeout(() => {
      var seatsElements = document.querySelectorAll('.seat');
      var selectedSeatsElements = document.querySelectorAll(
        '.seat.selected-seat'
      );
      var selectedSeatsIndices = [...selectedSeatsElements].map((seat) =>
        [...seatsElements].indexOf(seat)
      );

      localStorage.setItem(
        'selectedSeatsIndices',
        JSON.stringify(selectedSeatsIndices)
      );
    }, 500);
  });
});

window.addEventListener('load', () => {
  var selectedSeatsIndices = JSON.parse(
    localStorage.getItem('selectedSeatsIndices')
  );
  var seatsElements = document.querySelectorAll('.seat');

  seatsElements.forEach((seat, index) => {
    if (selectedSeatsIndices.includes(index)) {
      seat.classList.add('selected-seat');
    }
  });

  selectedSeatCount = selectedSeatsIndices.length;
  TotalSum = localStorage.getItem('moviePrice') * selectedSeatCount;

  moviesDropdown.selectedIndex = localStorage.getItem('movieIndex');
  seatCountElement.innerHTML = selectedSeatCount;
  priceElement.innerHTML = TotalSum;
});
