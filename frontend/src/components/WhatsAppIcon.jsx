// src/components/WhatsAppIcon.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const phoneNumber = "919097778000"; // Format: 911234567890 (No +, no spaces)
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // CRITICAL: "fixed" puts it on the screen, "z-[999]" puts it on top
      className="fixed bottom-10 right-10 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      style={{ width: '60px', height: '60px' }} 
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
      
      {/* Visual Cue: This pulse makes it stand out */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  );
};

export default WhatsAppIcon;
