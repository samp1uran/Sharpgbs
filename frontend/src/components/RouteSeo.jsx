import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.sharpgbs.in";

const PAGES = {
  "/": {
    title: "Sharp GBS | Web Development Company in Ludhiana",
    description:
      "Sharp GBS is a Ludhiana-based web development company offering WordPress development, SEO, bookkeeping, data analysis and digital consulting.",
  },
  "/about": {
    title: "About Sharp GBS | Web Development & Business Support in Ludhiana",
    description:
      "Learn about Sharp GBS, a Ludhiana team delivering web development, WordPress management, bookkeeping, data analysis and digital consulting.",
  },
  "/services/development": {
    title: "Web Development & WordPress Services in Ludhiana | Sharp GBS",
    description:
      "Custom website development, WordPress management, SEO and speed optimization for businesses, from Sharp GBS in Ludhiana.",
  },
  "/services/financialServices": {
    title: "Bookkeeping & Financial Services in Ludhiana | Sharp GBS",
    description:
      "Reliable bookkeeping, data analysis and financial support services for growing businesses from Sharp GBS.",
  },
  "/contact": {
    title: "Contact Sharp GBS | Web Development Company in Ludhiana",
    description:
      "Get in touch with Sharp GBS for web development, WordPress and business support. Call or WhatsApp +91 90977 78000.",
  },
  "/privacy": {
    title: "Privacy Policy | Sharp GBS",
    description: "Read the Sharp GBS privacy policy.",
  },
  "/terms": {
    title: "Terms of Service | Sharp GBS",
    description: "Read the Sharp GBS terms of service.",
  },
};

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const page = PAGES[path] || PAGES["/"];
    const url = `${SITE}${path === "/" ? "/" : path}`;

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
  }, [pathname]);

  return null;
}
