// The web client ID is public; OAuth client secrets remain on the API server.
const API_BASE = 'https://digitracker-rq61.onrender.com';
const GOOGLE_CLIENT_ID = '182385611527-9spuovpp98nusnrsvh9fnts3vl4pn4u6.apps.googleusercontent.com';
const TOKEN_KEY = 'hideout-admin-token';
const VERIFIER_KEY = 'hideout-admin-code-verifier';
const STATE_KEY = 'hideout-admin-oauth-state';

const $ = (selector) => document.querySelector(selector);
const authStatus = $('#auth-status');
const dashStatus = $('#dashboard-status');
const formStatus = $('#form-status');
let entries = [];

function base64Url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function digest(value) {
  return base64Url(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)));
}

async function startGoogleSignIn() {
  if (!crypto.subtle) throw new Error('Secure Google sign-in requires HTTPS. Open the website over HTTPS and try again.');
  const verifier = base64Url(crypto.getRandomValues(new Uint8Array(48)));
  const state = base64Url(crypto.getRandomValues(new Uint8Array(24)));
  const redirectUri = `${window.location.origin}/admin/`;
  sessionStorage.setItem(VERIFIER_KEY, verifier);
  sessionStorage.setItem(STATE_KEY, state);
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    code_challenge: await digest(verifier),
    code_challenge_method: 'S256',
    state,
    prompt: 'select_account',
  });
  window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}

async function finishGoogleSignIn() {
  const currentUrl = new URL(window.location.href);
  const code = currentUrl.searchParams.get('code');
  if (!code) return false;
  const expectedState = sessionStorage.getItem(STATE_KEY);
  const actualState = currentUrl.searchParams.get('state');
  const verifier = sessionStorage.getItem(VERIFIER_KEY);
  currentUrl.searchParams.delete('code');
  currentUrl.searchParams.delete('state');
  window.history.replaceState({}, '', `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
  sessionStorage.removeItem(STATE_KEY);
  sessionStorage.removeItem(VERIFIER_KEY);
  if (!expectedState || actualState !== expectedState || !verifier) throw new Error('Google sign-in could not be verified. Please try again.');
  const result = await fetch(`${API_BASE}/api/v1/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, codeVerifier: verifier, redirectUri: `${window.location.origin}/admin/`, clientId: GOOGLE_CLIENT_ID }),
  });
  const payload = await result.json().catch(() => ({}));
  if (!result.ok) throw new Error(payload.error || 'Google sign-in failed.');
  sessionStorage.setItem(TOKEN_KEY, payload.token);
  return true;
}

async function api(path, options = {}) {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
  });
  if (response.status === 401) {
    sessionStorage.removeItem(TOKEN_KEY);
    showSignedOut('Your session expired. Please sign in again.');
    throw new Error('Please sign in again.');
  }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || 'The request could not be completed.');
  return payload;
}

function showSignedOut(message = '') {
  $('#signin-panel').hidden = false;
  $('#dashboard').hidden = true;
  $('#logout').hidden = true;
  authStatus.textContent = message;
}

