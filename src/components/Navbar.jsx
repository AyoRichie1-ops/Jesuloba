import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger icons
import { Link, useLocation } from "react-router-dom"; // React Router Link
import logo from '../assets/logo2.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // get current route

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-green-400 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl container mx-auto flex justify-between items-center p-4">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="Jesuloba Company Logo" 
            className="h-10 w-10 object-contain mr-2" // Added: size and spacing
          />
          <span className="text-2xl font-extrabold text-white">Jesuloba</span> {/* Added span for proper styling */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 pr-5">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white pt-1 font-bold transition transform duration-200
                  ${isActive ? "scale-110" : "hover:scale-125"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-green-500">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white font-bold transition transform duration-200
                  ${isActive ? "scale-110 text-green-200" : "hover:text-green-200"}`}
                onClick={() => setOpen(false)} // close menu after click
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
