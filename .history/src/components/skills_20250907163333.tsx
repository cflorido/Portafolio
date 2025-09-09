import { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // desplazamiento por clic
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-carousel-container">
        <button className="arrow left" onClick={() => scrollCarousel("prev")}>
          &#10094;
        </button>
        <div className="skills-carousel" ref={carouselRef}>
          <div className="skill-card">
            <h3 className="skill-category">Programming</h3>
            <ul className="skill-list">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3 className="skill-category">Frameworks</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Spring Boot</li>
              <li>Flask</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3 className="skill-category">Databases</h3>
            <ul className="skill-list">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3 className="skill-category">DevOps</h3>
            <ul className="skill-list">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3 className="skill-category">Data Science</h3>
            <ul className="skill-list">
              <li>Pandas</li>
              <li>NumPy</li>
              <li>TensorFlow</li>
              <li>Scikit-learn</li>
            </ul>
          </div>
        </div>
        <button className="arrow right" onClick={() => scrollCarousel("next")}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Skills;
