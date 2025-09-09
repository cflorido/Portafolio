import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="/yo.png" alt="Foto personal" />
        </div>
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>¡Hola! Soy un desarrollador apasionado por crear experiencias web únicas y memorables. Me especializo en desarrollo frontend y disfruto transformando ideas en código.</p>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
