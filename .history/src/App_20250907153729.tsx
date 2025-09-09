// App.js
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [imagenActual, setImagenActual] = useState("/ilustracion.png"); // imagen animada

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) =>
        prev === "/ilustracion.png" ? "/ilustracion1.png" : "/ilustracion.png"
      );
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="portfolio-container">
      <div className="hero-content">
        <h1>Portafolio</h1>
        <h2>Hello 👋</h2>
        <p>
          Soy Carol, ingeniera industrial apasionada por la creatividad y la
          programación. Aquí encontrarás mis proyectos y trabajos destacados.
        </p>
        <img src={imagenActual} alt="Ilustración animada" className="hero-image" />
      </div>
    </div>
  );
}

export default App;
