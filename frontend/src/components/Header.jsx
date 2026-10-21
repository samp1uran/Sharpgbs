import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
];

const linkClass = ({ isActive }) =>
  `block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 ring-1 ring-blue-100"
      : "text-slate-600 hover:bg-blue-50 hover:text-blue-800"
  }`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-slate-950 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.75rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3 rounded-lg"
        >
          <img
            src="/Logo.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100 transition duration-300 group-hover:rotate-[-6deg] group-hover:shadow-lg group-hover:shadow-blue-500/20"
          />
          <span className="text-lg font-bold tracking-tight transition-colors group-hover:text-blue-800 sm:text-xl">
            Sharp GBS
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={linkClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="text-slate-700" />
          ) : (
            <Menu aria-hidden="true" className="text-slate-700" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
