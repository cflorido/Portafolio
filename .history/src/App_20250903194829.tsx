import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setIsScrolled(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <div className={`dynamic-header ${isScrolled ? 'visible' : ''}`}>
        <span className="header-text">Carol Sofia Florido</span>
        <span className="separator"></span>
        <span className="header-role">Software Developer</span>
      </div>
      <header>
¿
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
