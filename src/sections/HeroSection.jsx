import React, { useEffect } from "react";
import herobg from "../assets/herobg.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative w-100% pt-20 pb-5 h-100% flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background image */}
      <img
        src={herobg}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-3xl px-4 pt-20 md:pt-0 flex flex-col items-center">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          data-aos="fade-down"
        >
          Reliable Solar & Electrical <br /> Installation Services
        </h1>

        <p
          className="text-lg md:text-xl mb-6 text-gray-200 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From solar and inverter systems to full electrical wiring — Jesuloba
          delivers safe, professional, and long-lasting energy solutions for your home and business.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 pb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Link to='/contact'>
            <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105">
              Request a Free Consultation
            </button>
          </Link>
          <Link to='/services'>
            <button className="bg-transparent border cursor-pointer border-white hover:bg-white hover:text-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
