const icons = document.querySelectorAll('.icon');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('body');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('open');
    navList.classList.toggle('nav__list--active');

    if (navList.classList.contains('nav__list--active')) {
      body.classList.add('body--lock');
    } else {
      body.classList.remove('body--lock');
    }
  });
});
