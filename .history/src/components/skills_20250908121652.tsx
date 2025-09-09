import React, { useState, useEffect } from 'react';

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
    {
      id: 1,
      name: "JavaScript",
      level: 90,
      description: "Desarrollo de aplicaciones web dinámicas",
      icon: "⚡",
      color: "#f7df1e"
    },
    {
      id: 2,
      name: "React",
      level: 85,
      description: "Interfaces de usuario modernas",
      icon: "⚛️",
      color: "#61dafb"
    },
    {
      id: 3,
      name: "TypeScript",
      level: 80,
      description: "Desarrollo con tipado estático",
      icon: "🔷",
      color: "#3178c6"
    },
    {
      id: 4,
      name: "Python",
      level: 75,
      description: "Análisis de datos y backend",
      icon: "🐍",
      color: "#306998"
    },
    {
      id: 5,
      name: "Node.js",
      level: 70,
      description: "Desarrollo backend",
      icon: "🟢",
      color: "#339933"
    },
    {
      id: 6,
      name: "CSS",
      level: 88,
      description: "Diseño y estilos avanzados",
      icon: "🎨",
      color: "#1572b6"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // CARRUSEL TIPO 1: TARJETAS MÚLTIPLES
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
      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          alignItems: 'stretch',
          minHeight: '300px'
        }}>
          {getVisibleCards().map((skill, idx) => (
            <div
              key={`${skill.id}-${currentIndex}`}
              style={{
                flex: '1',
                maxWidth: '280px',
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px 20px',
                boxShadow: idx === 0 ? '0 15px 40px rgba(0,0,0,0.15)' : '0 8px 25px rgba(0,0,0,0.1)',
                transform: idx === 0 ? 'scale(1.05)' : 'scale(0.95)',
                transition: 'all 0.4s ease',
                border: idx === 0 ? `3px solid ${skill.color}` : '3px solid transparent',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: skill.color
              }} />
              
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>
                {skill.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '22px', 
                color: '#333', 
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                {skill.name}
              </h3>
              
              <p style={{ 
                color: '#666', 
                fontSize: '14px',
                marginBottom: '20px',
                lineHeight: '1.4'
              }}>
                {skill.description}
              </p>

              <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                height: '8px',
                marginBottom: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  backgroundColor: skill.color,
                  height: '100%',
                  width: `${skill.level}%`,
                  borderRadius: '10px',
                  transition: 'width 1s ease-in-out'
                }}></div>
              </div>
              
              <span style={{ 
                fontSize: '12px', 
                color: skill.color,
                fontWeight: 'bold'
              }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCarousel = () => {
    switch(carouselType) {

      default: return <CardsCarousel />;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '32px', color: '#333' }}>
        Mis Habilidades
      </h2>

      {/* Carrusel seleccionado */}
      {renderCarousel()}

      {/* Controles universales */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '20px',
        marginTop: '30px'
      }}>
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          ←
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentIndex ? '#007bff' : '#ddd',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          →
        </button>
      </div>

      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        marginTop: '20px',
        fontSize: '14px'
      }}>
        {currentIndex + 1} de {skills.length} • Cambia automáticamente cada 5s
      </p>
    </div>
  );
};

export default Skills;