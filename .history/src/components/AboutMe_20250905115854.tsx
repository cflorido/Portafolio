import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <h2 className="aboutme-title">Sobre mí</h2>
      <p className="aboutme-text">
        Fuera de la programación disfruto pintar al óleo, hacer crochet,
        practicar tenis y golf. Me considero una persona creativa y siempre con
        ganas de aprender algo nuevo.
      </p>
      <ul className="aboutme-hobbies">
        <li>🎨 Pintura al óleo</li>
        <li>🧶 Crochet</li>
        <li>🎾 Tenis</li>
        <li>🏌️ Golf</li>
      </ul>
    </div>
  );
}

export default AboutMe;
