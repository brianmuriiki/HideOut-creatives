import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function AppsPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"OUR PRODUCTS"}</p>
          <h1>{"Useful tools for everyday life."}</h1>
          <p className={"page-lead"}>
            {
              "We create digital products around needs people recognize. Each app has a clear purpose, a practical experience, and room to improve with feedback."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <CmsList type="app" title="More HideOut Creatives apps" />
          <article className={"catalog-app"}>
            <div className={"catalog-app-copy"}>
              <svg
                className={"product-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-activity"}></use>
              </svg>
              <span className={"article-meta"}>
                {"HC\u2014001 \u00b7 PERSONAL PLANNING & WELLNESS"}
              </span>
              <h2>{"DIGITracker"}</h2>
              <p>
                {
                  "DIGITracker brings activities and events, wellness notes, walks, and gym sessions into one personal tracker. Use it to organize your day, keep a record of movement and training, and review your own history."
                }
              </p>
              <div className={"feature-tags"}>
                <span>{"Activity planning"}</span>
                <span>{"Wellness notes"}</span>
                <span>{"Walk summaries"}</span>
                <span>{"Gym logging"}</span>
                <span>{"Optional AI ideas"}</span>
              </div>
              <div className={"hero-actions"}>
                <a
                  className={"button button-lime"}
                  href={"/downloads/DIGITracker-latest.apk"}
                >
                  {"Download Android APK "}
                  <span aria-hidden={"true"}>{"\u2197"}</span>
                </a>
                <a
                  className={"text-link text-link-light"}
                  href={"/docs/digitracker.html"}
                >
                  {"Read the app guide \u2197"}
                </a>
              </div>
              <p className={"small-print"}>
                {
                  "Android installation may ask you to allow installs from your browser. iPhone users can use the web app. The APK is signed and distributed outside Google Play."
                }
              </p>
            </div>
            <div className={"catalog-app-index"}>
              {"01"}
              <span>{"YOUR DAY, IN GOOD COMPANY"}</span>
            </div>
          </article>
          <section className={"content-block"}>
            <h2>{"Built to keep growing"}</h2>
            <p>
              {"We improve products through iteration. Browse the "}
              <a href={"/docs/digitracker.html"}>
                {"DIGITracker documentation"}
              </a>
              {
                " for current feature details and usage notes. New HideOut Creatives apps will be listed here as they become available."
              }
            </p>
          </section>
          <RatingWidget topic="digitracker" />
          <div className={"page-cta"}>
            <div>
              <p className={"eyebrow"}>{"HAVE AN APP IDEA?"}</p>
              <h2>{"Let\u2019s explore how to bring it to life."}</h2>
            </div>
            <a className={"button button-lime"} href={"/services.html"}>
              {"View app development \u2197"}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
