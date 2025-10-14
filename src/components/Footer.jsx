import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-1">
            Jesuloba Electrical Engineering Company
          </h3>
          <p className="text-green-500 text-sm mb-4">
            Powering Your Home and Business with Smart Energy Solutions
          </p>
          {/* <p className="text-gray-400 mb-4">
            Harnessing solar, inverter, and electrical solutions for efficiency and sustainability.
          </p> */}
          <div className="flex gap-4 mt-2 text-lg">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-white transition">Solar Panel Installation</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Inverter Systems</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Electrical Wiring</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Energy Consultation</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info with Icons */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="flex items-center mb-2 gap-2">
            <HiOutlinePhone className="text-green-500" /> +234 906 176 3716
          </p>
          <p className="flex items-center mb-2 gap-2">
            <HiOutlinePhone className="text-green-500" /> +234 908 367 0962
          </p>
          <p className="flex items-center mb-2 gap-2">
            <HiOutlineMail className="text-green-500" /> Jesulobacompany111@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-green-500" /> 12, Oremeji St, Off Ilaje Road, Bariga Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Jesuloba Electrical Engineering Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
