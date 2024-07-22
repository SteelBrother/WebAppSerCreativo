(function() {
  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  let lastScroll = window.scrollY || window.pageYOffset;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY || window.pageYOffset;

      if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
        // Scroll down
        header.classList.add('hidden');
        if (navMenu) {
          navMenu.classList.remove('show-menu'); // Ocultar el menú al hacer scroll hacia abajo
        }
      } else if (currentScroll < lastScroll) {
        // Scroll up
        header.classList.remove('hidden');
      }

      lastScroll = currentScroll;
    });
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.toggle('show-menu');
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    });
  }
})();
