import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const header = document.querySelector('.dynamic-header');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('visible');
      } else {
        header?.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <header className="dynamic-header">
        <span>PORTFOLIO</span>
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
