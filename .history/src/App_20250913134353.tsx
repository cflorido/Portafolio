import { useState, useEffect } from 'react';
import './App.css';
import CareerHistory from './components/CareerHistory';
import Skills from './components/Skills';
import Proyects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [imagenActual, setImagenActual] = useState("/ilustracion.png");
  
  // 👇 Nuevo estado para el logo
  const [logoActual, setLogoActual] = useState("/logo_1.png");

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación de ilustraciones (ya lo tenías)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) =>
        prev === "/ilustracion.png" ? "/ilustracion1.png" : "/ilustracion.png"
      );
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  // 👇 Animación para cambiar logo cada segundo
  useEffect(() => {
    const intervaloLogo = setInterval(() => {
      setLogoActual((prev) =>
        prev === "/logo_1.png" ? "/logo_2.png" : "/logo_1.png"
      );
    }, 1000);
    return () => clearInterval(intervaloLogo);
  }, []);

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        {/* Texto esquina superior izquierda */}
        <div className="corner-text-top">
          hello <br />
          my name is carol
        </div>
        
        {/* Texto esquina inferior derecha */}
        <div className="corner-text-bottom">
          software engineer<br />
          industrial engineer
        </div>
        
        <div className="portfolio-circle">
          <svg viewBox="0 0 350 250" className="portfolio-text-svg">
            <path
              id="topArc"
              d="M 25,200 A 150,150 0 0,1 325,200"
              fill="none"
            />
            <text className="portfolio-text">
              <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                PORTAFOLIO
              </textPath>
            </text>
          </svg>
          {/* 👇 Ahora el logo cambia dinámicamente */}
          <img src={logoActual} alt="Logo" />
        </div>
      </div>
      
      <Introduction />
      
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