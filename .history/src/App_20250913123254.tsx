import { useState, useEffect } from 'react';
import './App.css';
import CareerHistory from './components/CareerHistory';
import Skills from './components/Skills';
import Proyects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
          <Navbar />
      <div className="portfolio-container">
        <div className="header-text">
          <h1 className="titulo-portafolio">Portafolio</h1>
          <h2 className="subtitulo">Hello, I’m <span>Carol Florido</span></h2>
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

  </div>
  <Skills />
</section>

  <Proyects />

 
      <Footer />
    </>
  );
}

export default App;
