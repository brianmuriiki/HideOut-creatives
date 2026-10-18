import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function ServicesPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"SERVICES"}</p>
          <h1>
            {"Websites, apps, and digital products\u2014built around the need."}
          </h1>
          <p className={"page-lead"}>
            {
              "We help turn a business or product goal into a clear digital experience. From a company website to a mobile app, we focus on what the experience needs to do for the people using it."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"service-grid"}>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-globe"}></use>
              </svg>
              <span>{"01 / WEB"}</span>
              <h2>{"Website creation"}</h2>
              <p>
                {
                  "Company websites, landing pages, and product sites that explain what you offer and guide visitors to a useful next step."
                }
              </p>
              <ul>
                <li>{"Page structure and content planning"}</li>
                <li>{"Responsive interface design"}</li>
                <li>{"Front-end development and launch support"}</li>
              </ul>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-mobile"}></use>
              </svg>
              <span>{"02 / MOBILE"}</span>
              <h2>{"App development"}</h2>
              <p>
                {
                  "Mobile and cross-platform apps designed around real workflows, with a foundation that can grow as needs evolve."
                }
              </p>
              <ul>
                <li>{"Feature definition and user journeys"}</li>
                <li>{"Mobile interface and app development"}</li>
                <li>{"API and backend integration"}</li>
              </ul>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-layers"}></use>
              </svg>
              <span>{"03 / PRODUCT"}</span>
              <h2>{"Digital product design"}</h2>
              <p>
                {
                  "Make an early concept easier to understand and test before committing to a larger build."
                }
              </p>
              <ul>
                <li>{"Product discovery and requirements"}</li>
                <li>{"Wireframes and interactive prototypes"}</li>
                <li>{"Minimum viable product planning"}</li>
              </ul>
            </article>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-compass"}></use>
              </svg>
              <span>{"04 / IMPROVEMENT"}</span>
              <h2>{"Product refinement"}</h2>
              <p>
                {
                  "Improve an existing digital experience by finding friction, simplifying flows, and making the next step clearer."
                }
              </p>
              <ul>
                <li>{"UX and interface review"}</li>
                <li>{"Feature improvements"}</li>
                <li>{"Technical and content updates"}</li>
              </ul>
            </article>
          </section>
          <section className={"content-block"}>
            <h2>{"A practical way to work"}</h2>
            <p>
              <strong>{"Discover:"}</strong>
              {
                " understand your audience, goal, constraints, and what success should mean."
              }
            </p>
            <p>
              <strong>{"Define:"}</strong>
              {
                " agree on the essential scope, pages or features, and a realistic delivery plan."
              }
            </p>
            <p>
              <strong>{"Build:"}</strong>
              {
                " develop in clear steps and share progress so decisions are made with context."
              }
            </p>
            <p>
              <strong>{"Improve:"}</strong>
              {" launch, learn from use, and plan the next useful change."}
            </p>
          </section>
          <div className={"page-cta"}>
            <div>
              <p className={"eyebrow"}>{"START WITH A CONVERSATION"}</p>
              <h2>{"Tell us what you are trying to solve."}</h2>
            </div>
            <a className={"button button-lime"} href={"/contacts.html"}>
              {"Contact the studio \u2197"}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
