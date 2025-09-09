// src/components/AboutMe.tsx
import React from "react";
import "./AboutMe.css"; // si quieres darle estilos propios

function AboutMe() {
  return (
    <section className="aboutme-section aboutme-container">
      <h2 className="aboutme-title">About Me</h2>
      <p className="aboutme-text">
        ¡Hola! Soy <strong>Carol Sofia Florido</strong>, estudiante de Ingeniería
        Industrial con pasión por la tecnología, el diseño y la resolución de
        problemas. Me interesa especialmente el desarrollo de software,
        investigación de operaciones y crear soluciones que generen impacto real.
      </p>
      <p className="aboutme-text">
        Fuera de la programación disfruto pintar al óleo, hacer crochet,
        practicar tenis y golf. Me considero una persona creativa y siempre con
        ganas de aprender algo nuevo.
      </p>
    </section>
  );
}

export default AboutMe;