function number(value) { return new Intl.NumberFormat().format(value || 0); }
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderOverview(data) {
  const metrics = $('#metrics');
  metrics.replaceChildren();
  [['Page views · 7 days', data.metrics.pageViews], ['APK download clicks · 7 days', data.metrics.apkDownloads], ['Published entries', Object.entries(data.contentCounts).filter(([key]) => key.endsWith(':published')).reduce((sum, [, count]) => sum + count, 0)]].forEach(([label, value]) => {
    const card = el('article', 'metric-card');
    card.append(el('span', '', label), el('strong', '', number(value)));
    metrics.append(card);
  });

  const topPages = $('#top-pages');
  topPages.replaceChildren();
  if (!data.topPages.length) topPages.append(el('p', 'admin-empty', 'No page view data yet.'));
  data.topPages.forEach(({ path, count }) => {
    const row = el('div', 'admin-list-row');
    row.append(el('span', '', path), el('b', '', number(count)));
    topPages.append(row);
  });

  const counts = $('#content-counts');
  counts.replaceChildren();
  const types = ['startup', 'innovation', 'event', 'blog', 'app'];
  types.forEach((type) => ['published', 'draft'].forEach((status) => {
    const chip = el('div', 'count-chip');
    chip.append(el('span', '', `${type} · ${status}`), el('b', '', number(data.contentCounts[`${type}:${status}`])));
    counts.append(chip);
  }));

  const dailyViews = $('#daily-views');
  dailyViews.replaceChildren();
  const daily = new Map(data.dailyViews.map((item) => [item.date, item.count]));
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(`${data.range.from}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + index);
    const key = date.toISOString().slice(0, 10);
    return { key, count: daily.get(key) || 0, label: date.toLocaleDateString(undefined, { weekday: 'short', timeZone: 'UTC' }) };
  });
  const peak = Math.max(...days.map((day) => day.count), 1);
  days.forEach((day) => {
    const item = el('div', 'daily-item');
    item.append(el('span', 'daily-count', number(day.count)));
    const track = el('div', 'daily-bar-track');
    const bar = el('div', 'daily-bar');
    bar.style.height = `${Math.max(day.count ? 7 : 3, Math.round(day.count / peak * 72))}px`;
    track.append(bar);
    item.append(track, el('span', '', day.label));
    dailyViews.append(item);
  });
}

function renderEntries(items) {
  entries = items;
  const tbody = $('#entries');
  tbody.replaceChildren();
  if (!items.length) {
    const row = document.createElement('tr');
    const cell = el('td', 'admin-empty', 'No entries yet. Create your first one above.');
    cell.colSpan = 5;
    row.append(cell);
    tbody.append(row);
    return;
  }
  items.forEach((item) => {
    const row = document.createElement('tr');
    row.dataset.id = item.id;
    row.append(el('td', '', item.title), el('td', '', item.type));
    const statusCell = document.createElement('td');
    statusCell.append(el('span', `state-pill ${item.status}`, item.status));
    row.append(statusCell, el('td', '', new Date(item.updatedAt || item.createdAt).toLocaleDateString()));
    const actions = document.createElement('td');
    const group = el('span', 'entry-row-actions');
    const edit = el('button', '', 'Edit');
    edit.type = 'button';
    edit.dataset.action = 'edit';
    const remove = el('button', '', 'Delete');
    remove.type = 'button';
    remove.dataset.action = 'delete';
    group.append(edit, remove);
    actions.append(group);
    row.append(actions);
    tbody.append(row);
  });
}

async function loadDashboard() {
  dashStatus.textContent = 'Loading website overview…';
  const [overview, content] = await Promise.all([api('/api/v1/admin/overview'), api('/api/v1/admin/content')]);
  renderOverview(overview);
  renderEntries(content.items);
  dashStatus.textContent = '';
}

async function enterDashboard() {
  const result = await api('/api/v1/admin/session');
  $('#signed-in').textContent = `Signed in as ${result.admin.name || result.admin.email}`;
  $('#signin-panel').hidden = true;
  $('#dashboard').hidden = false;
  $('#logout').hidden = false;
  await loadDashboard();
}

function resetEditor() {
  $('#entry-form').reset();
  $('#entry-form [name="id"]').value = '';
  delete $('#entry-form [name="slug"]').dataset.edited;
  $('#editor-wrap').hidden = true;
  formStatus.textContent = '';
}

$('#google-signin').addEventListener('click', async () => {
  authStatus.textContent = 'Opening Google…';
  try { await startGoogleSignIn(); } catch (error) { authStatus.textContent = error.message; }
});

$('#logout').addEventListener('click', async () => {
  try { await api('/api/v1/auth/logout', { method: 'POST' }); } catch { /* Clear the local session even if the network is unavailable. */ }
  sessionStorage.removeItem(TOKEN_KEY);
  showSignedOut();
});

$('#refresh').addEventListener('click', async () => {
  try { await loadDashboard(); } catch (error) { dashStatus.textContent = error.message; }
});

$('#new-entry').addEventListener('click', () => {
  resetEditor();
  $('#editor-wrap').hidden = false;
  $('#entry-form [name="title"]').focus();
});

$('#cancel-edit').addEventListener('click', resetEditor);

$('#entry-form [name="title"]').addEventListener('input', (event) => {
  const slug = $('#entry-form [name="slug"]');
  if (slug.dataset.edited === 'true') return;
  slug.value = event.target.value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 100);
});
$('#entry-form [name="slug"]').addEventListener('input', (event) => { event.target.dataset.edited = 'true'; });

$('#entry-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.textContent = 'Saving…';
  const form = new FormData(event.currentTarget);
  const values = Object.fromEntries(form.entries());
  const id = values.id;
  delete values.id;
  try {
    await api(id ? `/api/v1/admin/content/${encodeURIComponent(id)}` : '/api/v1/admin/content', { method: id ? 'PUT' : 'POST', body: JSON.stringify(values) });
    resetEditor();
    $('#dashboard-status').textContent = 'Content saved.';
    await loadDashboard();
  } catch (error) { formStatus.textContent = error.message; }
});

$('#entries').addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-action]');
  const row = button?.closest('tr');
  if (!button || !row) return;
  const item = entries.find((entry) => entry.id === row.dataset.id);
  if (!item) return;
  if (button.dataset.action === 'edit') {
    const form = $('#entry-form');
    Object.entries({ ...item, id: item.id }).forEach(([name, value]) => {
      const control = form.elements.namedItem(name);
      if (control) control.value = value || '';
    });
    form.elements.namedItem('slug').dataset.edited = 'false';
    $('#editor-wrap').hidden = false;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
  try {
    await api(`/api/v1/admin/content/${encodeURIComponent(item.id)}`, { method: 'DELETE' });
    await loadDashboard();
    dashStatus.textContent = 'Entry deleted.';
  } catch (error) { dashStatus.textContent = error.message; }
});

(async () => {
  try {
    const completed = await finishGoogleSignIn();
    if (completed) authStatus.textContent = '';
    if (sessionStorage.getItem(TOKEN_KEY)) await enterDashboard();
  } catch (error) {
    if (error.message === 'This account is not allowed to administer the website.') sessionStorage.removeItem(TOKEN_KEY);
    showSignedOut(error.message);
  }
})();
