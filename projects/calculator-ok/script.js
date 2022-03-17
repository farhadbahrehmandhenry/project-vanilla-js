window.addEventListener('load', (e) => {
  var claculator = document.querySelector('.calculator');
  var claculatorInput = document.querySelector('.calculator-input');
  var buttonsContainer = document.querySelector('.calculator-buttons');       
  var result = '0';
  var isOperationActive = false;

  var buttonGroups = {
    'left-buttons': {
      'secadary-buttons': [
        {key: 'C', class: 'erase'},
        {key: 'CE', class: 'back-cpace'},
        {key: '%', class: 'percent'},
      ],
      'digit-buttons': {
        rowOne: [
          {key: '7', class: 'seven'},
          {key: '8', class: 'eight'},
          {key: '9', class: 'nine'},
        ],
        rowTwo: [
          {key: '4', class: 'foue'},
          {key: '5', class: 'five'},
          {key: '6', class: 'six'},
        ],
        rowThree: [
          {key: '1', class: 'one'},
          {key: '2', class: 'two'},
          {key: '3', class: 'three'},
        ],
        rowFour: [
          {key: '0', class: 'zero'},
        ]
      }
    },
    'right-buttons': {
      'primary-buttons': [
        {key: '/', class: 'divide'}, 
        {key: '*', class: 'multiply'},
        {key: '-', class: 'subtract'},
        {key: '+', class: 'add'},
        {key: '=', class: 'equal'},
      ],
    }
  }

  claculatorInput.value = result;

  window.addEventListener('keydown', (e) => {
    var digitButtonsClasses = Object.values(buttonGroups["left-buttons"]["digit-buttons"]).flat().map(btn => btn.key)
    var primaryButtonsClasses = Object.values(buttonGroups["right-buttons"]["primary-buttons"]).flat().map(btn => btn.key)
    var secondaryButtonsClasses = Object.values(buttonGroups["left-buttons"]["secadary-buttons"]).flat().map(btn => btn.key)
    var classes = [...digitButtonsClasses, ...primaryButtonsClasses, secondaryButtonsClasses];

    if (classes.includes(e.key)) handleButtonClick(digitButtonsClasses, e.key);
  });
  var createButtons = (values, parent) => {
    if (Array.isArray(values)) {
      values.forEach(button => {
        var buttonDiv = document.createElement('button');

        buttonDiv.addEventListener('click', (e) => {
          var digitClasses = Object.values(buttonGroups["left-buttons"]["digit-buttons"]).flat().map(btn => btn.key)
          var buttonValue = e.target.innerHTML;

          handleButtonClick(digitClasses, buttonValue);
        });

        buttonDiv.classList.add(button.class);
        buttonDiv.innerHTML = button.key;
        parent.appendChild(buttonDiv);
      });
    }
    else {
      for (var [key, value] of Object.entries(values)) {
        var mainContainer = document.createElement('div');
        mainContainer.classList.add(key);

        createButtons(value, mainContainer);
    
        parent.appendChild(mainContainer);
      }
    }
  }

  createButtons(buttonGroups, buttonsContainer);

  var handleButtonClick = (classes, buttonValue) => {
    if (classes.includes(buttonValue)) {
      result = result === '0' ? buttonValue : result + buttonValue;
      isOperationActive = false;
    }
    else {
      switch(true) {
        case buttonValue === 'C':
          result = '0';
          isOperationActive = false;
          break;
        case buttonValue === 'CE':
          if (result[result.length - 1] === ' ') {
            isOperationActive = false;
            result = result.length === 1 ? '0' : result.substring(0, result.length-2);
          }
          else {
            result = result.length === 1 ? '0' : result.substring(0, result.length-1);
          }
          break;
        case ['%', '/', '*', '+', '-'].includes(buttonValue):
          if (!isOperationActive) {
            console.log(buttonValue)
            result = result === '0' ? '0' : result + ' ' + buttonValue + ' ';
            isOperationActive = true;
          }
          break;
        case buttonValue === '=':
          result = eval(result);
          break
      }
    }

    claculatorInput.value = result;
  }
});