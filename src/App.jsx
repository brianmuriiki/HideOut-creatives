import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout, {
  PageMetadata,
  ScrollToTop,
} from "./components/SiteLayout.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import AppsPage from "./pages/Apps.jsx";
import BlogPage from "./pages/Blog.jsx";
import CareersPage from "./pages/Careers.jsx";
import CommunitiesPage from "./pages/Communities.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import EventsPage from "./pages/Events.jsx";
import IdeasPage from "./pages/Ideas.jsx";
import InnovationPage from "./pages/Innovation.jsx";
import PrivacyPage from "./pages/Privacy.jsx";
import ServicesPage from "./pages/Services.jsx";
import StartupsPage from "./pages/Startups.jsx";
import TermsPage from "./pages/Terms.jsx";
import DocsDigitrackerPage from "./pages/DocsDigitracker.jsx";
import AdminPage from "./pages/AdminPage.jsx";

function NotFound() {
  return (
    <main id="main" className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">404 / NOT FOUND</p>
        <h1>That page isn’t here.</h1>
        <p className="page-lead">
          <a href="/">Return to HideOut Creatives home ↗</a>
        </p>
      </section>
    </main>
  );
}

function PublicPage({ children }) {
  return <SiteLayout>{children}</SiteLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <PublicPage>
              <HomePage />
            </PublicPage>
          }
        />
        <Route
          path="/about.html"
          element={
            <PublicPage>
              <AboutPage />
            </PublicPage>
          }
        />
        <Route
          path="/apps.html"
          element={
            <PublicPage>
              <AppsPage />
            </PublicPage>
          }
        />
        <Route
          path="/blog.html"
          element={
            <PublicPage>
              <BlogPage />
            </PublicPage>
          }
        />
        <Route
          path="/careers.html"
          element={
            <PublicPage>
              <CareersPage />
            </PublicPage>
          }
        />
        <Route
          path="/communities.html"
          element={
            <PublicPage>
              <CommunitiesPage />
            </PublicPage>
          }
        />
        <Route
          path="/contacts.html"
          element={
            <PublicPage>
              <ContactsPage />
            </PublicPage>
          }
        />
        <Route
          path="/events.html"
          element={
            <PublicPage>
              <EventsPage />
            </PublicPage>
          }
        />
        <Route
          path="/ideas.html"
          element={
            <PublicPage>
              <IdeasPage />
            </PublicPage>
          }
        />
        <Route
          path="/innovation.html"
          element={
            <PublicPage>
              <InnovationPage />
            </PublicPage>
          }
        />
        <Route
          path="/privacy.html"
          element={
            <PublicPage>
              <PrivacyPage />
            </PublicPage>
          }
        />
        <Route
          path="/services.html"
          element={
            <PublicPage>
              <ServicesPage />
            </PublicPage>
          }
        />
        <Route
          path="/startups.html"
          element={
            <PublicPage>
              <StartupsPage />
            </PublicPage>
          }
        />
        <Route
          path="/terms.html"
          element={
            <PublicPage>
              <TermsPage />
            </PublicPage>
          }
        />
        <Route
          path="/docs/digitracker.html"
          element={
            <PublicPage>
              <DocsDigitrackerPage />
            </PublicPage>
          }
        />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route
          path="*"
          element={
            <PublicPage>
              <NotFound />
            </PublicPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
