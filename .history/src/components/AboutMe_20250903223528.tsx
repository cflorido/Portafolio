// src/components/AboutMe.tsx
import React from "react";
import "./AboutMe.css"; // si quieres darle estilos propios

function AboutMe() {
  return (
    <div style={{ maxWidth: "400px" }}>
      <p
        className="aboutme-text"
        style={{ fontSize: "1.2rem", marginBottom: "18px" }}
      >
        ¡Hola! Soy{" "}
        <strong>Carol Sofia Florido</strong>, estudiante de Ingeniería Industrial
        apasionada por la tecnología, el diseño y la resolución de problemas. Me
        encanta aprender, crear y compartir conocimiento.
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>💻</span>
          Desarrollo de software y web
        </li>
        <li
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>🎨</span>
          Pintura al óleo y diseño gráfico
        </li>
        <li
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>🧶</span>
          Crochet y manualidades
        </li>
        <li
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>🎾</span>
          Tenis y golf
        </li>
        <li
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>📚</span>
          Investigación de operaciones y aprendizaje continuo
        </li>
      </ul>
      <div style={{ marginTop: "24px" }}>
        <h3
          style={{
            color: "#e88b99",
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          Tecnologías favoritas
        </h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "#fff4e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            React
          </span>
          <span
            style={{
              background: "#fff4e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            Python
          </span>
          <span
            style={{
              background: "#fff4e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            TypeScript
          </span>
          <span
            style={{
              background: "#fff4e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            Figma
          </span>
          <span
            style={{
              background: "#fff4e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            Excel
          </span>
        </div>
      </div>
      <div style={{ marginTop: "24px" }}>
        <h3
          style={{
            color: "#e88b99",
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          Hobbies
        </h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "#f9d9e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#333",
            }}
          >
            Viajar
          </span>
          <span
            style={{
              background: "#f9d9e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#333",
            }}
          >
            Fotografía
          </span>
          <span
            style={{
              background: "#f9d9e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#333",
            }}
          >
            Cocinar
          </span>
          <span
            style={{
              background: "#f9d9e3",
              borderRadius: "12px",
              padding: "6px 14px",
              color: "#333",
            }}
          >
            Leer novelas
          </span>
        </div>
      </div>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "24px",
          color: "#e88b99",
          fontWeight: "bold",
        }}
      >
        "La creatividad y la curiosidad son mis motores para crecer cada día."
      </p>
    </div>
  );
}

export default AboutMe;
