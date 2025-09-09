import './App.css';
import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el header cuando el scroll es mayor a 100px
      setShowHeader(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpieza del evento
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <header className={`dynamic-header ${showHeader ? 'visible' : ''}`}>
        {/* Tu contenido actual del header */}
      </header>
        <div className="portfolio-header">
       
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
          <span className="name">Carol Sofia Florido </span>
          <span className="separator"></span>
          <span className="role">Software Developer</span>
          </div>
        </div>
      <main>
      <div className="avatar-stage">
        <div className="avatar-stars"></div>
        <div className="avatar-pill"></div>
        <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
      </div>

      </main>

      <footer></footer>
    </div>
  );
}

export default App;
