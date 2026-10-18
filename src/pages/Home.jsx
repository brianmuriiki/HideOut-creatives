import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function HomePage() {
  return (
    <>
      <main id={"main"}>
        <section className={"hero"} id={"top"}>
          <div className={"hero-copy"}>
            <p className={"eyebrow"}>
              <span className={"status-dot"}></span>
              {" Technology company \u00b7 Digital product studio"}
            </p>
            <h1>
              {"We turn useful ideas into "}
              <span className={"highlight"}>{"digital experiences."}</span>
            </h1>
            <p className={"hero-description"}>
              {
                "HideOut Creatives builds its own apps and helps people bring websites, mobile apps, and digital products to life\u2014with clarity, care, and a focus on the people using them."
              }
            </p>
            <div className={"hero-actions"}>
              <a className={"button button-dark"} href={"/services.html"}>
                {"Explore our services "}
                <span aria-hidden={"true"}>{"\u2197"}</span>
              </a>
              <a className={"text-link"} href={"/apps.html"}>
                {"See our apps "}
                <span aria-hidden={"true"}>{"\u2197"}</span>
              </a>
            </div>
            <div className={"hero-note"}>
              <span className={"note-mark"}>{"\u2733"}</span>
              <span>
                {"Small studio. Big curiosity."}
                <br />
                <strong>{"Made for real life."}</strong>
              </span>
            </div>
          </div>
          <div
            className={"hero-art"}
            aria-label={"DIGITracker product preview"}
          >
            <div className={"art-orbit orbit-one"}></div>
            <div className={"art-orbit orbit-two"}></div>
            <div className={"art-label label-top"}>
              {"A LITTLE MORE INTENTION"}
            </div>
            <div className={"phone"}>
              <div className={"phone-speaker"}></div>
              <div className={"phone-screen"}>
                <div className={"preview-top"}>
                  <span className={"mini-brand"}>
                    <i></i>
                    {"DIGI"}
                    <span>{"TRacker"}</span>
                  </span>
                  <span className={"avatar"}>{"H"}</span>
                </div>
                <div className={"preview-date"}>{"YOUR DAY \u00b7 TODAY"}</div>
                <div className={"preview-title"}>
                  {"Make room"}
                  <br />
                  {"for "}
                  <em>{"yourself."}</em>
                </div>
                <div className={"preview-progress"}>
                  <div className={"progress-copy"}>
                    <span>{"DAILY RHYTHM"}</span>
                    <b>
                      {"64 "}
                      <small>{"/ 90 min"}</small>
                    </b>
                  </div>
                  <div className={"progress-track"}>
                    <i></i>
                  </div>
                  <div className={"week-bars"}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <div className={"preview-section"}>
                  <span>{"YOUR ACTIVITIES"}</span>
                  <b>{"Today, at your pace"}</b>
                </div>
                <div className={"preview-activity"}>
                  <span className={"activity-icon walk"}>{"\u2197"}</span>
                  <span>
                    <b>{"Morning walk"}</b>
                    <small>{"A little fresh air"}</small>
                  </span>
                  <i className={"check"}>{"\u2713"}</i>
                </div>
                <div className={"preview-activity"}>
                  <span className={"activity-icon focus"}>{"\u25f7"}</span>
                  <span>
                    <b>{"Focus session"}</b>
                    <small>{"Make space to think"}</small>
                  </span>
                  <i className={"check empty"}></i>
                </div>
                <div className={"preview-tabs"}>
                  <span>{"Today"}</span>
                  <span>{"Events"}</span>
                  <span>{"Health"}</span>
                  <span>{"Gym"}</span>
                </div>
              </div>
            </div>
            <div className={"art-sticker"}>
              {"A calmer"}
              <br />
              {"kind of app "}
              <span>{"\u2733"}</span>
            </div>
            <div className={"art-label label-bottom"}>
              {"PRODUCT NO. 001\u00a0 / \u00a0DIGITRACKER"}
            </div>
          </div>
        </section>
        <div className={"ticker"} aria-label={"What we make"}>
          <div className={"ticker-track"}>
            <span>{"Useful by design"}</span>
            <i>{"\u2733"}</i>
            <span>{"Made with care"}</span>
            <i>{"\u2733"}</i>
            <span>{"Curious by nature"}</span>
            <i>{"\u2733"}</i>
            <span>{"Useful by design"}</span>
            <i>{"\u2733"}</i>
            <span>{"Made with care"}</span>
            <i>{"\u2733"}</i>
            <span>{"Curious by nature"}</span>
            <i>{"\u2733"}</i>
          </div>
        </div>
        <section className={"products section-wrap"} id={"apps"}>
          <div className={"section-heading"}>
            <div>
              <p className={"eyebrow"}>{"01 / OUR APPS"}</p>
              <h2>
                {"Small ideas."}
                <br className={"mobile-break"} />
                {" Useful apps."}
              </h2>
            </div>
            <p className={"section-intro"}>
              {
                "Our products start with everyday needs. DIGITracker is the first app in a growing collection of useful digital tools."
              }
            </p>
          </div>
          <article className={"product-card"}>
            <div className={"product-copy"}>
              <div className={"product-meta"}>
                <span className={"product-index"}>{"HC\u2014001"}</span>
                <span className={"live-status"}>
                  <i></i>
                  {" FIRST PRODUCT"}
                </span>
              </div>
              <div className={"product-title-lockup"}>
                <span className={"app-mark"}>
                  <i></i>
                </span>
                <div>
                  <p className={"product-overline"}>
                    {"YOUR DAY, IN GOOD COMPANY"}
                  </p>
                  <h3>
                    {"DIGI"}
                    <span>{"TRacker"}</span>
                  </h3>
                </div>
              </div>
              <p className={"product-description"}>
                {
                  "Your activities, health habits, workouts and plans in one calm, personal space. Build a rhythm that feels like yours."
                }
              </p>
              <div className={"feature-tags"}>
                <span>{"Daily planner"}</span>
                <span>{"Health & movement"}</span>
                <span>{"Gym log"}</span>
              </div>
              <div className={"download-row"}>
                <a
                  className={"button button-lime download-link"}
                  href={"/downloads/DIGITracker-latest.apk"}
                >
                  {"Download DIGITracker "}
                  <span aria-hidden={"true"}>{"\u2197"}</span>
                </a>
                <span className={"download-platform"}>
                  {"ANDROID\u00a0 / \u00a0APK"}
                </span>
              </div>
              <p className={"download-note"} aria-live={"polite"}>
                {"Android APK \u00b7 Download and install on your phone."}
              </p>
            </div>
            <div className={"product-visual"} aria-hidden={"true"}>
              <div className={"visual-sun"}></div>
              <div className={"visual-grid"}></div>
              <div className={"visual-card visual-card-main"}>
                <span className={"visual-small"}>{"YOUR DAILY RHYTHM"}</span>
                <b>
                  {"One day,"}
                  <br />
                  {"one step."}
                </b>
                <div className={"visual-line"}>
                  <i></i>
                </div>
                <span className={"visual-caption"}>
                  {"A little progress is still progress."}
                </span>
              </div>
              <div className={"visual-card visual-card-float"}>
                <span className={"float-icon"}>{"\u2733"}</span>
                <span>
                  <b>{"Move gently."}</b>
                  <small>{"Feel the difference."}</small>
                </span>
              </div>
              <span className={"visual-asterisk"}>{"\u2733"}</span>
            </div>
          </article>
          <div className={"app-shelf-heading"}>
            <p className={"eyebrow"}>{"ON THE WAY"}</p>
            <span>{"More apps are in the works"}</span>
          </div>
          <div className={"app-shelf"} aria-label={"Apps in development"}>
            <article className={"coming-app-card"}>
              <span className={"coming-app-icon"} aria-hidden={"true"}>
                {"\u2733"}
              </span>
              <div>
                <span className={"coming-app-status"}>
                  <i></i>
                  {" IN DEVELOPMENT"}
                </span>
                <h3>{"What\u2019s next?"}</h3>
                <p>
                  {
                    "We\u2019re exploring new ideas for thoughtful tools. The next app will appear here when it\u2019s ready."
                  }
                </p>
              </div>
              <span className={"coming-app-number"}>{"HC\u2014002"}</span>
            </article>
            <p className={"app-shelf-note"}>
              {
                "One studio, many useful ideas. Check back as the collection grows."
              }
            </p>
          </div>
        </section>
        <section className={"home-services section-wrap"} id={"services"}>
          <div className={"section-heading"}>
            <div>
              <p className={"eyebrow"}>{"02 / WHAT WE DO"}</p>
              <h2>
                {"Good thinking."}
                <br className={"mobile-break"} />
                {" Thoughtful building."}
              </h2>
            </div>
            <p className={"section-intro"}>
              {
                "From a clear first brief to a launch-ready experience, we help turn your digital goals into practical products."
              }
            </p>
          </div>
          <div className={"home-service-grid"}>
            <article>
              <svg
                className={"card-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-globe"}></use>
              </svg>
              <span>{"01 / WEB"}</span>
              <h3>{"Websites that guide"}</h3>
              <p>
                {
                  "Responsive company and product websites that explain your work and help visitors take the next step."
                }
              </p>
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
              <h3>{"Apps people can use"}</h3>
              <p>
                {
                  "Mobile and cross-platform apps shaped around real routines, workflows, and user needs."
                }
              </p>
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
              <h3>{"Ideas made tangible"}</h3>
              <p>
                {
                  "Product planning, prototypes, and focused first versions that help teams learn what to build next."
                }
              </p>
            </article>
          </div>
          <a className={"text-link home-service-link"} href={"/services.html"}>
            {"Explore all services "}
            <span aria-hidden={"true"}>{"\u2197"}</span>
          </a>
        </section>
        <section className={"studio"} id={"studio"}>
          <div className={"studio-inner section-wrap"}>
            <div className={"studio-symbol"}>
              {"h"}
              <span>{"c"}</span>
            </div>
            <div className={"studio-copy"}>
              <p className={"eyebrow"}>{"03 / THE STUDIO"}</p>
              <h2>
                {"We build the things"}
                <br />
                {"we wish "}
                <em>{"already existed."}</em>
              </h2>
              <p>
                {
                  "HideOut Creatives is a technology company creating its own apps and helping clients build websites and software. We bring product thinking, design, and development together around the people who will use the result."
                }
              </p>
              <p>
                {
                  "We start by understanding the need, shape a focused solution, then build and improve it with care."
                }
              </p>
              <a className={"text-link text-link-light"} href={"/about.html"}>
                {"More about HideOut Creatives "}
                <span aria-hidden={"true"}>{"\u2197"}</span>
              </a>
            </div>
            <div className={"studio-aside"}>
              <span className={"aside-rule"}></span>
              <span>
                {"INDEPENDENT"}
                <br />
                {"BY NATURE"}
              </span>
              <span className={"aside-star"}>{"\u2733"}</span>
              <span>
                {"THOUGHTFUL"}
                <br />
                {"BY DESIGN"}
              </span>
            </div>
          </div>
        </section>
        <section className={"principles section-wrap"}>
          <p className={"eyebrow"}>{"OUR LITTLE COMPASS"}</p>
          <div className={"principle-grid"}>
            <article>
              <span>{"01"}</span>
              <h3>{"Useful first."}</h3>
              <p>
                {
                  "Technology should make something easier, clearer, or more enjoyable."
                }
              </p>
            </article>
            <article>
              <span>{"02"}</span>
              <h3>{"People always."}</h3>
              <p>
                {
                  "We build with care for the time, attention and trust people give us."
                }
              </p>
            </article>
            <article>
              <span>{"03"}</span>
              <h3>{"Room to explore."}</h3>
              <p>
                {
                  "Good work starts with a question and gets better when we stay curious."
                }
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
