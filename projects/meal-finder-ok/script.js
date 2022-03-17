var searchInput = document.querySelector('.search-input');
var mealContainer = document.querySelector('.meal-container');
var areaDropdown = document.querySelector('.area-dropdown');
var mealDetail = document.querySelector('.meal-detail');
var searchBtn = document.querySelector('.search-btn');
var randomBtn = document.querySelector('.random-btn');
var mealItem = document.querySelector('.meal-title');
var closeBtn = document.querySelector('.close-btn');
var searchOption = document.querySelector('#search');
var randomOption = document.querySelector('#random');
var areaOption = document.querySelector('#area');

var areas = [
  "American", "British", "Canadian", "Chinese", "Croatian", "Dutch",
  "Egyptian", "French", "Greek", "Indian", "Irish", "Italian", "Jamaican",
  "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish",
  "Portuguese", "Russian", "Spanish", "Thai", "Tunisian", "Turkish",
  "Unknown", "Vietnamese"
];

areas.forEach(area => {
  var areaEl = document.createElement('option');
  areaEl.classList.add(area.toLowerCase());
  areaEl.setAttribute('value', area);
  areaEl.innerText = area;

  areaDropdown.appendChild(areaEl);
});

var getMealInnerHtml = (meal) => {
  var { strMealThumb, strMeal, idMeal } = meal;

  return `
    <div class="meal-item" id=${idMeal}>
      <img src=${strMealThumb} alt="meal">
      <div class="meal-title"><span>${strMeal}</span></div>
    </div>
  `;
};

var getMealDetailInnerHtml = (meal) => {
  var { strArea, strCategory, strInstructions, strMealThumb } = meal;
  var ingredientKeys = Object.keys(meal).map((key) => key.includes('strIngredient') ? meal[key] : '').filter(el => el);
  var measuresKeys = Object.keys(meal).map((key) => key.includes('strMeasure') ? meal[key] : '').filter(el => el);
  var ingredients = ingredientKeys.map((key, index) => ({[key]: measuresKeys[index]}));

  return `
    <img src=${strMealThumb} alt="meal">
    <div class="close-btn">CLOSE</div>
    <div class="meal-general-detail">
      <div class="meal-category">Category: ${strCategory}</div>
      <div class="meal-area">Area: ${strArea}</div>
    </div>
    <div class="meal-ingredients"> Ingredients: 
      ${ingredients.map(ingredient => {
        return `<div class="ingredient">${Object.keys(ingredient)[0]}: ${Object.values(ingredient)[0]}</div>`
      }).join('')}
    </div>
    <div class="meal-instruction">${strInstructions}</div>
  `;
};

var getMeals = (url) => {  
  console.log(url)
  fetch(url).then((data) => data.json()).then((mealsData) => {
    if (mealsData.meals) {
      mealContainer.innerHTML = `${mealsData.meals.map((meal) =>
        getMealInnerHtml(meal)
      ).join('')}`;

      searchInput.value = '';
    } else {
      mealContainer.innerHTML = `no resulf found`;
    }
  });
};

searchBtn.addEventListener('click', () => {
  var meal = searchInput.value.trim();

  if (meal) {
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    getMeals(url);
  }
});

randomBtn.addEventListener('click', () => {
  getMeals(`https://www.themealdb.com/api/json/v1/1/random.php`);
});

mealContainer.addEventListener('click', (e) => {
  // search for meal in parent element
  var mealEl = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-item');
    }
  });

  if (mealEl) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealEl.id}`)
    .then((data) => data.json())
    .then((mealsData) => {
      mealDetail.classList.add('show');
      mealDetail.innerHTML = `${getMealDetailInnerHtml(mealsData.meals[0])}`;
    });
  }
});

mealDetail.addEventListener('click', (e) => {
  if (e.target.className === 'close-btn') {
    mealDetail.classList.remove('show');
  }
});

window.addEventListener('keydown', (e) => {
  var meal = searchInput.value.trim();

  if (e.key === 'Enter' && meal) {
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    getMeals(url);
  }
});

searchOption.addEventListener('click', () => {
  areaDropdown.style.display = 'none';
  searchInput.style.display = 'inline-block';
  searchBtn.style.display = 'inline-block';
  randomBtn.style.display = 'none';
});

randomOption.addEventListener('click', () => {
  areaDropdown.style.display = 'none';
  searchInput.style.display = 'none';
  searchBtn.style.display = 'none';
  randomBtn.style.display = 'inline-block';
});

areaOption.addEventListener('click', () => {
  areaDropdown.style.display = 'inline-block';
  searchInput.style.display = 'none';
  searchBtn.style.display = 'none';
  randomBtn.style.display = 'none';
});

areaDropdown.addEventListener('input', (e) => {
  var url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`;

  getMeals(url);
})