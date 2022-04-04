var containers = document.querySelectorAll('.container');

containers.forEach(container => {
  container.addEventListener('click', () => {
    containers.forEach(c => c.classList.remove('active'));

    container.classList.add('active');
  });
});