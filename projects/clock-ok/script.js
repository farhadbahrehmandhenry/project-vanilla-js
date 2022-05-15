var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');
var hourHand = document.querySelector('.hour-hand');
var digitalClock = document.querySelector('.digital-clock');
var dateEl = document.querySelector('.date');
var modeButton = document.querySelector('.mode-toggle-button');
var container = document.querySelector('.container');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
var weekdays = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

var renderClock = () => {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var weekDay = date.getDay();
  var month = date.getMonth();
  var day = date.getDate();
  
  secondHand.style.transform = `rotate(${(second * 6) - 90}deg) translate(50%)`;
  minuteHand.style.transform = `rotate(${(minute * 6) - 90}deg) translate(50%)`;
  hourHand.style.transform = `rotate(${((360/12) * (hour)) - 90}deg) translate(50%)`;
  
  digitalClock.innerHTML = `${hour < 10 ? "0"+hour : hour}:${minute < 10 ? "0"+minute : minute}:${second < 10 ? "0"+second : second}`;
  dateEl.innerHTML = `${weekdays[weekDay]}, ${months[month]} ${day}`;
}

renderClock();
setInterval(() => renderClock(), 1000);
modeButton.addEventListener('click', () => container.classList.toggle('dark'));
