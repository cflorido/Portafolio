import React, { useState, useEffect } from 'react';
import { FaCode, FaReact, FaDatabase, FaCogs, FaChartBar, FaGlobe } from "react-icons/fa"; 
import './Skills.css';

interface SkillCategory {
  id: number;
  name: string;
  icon: JSX.Element; // ahora es un componente de ícono
  color: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: SkillCategory[] = [
    {
      id: 1,
      name: "Programming",
      icon: <FaCode size={50} color="#925c93" />,
      color: "#925c93",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      id: 2,
      name: "Frameworks",
      icon: <FaReact size={50} color="#925c93" />,
      color: "#925c93",
      skills: ["React", "Angular", "Node.js", "Spring Boot", "Flask", "Django"]
    },
    {
      id: 3,
      name: "Databases",
      icon: <FaDatabase size={50} color="#925c93" />,
      color: "#925c93",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      id: 4,
      name: "DevOps",
      icon: <FaCogs size={50} color="#925c93" />,
      color: "#925c93",
      skills: ["Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions)"]
    },
    {
      id: 5,
      name: "Data",
      icon: <FaChartBar size={50} color="#925c93" />,
      color: "#925c93",
      skills: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Data Visualization"]
    },
    {
      id: 6,
      name: "Other",
      icon: <FaGlobe size={50} color="#925c93" />,
      color: "#925c93",
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
      cards.push({ ...categories[index], visibleIndex: i });
    }
    return cards;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-cards">
        {getVisibleCards().map((category) => {
          const isActive = category.visibleIndex === 1;

          return (
            <div
              key={`${category.id}-${currentIndex}`}
              className={`card ${isActive ? 'active' : ''}`}
              style={{ border: isActive ? `3px solid ${category.color}` : '3px solid transparent' }}
              onClick={() => {
                // Si no es la card del centro, la seleccionamos
                if (!isActive) {
                  // Calculamos el índice real de la categoría
                  const newIndex = (currentIndex + category.visibleIndex) % categories.length;
                  setCurrentIndex(newIndex);
                }
              }}
            >
              <div className="card-top" style={{ backgroundColor: category.color }} />
              <div className="card-icon">{category.icon}</div>
              <h3 className="card-title">{category.name}</h3>

              <div className={`skills-container ${isActive ? 'show' : ''}`}>
                <ul className="card-list">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
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
