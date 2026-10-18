import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function InnovationPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"INNOVATION"}</p>
          <h1>{"Explore possibilities. Build what proves useful."}</h1>
          <p className={"page-lead"}>
            {
              "Innovation at HideOut Creatives starts with a question: can technology make this task, service, or experience work better for people?"
            }
          </p>
        </section>
        <div className={"page-content"}>
          <CmsList type="innovation" title="Ideas in progress" />
          <section className={"content-block"}>
            <h2>{"Curiosity with a purpose"}</h2>
            <p>
              {
                "We explore emerging tools and new product ideas, then evaluate them against a practical need. A prototype, workflow experiment, or technical spike is valuable when it helps answer a question\u2014not simply because the technology is new."
              }
            </p>
            <p>
              {
                "Our current product work gives us hands-on experience with personal productivity, wellness tracking, mobile software, AI-assisted features, and web services. We share learnings as they become useful to others."
              }
            </p>
          </section>
          <section className={"innovation-grid"}>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-compass"}></use>
              </svg>
              <span>{"01 / OBSERVE"}</span>
              <h2>{"Find the real friction"}</h2>
              <p>
                {
                  "Understand who is affected, what they are trying to accomplish, and where the current experience falls short."
                }
              </p>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-flask"}></use>
              </svg>
              <span>{"02 / EXPLORE"}</span>
              <h2>{"Test the possibility"}</h2>
              <p>
                {
                  "Use research, sketches, prototypes, or a small technical experiment to learn before scaling up."
                }
              </p>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-rocket"}></use>
              </svg>
              <span>{"03 / APPLY"}</span>
              <h2>{"Turn learning into value"}</h2>
              <p>
                {
                  "Keep what helps, explain the trade-offs, and build a reliable experience around the result."
                }
              </p>
            </article>
          </section>
          <section className={"content-block"}>
            <h2>{"Areas we are interested in"}</h2>
            <p>
              {
                "Accessible digital services, thoughtful AI assistance, mobile-first experiences, health and fitness tools, and software that helps small teams do meaningful work."
              }
            </p>
            <p>
              {
                "These are areas of exploration, not claims that every idea is already a product. Follow our "
              }
              <a href={"/blog.html"}>{"studio notes"}</a>
              {" for work we are ready to share."}
            </p>
          </section>
          <RatingWidget topic="innovation" />
        </div>
      </main>
    </>
  );
}
