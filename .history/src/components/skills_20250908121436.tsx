import React, { useState, useEffect } from 'react';

interface SkillItem {
  id: number;
  name: string;
  level: number;
  description: string;
  icon: string;
}

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills: SkillItem[] = [
    {
      id: 1,
      name: "JavaScript",
      level: 90,
      description: "Desarrollo de aplicaciones web dinámicas e interactivas",
      icon: "⚡"
    },
    {
      id: 2,
      name: "React",
      level: 85,
      description: "Creación de interfaces de usuario modernas y responsivas",
      icon: "⚛️"
    },
    {
      id: 3,
      name: "TypeScript",
      level: 80,
      description: "Desarrollo con tipado estático para mayor robustez",
      icon: "🔷"
    },
    {
      id: 4,
      name: "Python",
      level: 75,
      description: "Análisis de datos y desarrollo backend",
      icon: "🐍"
    },
    {
      id: 5,
      name: "Node.js",
      level: 70,
      description: "Desarrollo de APIs y aplicaciones del lado del servidor",
      icon: "🟢"
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

  // Auto-advance cada 4 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSkill = skills[currentIndex];

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        color: '#333',
        fontSize: '28px'
      }}>
        Mis Habilidades
      </h2>

      {/* Carrusel Container */}
      <div style={{
        position: 'relative',
        backgroundColor: '#f8f9fa',
        borderRadius: '15px',
        padding: '40px 20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ←
        </button>

        {/* Contenido del Skill */}
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '350px',
          animation: 'fadeIn 0.5s ease-in-out',
          margin: '0 auto', // Centra el contenido
          padding: '0 20px' // Padding lateral para evitar que toque las flechas
        }}>
          <div style={{ 
            fontSize: '60px', 
            marginBottom: '20px',
            animation: 'bounce 2s infinite'
          }}>
            {currentSkill.icon}
          </div>
          
          <h3 style={{ 
            fontSize: '24px', 
            color: '#333', 
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            {currentSkill.name}
          </h3>
          
          <p style={{ 
            color: '#666', 
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {currentSkill.description}
          </p>

          {/* Barra de Progreso */}
          <div style={{
            backgroundColor: '#e9ecef',
            borderRadius: '10px',
            height: '10px',
            marginBottom: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: '#28a745',
              height: '100%',
              width: `${currentSkill.level}%`,
              borderRadius: '10px',
              transition: 'width 1s ease-in-out',
              background: 'linear-gradient(45deg, #28a745, #20c997)'
            }}></div>
          </div>
          
          <span style={{ 
            fontSize: '14px', 
            color: '#28a745',
            fontWeight: 'bold'
          }}>
            {currentSkill.level}%
          </span>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          →
        </button>
      </div>

      {/* Indicadores */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        gap: '10px'
      }}>
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? '#007bff' : '#ccc',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        ))}
      </div>

      {/* Contador */}
      <div style={{
        textAlign: 'center',
        marginTop: '15px',
        color: '#666',
        fontSize: '14px'
      }}>
        {currentIndex + 1} de {skills.length}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;