import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWelcome(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <div className={`welcome-header ${showWelcome ? 'visible' : ''}`}>
        Welcome
      </div>
      
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

      <main>
      <div className="avatar-stage">
        <div className="avatar-stars"></div>
        <div className="avatar-pill"></div>
        <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
      </div>
      <div style={{height: '150vh'}}></div> {/* Espacio para scroll */}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
