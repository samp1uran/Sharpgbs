import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/Logo.jpg"
            alt="Sharp Gbs Logo"
            className="w-10 h-10 rounded-full object-cover border border-gray-600 group-hover:border-blue-400 transition"
          />
          <div className="font-bold text-xl tracking-tight">Sharp Gbs</div>
        </Link>

        {/* 2. Social Links Section */}
        <div className="flex items-center space-x-6">
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

        {/* 3. Copyright Section (Now just another item in the stack) */}
        <p className="text-gray-400 text-sm pt-2">
          &copy; {currentYear} <span className="text-white font-semibold">Sharp Gbs</span>. All Rights Reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
