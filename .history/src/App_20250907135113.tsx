import { useState, useEffect } from 'react';
import AboutMe from './components/aboutme';
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
      <header className={`dynamic-header${showHeader ? ' visible' : ''}`}>
        <nav>
          <span style={{ fontWeight: 'bold', color: '#e88b99', fontSize: '1.3rem' }}>Carol Sofia Florido</span>
          <span style={{ color: '#e88b99' }}>|</span>
          <span style={{ color: '#333', fontSize: '1.1rem' }}>Software Developer</span>
        </nav>
      </header>
      <h1>PORTFOLIO</h1>
      <main>
        <section className="portfolio-header">
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
            <span className="name">Carol Sofia Florido</span>
            <span className="separator"></span>
            <span className="role">Software Developer</span>
          </div>
        </section>

        <section className="about-section full-section">
          <AboutMe />
        </section>
      </main>


      <footer></footer>
    </div>
  );
}

export default App;
