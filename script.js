const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  console.log('Menu toggled. Current state:', navLinks.classList.contains('hidden') ? 'hidden' : 'visible');
});
