var showInput = document.querySelector('.input input');
var passlength = document.querySelector('#length');
var upperCase = document.querySelector('#upper');
var lowerCase = document.querySelector('#lower');
var numbers = document.querySelector('#numbers');
var symbol = document.querySelector('#symbols');
var generateBtn = document.querySelector('.generate-btn');
var copyBtn = document.querySelector('.copy-btn');

var symbols = ["!", "@", "#", "$", "%", "&", "*", "?", "(" , ")"];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var getRandomNumber = (num) => {
  return Math.ceil(Math.random() * num);
}

generateBtn.addEventListener('click', () => {
  var pass = [];
  var length = passlength.value;
  var hasUpper = upperCase.checked;
  var hasLower = lowerCase.checked;
  var hasNumbers = numbers.checked;
  var hasSymbols = symbol.checked;
  var eachCount = Math.floor(length / 5);

  if (hasUpper) {
    for (var i = 0; i < getRandomNumber(eachCount); i++) {
      pass.push(chars[getRandomNumber(chars.length-1)].toUpperCase());
    }
  }
  if (hasLower) {
    for (var i = 0; i < getRandomNumber(eachCount); i++) {
      pass.push(chars[getRandomNumber(chars.length-1)]);
    }
  }
  if (hasNumbers) {
    for (var i = 0; i < getRandomNumber(eachCount); i++) {
      pass.push(nums[getRandomNumber(nums.length-1)]);
    }
  }
  if (hasSymbols) {
    for (var i = 0; i < getRandomNumber(eachCount); i++) {
      pass.push(symbols[getRandomNumber(symbols.length-1)]);
    }
  }

  var tempPassLength = pass.length;

  for (var i = 0; i < length - tempPassLength; i++) {
    pass.push(chars[getRandomNumber(chars.length-1)]);
  }

  var password = '';

  while(pass.length > 0) {
    var randomIndex = getRandomNumber(pass.length) - 1;
    password += pass[randomIndex];

    pass.splice(randomIndex, 1);
  }

  showInput.value = password;
});

copyBtn.addEventListener('click', () => {
  showInput.focus();
  showInput.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
