import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function DocsDigitrackerPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"PRODUCT GUIDE / HC\u2014001"}</p>
          <h1>{"DIGITracker: your day, in good company."}</h1>
          <p className={"page-lead"}>
            {
              "Use this guide to understand the app\u2019s core features, installation, account controls, and privacy notes."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <nav className={"doc-toc"} aria-label={"Documentation sections"}>
            <a href={"#overview"}>{"Overview"}</a>
            <a href={"#account"}>{"Account"}</a>
            <a href={"#planning"}>{"Planning"}</a>
            <a href={"#wellness"}>{"Wellness"}</a>
            <a href={"#walking"}>{"Walking"}</a>
            <a href={"#gym"}>{"Gym"}</a>
            <a href={"#ai"}>{"AI"}</a>
            <a href={"#install"}>{"Install & updates"}</a>
            <a href={"#privacy"}>{"Privacy"}</a>
          </nav>
          <section className={"content-block"} id={"overview"}>
            <h2>{"What DIGITracker does"}</h2>
            <p>
              {
                "DIGITracker combines a daily planner with personal wellness and workout tracking. It is designed to help you record what matters to you and review your own patterns. It does not replace a medical professional, coach, or emergency service."
              }
            </p>
          </section>
          <section className={"content-block"} id={"account"}>
            <h2>{"Account and sign-in"}</h2>
            <p>
              {
                "An account is required to use the tracker. Sign in using the options shown in the app. Your account allows supported tracker data to sync with the DIGITracker service. Keep your sign-in credentials private and use account deletion in Settings if you want to remove your account."
              }
            </p>
          </section>
          <section className={"content-block"} id={"planning"}>
            <h2>{"Activities and events"}</h2>
            <p>
              {
                "Add activities and events to organize your day. If you use the AI planner, describe the kind of plan you want and review the result before adding or following it. Suggestions can be generic and may not account for every commitment or constraint."
              }
            </p>
          </section>
          <section className={"content-block"} id={"wellness"}>
            <h2>{"Wellness notes"}</h2>
            <p>
              {
                "Record meal and food-group notes, body measurements, and sleep or soreness check-ins. These entries are self-reported notes for your own tracking. They are not clinical measurements or a diagnosis."
              }
            </p>
          </section>
          <section className={"content-block"} id={"walking"}>
            <h2>{"Walk tracking"}</h2>
            <p>
              {
                "Start a walk from the Health area and allow location access while using the app. Tracking runs while the app is open and uses location points to estimate distance. The saved walk summary contains distance and duration rather than the route coordinates. Stop the walk when you finish."
              }
            </p>
          </section>
          <section className={"content-block"} id={"gym"}>
            <h2>{"Gym and exercise tracking"}</h2>
            <p>
              {
                "Log exercises and sets with reps, weight, and RPE (your rating of how hard the set felt). Review recent sessions, rest between sets, use exercise cues and substitutions, and look at available progress summaries and estimated personal records. Keep entries accurate; progression suggestions are optional and should reflect how you feel on the day."
              }
            </p>
          </section>
          <section className={"content-block"} id={"ai"}>
            <h2>{"AI assistance"}</h2>
            <p>
              {
                "Optional AI tools can help with planning, general meal and movement ideas, natural-language workout entry, and training summaries. The app sends the relevant request and selected tracker context only when you submit an AI request. AI can make mistakes; review responses and do not use them as medical advice."
              }
            </p>
            <p>
              {
                "In the web app, an image can be attached or captured for an AI request. Supported formats are JPEG, PNG, and WebP, up to 2 MB. The image remains in device memory until submitted and is not saved to your tracker account."
              }
            </p>
          </section>
          <section className={"content-block"} id={"install"}>
            <h2>{"Install and update"}</h2>
            <p>
              {"On Android, use the Download APK link on our "}
              <a href={"/apps.html"}>{"Apps page"}</a>
              {
                ", open the downloaded file, and follow Android\u2019s installation steps. Android may ask you to allow your browser to install apps from unknown sources. A newer APK must be downloaded and installed by the user. Compatible JavaScript and asset changes may be delivered through an in-app update; native changes require a newer APK."
              }
            </p>
            <p>
              <a
                className={"button button-dark"}
                href={"/downloads/DIGITracker-latest.apk"}
              >
                {"Download DIGITracker for Android \u2197"}
              </a>
            </p>
          </section>
          <section className={"content-block"} id={"privacy"}>
            <h2>{"Data and privacy"}</h2>
            <p>
              {
                "Walk route coordinates are not saved or sent to AI. Review the "
              }
              <a href={"/privacy.html"}>{"Privacy page"}</a>
              {
                " for the current summary of tracker data and account deletion. The privacy page remains a draft until the live providers and retention details are reviewed."
              }
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
