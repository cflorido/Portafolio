import './App.css';
import { useState, useEffect } from 'react';

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

.dynamic-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 1rem 0;
}

.dynamic-header.visible {
  transform: translateY(0);
}
