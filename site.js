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

if (!window.location.pathname.startsWith('/admin')) {
  const API_BASE = 'https://digitracker-rq61.onrender.com';
  const path = window.location.pathname.slice(0, 150) || '/';
  const sendEvent = (eventName) => {
    const body = JSON.stringify({ event: eventName, path });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(`${API_BASE}/api/v1/site/events`, new Blob([body], { type: 'application/json' }));
    } else {
      fetch(`${API_BASE}/api/v1/site/events`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
    }
  };
  sendEvent('page_view');
  document.querySelectorAll('a[href*="DIGITracker-latest.apk"]').forEach((link) => link.addEventListener('click', () => sendEvent('apk_download')));
}
