var posts = [
  {id: 1, title: 'first post'},
  {id: 2, title: 'second post'},
];

var getPosts = () => {
  setTimeout(() => {
    var output = '';

    posts.forEach(post => output += `<li>${post.title}</li>`);

    document.body.innerHTML = output;
  }, 1000);
}

var createPost = (post, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      var error = false;

      if (!error) resolve();
      else reject('you got an error!');
    }, 2000);
  });
}

// createPost({id: 3, title: 'third post'})
//   .then(getPosts)
//   .catch(error => console.log(err));


// promise.all

var promise1 = Promise.resolve('first promise');
var promise2 = 'second promise';
var promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'third promise'));
var promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

Promise.all([promise1, promise2, promise4])
  .then(result => console.log(result));


// async await

var init = async() => {
  await createPost({id: 3, title: 'third post'});

  getPosts();
}

init();

var fetchPosts = async() => {
  var respose = await fetch('https://jsonplaceholder.typicode.com/posts');
  var posts = await respose.json();

  console.log(posts);
}

fetchPosts();