import React, { useState, useEffect } from 'react';
import './Skills.css';

interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: SkillCategory[] = [
    {
      id: 1,
      name: "Programming",
      icon: "💻",
      color: "#007bff",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      id: 2,
      name: "Frameworks",
      icon: "⚛️",
      color: "#61dafb",
      skills: ["React", "Angular", "Node.js", "Spring Boot", "Flask", "Django"]
    },
    {
      id: 3,
      name: "Databases",
      icon: "🗄️",
      color: "#f39c12",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      id: 4,
      name: "DevOps",
      icon: "⚙️",
      color: "#2ecc71",
      skills: ["Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions)"]
    },
    {
      id: 5,
      name: "Data",
      icon: "📊",
      color: "#9b59b6",
      skills: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Data Visualization"]
    },
    {
      id: 6,
      name: "Other",
      icon: "🌐",
      color: "#e74c3c",
      skills: ["Git", "Agile (Scrum)", "Cloud (AWS, GCP)"]
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % categories.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const CardsCarousel = () => {
    const getVisibleCards = () => {
      const cards = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % categories.length;
        cards.push(categories[index]);
      }
      return cards;
    };

    return (
      <div className="carousel-container">
        <div className="carousel-cards">
          {getVisibleCards().map((category, idx) => {
            const isActive = idx === 1; // primera card es la activa
            return (
              <div
                key={`${category.id}-${currentIndex}`}
                className={`card ${isActive ? 'active' : ''}`}
                style={{ border: isActive ? `3px solid ${category.color}` : '3px solid transparent' }}
              >
                <div className="card-top" style={{ backgroundColor: category.color }} />
                <div className="card-icon">{category.icon}</div>
                <h3 className="card-title">{category.name}</h3>

                {/* Skills solo si la card está activa */}
                <div className={`skills-container ${isActive ? 'show' : ''}`}>
                  <ul className="card-list">
                    {category.skills.map((skill, i) => (
                      <li key={i}> {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="skills-section">
      <h2 className="skills-title">Mis Habilidades</h2>

      {<CardsCarousel />}

      {/* Dots */}
      <div className="controls">
        <div className="dots">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
