import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ContactShortcut() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center w-full">
      
      <div className="space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-sm text-inherit">
          🚀 Let’s Elevate Your Brand
        </h3>
        <p className="max-w-md mx-auto text-lg leading-relaxed text-inherit opacity-80">
          Create compelling, consistent content that builds trust and drives
          results. Reach out today!
        </p>
      </div>

      <Link 
        to="/contact"
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,99,235,0.4)]"
      >
        <span className="relative z-10">Get in Touch</span>
        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
      
    </div>
  );
}

export default ContactShortcut;