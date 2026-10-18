import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function BlogPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"NOTES FROM THE STUDIO"}</p>
          <h1>{"Thinking out loud about useful technology."}</h1>
          <p className={"page-lead"}>
            {
              "The HideOut Creatives blog shares practical perspectives on building digital products, choosing what to build, and making software work better for people."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <CmsList type="blog" title="Latest from the studio" />
          <section className={"article-list"}>
            <article>
              <svg
                className={"article-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-lightbulb"}></use>
              </svg>
              <span className={"article-meta"}>{"PRODUCT THINKING"}</span>
              <h2>{"Start with the problem, not the feature list"}</h2>
              <p>
                {
                  "A product idea often arrives as a set of features. Before designing screens, ask who has the problem, when it happens, and what a better outcome would look like. A sharp problem statement helps teams decide what belongs in the first version\u2014and what can wait."
                }
              </p>
              <p>
                {
                  "For a small team, that focus matters. It keeps the work tied to a real need and makes it easier to learn from the first people who use the product."
                }
              </p>
            </article>
            <article>
              <svg
                className={"article-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-globe"}></use>
              </svg>
              <span className={"article-meta"}>{"BUILDING FOR THE WEB"}</span>
              <h2>
                {"A company website should help people take the next step"}
              </h2>
              <p>
                {
                  "A good company website does more than look polished. It explains what the company does, helps visitors find relevant work, and makes the next action clear. That may be reading a product guide, exploring a service, or starting a conversation."
                }
              </p>
              <p>
                {
                  "Clear structure, readable content, and responsive design are part of the product\u2014not decoration added at the end."
                }
              </p>
            </article>
            <article>
              <svg
                className={"article-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-activity"}></use>
              </svg>
              <span className={"article-meta"}>{"DIGITAL WELLNESS"}</span>
              <h2>
                {"Personal tracking should support people, not judge them"}
              </h2>
              <p>
                {
                  "Trackers can help people notice routines and reflect on progress. They should leave room for different goals, different days, and the user\u2019s own judgment. A record is useful when it helps someone make a choice; it should not pretend to make that choice for them."
                }
              </p>
              <p>
                {
                  "This is one of the ideas behind DIGITracker\u2019s planning, movement, and wellness features."
                }
              </p>
            </article>
          </section>
          <section className={"notice-panel"}>
            <p className={"eyebrow"}>{"FOLLOW THE PRODUCT"}</p>
            <h2>{"Read the DIGITracker guide"}</h2>
            <p>
              {
                "Explore the app\u2019s features, installation notes, and privacy details in the "
              }
              <a href={"/docs/digitracker.html"}>{"documentation"}</a>
              {"."}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
