import React from "react";
import "./Codelab.css";

const Codelab: React.FC = () => {
  return (
    <section id="codelab" className="codelab-section">
      <div className="codelab-container">
        {/* Logo */}
        <div className="codelab-logo">
          <img src="public/CodeLab.png" alt="CodeLab Logo" />
        </div>

        {/* Texto */}
        <div className="codelab-text">
          <h2 className="codelab-title">CodeLab</h2>
          <h3 className="codelab-subtitle">Co-Founder — Los Andes University (2025 – Present)</h3>
          <p className="codelab-description">
            I co-founded <strong>CodeLab</strong>, a student-led initiative for creative programming. 
            We built a collaborative space where students explore new technologies, experiment with 
            innovative projects, and foster teamwork, creativity, and innovation through workshops and 
            community-driven projects.
          </p>

          {/* Botón hacia Instagram */}
          <a 
            href="https://www.instagram.com/codelab.uniandes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="codelab-btn"
          >
            Visit our Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Codelab;
