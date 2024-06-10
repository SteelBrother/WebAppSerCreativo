const header = document.getElementById('header');
let lastScroll = window.scrollY || window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY || window.pageYOffset;

  if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
    // Scroll down
    header.classList.add('hidden');
    navMenu.classList.remove('show-menu'); // Ocultar el menú al hacer scroll hacia abajo
  } else if (currentScroll < lastScroll) {
    // Scroll up
    header.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});

// Toggle menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

