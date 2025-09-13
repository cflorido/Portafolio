import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Carol Florido</h3>
        <p className="footer-text">
          © {new Date().getFullYear()} | Designed & Built with 💜
        </p>
        <div className="footer-links">
          <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tuUsuario/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tuemail@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
