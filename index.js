const burgerMenu = document.getElementById('burger-menu');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--open');
  nav.classList.toggle('nav--open');
});