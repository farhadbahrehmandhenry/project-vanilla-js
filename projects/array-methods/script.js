var usersContainer = document.querySelector('.users');
var forEachBtn = document.querySelector('.for-each-btn');
var mapBtn = document.querySelector('.map-btn');
var findBtn = document.querySelector('.find-btn');
var filterBtn = document.querySelector('.filter-btn');
// var reduceBtn = document.querySelector('.reduce-btn');
// var sortBtn = document.querySelector('.sort-btn');
var resultContainrt = document.querySelector('.result');

var populateData = (users) => {
  resultContainrt.innerHTML = '';

  users.forEach((user) => {
    var userElement = document.createElement('div');
    userElement.classList.add('user');

    var name = document.createElement('div');
    var money = document.createElement('div');
    name.classList.add('name');
    money.classList.add('money');

    name.innerHTML = user.name;
    money.innerHTML = user.money;

    userElement.appendChild(name);
    userElement.appendChild(money);

    resultContainrt.appendChild(userElement);
  });
};

var users = [
  { name: 'Steven', money: 39000 },
  { name: 'Paul', money: 12500 },
  { name: 'Janet', money: 345000 },
  { name: 'Ali', money: 14000 },
  { name: 'Sarah', money: 1099000 },
  { name: 'Maryam', money: 14000 },
  { name: 'Sayan', money: 595000 },
  { name: 'Sina', money: 420000 },
  { name: 'Bob', money: 1030000 },
  { name: 'Dana', money: 30000 },
  { name: 'Farhad', money: 110000 },
  { name: 'Parisa', money: 150000 },
  { name: 'Mahsa', money: 12000 },
  { name: 'Max', money: 200000 },
  { name: 'Pari', money: 13670000 },
];

usersContainer.innerHTML = JSON.stringify(users);

forEachBtn.addEventListener('click', () => populateData(users));

mapBtn.addEventListener('click', () => {
  var usersWithDoubleMoney = users.map((user) => {
    return { name: user.name, money: user.money * 2 };
  });

  populateData(usersWithDoubleMoney);
});

findBtn.addEventListener('click', () => {
  var fourteen = users.find((user) => {
    return user.money === 14000;
  });

  populateData([fourteen]);
});

filterBtn.addEventListener('click', () => {
  var millioners = users.filter((user) => {
    return user.money >= 1000000;
  });

  populateData(millioners);
});

// sortBtn.addEventListener('click', () => {
//   users.sort()
// });

// reduceBtn.addEventListener('click', () => {
//   amounts.reduce((num1, num2) => num+num2);
// });
