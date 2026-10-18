import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function IdeasPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"IDEA SUGGESTIONS"}</p>
          <h1>{"What would make something work better?"}</h1>
          <p className={"page-lead"}>
            {
              "Share a problem, feature request, or opportunity. Clear context helps us understand the need behind the idea."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"content-block"}>
            <h2>{"What you can suggest"}</h2>
            <div className={"idea-guide"}>
              <ul>
                <li>{"A feature or improvement for DIGITracker"}</li>
                <li>
                  {"A digital product that could solve a recurring problem"}
                </li>
                <li>
                  {"A website or app service you need for your organization"}
                </li>
                <li>
                  {"A topic for a workshop, event, or community conversation"}
                </li>
                <li>{"An area of technology you think we should explore"}</li>
              </ul>
            </div>
          </section>
          <section className={"content-block"}>
            <h2>{"Help us understand it"}</h2>
            <p>
              {
                "Tell us who experiences the problem, when it happens, what people do today, and what a better outcome might look like. Avoid sharing private or sensitive information about yourself or anyone else."
              }
            </p>
          </section>
          <section className={"notice-panel"}>
            <svg
              className={"panel-icon"}
              aria-hidden={"true"}
              focusable={"false"}
            >
              <use href={"/icons.svg#icon-lightbulb"}></use>
            </svg>
            <p className={"eyebrow"}>{"SEND YOUR SUGGESTION"}</p>
            <h2>{"We read ideas with an open mind."}</h2>
            <p>
              {"Email "}
              <a
                href={
                  "mailto:shadowhacktech@gmail.com?subject=HideOut%20Creatives%20idea%20suggestion"
                }
              >
                {"shadowhacktech@gmail.com"}
              </a>
              {
                " with \u201cIdea suggestion\u201d in the subject. Include a short description and any context you are comfortable sharing. We may not be able to respond to every message or pursue every idea."
              }
            </p>
            <a
              className={"button button-dark"}
              href={
                "mailto:shadowhacktech@gmail.com?subject=HideOut%20Creatives%20idea%20suggestion"
              }
            >
              {"Write an idea email \u2197"}
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
