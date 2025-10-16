import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 overflow-x-hidden">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            Jesuloba Electrical Engineering Company
          </h3>
          <p className="text-green-500 text-sm mb-4">
            Powering Your Home and Business with Smart Energy Solutions
          </p>
          <div className="cursor-pointer flex gap-4 mt-4 text-lg">
            <a className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-white transition">
                Solar Panel Installation
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Inverter Systems
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Electrical Wiring
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Energy Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Contact Us
          </h4>
          <p className="flex items-center mb-2 gap-2">
            <HiOutlinePhone className="text-green-500" /> +234 906 176 3716
          </p>
          <p className="flex items-center mb-2 gap-2">
            <HiOutlinePhone className="text-green-500" /> +234 908 367 0962
          </p>
          <p className="flex items-center mb-2 gap-2 break-all">
            <HiOutlineMail className="text-green-500" />{" "}
            jesulobacompany111@gmail.com
          </p>
          <p className="flex items-start gap-2">
            <HiOutlineLocationMarker className="text-green-500 mt-1" />
            <span>
              12, Oremeji St, Off Ilaje Road, Bariga, Lagos, Nigeria
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Jesuloba Electrical Engineering
        Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
