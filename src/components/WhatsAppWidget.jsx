import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const phoneNumber = "919390341436";
  const message = encodeURIComponent(
    "Hi. Thanks for reaching out. Our support line will connect soon.",
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white text-3xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
    </a>
  );
}
