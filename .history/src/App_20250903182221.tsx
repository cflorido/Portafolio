import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <div className="portfolio-header">
          <span className="year">2025</span>
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
            <span className="name">Carol Sofia Florido</span>
            <span className="role">Software Developer</span>
          </div>
        </div>
      </header>

      <main>
        <div className="avatar-stage">
          <div className="avatar-pill"></div>
          <img className="avatar" src="public/ilustracion.png" alt="Avatar" />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
