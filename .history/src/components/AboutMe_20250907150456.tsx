import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
        <section className="about-card">
<div className="about-card">
  <div className="floating-balls">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div className="about-photo">
    <img src="tu-foto.jpg" alt="profile" />
  </div>

  <div className="about-info">
    <h2>Hola <span>Carol</span></h2>
    <p>Tu descripción aquí ✨</p>
  </div>
</div>

        </section>
    </div>
  );
}

export default AboutMe;
