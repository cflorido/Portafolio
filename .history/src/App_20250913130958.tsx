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
<div className="portfolio-circle">
  <svg viewBox="0 0 350 200" className="portfolio-text-svg">
    <path
      id="topArc"
      d="M 25,175 
         A 150,150 0 0,1 325,175"
      fill="none"
    />
    <text className="portfolio-text">
      <textPath href="#topArc" startOffset="50%" textAnchor="middle">
        PORTAFOLIO
      </textPath>
    </text>
  </svg>

  {/* Logo dentro del círculo */}
  <img src="/logo_1.png" alt="Logo" />
</div>


      </div>
      <body>
        
</body>
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
