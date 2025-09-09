import React, { useState, useEffect } from 'react';
import './Skills.css';

interface SkillItem {
  id: number;
  name: string;
  level: number;
  description: string;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselType, setCarouselType] = useState<'cards' | 'fade' | 'vertical' | 'minimal'>('cards');

  const skills: SkillItem[] = [
    { id: 1, name: "JavaScript", level: 90, description: "Desarrollo de aplicaciones web dinámicas", icon: "⚡", color: "#f7df1e" },
    { id: 2, name: "React", level: 85, description: "Interfaces de usuario modernas", icon: "⚛️", color: "#61dafb" },
    { id: 3, name: "TypeScript", level: 80, description: "Desarrollo con tipado estático", icon: "🔷", color: "#3178c6" },
    { id: 4, name: "Python", level: 75, description: "Análisis de datos y backend", icon: "🐍", color: "#306998" },
    { id: 5, name: "Node.js", level: 70, description: "Desarrollo backend", icon: "🟢", color: "#339933" },
    { id: 6, name: "CSS", level: 88, description: "Diseño y estilos avanzados", icon: "🎨", color: "#1572b6" }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Carrusel tipo "cards"
  const CardsCarousel = () => {
    const getVisibleCards = () => {
      const cards = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % skills.length;
        cards.push(skills[index]);
      }
      return cards;
    };

    return (
      <div className="carousel-container">
        <div className="carousel-cards">
          {getVisibleCards().map((skill, idx) => (
            <div
              key={`${skill.id}-${currentIndex}`}
              className={`card ${idx === 0 ? 'active' : ''}`}
              style={{ border: idx === 0 ? `3px solid ${skill.color}` : '3px solid transparent' }}
            >
              <div className="card-top" style={{ backgroundColor: skill.color }} />
              <div className="card-icon">{skill.icon}</div>
              <h3 className="card-title">{skill.name}</h3>
              <p className="card-description">{skill.description}</p>

              <div className="progress-bar">
                <div className="progress-fill" style={{ backgroundColor: skill.color, width: `${skill.level}%` }} />
              </div>

              <span className="progress-label" style={{ color: skill.color }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCarousel = () => {
    switch (carouselType) {
      default:
        return <CardsCarousel />;
    }
  };

  return (
    <div className="skills-section">
      <h2 className="skills-title">Mis Habilidades</h2>

      {renderCarousel()}

      {/* Controles */}
<div className="controls">
  <div className="dots">
    {skills.map((_, index) => (
      <button
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => goToSlide(index)}
      />
    ))}
  </div>
</div>


      <p className="slide-info">
        {currentIndex + 1} de {skills.length} • Cambia automáticamente cada 5s
      </p>
    </div>
  );
};

export default Skills;
