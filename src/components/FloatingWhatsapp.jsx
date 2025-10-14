import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2349061763716"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
