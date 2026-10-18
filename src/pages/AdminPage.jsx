import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://digitracker-rq61.onrender.com";
const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "182385611527-9spuovpp98nusnrsvh9fnts3vl4pn4u6.apps.googleusercontent.com";
const TOKEN_KEY = "hideout-admin-token";
const VERIFIER_KEY = "hideout-admin-code-verifier";
const STATE_KEY = "hideout-admin-oauth-state";
const emptyEntry = {
  id: "",
  type: "startup",
  title: "",
  slug: "",
  summary: "",
  body: "",
  imageUrl: "",
  linkUrl: "",
  status: "draft",
};

function encodeBase64Url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function formatNumber(value) {
  return new Intl.NumberFormat().format(value || 0);
}

async function sha256(value) {
  return encodeBase64Url(
    await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)),
  );
}

export default function AdminPage() {
  const [token, setToken] = useState(
    () => sessionStorage.getItem(TOKEN_KEY) || "",
  );
  const [admin, setAdmin] = useState(null);
  const [authStatus, setAuthStatus] = useState("");
  const [dashboardStatus, setDashboardStatus] = useState("");
  const [overview, setOverview] = useState(null);
  const [entries, setEntries] = useState([]);
  const [ratings, setRatings] = useState({ summary: {}, recent: [] });
  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState(emptyEntry);
  const [slugEdited, setSlugEdited] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const handledOAuth = useRef(false);

  const api = useCallback(
    async (path, options = {}) => {
      const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
          ...(options.body ? { "Content-Type": "application/json" } : {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options.headers,
        },
      });
      const payload = await response.json().catch(() => ({}));
      if (response.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setToken("");
        throw new Error("Your session expired. Please sign in again.");
      }
      if (!response.ok)
        throw new Error(payload.error || "The request could not be completed.");
      return payload;
    },
    [token],
  );

  const loadDashboard = useCallback(async () => {
    setDashboardStatus("Loading website overview…");
    const [summary, content, feedback] = await Promise.all([
      api("/api/v1/admin/overview"),
      api("/api/v1/admin/content"),
      api("/api/v1/admin/ratings"),
    ]);
    setOverview(summary);
    setEntries(content.items);
    setRatings(feedback);
    setDashboardStatus("");
  }, [api]);

  useEffect(() => {
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", "noindex, nofollow");
  }, []);

  useEffect(() => {
    if (handledOAuth.current) return;
    handledOAuth.current = true;
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const oauthError = url.searchParams.get("error");
    if (oauthError)
      setAuthStatus("Google sign-in was cancelled. You can try again.");
    if (!code) return;

    const expectedState = sessionStorage.getItem(STATE_KEY);
    const state = url.searchParams.get("state");
    const verifier = sessionStorage.getItem(VERIFIER_KEY);
    url.searchParams.delete("code");
    url.searchParams.delete("state");
    url.searchParams.delete("scope");
    url.searchParams.delete("authuser");
    url.searchParams.delete("prompt");
    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
    sessionStorage.removeItem(STATE_KEY);
    sessionStorage.removeItem(VERIFIER_KEY);

    if (!expectedState || state !== expectedState || !verifier) {
      setAuthStatus("Google sign-in could not be verified. Please try again.");
      return;
    }
    const redirectUri = `${window.location.origin}/admin/`;
    fetch(`${API_BASE}/api/v1/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        codeVerifier: verifier,
        redirectUri,
        clientId: GOOGLE_CLIENT_ID,
      }),
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (!response.ok)
          throw new Error(payload.error || "Google sign-in failed.");
        sessionStorage.setItem(TOKEN_KEY, payload.token);
        setToken(payload.token);
        setAuthStatus("");
      })
      .catch((error) => setAuthStatus(error.message));
  }, []);

  useEffect(() => {
    if (!token) {
      setAdmin(null);
      setOverview(null);
      return;
    }
    let cancelled = false;
    Promise.all([api("/api/v1/admin/session"), loadDashboard()])
      .then(([session]) => {
        if (!cancelled) setAdmin(session.admin);
      })
      .catch((error) => {
        if (!cancelled) {
          if (error.message.includes("not allowed")) {
            sessionStorage.removeItem(TOKEN_KEY);
            setToken("");
          }
          setDashboardStatus(error.message);
          setAuthStatus(error.message);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [token, api, loadDashboard]);

  async function signIn() {
    try {
      if (!crypto.subtle)
        throw new Error("Secure Google sign-in requires HTTPS.");
      const verifier = encodeBase64Url(
        crypto.getRandomValues(new Uint8Array(48)),
      );
      const state = encodeBase64Url(crypto.getRandomValues(new Uint8Array(24)));
      const redirectUri = `${window.location.origin}/admin/`;
      sessionStorage.setItem(VERIFIER_KEY, verifier);
      sessionStorage.setItem(STATE_KEY, state);
      const query = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: "code",
        scope: "openid email profile",
        code_challenge: await sha256(verifier),
        code_challenge_method: "S256",
        state,
        prompt: "select_account",
      });
      window.location.assign(
        `https://accounts.google.com/o/oauth2/v2/auth?${query}`,
      );
    } catch (error) {
      setAuthStatus(error.message);
    }
  }

  async function signOut() {
    try {
      await api("/api/v1/auth/logout", { method: "POST" });
    } catch {
      /* Clear the local token if offline. */
    }
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setAdmin(null);
  }

  function startNewEntry() {
    setForm(emptyEntry);
    setSlugEdited(false);
    setFormStatus("");
    setEditorOpen(true);
  }

  function editEntry(entry) {
    setForm({ ...emptyEntry, ...entry });
    setSlugEdited(true);
    setFormStatus("");
    setEditorOpen(true);
    window.setTimeout(
      () =>
        document
          .querySelector(".entry-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0,
    );
  }

  function updateField(name, value) {
    setForm((current) => {
      if (name === "title" && !slugEdited) {
        const slug = value
          .normalize("NFKD")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 100);
        return { ...current, title: value, slug };
      }
      return { ...current, [name]: value };
    });
  }

  async function saveEntry(event) {
    event.preventDefault();
    setSaving(true);
    setFormStatus("Saving…");
    const { id, ...entry } = form;
    try {
      await api(
        id
          ? `/api/v1/admin/content/${encodeURIComponent(id)}`
          : "/api/v1/admin/content",
        { method: id ? "PUT" : "POST", body: JSON.stringify(entry) },
      );
      setEditorOpen(false);
      setFormStatus("");
      await loadDashboard();
      setDashboardStatus("Content saved.");
    } catch (error) {
      setFormStatus(error.message);
    } finally {
      setSaving(false);
    }
  }

  async function deleteEntry(entry) {
    if (!window.confirm(`Delete “${entry.title}”? This cannot be undone.`))
      return;
    try {
      await api(`/api/v1/admin/content/${encodeURIComponent(entry.id)}`, {
        method: "DELETE",
      });
      await loadDashboard();
      setDashboardStatus("Entry deleted.");
    } catch (error) {
      setDashboardStatus(error.message);
    }
  }

  if (!token || !admin) {
    return (
      <div className="admin-body">
        <header className="admin-topbar">
          <Link to="/" aria-label="HideOut Creatives home">
            <img src="/hideout-creatives.svg" alt="HideOut Creatives" />
          </Link>
          <span>WEBSITE ADMIN</span>
        </header>
        <main className="admin-main">
          <section className="admin-card signin-card">
            <p className="eyebrow">PRIVATE WORKSPACE</p>
            <h1>Manage the website.</h1>
            <p className="admin-intro">
              Sign in with the approved Google account to review activity,
              ratings, and publish company updates.
            </p>
            <button
              className="admin-button admin-primary"
              type="button"
              onClick={signIn}
            >
              Continue with Google <span aria-hidden="true">↗</span>
            </button>
            <p className="admin-status" role="status" aria-live="polite">
              {authStatus}
            </p>
          </section>
        </main>
      </div>
    );
  }

  const publishedCount = Object.entries(overview?.contentCounts || {})
    .filter(([key]) => key.endsWith(":published"))
    .reduce((total, [, count]) => total + count, 0);
  const dayItems = Array.from({ length: 7 }, (_, index) => {
    const first = overview?.range?.from
      ? new Date(`${overview.range.from}T00:00:00Z`)
      : new Date();
    first.setUTCDate(first.getUTCDate() + index);
    const date = first.toISOString().slice(0, 10);
    const found = overview?.dailyViews?.find((item) => item.date === date);
    return {
      date,
      count: found?.count || 0,
      label: first.toLocaleDateString(undefined, {
        weekday: "short",
        timeZone: "UTC",
      }),
    };
  });
  const peak = Math.max(1, ...dayItems.map((day) => day.count));

  return (
    <div className="admin-body">
      <header className="admin-topbar">
        <Link to="/" aria-label="HideOut Creatives home">
          <img src="/hideout-creatives.svg" alt="HideOut Creatives" />
        </Link>
        <span>WEBSITE ADMIN</span>
        <button
          className="admin-button admin-quiet"
          type="button"
          onClick={signOut}
        >
          Sign out
        </button>
      </header>
      <main className="admin-main">
        <div className="admin-heading">
          <div>
            <p className="eyebrow">HIDEOUT CREATIVES · CONTROL ROOM</p>
            <h1>Website overview</h1>
            <p className="admin-muted">
              Signed in as {admin.name || admin.email}
            </p>
          </div>
          <button
            className="admin-button admin-quiet"
            type="button"
            onClick={() =>
              loadDashboard().catch((error) =>
                setDashboardStatus(error.message),
              )
            }
          >
            Refresh overview
          </button>
        </div>
        <p className="admin-status" role="status" aria-live="polite">
          {dashboardStatus}
        </p>
        <div className="metric-grid">
          <Metric
            label="Page views · 7 days"
            value={overview?.metrics?.pageViews}
          />
          <Metric
            label="APK download clicks · 7 days"
            value={overview?.metrics?.apkDownloads}
          />
          <Metric label="Published entries" value={publishedCount} />
        </div>
        <div className="admin-columns">
          <section className="admin-card">
            <SectionHeading eyebrow="LAST 7 DAYS" title="Most viewed pages" />
            <div className="admin-list">
              {overview?.topPages?.length ? (
                overview.topPages.map((item) => (
                  <div className="admin-list-row" key={item.path}>
                    <span>{item.path}</span>
                    <b>{formatNumber(item.count)}</b>
                  </div>
                ))
              ) : (
                <p className="admin-empty">No page view data yet.</p>
              )}
            </div>
          </section>
          <section className="admin-card">
            <SectionHeading eyebrow="CONTENT" title="Published and drafts" />
            <div className="count-grid">
              {["startup", "innovation", "event", "blog", "app"].flatMap(
                (type) =>
                  ["published", "draft"].map((status) => (
                    <div className="count-chip" key={`${type}:${status}`}>
                      <span>
                        {type} · {status}
                      </span>
                      <b>
                        {formatNumber(
                          overview?.contentCounts?.[`${type}:${status}`],
                        )}
                      </b>
                    </div>
                  )),
              )}
            </div>
          </section>
        </div>
        <section className="admin-card daily-card">
          <SectionHeading eyebrow="TRAFFIC TREND" title="Views by day" />
          <div className="daily-views">
            {dayItems.map((day) => (
              <div className="daily-item" key={day.date}>
                <span className="daily-count">{formatNumber(day.count)}</span>
                <div className="daily-bar-track">
                  <div
                    className="daily-bar"
                    style={{
                      height: `${Math.max(day.count ? 7 : 3, Math.round((day.count / peak) * 72))}px`,
                    }}
                  />
                </div>
                <span>{day.label}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="admin-card ratings-card">
          <SectionHeading
            eyebrow="COMMUNITY FEEDBACK"
            title="Ratings and comments"
          />
          <p className="admin-muted">
            Anonymous feedback is visible to admins and retained for up to one
            year.
          </p>
          <div className="rating-summary">
            {["digitracker", "startups", "innovation"].map((topic) => {
              const score = ratings.summary?.[topic];
              return (
                <div className="rating-summary-item" key={topic}>
                  <span>{topic}</span>
                  <strong>
                    {score ? `★ ${score.average.toFixed(1)} / 5` : "— / 5"}
                  </strong>
                  <small>{formatNumber(score?.count)} ratings</small>
                </div>
              );
            })}
          </div>
          <div className="rating-comments">
            {ratings.recent?.length ? (
              ratings.recent.map((item, index) => (
                <article
                  className="rating-comment"
                  key={`${item.topic}-${item.createdAt}-${index}`}
                >
                  <div className="rating-comment-head">
                    <span>{item.topic}</span>
                    <time>{new Date(item.createdAt).toLocaleDateString()}</time>
                  </div>
                  <div className="rating-comment-stars">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)} ({item.rating}/5)
                  </div>
                  <p>{item.feedback}</p>
                </article>
              ))
            ) : (
              <p className="admin-empty">
                No written feedback has been submitted yet.
              </p>
            )}
          </div>
        </section>
        <section className="admin-card content-manager">
          <div className="admin-section-heading">
            <div>
              <p className="eyebrow">PUBLISHING</p>
              <h2>Website content</h2>
              <p className="admin-muted">
                Create announcements, startups, innovations, events, blog posts,
                and app listings.
              </p>
            </div>
            <button
              className="admin-button admin-primary"
              type="button"
              onClick={startNewEntry}
            >
              New entry <span aria-hidden="true">＋</span>
            </button>
          </div>
          {editorOpen && (
            <div className="editor-wrap">
              <form className="entry-form" onSubmit={saveEntry}>
                <label>
                  Content type
                  <select
                    value={form.type}
                    onChange={(event) =>
                      updateField("type", event.target.value)
                    }
                    required
                  >
                    <option value="startup">Startup</option>
                    <option value="innovation">Innovation</option>
                    <option value="event">Event</option>
                    <option value="blog">Blog</option>
                    <option value="app">App</option>
                  </select>
                </label>
                <label>
                  Title
                  <input
                    value={form.title}
                    onChange={(event) =>
                      updateField("title", event.target.value)
                    }
                    required
                    maxLength="120"
                  />
                </label>
                <label>
                  URL slug
                  <input
                    value={form.slug}
                    onChange={(event) => {
                      setSlugEdited(true);
                      updateField("slug", event.target.value);
                    }}
                    required
                    maxLength="100"
                    pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
                    placeholder="my-project-update"
                  />
                  <small>Lowercase letters, numbers, and hyphens.</small>
                </label>
                <label>
                  Short summary
                  <textarea
                    value={form.summary}
                    onChange={(event) =>
                      updateField("summary", event.target.value)
                    }
                    rows="2"
                    required
                    maxLength="280"
                  />
                </label>
                <label>
                  Details
                  <textarea
                    value={form.body}
                    onChange={(event) =>
                      updateField("body", event.target.value)
                    }
                    rows="7"
                    required
                    maxLength="12000"
                  />
                </label>
                <div className="entry-form-row">
                  <label>
                    Image URL <span>(optional, public HTTPS)</span>
                    <input
                      value={form.imageUrl}
                      onChange={(event) =>
                        updateField("imageUrl", event.target.value)
                      }
                      type="url"
                      placeholder="https://…"
                    />
                  </label>
                  <label>
                    Related link <span>(optional, public HTTPS)</span>
                    <input
                      value={form.linkUrl}
                      onChange={(event) =>
                        updateField("linkUrl", event.target.value)
                      }
                      type="url"
                      placeholder="https://…"
                    />
                  </label>
                </div>
                <label>
                  Publish state
                  <select
                    value={form.status}
                    onChange={(event) =>
                      updateField("status", event.target.value)
                    }
                  >
                    <option value="draft">
                      Draft · only admins can see it
                    </option>
                    <option value="published">
                      Published · visible on the website
                    </option>
                  </select>
                </label>
                <div className="entry-actions">
                  <button
                    className="admin-button admin-primary"
                    type="submit"
                    disabled={saving}
                  >
                    Save entry
                  </button>
                  <button
                    className="admin-button admin-quiet"
                    type="button"
                    onClick={() => setEditorOpen(false)}
                  >
                    Cancel
                  </button>
                  <span className="admin-status" role="status">
                    {formStatus}
                  </span>
                </div>
              </form>
            </div>
          )}
          <div className="entry-table-wrap">
            <table className="entry-table">
              <thead>
                <tr>
                  <th>Entry</th>
                  <th>Type</th>
                  <th>State</th>
                  <th>Updated</th>
                  <th>
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.length ? (
                  entries.map((entry) => (
                    <tr key={entry.id}>
                      <td>{entry.title}</td>
                      <td>{entry.type}</td>
                      <td>
                        <span className={`state-pill ${entry.status}`}>
                          {entry.status}
                        </span>
                      </td>
                      <td>
                        {new Date(
                          entry.updatedAt || entry.createdAt,
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        <span className="entry-row-actions">
                          <button
                            type="button"
                            onClick={() => editEntry(entry)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry)}
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="admin-empty" colSpan="5">
                      No entries yet. Create your first one above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        <p className="admin-footnote">
          Overview counts anonymous page views and APK download clicks. They are
          directional website usage counts, not full Vercel performance or
          uptime monitoring.
        </p>
      </main>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{formatNumber(value)}</strong>
    </article>
  );
}
function SectionHeading({ eyebrow, title }) {
  return (
    <div className="admin-section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
