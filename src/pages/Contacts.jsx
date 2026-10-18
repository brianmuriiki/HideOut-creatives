import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function ContactsPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"CONTACT THE STUDIO"}</p>
          <h1>{"Let\u2019s talk about what you want to make."}</h1>
          <p className={"page-lead"}>
            {
              "For a website, mobile app, digital product, partnership, or DIGITracker question, reach the HideOut Creatives team directly."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"contact-details"}>
            <a href={"mailto:shadowhacktech@gmail.com"}>
              <svg
                className={"contact-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-mail"}></use>
              </svg>
              <span>{"EMAIL"}</span>
              <b>{"shadowhacktech@gmail.com"}</b>
              <i aria-hidden={"true"}>{"\u2197"}</i>
            </a>
            <a href={"tel:+254758643068"}>
              <svg
                className={"contact-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-phone"}></use>
              </svg>
              <span>{"PHONE"}</span>
              <b>{"+254 758 643 068"}</b>
              <i aria-hidden={"true"}>{"\u2197"}</i>
            </a>
            <a
              href={
                "https://wa.me/254758643068?text=Hello%20HideOut%20Creatives"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <svg
                className={"contact-icon whatsapp-icon"}
                aria-hidden={"true"}
                focusable={"false"}
              >
                <use href={"/icons.svg#icon-whatsapp"}></use>
              </svg>
              <span>{"WHATSAPP"}</span>
              <b>{"Chat with HideOut Creatives"}</b>
              <i aria-hidden={"true"}>{"\u2197"}</i>
            </a>
          </section>
          <section
            className={"social-presence"}
            aria-labelledby={"social-heading"}
          >
            <p className={"eyebrow"} id={"social-heading"}>
              {"FIND US ON SOCIAL"}
            </p>
            <p>
              {
                "Our social profiles will be linked here when they\u2019re ready."
              }
            </p>
            <div className={"social-platforms"}>
              <span
                className={"social-platform"}
                aria-label={"Facebook profile not linked yet"}
              >
                <svg
                  className={"social-icon facebook-icon"}
                  aria-hidden={"true"}
                  focusable={"false"}
                >
                  <use href={"/icons.svg#icon-facebook"}></use>
                </svg>
                <b>{"Facebook"}</b>
              </span>
              <span
                className={"social-platform"}
                aria-label={"X profile not linked yet"}
              >
                <svg
                  className={"social-icon x-icon"}
                  aria-hidden={"true"}
                  focusable={"false"}
                >
                  <use href={"/icons.svg#icon-x"}></use>
                </svg>
                <b>{"X"}</b>
              </span>
              <span
                className={"social-platform"}
                aria-label={"TikTok profile not linked yet"}
              >
                <svg
                  className={"social-icon tiktok-icon"}
                  aria-hidden={"true"}
                  focusable={"false"}
                >
                  <use href={"/icons.svg#icon-tiktok"}></use>
                </svg>
                <b>{"TikTok"}</b>
              </span>
            </div>
          </section>
          <section className={"content-block contact-guidance"}>
            <h2>{"Make your first message useful"}</h2>
            <p>
              {
                "For a project enquiry, tell us what you are trying to achieve, who the experience is for, what you already have, and when you hope to launch. You do not need a finished specification. A clear description of the problem is a good place to start."
              }
            </p>
            <p>
              {
                "For DIGITracker support, include your device type, app version if available, and what happened. Do not send passwords, sign-in codes, or sensitive health information by email."
              }
            </p>
          </section>
          <div className={"link-cards"}>
            <a href={"/services.html"}>
              <span>{"PROJECTS"}</span>
              <b>{"Explore website and app services \u2197"}</b>
            </a>
            <a href={"/docs/digitracker.html"}>
              <span>{"PRODUCT HELP"}</span>
              <b>{"Read the DIGITracker guide \u2197"}</b>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
