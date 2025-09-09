import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Ajusta el valor según tu diseño
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <header className={showHeader ? 'header-visible' : 'header-hidden'}>
        <div className="portfolio-header">
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
            <span className="name">Carol Sofia Florido </span>
            <span className="separator"></span>
            <span className="role">Software Developer</span>
          </div>
        </div>
      </header>

      <main>
        <div className="avatar-stage">
          <div className="avatar-stars"></div>
          <div className="avatar-pill"></div>
          <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
        </div>
        {/* Aquí puedes agregar la siguiente sección para hacer scroll */}
        <div style={{height: '120vh'}}></div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
