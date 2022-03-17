var itemsContainer = document.querySelector('.items-container');
var input = document.querySelector('.search-input');
var users = [];


input.addEventListener('input', (event) => {

  users.forEach(user => {
    var isVisible = user.userName.includes(event.target.value.toLowerCase())

    user.userElement.classList.toggle('hide', !isVisible);
  });
});

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
  users = data.map(user => {
    var item = document.createElement('li');
    item.classList.add('item');
    item.innerHTML = user.name;
    itemsContainer.appendChild(item);

    return {userElement: item, userName: user.name.toLowerCase()};
  });
});


