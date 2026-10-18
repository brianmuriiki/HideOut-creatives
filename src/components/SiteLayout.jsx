import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://digitracker-rq61.onrender.com";

const footerGroups = [
  {
    heading: "COMPANY",
    links: [
      ["About", "/about.html"],
      ["Careers", "/careers.html"],
      ["Startups", "/startups.html"],
      ["Communities", "/communities.html"],
    ],
  },
  {
    heading: "EXPLORE",
    links: [
      ["Our apps", "/apps.html"],
      ["Services", "/services.html"],
      ["Innovation", "/innovation.html"],
      ["Events", "/events.html"],
      ["Blog", "/blog.html"],
      ["Idea suggestions", "/ideas.html"],
    ],
  },
  {
    heading: "SUPPORT & LEGAL",
    links: [
      ["DIGITracker docs", "/docs/digitracker.html"],
      ["Contacts", "/contacts.html"],
      ["Privacy", "/privacy.html"],
      ["Terms and conditions", "/terms.html"],
    ],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    ["Apps", "/apps.html"],
    ["Services", "/services.html"],
    ["About", "/about.html"],
    ["Ideas", "/ideas.html"],
  ];
  const active = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="HideOut Creatives home">
        <img
          src="/hideout-creatives.svg"
          width="205"
          height="45"
          alt="HideOut Creatives"
        />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`site-nav ${open ? "is-open" : ""}`}
        id="site-nav"
        aria-label="Main navigation"
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={href}
            to={href}
            aria-current={active(href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="nav-cta"
          to="/contacts.html"
          aria-current={active("/contacts.html") ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          Contact us <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer site-footer-pages">
      <Link
        className="wordmark footer-wordmark"
        to="/"
        aria-label="HideOut Creatives home"
      >
        <img src="/hideout-creatives.svg" width="180" height="40" alt="" />
      </Link>
      <span className="footer-note">Useful ideas, made real.</span>
      <span className="footer-copy">
        © {new Date().getFullYear()} HIDEOUT CREATIVES
      </span>
      <nav className="footer-links" aria-label="Company links">
        {footerGroups.map((group) => (
          <div key={group.heading}>
            <b>{group.heading}</b>
            {group.links.map(([label, href]) => (
              <Link key={href} to={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
}

function SiteAnalytics() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) return undefined;
    const path = location.pathname.slice(0, 150) || "/";
    const sendEvent = (event) => {
      fetch(`${API_BASE}/api/v1/site/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, path }),
        keepalive: true,
      }).catch(() => {});
    };
    sendEvent("page_view");
    const handleClick = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (
        url.origin === window.location.origin &&
        url.pathname.endsWith(".apk")
      )
        sendEvent("apk_download");
      if (
        url.origin !== window.location.origin ||
        anchor.target ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (url.pathname === "/" || url.pathname.endsWith(".html")) {
        event.preventDefault();
        navigate(`${url.pathname}${url.search}${url.hash}`);
        if (url.hash && url.pathname === location.pathname) {
          window.requestAnimationFrame(() =>
            document
              .getElementById(decodeURIComponent(url.hash.slice(1)))
              ?.scrollIntoView(),
          );
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [location.pathname, navigate]);

  return null;
}

const pageTitles = {
  "/": "HideOut Creatives — Websites, apps and digital products",
  "/about.html": "About HideOut Creatives — HideOut Creatives",
  "/apps.html": "Apps by HideOut Creatives — HideOut Creatives",
  "/blog.html": "HideOut Creatives Blog — HideOut Creatives",
  "/careers.html": "Careers at HideOut Creatives — HideOut Creatives",
  "/communities.html": "Communities and Partnerships — HideOut Creatives",
  "/contacts.html": "Contact HideOut Creatives — HideOut Creatives",
  "/events.html": "Events and Workshops — HideOut Creatives",
  "/ideas.html": "Suggest an Idea — HideOut Creatives",
  "/innovation.html": "Innovation at HideOut Creatives — HideOut Creatives",
  "/privacy.html": "Privacy Policy — HideOut Creatives",
  "/services.html": "Website and App Development Services — HideOut Creatives",
  "/startups.html": "Startup Product Support — HideOut Creatives",
  "/terms.html": "Terms and Conditions — HideOut Creatives",
  "/docs/digitracker.html": "DIGITracker Documentation — HideOut Creatives",
};

const pageDescriptions = {
  "/": "HideOut Creatives is a technology company building useful apps, websites, and digital products.",
  "/about.html":
    "Learn about HideOut Creatives, a technology company creating digital products and building websites and apps.",
  "/apps.html":
    "Explore apps created by HideOut Creatives, including DIGITracker for personal planning, wellness, walking, and gym logging.",
  "/blog.html":
    "Perspectives from HideOut Creatives on digital products, website and app development, and useful technology.",
  "/careers.html":
    "Learn about working with HideOut Creatives and find future opportunities at the technology company.",
  "/communities.html":
    "How HideOut Creatives engages with users, builders, founders, and technology communities.",
  "/contacts.html":
    "Contact HideOut Creatives about website creation, app development, product support, or partnerships.",
  "/events.html":
    "Find workshops, conversations, and community events from HideOut Creatives.",
  "/ideas.html":
    "Suggest an app feature, digital product, service, innovation topic, or community event to HideOut Creatives.",
  "/innovation.html":
    "How HideOut Creatives explores new ideas and applies technology to real-world needs.",
  "/privacy.html":
    "Working draft privacy information for HideOut Creatives and the DIGITracker app.",
  "/services.html":
    "HideOut Creatives creates websites, mobile apps, and digital products for businesses, founders, and organizations.",
  "/startups.html":
    "HideOut Creatives helps founders and early teams shape websites, apps, and first digital products.",
  "/terms.html":
    "Working draft terms for HideOut Creatives websites, apps, and services.",
  "/docs/digitracker.html":
    "Feature guide and help for DIGITracker, the planning, wellness, walking, and gym tracker from HideOut Creatives.",
};

export function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitles[pathname] || "HideOut Creatives";
    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.content = pageDescriptions[pathname] || pageDescriptions["/"];
  }, [pathname]);
  return null;
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function SiteLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
      <SiteAnalytics />
    </>
  );
}
