import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function TermsPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"TERMS & CONDITIONS"}</p>
          <h1>{"Clear terms for using our work."}</h1>
          <p className={"page-lead"}>
            {
              "These draft terms outline the expected use of HideOut Creatives products and services. They require legal review and the company details noted below before publication."
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
              <use href={"/icons.svg#icon-book"}></use>
            </svg>
            {"WORKING DRAFT \u00b7 MUST BE REVIEWED BEFORE PUBLICATION"}
          </div>
          <section className={"content-block"}>
            <h2>{"About these terms"}</h2>
            <p>
              {
                "These terms are intended to apply to the HideOut Creatives website, DIGITracker, and services supplied by the company. Before publication, identify the legal entity, registered or business address, effective date, and contact details, and confirm whether separate client agreements take precedence for commissioned work."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Using the website and apps"}</h2>
            <p>
              {
                "Use our websites and products lawfully and respectfully. Do not attempt to interfere with service operation, access another person\u2019s account, reverse engineer a service where prohibited by law, or use our systems to harm others. You are responsible for the accuracy and appropriateness of information you choose to enter. Website ratings and optional comments are submitted anonymously and stored for up to one year; do not include sensitive information."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"DIGITracker is not medical care"}</h2>
            <p>
              {
                "DIGITracker is a personal planning and tracking product. Wellness logs and AI-generated meal, movement, or workout suggestions are general information, not medical advice, diagnosis, or treatment. AI output can be incomplete or incorrect. Use your own judgment, follow qualified clinician guidance, and stop activity if you feel pain, dizziness, or unwell."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"AI-generated content"}</h2>
            <p>
              {
                "AI responses are generated from the request and context a user chooses to provide. They may be inaccurate, unsuitable, or outdated. Review them before relying on them, especially for health, financial, safety, or other consequential decisions."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Intellectual property and commissioned work"}</h2>
            <p>
              {
                "Rights in HideOut Creatives branding, software, and site content should be specified alongside any third-party materials and open-source components. Ownership, licensing, payment, acceptance, support, and delivery terms for client work should be set out in a separate written agreement."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Availability and changes"}</h2>
            <p>
              {
                "Products and services may change as they are developed. These terms need a legally reviewed description of service availability, warranties, limitations of liability, suspension or termination, dispute handling, and governing law before launch."
              }
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Contact"}</h2>
            <p>
              {"Questions about these draft terms can be sent to "}
              <a
                href={
                  "mailto:shadowhacktech@gmail.com?subject=Terms%20question"
                }
              >
                {"shadowhacktech@gmail.com"}
              </a>
              {". Do not rely on this draft as a final contract."}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
