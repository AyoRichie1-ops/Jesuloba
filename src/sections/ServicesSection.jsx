import React from "react";
import { PiSolarPanelFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { FaUserCheck } from "react-icons/fa";
const services = [
  {
    icon: <PiSolarPanelFill size={40} className="text-green-500" />,
    title: "Solar Panel Installation",
    description:
      "Professional solar panel setup for homes and businesses to maximize energy efficiency.",
  },
  {
    icon: <BiSolidZap size={40} className="text-green-500" />,
    title: "Inverter Systems",
    description:
      "Reliable inverter installation and maintenance to keep your energy running smoothly.",
  },
  {
    icon: <VscTools size={40} className="text-green-500" />,
    title: "Electrical Wiring",
    description:
      "Full electrical wiring services, upgrades, and repairs with safety guaranteed.",
  },
  {
    icon: <FaUserCheck size={40} className="text-green-500" />,
    title: "Consultation & Audits",
    description:
      "Expert energy consultation to optimize your home or business power usage.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
