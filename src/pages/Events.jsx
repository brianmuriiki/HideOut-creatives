import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function EventsPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"EVENTS & LEARNING"}</p>
          <h1>{"Make room for shared learning."}</h1>
          <p className={"page-lead"}>
            {
              "We want to create practical spaces where people can learn about digital products, explore technology, and exchange ideas with others."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <CmsList type="event" title="Company events and updates" />
          <section className={"notice-panel"}>
            <svg
              className={"panel-icon"}
              aria-hidden={"true"}
              focusable={"false"}
            >
              <use href={"/icons.svg#icon-calendar"}></use>
            </svg>
            <p className={"eyebrow"}>{"UPCOMING"}</p>
            <h2>{"No upcoming events are scheduled."}</h2>
            <p>
              {
                "When an event is confirmed, this page will list its date, location or format, intended audience, accessibility details, and registration instructions."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Formats we are interested in"}</h2>
            <p>
              <strong>{"Practical workshops:"}</strong>
              {
                " guided sessions on turning an idea into a website or app plan."
              }
            </p>
            <p>
              <strong>{"Product conversations:"}</strong>
              {
                " open discussions about building, launching, and improving digital products."
              }
            </p>
            <p>
              <strong>{"Community sessions:"}</strong>
              {
                " welcoming meetups for people interested in technology and creative work."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Suggest a topic or collaboration"}</h2>
            <p>
              {
                "We are open to working with communities, schools, and organizations on useful learning sessions. Email "
              }
              <a
                href={
                  "mailto:shadowhacktech@gmail.com?subject=HideOut%20Creatives%20event%20idea"
                }
              >
                {"shadowhacktech@gmail.com"}
              </a>
              {
                " with your proposed topic, audience, and location or online format."
              }
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
