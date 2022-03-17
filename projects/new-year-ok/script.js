var daysEl = document.querySelector('.days');
var hoursEL = document.querySelector('.hours');
var minutesEl = document.querySelector('.minutes');
var secondsEl = document.querySelector('.seconds');
var yearEl = document.querySelector('.year');
var dateEl = document.querySelector('.date');
var loading = document.querySelector('.loading');

var thisYear = new Date().getFullYear();
var nextNewYear = new Date(`January 01 ${thisYear + 1} 00:00:00`);

var updateNewYearCountdown = () => {
  var now = new Date();
  var diff = nextNewYear - now;
  var oneDay = 1000 * 60 * 60 * 24;
  var oneHour = 1000 * 60 * 60;
  var oneMinute = 1000 * 60;
  var oneSecond = 1000;

  var days = Math.floor(diff / oneDay);
  var hoursRemainder = diff % oneDay;

  var hours = Math.floor(hoursRemainder / oneHour);
  var minutesRemainder = hoursRemainder % oneHour;

  var minutes = Math.floor(minutesRemainder / oneMinute);
  var secondsRemainder = minutesRemainder % oneMinute;

  var seconds = Math.floor(secondsRemainder / oneSecond);
  var secondsRemainder = secondsRemainder % oneSecond;

  daysEl.innerText = days;
  hoursEL.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  yearEl.innerText = thisYear + 1;
}

setTimeout(() => {
  loading.remove();
  dateEl.style.display = 'flex';
}, 1000);

setInterval(updateNewYearCountdown, 1000);
