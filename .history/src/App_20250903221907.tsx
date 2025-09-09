import { useState, useEffect } from 'react';
import AboutMe from './components/aboutme';
import './App.css';

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
      <header className={`dynamic-header${showHeader ? ' visible' : ''}`}>
        <nav>
          <span style={{ fontWeight: 'bold', color: '#e88b99', fontSize: '1.3rem' }}>Carol Sofia Florido</span>
          <span style={{ margin: '0 16px', color: '#e88b99' }}>|</span>
          <span style={{ color: '#333', fontSize: '1.1rem' }}>Software Developer</span>
        </nav>
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
          <div className="avatar-pill"></div>
          <div className="avatar-stars"></div>
          <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
        </div>
        <AboutMe />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
