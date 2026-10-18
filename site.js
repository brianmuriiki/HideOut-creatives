const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

document.querySelector('#year').textContent = new Date().getFullYear();

const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.site-nav a, .footer-links a').forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
  if (linkPath === currentPath) link.setAttribute('aria-current', 'page');
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}));
