const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Auto close menu saat link diklik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
  });
});
