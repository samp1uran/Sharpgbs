// src/components/WhatsAppIcon.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  // Logic: Ensure the number has NO spaces, dashes, or "+" 
  // Example: 918069158224 (Country Code + Number)
  const phone = "918069158224"; 
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/20"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Pulse Effect logic to draw attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </a>
  );
};

export default WhatsAppIcon;
