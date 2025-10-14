import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { PiSolarPanelFill } from "react-icons/pi";
import { BiSolidZap } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { FaUserCheck, FaLightbulb, FaLeaf, FaShieldAlt } from "react-icons/fa";
import aboutHero from "../assets/herobg.jpg";
import ownerPic from "../assets/owner.jpg"; // replace with real image

const expertise = [
  {
    icon: <PiSolarPanelFill size={50} className="text-green-500" />,
    title: "Solar Panel Installation",
    description: "Professional solar installation optimized for efficiency and long-term performance.",
  },
  {
    icon: <BiSolidZap size={50} className="text-green-500" />,
    title: "Inverter Systems",
    description: "Reliable inverters to ensure consistent energy supply even during power outages.",
  },
  {
    icon: <VscTools size={50} className="text-green-500" />,
    title: "Electrical Wiring",
    description: "Safe and comprehensive wiring for homes and commercial buildings.",
  },
  {
    icon: <FaUserCheck size={50} className="text-green-500" />,
    title: "Energy Consultation",
    description: "Expert advice on optimizing your energy usage and reducing costs.",
  },
];

const stats = [
  { icon: <FaLightbulb size={40} className="text-green-500" />, label: "10+ Years Experience" },
  { icon: <FaLeaf size={40} className="text-green-500" />, label: "500+ Satisfied Clients" },
  { icon: <FaShieldAlt size={40} className="text-green-500" />, label: "100+ Projects Completed" },
];

const values = [
  { icon: <FaShieldAlt size={30} className="text-green-500 mb-2" />, title: "Integrity", description: "We operate with transparency and honesty in every project." },
  { icon: <FaLightbulb size={30} className="text-green-500 mb-2" />, title: "Innovation", description: "Continuously bringing new ideas to improve energy solutions." },
  { icon: <FaLeaf size={30} className="text-green-500 mb-2" />, title: "Sustainability", description: "Committed to eco-friendly solutions that save energy and costs." },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:bg-opacity-40"></div>
        <div className="relative z-10 max-w-2xl text-white" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Jesuloba Electrical Engineering Company
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Delivering smart, reliable, and sustainable solar, inverter, and electrical solutions across homes and businesses.
          </p>
          <Link to="/contact">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
              Get Your Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Owner Section */}
      <section
          className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
          data-aos="fade-up"
        >
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Subtle background highlight */}
            <div className="absolute top-2 left-2 w-full h-full dark:bg-green-900 rounded-xl shadow-md"></div>
            <img
              src={ownerPic}
              alt="Founder Jesuloba"
              className="relative w-full max-w-md h-64 md:h-72 object-cover rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-green-600">
              ODUWOLE MICHEAL OLUWABUNMI
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
              Founder & CEO
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              With a passion for renewable energy and reliable electrical solutions, John has been leading Jesuloba Electrical Engineering Company to deliver innovative, sustainable, and efficient energy systems across Nigeria.
            </p>
          </div>
        </section>


      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-600" data-aos="fade-up">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {expertise.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-green-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((s, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold">{s.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-600" data-aos="fade-up">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex justify-center">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Power Your Home or Business?
        </h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          Our experts are ready to help you transition to clean, reliable, and affordable energy.
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

export default About;
