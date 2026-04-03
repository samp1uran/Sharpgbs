// src/components/Footer.jsx
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo.jpg"
            alt="Sharp Gbs Logo"
            className="w-7 h-7 rounded-full object-cover"
          />
          <div className="font-bold ">Sharp Gbs</div>
        </Link>

        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/company/sharp-gbs/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/people/Sharp-Gbs/100090655917480/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition"
          >
            <FaFacebookSquare className="text-xl" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
