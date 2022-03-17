var form = document.querySelector('.form');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var password2 = document.querySelector('#password2');

var showError = (input, message) => {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
};

var showSuccess = (input) => {
  var formControl = input.parentElement;

  formControl.className = 'form-control success';
};

var checkEmail = (input) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'email should be in correct format.');
  }
};

var checkRequired = (inputs) => {
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

var checkLength = (input, min, max) => {
  var length = input.value.length;

  if (length < min || length > max) {
    showError(
      input,
      `length of ${getFieldName(input)} should be between ${min} and ${max}`
    );
  } else {
    showSuccess(input);
  }
};

var getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

var checkPasswordMatch = (input1, input2) => {
  if (input1.value && input1.value === input2.value) {
    showSuccess(input);
  } else {
    showError(input2, "password doesn't match");
  }
};
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
