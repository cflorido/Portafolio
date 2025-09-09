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

  // CARRUSEL TIPO 2: EFECTO FADE
  const FadeCarousel = () => (
    <div style={{ 
      width: '100%', 
      maxWidth: '500px', 
      margin: '0 auto', 
      padding: '20px',
      position: 'relative',
      height: '400px'
    }}>
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${skill.color}15, white)`
          }}
        >
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>
            {skill.icon}
          </div>
          <h3 style={{ fontSize: '28px', color: '#333', marginBottom: '15px' }}>
            {skill.name}
          </h3>
          <p style={{ color: '#666', fontSize: '16px', marginBottom: '25px' }}>
            {skill.description}
          </p>
          <div style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '15px',
            height: '12px',
            marginBottom: '10px'
          }}>
            <div style={{
              backgroundColor: skill.color,
              height: '100%',
              width: `${skill.level}%`,
              borderRadius: '15px',
              transition: 'width 1s ease-in-out'
            }}></div>
          </div>
          <span style={{ fontSize: '18px', color: skill.color, fontWeight: 'bold' }}>
            {skill.level}%
          </span>
        </div>
      ))}
    </div>
  );

  // CARRUSEL TIPO 3: VERTICAL
  const VerticalCarousel = () => (
    <div style={{ 
      width: '100%', 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      height: '500px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        transform: `translateY(-${currentIndex * 120}px)`,
        transition: 'transform 0.5s ease-in-out',
        gap: '20px'
      }}>
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.id}-${index}`}
            style={{
              minHeight: '100px',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              borderLeft: `5px solid ${skill.color}`
            }}
          >
            <div style={{ fontSize: '40px' }}>{skill.icon}</div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{skill.name}</h4>
              <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                height: '6px',
                marginBottom: '5px'
              }}>
                <div style={{
                  backgroundColor: skill.color,
                  height: '100%',
                  width: `${skill.level}%`,
                  borderRadius: '10px'
                }}></div>
              </div>
              <span style={{ fontSize: '12px', color: '#666' }}>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // CARRUSEL TIPO 4: MINIMALISTA
  const MinimalCarousel = () => {
    const currentSkill = skills[currentIndex];
    
    return (
      <div style={{ 
        width: '100%', 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '40px',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: currentSkill.color + '10',
          borderRadius: '50px',
          padding: '60px 40px',
          border: `2px solid ${currentSkill.color}30`,
          transition: 'all 0.5s ease'
        }}>
          <div style={{ 
            fontSize: '100px', 
            marginBottom: '20px',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}>
            {currentSkill.icon}
          </div>
          
          <h2 style={{ 
            fontSize: '36px', 
            color: '#333', 
            marginBottom: '15px',
            fontWeight: '300'
          }}>
            {currentSkill.name}
          </h2>
          
          <div style={{
            width: '200px',
            height: '4px',
            backgroundColor: '#f0f0f0',
            borderRadius: '2px',
            margin: '20px auto',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: currentSkill.color,
              height: '100%',
              width: `${currentSkill.level}%`,
              borderRadius: '2px',
              transition: 'width 1s ease-in-out'
            }}></div>
          </div>
          
          <p style={{ 
            fontSize: '24px', 
            color: currentSkill.color,
            fontWeight: 'bold',
            margin: 0
          }}>
            {currentSkill.level}%
          </p>
        </div>
      </div>
    );
  };

  const renderCarousel = () => {
    switch(carouselType) {
      case 'cards': return <CardsCarousel />;
      case 'fade': return <FadeCarousel />;
      case 'vertical': return <VerticalCarousel />;
      case 'minimal': return <MinimalCarousel />;
      default: return <CardsCarousel />;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '32px', color: '#333' }}>
        Mis Habilidades
      </h2>

      {/* Selector de tipo de carrusel */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        {[
          { key: 'cards', label: '🃏 Tarjetas' },
          { key: 'fade', label: '✨ Fade' },
          { key: 'vertical', label: '📜 Vertical' },
          { key: 'minimal', label: '⚪ Minimal' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setCarouselType(key as any)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '25px',
              backgroundColor: carouselType === key ? '#007bff' : '#f0f0f0',
              color: carouselType === key ? 'white' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {label}
          </button>
        ))}
      </div>

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