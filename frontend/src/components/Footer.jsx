import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Logic: Dynamic year to avoid maintenance
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Logo and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 pb-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/Logo.jpg"
              alt="Sharp Gbs Logo"
              className="w-8 h-8 rounded-full object-cover border border-gray-600 group-hover:border-blue-400 transition"
            />
            <div className="font-bold text-lg tracking-tight">Sharp Gbs</div>
          </Link>
             <p className="text-center text-gray-400 text-sm">
                &copy; {currentYear} <span className="text-white font-semibold">Sharp Gbs</span>. All Rights Reserved.
            </p>
          <div className="flex items-center space-x-8">
            <a
              href="https://www.linkedin.com/company/sharp-gbs/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/people/Sharp-Gbs/100090655917480/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition duration-300"
            >
              <FaFacebookSquare className="text-xl" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
