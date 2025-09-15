import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/Portfolio/" className="navbar-logo">
          <img
            src="https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo.png"
            alt="Logo"
          />
        </a>

        {/* Botón Hamburguesa */}
        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#career" onClick={() => setIsOpen(false)}>History</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#hobbies" onClick={() => setIsOpen(false)}>Hobbies</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
