import { useState, useEffect } from 'react';
import './App.css';
import CareerHistory from './components/CareerHistory';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Hobbies from './components/Hobbies';
import Data from './components/Data';
import Codelab from './components/Codelab';

function App() {
  const [_showHeader, setShowHeader] = useState(false);
  const [_imagenActual, setImagenActual] = useState("/ilustracion.png");
  const [showScrollButton, setShowScrollButton] = useState(false);
     
  // 👇 Nuevo estado para el logo
  const [logoActual, setLogoActual] = useState("https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png");

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
      // Mostrar botón cuando el usuario haya hecho scroll hacia abajo
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación de ilustraciones 
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
        prev === "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png" ? "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_2.png" : "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png"
      );
    }, 1000);
    return () => clearInterval(intervaloLogo);
  }, []);

  // Función para scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        
        {/* Texto esquina superior izquierda */}
        <div className="corner-text-top">
          <span className="hello">Hello!</span> <br />
          My name is <span className="highlight2">Carol</span>
        </div>

        {/* Texto esquina inferior derecha */}
        <div className="corner-text-bottom">
          Computing <span className="highlight2">engineer</span><br />
          Industrial <span className="highlight2">engineer</span>
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
                PORTFOLIO
              </textPath>
            </text>
          </svg>
          {/* 👇 Ahora el logo cambia dinámicamente */}
          <img src={logoActual} alt="Logo" />
        </div>
      </div>

      <Introduction id="about" />
      <section id="career" className="skills-section">
        <div className="bolas">
          <span></span>
          <span></span>

        </div>

      </section>
         
      <Projects id="projects" />
 

      
      <Data />
    
      <section id="skills" className="skills-section">
        <div className="bolas">
          <span></span>
          <span></span>

        </div>
        <Skills />
      </section>
    
      <Hobbies id="hobbies" />
 <Codelab />
              <CareerHistory />
      <Footer/>

      {/* Botón Scroll to Top */}
      {showScrollButton && (
        <button 
          className="scroll-to-top-btn" 
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 14L12 9L17 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      
    </>
  );
}

export default App;