// src/components/AboutMe.tsx
import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section
      className="aboutme-section aboutme-container"
      style={{
        background:
          "linear-gradient(135deg, #f9d9e3 0%, #e88b99 100%)",
        boxShadow: "0 8px 32px rgba(232,139,153,0.12)",
        borderRadius: "32px",
        padding: "48px 24px",
        color: "#333",
        position: "relative",
      }}
    >
      <h2
        className="aboutme-title"
        style={{
          color: "#e88b99",
          fontSize: "2.5rem",
          marginBottom: "24px",
        }}
      >
        Sobre mí
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/public/yo.png"
          alt="Carol Sofia Florido"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            boxShadow:
              "0 4px 16px rgba(232,139,153,0.15)",
            border: "4px solid #e88b99",
            objectFit: "cover",
          }}
        />
        <div style={{ maxWidth: "400px" }}>
          <p
            className="aboutme-text"
            style={{
              fontSize: "1.2rem",
              marginBottom: "18px",
            }}
          >
            ¡Hola! Soy{" "}
            <strong>Carol Sofia Florido</strong>, estudiante de Ingeniería
            Industrial apasionada por la tecnología, el diseño y la resolución de
            problemas. Me encanta aprender, crear y compartir conocimiento.
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
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              >
                💻
              </span>
              Desarrollo de software y web
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              >
                🎨
              </span>
              Pintura al óleo y diseño gráfico
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              >
                🧶
              </span>
              Crochet y manualidades
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              >
                🎾
              </span>
              Tenis y golf
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              >
                📚
              </span>
              Investigación de operaciones y aprendizaje continuo
            </li>
          </ul>
          <p
            style={{
              fontSize: "1.1rem",
              marginTop: "24px",
              color: "#e88b99",
              fontWeight: "bold",
            }}
          >
            "La creatividad y la curiosidad son mis motores para crecer cada
            día."
          </p>
        </div>
      </div>
      {/* Decoración de fondo: estrellitas */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: "1.3rem",
              color: "#fff",
              opacity: 0.7,
            }}
          >
            ✧
          </span>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
