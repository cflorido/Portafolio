import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        {/* 🔹 Navbar */}
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <h1>PORTFOLIO</h1>
      </header>

      <main>
        <div className="avatar-stage">
          <div className="avatar-pill"></div>
          <img className="avatar" src="/ilustracion.png" alt="Avatar" />
        </div>
      </main>

      <p className="welcome">/WELCOME/</p>

      <footer>
        {/* puedes meter info de contacto aquí */}
      </footer>
    </div>
  );
}

export default App;
