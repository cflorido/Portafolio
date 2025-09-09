import './App.css';
import AboutMe from './components/aboutme';
function App() {
  return (
    <div className="portfolio-container">
      <header>

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


      <div>
      <AboutMe />
      </div>  
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
