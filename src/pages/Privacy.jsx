import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function PrivacyPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"PRIVACY"}</p>
          <h1>{"We take personal information seriously."}</h1>
          <p className={"page-lead"}>
            {
              "This draft explains the DIGITracker data practices currently described in its product documentation. Confirm it against the live service and complete the company details before relying on it as the final policy."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <div className={"draft-banner"}>
            <svg
              className={"draft-icon"}
              aria-hidden={"true"}
              focusable={"false"}
            >
              <use href={"/icons.svg#icon-shield"}></use>
            </svg>
            {"WORKING DRAFT \u00b7 MUST BE REVIEWED BEFORE PUBLICATION"}
          </div>
          <section className={"content-block"}>
            <h2>{"Who this policy concerns"}</h2>
            <p>
              {
                "This draft covers the HideOut Creatives company website and DIGITracker. It should identify the legal entity responsible for processing, the applicable contact address, and the date it takes effect before publication."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Information DIGITracker handles"}</h2>
            <p>
              {
                "To provide the tracker, a signed-in account may store account information and entries users choose to add. These entries can include activities and events, meal notes, body measurements, sleep and soreness check-ins, walk distance and duration, and exercise and workout logs. Wellness notes sync with the account; the product documentation says users can export them."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Location during a walk"}</h2>
            <p>
              {
                "Walk tracking uses foreground location while the app is open to estimate distance. DIGITracker saves the distance and duration of a walk, not the GPS route points. The documentation says walk coordinates are not sent to AI features."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"AI requests and images"}</h2>
            <p>
              {
                "When a user chooses an AI feature, the relevant request and selected tracker summary are sent through the DIGITracker backend to the configured AI provider so it can generate a response. Users should avoid including information they do not want processed for that request."
              }
            </p>
            <p>
              {
                "In the web app, a JPEG, PNG, or WebP image attached to an AI request is held in device memory and sent when the user submits the request. The product documentation says the image is not saved to the user\u2019s account. The live provider\u2019s handling and retention terms must be checked and linked here before publication."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Account deletion"}</h2>
            <p>
              {"Users can request deletion from "}
              <strong>
                {"Settings \u2192 Data & Privacy \u2192 Delete account"}
              </strong>
              {
                ". The current product documentation says this deletes the account, synced tracker data, active sessions, and stored AI quota records. Confirm whether backups, security logs, and third-party records have separate retention periods."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Website and service providers"}</h2>
            <p>
              {
                "The website records aggregated page views and clicks on the DIGITracker APK download. These records contain the page path, event type, date, and count; they do not store a visitor account, GPS data, or IP address. Website event aggregates are automatically deleted after 90 days. Website ratings and optional comments are stored anonymously in MongoDB for up to one year and are visible only to authorized HideOut Creatives administrators. The temporary request limiters use the connecting IP address in server memory and do not save it to the database. The company website is hosted on Vercel. The DIGITracker API is hosted on Render, stores tracker data using MongoDB, and routes requested AI tasks through OpenRouter. Google is used for Google sign-in. Each provider may process technical information needed to operate its service. Confirm provider retention and international processing terms, and how a person may exercise privacy rights, before treating this draft as final."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Contact and legal review"}</h2>
            <p>
              {"For privacy questions, contact "}
              <a
                href={
                  "mailto:shadowhacktech@gmail.com?subject=Privacy%20request"
                }
              >
                {"shadowhacktech@gmail.com"}
              </a>
              {
                ". This is a product-practice summary, not legal advice. Have a qualified reviewer confirm the data flows, company identity, retention, user rights, and applicable law before treating this as the final policy."
              }
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
