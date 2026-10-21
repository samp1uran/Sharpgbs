import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const phoneNumber = "919097778000"; // Format: 911234567890 (No +, no spaces)
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[999] isolate flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:left-8 sm:h-16 sm:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="relative z-10 h-8 w-8" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 animate-ping rounded-full bg-[#25D366] opacity-25"
      />
    </a>
  );
};

export default WhatsAppIcon;
