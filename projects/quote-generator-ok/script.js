var newQuoteBtn = document.querySelector('.new-quote-btn');
var twitterBtn = document.querySelector('.twitter-btn');
var quoteText = document.querySelector('.text');
var quoteAuthor = document.querySelector('.author');
var container = document.querySelector('.quote-container');
var loader = document.querySelector('.loader');

var getQuote = async() => {
  showLoadingSpinner();
  var response = await fetch('https://type.fit/api/quotes');
  var quotes = await response.json();
  var randomIndex = Math.floor(Math.random() * quotes.length) + 1;
  var quote = quotes[randomIndex];

  quoteText.innerText = quote.text;
  quoteAuthor.innerText = quote.author ? quote.author : 'unknown';
  removeLoadingSpinner();
}

var tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;

  window.open(twitterUrl, '_blanl');
}

var showLoadingSpinner = () => {
  loader.style.display = 'flex';
  container.style.display = 'none';
  newQuoteBtn.style.display = 'none';
  twitterBtn.style.display = 'none';
}

var removeLoadingSpinner = () => {
  loader.style.display = 'none';
  container.style.display = 'flex';
  newQuoteBtn.style.display = 'flex';
  twitterBtn.style.display = 'flex';
}

window.addEventListener('DOMContentLoaded', async() => {
  await getQuote();
});

newQuoteBtn.addEventListener('click', async() => {
  await getQuote();
});

twitterBtn.addEventListener('click', async() => {
  tweetQuote();
});

newQuoteBtn.addEventListener('mousedown', () => {
  newQuoteBtn.classList.add('clicked');
});

newQuoteBtn.addEventListener('mouseup', () => {
  newQuoteBtn.classList.remove('clicked');
});

twitterBtn.addEventListener('mousedown', () => {
  twitterBtn.classList.add('clicked');
});

twitterBtn.addEventListener('mouseup', () => {
  twitterBtn.classList.remove('clicked');
});

