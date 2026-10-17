import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link to="/" className="flex items-center justify-center gap-3 md:justify-start">
          <img
            src="/Logo.jpg"
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20"
          />
          <span className="font-semibold tracking-tight">Sharp GBS</span>
        </Link>

        <p className="text-center text-sm text-slate-400">
          &copy; {currentYear} <span className="text-slate-200">Sharp GBS</span>.
          All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/company/sharp-gbs/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm text-slate-300 transition hover:text-white"
          >
            <FaLinkedin aria-hidden="true" className="text-lg" />
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/people/Sharp-Gbs/100090655917480/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm text-slate-300 transition hover:text-white"
          >
            <FaFacebookSquare aria-hidden="true" className="text-lg" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
