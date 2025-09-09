import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <div className="portfolio-header">
       
          <h1>PORTFOLIO</h1>
          <div className="subtitle">
            <span className="name">Carol Sofia Florido |</span>
            <span className="role">Software Developer</span>
          </div>
        </div>
      </header>

      <main>
      <div className="avatar-stage">
        <div className="avatar-pill"></div>
        <img className="avatar" src="public/ilustracion.png" alt="Avatar" />

        <div className="stars">
          <div className="star" style={{ top: "10%", left: "20%" }}></div>
          <div className="star" style={{ top: "30%", left: "70%" }}></div>
          <div className="star" style={{ top: "60%", left: "40%" }}></div>
          <div className="star" style={{ top: "80%", left: "90%" }}></div>
          <div className="star" style={{ top: "50%", left: "10%" }}></div>
        </div>
      </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
