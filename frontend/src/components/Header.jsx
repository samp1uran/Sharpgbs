import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Add a subtle shadow when scrolling down for a modern feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-slate-950/85 backdrop-blur-lg border-slate-800/50 shadow-lg" 
          : "bg-slate-950 border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased height to h-20 (80px) to give the larger logo breathing room */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Increased Size and Typography */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
          >
            <div className="relative overflow-hidden rounded-full shadow-md">
              <img
                src="/Logo.jpg"
                alt="Sharp Gbs Logo"
                className="w-14 h-14 object-cover border-2 border-slate-700 group-hover:border-blue-500 transform group-hover:scale-110 transition-all duration-300 ease-out"
              />
            </div>
            {/* Increased text size to 3xl and tightened tracking for a sleeker look */}
            <span className="font-extrabold text-3xl tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-300">
              Sharp Gbs
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-colors" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1.5 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-slate-800/80 text-blue-400 shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleClick}
              className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? "bg-slate-800 text-blue-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;