import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <header className={`dynamic-header ${showHeader ? 'visible' : ''}`}>
        {/* Tu contenido actual del header */}
      </header>
      
      <main>
        <div className="portfolio-header">
       
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
          <span className="name">Carol Sofia Florido </span>
          <span className="separator"></span>
          <span className="role">Software Developer</span>
          </div>
        </div>
        <div className="avatar-stage">
        <div className="avatar-stars"></div>
        <div className="avatar-pill"></div>
        <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
      </div>

        {/* Contenido temporal para scroll */}
        <section style={{ height: '100vh', padding: '20px', marginTop: '20px' }}>
          <h2>Mis Proyectos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </section>
        
        <section style={{ height: '100vh', padding: '20px' }}>
          <h2>Sobre Mí</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </section>
        
        <section style={{ height: '100vh', padding: '20px' }}>
          <h2>Contacto</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
