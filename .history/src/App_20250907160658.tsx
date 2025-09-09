import { useState, useEffect } from 'react';
import './App.css';
import CareerHistory from './components/CareerHistory';
function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [imagenActual, setImagenActual] = useState("/ilustracion.png");

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
      <div className="header-text">
        <h1 className="titulo-portafolio">Portafolio</h1>
        <h2 className="subtitulo">Hello, I’m <span>Carol Florido</span></h2>
        <p className="descripcion">
          Soy una desarrolladora apasionada por la creación de experiencias digitales
          únicas, con un enfoque en diseño elegante y funcionalidad moderna.
        </p>
      </div>
    </div>
    <div><CareerHistory /></div>
  );
}

export default App;
