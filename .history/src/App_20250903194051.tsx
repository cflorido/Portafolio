import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 100); // Cambia el valor según cuándo quieres mostrar el header
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <header>
        <div className="portfolio-header">
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
            <span className="name">Carol Sofia Florido </span>
            <span className="separator"></span>
            <span className="role">Software Developer</span>
          </div>
        </div>
      </header>

      {/* Sticky header que aparece al hacer scroll */}
      {showStickyHeader && (
        <div className="sticky-header">
          <h1>PORTFOLIO</h1>
        </div>
      )}

      <main>
        <div className="avatar-stage">
          <div className="avatar-stars"></div>
          <div className="avatar-pill"></div>
          <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
        </div>
        {/* Aquí puedes agregar la siguiente sección */}
        <div style={{height: '120vh'}}></div> {/* Solo para probar el scroll */}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
