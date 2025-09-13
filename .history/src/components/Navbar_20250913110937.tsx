import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos del menú hamburguesa

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-[#925c93] tracking-wide">
            Carol Florido
          </span>
        </div>

        {/* Links en desktop */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#about" className="text-gray-700 hover:text-[#925c93] transition">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-[#925c93] transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#925c93] transition">
            Contact
          </a>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          <a href="#about" className="text-gray-700 hover:text-[#925c93] transition">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-[#925c93] transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#925c93] transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
