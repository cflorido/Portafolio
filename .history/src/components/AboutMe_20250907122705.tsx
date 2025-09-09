import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
        <section className="about-card">
          <div className="about-photo">
            <img src="/yo.png" alt="Carol Sofia Florido" />
          </div>
          <div className="about-info">
            <h2>Hi! I'm <span>Carol Sofia Florido</span></h2>
            <span className="tag">Software Developer</span>
            <p>
              Soy desarrolladora apasionada por la tecnología y la creatividad. 
              Me encanta construir interfaces limpias, intuitivas y con un diseño atractivo. 
              Tengo experiencia en proyectos de desarrollo web y disfruto aprender nuevas herramientas.
            </p>
            <div className="contact-info">
              <a href="mailto:carol@example.com">carol@example.com</a>
              <span>|</span>
              <a href="https://miportafolio.com" target="_blank" rel="noreferrer">
                www.miportafolio.com
              </a>
            </div>
          </div>
        </section>
    </div>
  );
}

export default AboutMe;
