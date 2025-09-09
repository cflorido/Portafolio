import './App.css';

function App() {
  return (
    <div className="portfolio-container">
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

        {/* Sección Sobre mí */}
        <section className="about-section">
          <div className="about-content">
            <img className="about-photo" src="public/yo.png" alt="Foto de Carol Sofia Florido" />
            <div className="about-text">
              <h2>Sobre mí</h2>
              <p>
                ¡Hola! Soy Carol Sofia Florido, una apasionada desarrolladora de software. Me encanta crear soluciones creativas y funcionales, aprender nuevas tecnologías y colaborar en proyectos que generen impacto positivo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
