import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div
        aria-hidden="true"
        className="ambient-float pointer-events-none absolute -right-24 -top-36 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_0.7fr_0.9fr] lg:px-8 lg:py-14">
        <div className="space-y-4 text-center md:text-left">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 rounded-lg md:justify-start"
          >
            <img
              src="/Logo.jpg"
              alt=""
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white/15"
            />
            <span className="text-lg font-bold tracking-tight">Sharp GBS</span>
          </Link>
          <p className="mx-auto max-w-sm text-sm leading-6 text-slate-400 md:mx-0">
            Reliable professional support to help your business run smoothly
            and grow with confidence.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="text-center md:text-left">
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link to="/about" className="transition hover:text-white">About us</Link></li>
            <li><Link to="/services" className="transition hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold text-white">Connect with us</h2>
          <div className="mt-4 flex items-center justify-center gap-5 md:justify-start">
          <a
            href="https://www.linkedin.com/company/sharp-gbs/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm text-slate-400 transition hover:text-white"
          >
            <FaLinkedin aria-hidden="true" className="text-lg" />
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/people/Sharp-Gbs/100090655917480/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm text-slate-400 transition hover:text-white"
          >
            <FaFacebookSquare aria-hidden="true" className="text-lg" />
            Facebook
          </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 md:flex-row lg:px-8">
          <p>
            &copy; {currentYear} <span className="text-slate-300">Sharp GBS</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition hover:text-slate-200">Privacy</Link>
            <Link to="/terms" className="transition hover:text-slate-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
