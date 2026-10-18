import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function AboutPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"ABOUT THE COMPANY"}</p>
          <h1>{"Technology with a human point of view."}</h1>
          <p className={"page-lead"}>
            {
              "HideOut Creatives turns useful ideas into thoughtful digital products. We build our own apps and work with people and organizations to create websites and software that solve real problems."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"content-block"}>
            <h2>{"What we are here to do"}</h2>
            <p>
              {
                "We believe technology is most valuable when it helps people do something that matters to them. That belief guides the products we create and the services we offer, from a first product sketch to a website or app people can use every day."
              }
            </p>
            <p>
              {
                "Our first product, DIGITracker, brings personal planning, wellness notes, walking, and gym tracking into one app. It reflects the kind of work we want to do: practical, approachable, and built to support real routines."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Two sides of the same studio"}</h2>
            <div className={"link-cards"}>
              <a href={"/apps.html"}>
                <svg
                  className={"link-card-icon"}
                  aria-hidden={"true"}
                  focusable={"false"}
                >
                  <use href={"/icons.svg#icon-mobile"}></use>
                </svg>
                <span>{"OUR PRODUCTS"}</span>
                <b>{"We make our own digital products \u2197"}</b>
              </a>
              <a href={"/services.html"}>
                <svg
                  className={"link-card-icon"}
                  aria-hidden={"true"}
                  focusable={"false"}
                >
                  <use href={"/icons.svg#icon-layers"}></use>
                </svg>
                <span>{"OUR SERVICES"}</span>
                <b>{"We build digital experiences with clients \u2197"}</b>
              </a>
            </div>
          </section>
          <section className={"content-block"}>
            <h2>{"How we approach the work"}</h2>
            <p>
              <strong>{"Understand before building."}</strong>
              {
                " Start with the people, the need, and the outcome that would make a difference."
              }
            </p>
            <p>
              <strong>{"Keep the first version focused."}</strong>
              {
                " Prioritize the essential experience, then learn from use and improve it."
              }
            </p>
            <p>
              <strong>{"Build with care."}</strong>
              {
                " Make the experience clear, responsive, and maintainable, and treat user trust as part of the product."
              }
            </p>
          </section>
          <div className={"page-cta"}>
            <div>
              <p className={"eyebrow"}>{"LET\u2019S GET TO WORK"}</p>
              <h2>{"Have a useful idea to build?"}</h2>
            </div>
            <a className={"button button-lime"} href={"/contacts.html"}>
              {"Talk with us \u2197"}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
