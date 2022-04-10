var fromCurrency = document.querySelector('.from-currency');
var toCurrency = document.querySelector('.to-currency');
var fromCount = document.querySelector('.from-count');
var direction = document.querySelector('.direction');
var toCount = document.querySelector('.to-count');
var rate = document.querySelector('.rate');

var calculate = async (el) => {
  var currency = el === 'from' ? fromCurrency.value : toCurrency.value;
  var url = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${currency}`;
  var data = await fetch(url);
  var parsedData = await data.json();
  var currencies = parsedData.conversion_rates;

  if (el === 'from') {
    toCount.value = (currencies[toCurrency.value] * fromCount.value).toFixed(3);
    rate.innerHTML = `1 ${fromCurrency.value} = ${toCurrency.value} ${toCount.value}`;
  } else {
    fromCount.value = (currencies[fromCurrency.value] * toCount.value).toFixed(
      3
    );
    rate.innerHTML = `1 ${toCurrency.value} = ${fromCurrency.value} ${fromCount.value}`;
  }
};

fromCount.addEventListener('change', () => {
  if (fromCount.value >= 0) {
    calculate('from');
    direction.className = 'direction right';
  } else {
    fromCount.value = 0;
  }
});

toCount.addEventListener('change', () => {
  if (toCount.value >= 0) {
    calculate('to');
    direction.className = 'direction left';
  } else {
    toCount.value = 0;
  }
});

fromCurrency.addEventListener('input', () => {
  calculate('from');
  direction.className = 'direction right';
});

toCurrency.addEventListener('input', () => {
  calculate('to');
  direction.className = 'direction left';
});

calculate();
