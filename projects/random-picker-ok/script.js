var textArea = document.querySelector('textarea');
var optionsElement = document.querySelector('.options');

textArea.focus();

var createOptions = (value) => {
  const options = value.split(',').filter(option => option.trim() !== '').map(option => option.trim());

  optionsElement.innerHTML = '';

  options.forEach(option => {
    var optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.innerText = '';
    optionElement.innerText = option;
  
    optionsElement.appendChild(optionElement);
  });
}

var randomSelect = () => {
  var times = 30;

  var interval = setInterval(() => {
    var options = document.querySelectorAll('.option');
    var randomOption = options[Math.floor(Math.random() * options.length)];
    
    randomOption.classList.add('highlight');

    setTimeout(() => {
      randomOption.classList.remove('highlight');
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      var options = document.querySelectorAll('.option');
      var randomOption = options[Math.floor(Math.random() * options.length)];  
      randomOption.classList.add('highlight');
    }, 100);
  }, times * 100);
}

textArea.addEventListener('keyup', (e) => {
  createOptions(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10)
    
    randomSelect();
  }
}); 
