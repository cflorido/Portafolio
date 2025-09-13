import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Introduction.css";

const Introduction = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  const highlights = ["technology", "innovation", "software", "data"];

  // Cambia la palabra resaltada cada 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section className="introduction">
      {/* Fondo de partículas */}
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "bounce" },
      },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }}
/>


      {/* Contenido */}
      <div className="intro-content">
        <p className="descripcion">
          Passionate about{" "}
          <span
            className={`highlight ${
              highlights[highlightIndex] === "technology" ? "active" : ""
            }`}
          >
            technology
          </span>{" "}
          and{" "}
          <span
            className={`highlight ${
              highlights[highlightIndex] === "innovation" ? "active" : ""
            }`}
          >
            innovation
          </span>
          , with a strong interest in solving complex problems and building
          impactful solutions. Skilled in{" "}
          <span
            className={`highlight ${
              highlights[highlightIndex] === "software" ? "active" : ""
            }`}
          >
            software
          </span>{" "}
          development,{" "}
          <span
            className={`highlight ${
              highlights[highlightIndex] === "data" ? "active" : ""
            }`}
          >
            data
          </span>{" "}
          analysis, and process optimization, and always eager to learn and
          collaborate in diverse, dynamic environments.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
