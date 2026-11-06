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
  "/courses": {
    title: "Courses | Sharp GBS",
    description:
      "Explore practical, hands-on courses from Sharp GBS in Ludhiana and enroll today.",
  },
  "/admin": {
    title: "Admin | Sharp GBS",
    description: "Sharp GBS admin panel.",
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
  "/legal": {
    title: "Privacy Policy & Terms of Service | Sharp GBS",
    description:
      "Review the Sharp GBS privacy policy and terms of service.",
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
    const page =
      PAGES[path] ||
      (path.startsWith("/courses/")
        ? {
            title: "Course Details | Sharp GBS",
            description:
              "Course duration, fee, eligibility and curriculum from Sharp GBS.",
          }
        : PAGES["/"]);
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
