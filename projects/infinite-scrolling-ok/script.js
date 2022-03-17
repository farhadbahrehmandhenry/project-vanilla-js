var postContainer = document.querySelector('.post-container');
var loading = document.querySelector('.loader');
var filter = document.querySelector('.filter');

var limit = 5;
var page = 1;

var getPosts = async() => {
  var reponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  var posts = await reponse.json();

  return posts;
}

var showPosts = async() => {
  var posts = await getPosts();

  posts.forEach(post => {
    var el = document.createElement('div');
    el.className = 'post';

    el.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
    `;

    postContainer.appendChild(el);
  });
}

var showLoading = () => {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;

      console.log(page, limit)
      showPosts();
    }, 300)
  }, 1000);
}

var filrePosts = (e) => {
  var value = e.target.value.toUpperCase();
  var posts = document.querySelectorAll('.post');

  console.log(posts)
  posts.forEach(post => {
    var title = post.querySelector('.post-title').innerText.toUpperCase();
    var body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.indexOf(value) > -1 || title.indexOf(value) > -1) {
      post.style.display = 'flex';
    }
    else {
      post.style.display = 'none';

    }
  });
}
showPosts();

window.addEventListener('scroll', ()=> {
  // scrollHeight => entire height of an element in pixels
  // scrollTop => distance from the element's top to its topmost visible content
  // clientheight => inner height of an element in terms of pixels
  var {scrollHeight, scrollTop, clientHeight} = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 1) {
    showLoading();
  }
});

filter.addEventListener('input', (e) => {
  filrePosts(e);
});