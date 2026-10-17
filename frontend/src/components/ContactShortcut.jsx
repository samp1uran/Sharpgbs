import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ContactShortcut() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight text-inherit md:text-3xl">
          Let’s build something great together.
        </h3>
        <p className="mx-auto max-w-md text-base leading-relaxed text-inherit opacity-80 md:text-lg">
          Tell us what your business needs. We’d love to explore how Sharp GBS
          can help.
        </p>
      </div>

      <Link
        to="/contact"
        className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <span>Get in touch</span>
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}

export default ContactShortcut;