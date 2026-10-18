import { useEffect, useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://digitracker-rq61.onrender.com";

export default function CmsList({ type, title }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_BASE}/api/v1/site/content?type=${encodeURIComponent(type)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Content is temporarily unavailable.");
        return response.json();
      })
      .then((payload) => setItems(payload.items || []))
      .catch(() => {});
    return () => controller.abort();
  }, [type]);

  useEffect(() => {
    if (type !== "event" || !items.length) return undefined;
    document.body.classList.add("has-event-listings");
    return () => document.body.classList.remove("has-event-listings");
  }, [items.length, type]);

  if (!items.length) return null;
  return (
    <section className="cms-content-section" aria-live="polite">
      <h2>{title}</h2>
      <div className="cms-content-grid">
        {items.map((item) => (
          <article className="cms-content-card" key={item.id}>
            {item.imageUrl && (
              <img
                className="cms-content-image"
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            )}
            <span className="cms-content-type">{item.type}</span>
            <h3>{item.title}</h3>
            <p className="cms-content-summary">{item.summary}</p>
            <p className="cms-content-body">{item.body}</p>
            {item.publishedAt && (
              <time className="cms-content-date" dateTime={item.publishedAt}>
                {new Date(item.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            )}
            {item.linkUrl && (
              <a
                className="text-link cms-content-link"
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
