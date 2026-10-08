import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 space-y-8 md:space-y-0">
          
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative overflow-hidden rounded-full">
              <img
                src="/Logo.jpg"
                alt="Sharp Gbs Logo"
                className="w-10 h-10 object-cover border-2 border-slate-700 group-hover:border-blue-500 transform group-hover:scale-110 transition-all duration-300 ease-out"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                Sharp Gbs
              </span>
              <span className="text-xs text-slate-500 font-medium">Business Solutions</span>
            </div>
          </Link>

          {/* Interactive Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/sharp-gbs/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#0A66C2] hover:border-[#0A66C2] transform hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(10,102,194,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-slate-400 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a
              href="https://www.facebook.com/people/Sharp-Gbs/100090655917480/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#1877F2] hover:border-[#1877F2] transform hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(24,119,242,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-xl text-slate-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Legal / Copyright Tier */}
        <div className="border-t border-slate-800/60 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} <span className="text-slate-300 font-medium">Sharp Gbs</span>. All Rights Reserved.
          </p>
          
          {/* Optional: Add utility links here to balance the bottom bar */}
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;