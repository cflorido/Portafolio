import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [imagenActual, setImagenActual] = useState("/ilustracion.png"); // 🔹 estado de la imagen

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 alternar imagen cada 1 segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) =>
        prev === "/ilustracion.png" ? "/ilustracion1.png" : "/ilustracion.png"
      );
    }, 1000);

    return () => clearInterval(intervalo); // limpiar cuando se desmonte
  }, []);

  return (
    <div className="portfolio-container">
    <h1 style={{
      fontFamily: 'MiFuentePersonalizada',
      color: '#925c93',
      fontSize: '4rem'
    }}>
      Portafolio
    </h1>
    </div>
  );
}

export default App;
