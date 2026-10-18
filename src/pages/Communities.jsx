import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function CommunitiesPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"COMMUNITY"}</p>
          <h1>{"Better products start by listening."}</h1>
          <p className={"page-lead"}>
            {
              "We want our work to reflect the people it is meant to serve. Community engagement helps us learn, share practical knowledge, and build more useful products."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"content-block"}>
            <h2>{"Ways to take part"}</h2>
            <p>
              <strong>{"Share product feedback."}</strong>
              {
                " Tell us what is clear, what gets in the way, and what would make an app more useful to you."
              }
            </p>
            <p>
              <strong>{"Build together."}</strong>
              {
                " We are open to project conversations with founders, local organizations, and other makers whose goals align with thoughtful technology."
              }
            </p>
            <p>
              <strong>{"Learn together."}</strong>
              {
                " We hope to host and join practical discussions and events as opportunities develop."
              }
            </p>
          </section>
          <section className={"community-grid"}>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-activity"}></use>
              </svg>
              <span>{"DIGITRACKER"}</span>
              <h2>{"Help shape the app"}</h2>
              <p>
                {
                  "Explore the current features and share ideas for improvements through our product documentation and contact page."
                }
              </p>
              <a className={"text-link"} href={"/docs/digitracker.html"}>
                {"Read the app guide \u2197"}
              </a>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-users"}></use>
              </svg>
              <span>{"COLLABORATION"}</span>
              <h2>{"Bring a shared challenge"}</h2>
              <p>
                {
                  "Tell us about the people you serve, the need you see, and what a useful digital response might look like."
                }
              </p>
              <a className={"text-link"} href={"/contacts.html"}>
                {"Start a conversation \u2197"}
              </a>
            </article>
          </section>
          <section className={"content-block"}>
            <h2>{"Our commitment"}</h2>
            <p>
              {
                "We aim to make participation respectful and accessible. We do not promise that every suggestion will become a feature; we do commit to considering feedback in the context of user needs, feasibility, safety, and product direction."
              }
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
