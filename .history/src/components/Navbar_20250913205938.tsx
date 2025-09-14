import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
        </a>

        {/* Toggle Menu (Mobile) */}
        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links */}
<div className={`navbar-links ${isOpen ? "open" : ""}`}>
  <a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a>
  <a href="#career" onClick={() => setIsOpen(false)}>Historial</a>
  <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
  <a href="#Hobbies" onClick={() => setIsOpen(false)}>Hobbies</a>
  <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
  <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
