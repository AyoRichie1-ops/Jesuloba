import React from "react";
import { Link } from "react-router-dom";
import { PiSolarPanelFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { FaUserCheck } from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import servicesbg from "../assets/servicesbg.jpg";

const services = [
  {
    icon: <PiSolarPanelFill size={60} className="text-green-500" />,
    title: "Solar Panel Installation",
    description:
      "Harness renewable energy with our professional solar panel installations. We ensure your system is optimized for maximum sunlight exposure and long-term efficiency.",
    features: [
      "Custom solar system design",
      "Professional installation and inspection",
      "Maintenance and warranty support",
    ],
  },
  {
    icon: <BiSolidZap size={60} className="text-green-500" />,
    title: "Inverter Systems",
    description:
      "Stay powered even during outages with our reliable inverter installations. We provide top-tier systems for homes and businesses, tailored to your energy consumption needs.",
    features: [
      "Backup power design & installation",
      "Load management optimization",
      "After-sales support & maintenance",
    ],
  },
  {
    icon: <VscTools size={60} className="text-green-500" />,
    title: "Electrical Wiring & Maintenance",
    description:
      "Ensure safety and reliability with our full-scale electrical wiring and maintenance services for homes, offices, and commercial buildings.",
    features: [
      "Full wiring & rewiring",
      "Upgrades, repairs & inspections",
      "Safety certification compliance",
    ],
  },
  {
    icon: <FaUserCheck size={60} className="text-green-500" />,
    title: "Consultation & Energy Audits",
    description:
      "Our energy experts analyze your current setup and offer solutions that help you save on electricity costs and improve system efficiency.",
    features: [
      "On-site energy assessment",
      "Customized cost-saving report",
      "Sustainable upgrade suggestions",
    ],
  },
];
const Services = () => {
  return (
    <div className="w-full pt-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Hero Section */}
        <section
  className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center px-4"
  style={{
    backgroundImage: `url(${servicesbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 md:bg-opacity-40"></div>

  {/* Optional gradient for more depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>

  {/* Text Content */}
  <div className="relative z-10 max-w-2xl text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
      Powering Your Future
    </h1>
    <p className="text-lg md:text-xl opacity-90 mb-6">
      Explore our wide range of solar, inverter, and electrical solutions designed to make your energy usage smarter, safer, and more sustainable.
    </p>
    <Link to="/contact">
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
        Get Your Free Consultation
      </button>
    </Link>
  </div>
</section>

      {/* Services Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                {service.description}
              </p>
              <ul className="text-gray-600 dark:text-gray-400 mb-4 list-disc list-inside">
                {service.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link to="/contact">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform">
                    Get Free Quote
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial/>
      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Power Your Home or Business?
        </h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          Our experts are ready to help you transition to clean, reliable, and
          affordable energy.
        </p>
        <Link to="/contact">
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
