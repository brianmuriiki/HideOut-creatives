import { useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://digitracker-rq61.onrender.com";

export default function RatingWidget({ topic }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const slug = topic.replace(/[^a-z0-9-]/g, "-");

  async function submit(event) {
    event.preventDefault();
    if (!rating) return;
    setSending(true);
    setStatus("Sending your rating…");
    try {
      const response = await fetch(`${API_BASE}/api/v1/site/ratings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, rating, feedback: feedback.trim() }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          payload.error || "Your rating could not be saved. Please try again.",
        );
      setRating(0);
      setFeedback("");
      setStatus("Thanks for sharing your rating. It has been saved.");
    } catch (error) {
      setStatus(
        `${error.message} You can contact us at shadowhacktech@gmail.com.`,
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="rating-widget" onSubmit={submit}>
      <div className="rating-copy">
        <p className="eyebrow">YOUR FEEDBACK</p>
        <h2>
          {topic === "digitracker"
            ? "How useful is DIGITracker to you?"
            : topic === "startups"
              ? "How helpful is our startup guidance?"
              : "How useful is our innovation work?"}
        </h2>
        <p>
          {topic === "digitracker"
            ? "Rate the app based on your experience. A short comment can help us understand what to improve."
            : topic === "startups"
              ? "Rate the clarity and usefulness of our early-stage product approach."
              : "Tell us whether our product experiments and technology ideas feel relevant and useful."}
        </p>
      </div>
      <fieldset className="rating-fieldset">
        <legend>Choose a rating from 1 to 5 stars</legend>
        <div className="rating-stars" onMouseLeave={() => setHovered(0)}>
          {[5, 4, 3, 2, 1].map((value) => (
            <span
              className={`rating-choice ${value <= (hovered || rating) ? "is-lit" : ""}`}
              key={value}
            >
              <input
                id={`rating-${slug}-${value}`}
                type="radio"
                name={`rating-${slug}`}
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                required
                aria-label={`${value} out of 5 stars`}
              />
              <label
                htmlFor={`rating-${slug}-${value}`}
                aria-hidden="true"
                onMouseEnter={() => setHovered(value)}
              >
                ★
              </label>
            </span>
          ))}
        </div>
      </fieldset>
      <label className="rating-comment-label" htmlFor={`feedback-${slug}`}>
        What shaped your rating? <span>Optional</span>
      </label>
      <textarea
        id={`feedback-${slug}`}
        name="feedback"
        rows="3"
        maxLength="1200"
        placeholder="Share a short note. Please don’t include private or sensitive information."
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
      />
      <button
        className="button button-dark rating-submit"
        type="submit"
        disabled={sending}
      >
        Share rating <span aria-hidden="true">↗</span>
      </button>
      <p className="rating-disclosure">
        Ratings and optional comments are stored without your name and are
        visible only to HideOut Creatives admins for up to one year. Please
        don’t include private or sensitive information.
      </p>
      <p className="rating-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
