import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import Privacy from "./Privacy";
import Terms from "./Terms";

export default function Legal() {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.slice(1);
    if (sectionId === "privacy" || sectionId === "terms") {
      document.getElementById(sectionId)?.scrollIntoView();
    }
  }, [hash]);

  return (
    <AnimatedPage>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Privacy &amp; Terms
          </h1>
          <p className="text-lg text-slate-600">
            Review our privacy policy and terms of service.
          </p>
          <nav aria-label="On this page" className="flex justify-center gap-4 pt-2">
            <Link
              to="/legal#privacy"
              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal#terms"
              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
          </nav>
        </header>
        <Privacy id="privacy" />
        <Terms id="terms" />
      </main>
    </AnimatedPage>
  );
}
