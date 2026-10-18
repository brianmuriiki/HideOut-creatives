import CmsList from "../components/CmsList.jsx";
import RatingWidget from "../components/RatingWidget.jsx";

export default function CareersPage() {
  return (
    <>
      <main id={"main"} className={"inner-page"}>
        <section className={"page-hero"}>
          <p className={"eyebrow"}>{"CAREERS"}</p>
          <h1>{"Bring curiosity. Build with care."}</h1>
          <p className={"page-lead"}>
            {
              "We value people who enjoy solving practical problems, communicate clearly, and care about the experience on the other side of the screen."
            }
          </p>
        </section>
        <div className={"page-content"}>
          <section className={"content-block"}>
            <h2>{"What matters in our work"}</h2>
            <p>
              {
                "HideOut Creatives works across websites, apps, and digital product ideas. As the company grows, our needs will change. We look for thoughtful problem-solving, a willingness to learn, respect for users, and care for the details that make software easier to use."
              }
            </p>
            <p>
              {
                "We welcome a range of paths into technology and creative work. We care about how you think, what you have made or learned, and how you work with other people."
              }
            </p>
          </section>
          <section className={"notice-panel"}>
            <svg
              className={"panel-icon"}
              aria-hidden={"true"}
              focusable={"false"}
            >
              <use href={"/icons.svg#icon-users"}></use>
            </svg>
            <p className={"eyebrow"}>{"OPEN POSITIONS"}</p>
            <h2>{"No roles are listed right now."}</h2>
            <p>
              {
                "When a position or internship is open, this page will include its responsibilities, skills, location or work arrangement, and application steps. You can send a short introduction to "
              }
              <a
                href={
                  "mailto:shadowhacktech@gmail.com?subject=HideOut%20Creatives%20careers"
                }
              >
                {"shadowhacktech@gmail.com"}
              </a>
              {" with the subject \u201cCareers\u201d."}
            </p>
          </section>
          <section className={"content-block"}>
            <h2>{"Interested in collaborating?"}</h2>
            <p>
              {"For freelance or project collaboration, see our "}
              <a href={"/services.html"}>{"services"}</a>
              {" or "}
              <a href={"/contacts.html"}>{"contact the studio"}</a>
              {"."}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
