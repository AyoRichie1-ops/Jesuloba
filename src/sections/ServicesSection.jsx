import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiSolarPanelFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <PiSolarPanelFill size={40} className="text-green-500" />,
    title: "Solar Panel Installation",
    description:
      "Expert installation for homes and offices — powering you with sustainable energy.",
  },
  {
    icon: <BiSolidZap size={40} className="text-green-500" />,
    title: "Inverter Systems",
    description:
      "Seamless inverter setup and maintenance to ensure constant power supply.",
  },
  {
    icon: <VscTools size={40} className="text-green-500" />,
    title: "Electrical Wiring",
    description:
      "Safe and professional wiring services for residential and commercial projects.",
  },
];

const ServicesPreview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
