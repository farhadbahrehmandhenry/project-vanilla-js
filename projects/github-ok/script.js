var searchInput = document.querySelector('input');
var avatar = document.querySelector('.avatar');
var username = document.querySelector('.username');
var bio = document.querySelector('.bio');
var followers = document.querySelector('.followers');
var following = document.querySelector('.following');
var reposCount = document.querySelector('.repos-count');
var reposEl = document.querySelector('.repos');
var noResult = document.querySelector('.no-result');
var card = document.querySelector('#card');

card.style.display = 'none';


var getUser = async(user) => {
  try {
    var userInfo = await axios.get(`https://api.github.com/users/${user}`);
    var reposInfo = '';
  
    if (userInfo.data.id) {
      reposInfo = await axios.get(`https://api.github.com/users/${user}/repos`);
    }
  
    return {user: userInfo.data, repos: reposInfo.data};
  }
  catch (error) {
    return {user: '', repos: ''};
  }
}

window.addEventListener('keydown', async(e) => {
  if (document.activeElement === searchInput) {
    if (e.key === 'Enter') {
      var value = searchInput.value.trim();

      if (value !== '') {
        var {user, repos} = await getUser(value);

        if (user) {
          noResult.style.display = 'none';
          card.style.display = 'flex';
          username.textContent = user.name;
          bio.textContent = user.bio === null ? 'No bio available' : user.bio;
          avatar.src = user.avatar_url;
          followers.textContent = `Followers: ${user.followers}`;
          following.textContent = `Following: ${user.following}`;
          reposCount.textContent = `Repos: ${user.public_repos}`;
        }
        else {
          card.style.display = 'none';
          noResult.style.display = 'flex';
          noResult.innerText = `User not found`;
        }

        if (repos.length !== '' & repos.length > 0) {
          reposEl.innerText = '';

          repos.forEach((repo, index) => {
            if (index < 5) {
              var a = document.createElement('a');

              a.className = 'repo';
              a.href = repo.html_url;
              a.innerText = repo.name;

              reposEl.appendChild(a);
            }
          });
        }
        else {
          reposEl.innerText = 'No repo yet!'
        }
      }
    }
  }
});