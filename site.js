const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const downloadLink = document.querySelector('.download-link');
const downloadNote = document.querySelector('.download-note');

document.querySelector('#year').textContent = new Date().getFullYear();

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

if (downloadLink) {
  downloadLink.addEventListener('click', (event) => {
    if (downloadLink.getAttribute('aria-disabled') === 'true') event.preventDefault();
  });

  fetch(downloadLink.href, { method: 'HEAD', cache: 'no-store' })
    .then((response) => {
      if (!response.ok) return;
      downloadLink.removeAttribute('aria-disabled');
      downloadLink.innerHTML = 'Download DIGITracker <span aria-hidden="true">↗</span>';
      downloadNote.textContent = 'Android APK · Download and install on your phone.';
    })
    .catch(() => {
      // Keep the download disabled until the APK is publicly available.
    });
}
