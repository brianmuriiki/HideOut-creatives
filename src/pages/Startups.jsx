import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function StartupsPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"STARTUPS & FOUNDERS"}</p>
          <h1>{"Make the first version count."}</h1>
          <p className={"page-lead"}>
            {
              "For early-stage teams, the most useful first build is the one that tests the riskiest assumption and helps you learn from real users."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <CmsList type="startup" title="Featured startup stories" />
          <section className={"content-block"}>
            <h2>{"Support for the early product journey"}</h2>
            <p>
              {
                "HideOut Creatives can help founders move from a rough concept to a focused digital product. We work through the problem, the target user, the essential experience, and the best first step\u2014whether that is a landing page, a prototype, or an app MVP."
              }
            </p>
            <p>
              {
                "We are a product development studio, not an investment fund or accelerator. Our role is to help clarify and build digital experiences."
              }
            </p>
          </section>
          <section className={"step-list"}>
            <article>
              <b>{"01"}</b>
              <svg
                className={"step-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-compass"}></use>
              </svg>
              <div>
                <h2>{"Understand the opportunity"}</h2>
                <p>
                  {
                    "Define the audience, the problem, and how people handle it today."
                  }
                </p>
              </div>
            </article>
            <article>
              <b>{"02"}</b>
              <svg
                className={"step-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-flask"}></use>
              </svg>
              <div>
                <h2>{"Choose a focused test"}</h2>
                <p>
                  {
                    "Decide whether you need a website, prototype, or working product to learn the next thing."
                  }
                </p>
              </div>
            </article>
            <article>
              <b>{"03"}</b>
              <svg
                className={"step-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-rocket"}></use>
              </svg>
              <div>
                <h2>{"Build and get feedback"}</h2>
                <p>
                  {
                    "Make a useful first version, show it to the right people, and use what you learn to guide the next iteration."
                  }
                </p>
              </div>
            </article>
          </section>
          <section className={"content-block"}>
            <h2>{"Questions to bring"}</h2>
            <p>
              {
                "Who is the product for? What problem does it solve? What is the smallest version that would be useful? What do you need help with right now? You do not need every answer before you contact us."
              }
            </p>
          </section>
          <RatingWidget topic="startups" />
          <div className={"page-cta"}>
            <div>
              <p className={"eyebrow"}>{"EARLY-STAGE PRODUCT?"}</p>
              <h2>{"Let\u2019s turn the idea into a plan."}</h2>
            </div>
            <a className={"button button-lime"} href={"/contacts.html"}>
              {"Discuss your project \u2197"}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
