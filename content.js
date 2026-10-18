const CONTENT_API = 'https://digitracker-rq61.onrender.com';

function make(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value) element.textContent = value;
  return element;
}

async function loadPublishedContent(container) {
  const type = container.dataset.cmsList;
  try {
    const response = await fetch(`${CONTENT_API}/api/v1/site/content?type=${encodeURIComponent(type)}`);
    if (!response.ok) throw new Error('Content is temporarily unavailable.');
    const payload = await response.json();
    if (!payload.items.length) return;
    const section = make('section', 'cms-content-section');
    const title = make('h2', '', container.dataset.cmsTitle || `Latest ${type}s`);
    const grid = make('div', 'cms-content-grid');
    section.append(title, grid);
    payload.items.forEach((item) => {
      const card = make('article', 'cms-content-card');
      if (item.imageUrl) {
        const image = make('img', 'cms-content-image');
        image.src = item.imageUrl;
        image.alt = '';
        image.loading = 'lazy';
        image.referrerPolicy = 'no-referrer';
        card.append(image);
      }
      card.append(make('span', 'cms-content-type', item.type));
      card.append(make('h3', '', item.title));
      card.append(make('p', 'cms-content-summary', item.summary));
      const detail = make('p', 'cms-content-body');
      detail.textContent = item.body;
      card.append(detail);
      if (item.publishedAt) card.append(make('time', 'cms-content-date', new Date(item.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })));
      if (item.linkUrl) {
        const link = make('a', 'text-link cms-content-link', 'Learn more ↗');
        link.href = item.linkUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        card.append(link);
      }
      grid.append(card);
    });
    container.replaceWith(section);
  } catch {
    container.hidden = true;
  }
}

document.querySelectorAll('[data-cms-list]').forEach(loadPublishedContent);
