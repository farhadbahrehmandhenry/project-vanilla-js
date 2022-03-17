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
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();
createPost({id: 3, title: 'third post'}, getPosts);