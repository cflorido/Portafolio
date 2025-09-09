import { useState, useEffect } from 'react';
import './App.css';
import CareerHistory from './components/CareerHistory';
import Skills from './components/skills';
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
    <>
      <div className="portfolio-container">
        <div className="header-text">
          <h1 className="titulo-portafolio">Portafolio</h1>
          <h2 className="subtitulo">Hello, I’m <span>Carol Florido</span></h2>
          <p className="descripcion">
            I’m Carol, a 21-year-old Colombian currently pursuing a double major in Industrial and Systems Engineering at Universidad de los Andes, one of the leading universities in Latin America. I’m passionate about technology, problem-solving, and creating meaningful solutions. I enjoy working on software development, data analysis, and process optimisation, always looking for ways to improve efficiency and add value. I thrive in diverse, collaborative environments and love taking on challenges that push me to learn and grow.
        </div>
      </div>
      <body>
</body>
      <section className="skills-section">
  <div className="bolas">
    <span></span>
    <span></span>

  </div>
  <CareerHistory />
</section>
<section className="skills-section">
  <div className="bolas">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <Skills />
</section>

    </>
  );
}

export default App;
