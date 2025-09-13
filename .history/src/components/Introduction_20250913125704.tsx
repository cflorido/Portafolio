import React, { useEffect, useState, useRef } from "react";

const Introduction = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [trailPoints, setTrailPoints] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  const highlights = ["technology", "innovation", "software", "data"];

  // Cambia la palabra resaltada cada 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Crear puntos del trail
  const createTrailPoint = (x, y) => {
    const distance = Math.sqrt(
      Math.pow(x - lastPositionRef.current.x, 2) + 
      Math.pow(y - lastPositionRef.current.y, 2)
    );
    
    // Solo crear punto si se ha movido lo suficiente (evita saturación)
    if (distance > 8) {
      const newPoint = {
        id: trailIdRef.current++,
        x,
        y,
        life: 1,
        opacity: 1,
        size: Math.random() * 3 + 2,
        sparkleType: 0, // Solo un tipo simple
        createdAt: Date.now(),
        hue: Math.random() * 60 + 320, // Colores entre púrpura y dorado
      };
      
      setTrailPoints(prev => [...prev, newPoint]);
      lastPositionRef.current = { x, y };
    }
  };

  // Manejar movimiento del mouse
  const handleMouseMove = (e) => {
    if (!sectionRef.current || !isHovering) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createTrailPoint(x, y);
  };

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastPositionRef.current = { x, y };
    createTrailPoint(x, y);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // El trail persistirá y se desvanecerá gradualmente
  };

  // Animación de desvanecimiento del trail
  useEffect(() => {
    const fadeTrail = () => {
      setTrailPoints(prevPoints => {
        return prevPoints
          .map(point => ({
            ...point,
            life: point.life - 0.008, // Desvanecimiento muy lento
            opacity: Math.max(0, point.life - 0.008),
            size: point.size * (point.life > 0.7 ? 1 : (point.life - 0.008) * 1.5) // Se agranda al final
          }))
          .filter(point => point.life > 0);
      });
    };

    const interval = setInterval(fadeTrail, 32); // ~30fps para suavidad
    return () => clearInterval(interval);
  }, []);

  // Limpiar puntos muy antiguos (seguridad)
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrailPoints(prev => 
        prev.filter(point => Date.now() - point.createdAt < 15000) // 15 segundos máximo
      );
    }, 5000);
    
    return () => clearInterval(cleanup);
  }, []);

  const getSparkleStyle = (point) => {
    const { sparkleType, size, opacity, hue } = point;
    
    const baseStyle = {
      position: 'absolute',
      left: point.x - size / 2,
      top: point.y - size / 2,
      width: size,
      height: size,
      opacity: opacity,
      pointerEvents: 'none',
    };

    switch(sparkleType) {
      case 0: // Estrella brillante
        return {
          ...baseStyle,
          background: `radial-gradient(circle, hsl(${hue}, 100%, 90%) 0%, hsl(${hue}, 80%, 70%) 50%, transparent 100%)`,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          filter: `drop-shadow(0 0 ${size}px hsl(${hue}, 100%, 80%))`,
        };
      
      case 1: // Círculo con pulso
        return {
          ...baseStyle,
          background: `radial-gradient(circle, hsl(${hue}, 100%, 95%) 0%, hsl(${hue}, 90%, 80%) 30%, hsl(${hue}, 70%, 60%) 70%, transparent 100%)`,
          borderRadius: '50%',
          boxShadow: `0 0 ${size * 2}px hsl(${hue}, 100%, 80%), 0 0 ${size * 4}px hsl(${hue}, 100%, 60%, 0.3)`,
        };
      
      case 2: // Diamante
        return {
          ...baseStyle,
          background: `linear-gradient(45deg, hsl(${hue}, 100%, 90%), hsl(${hue + 30}, 90%, 85%), hsl(${hue}, 100%, 90%))`,
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          filter: `drop-shadow(0 0 ${size * 1.5}px hsl(${hue}, 100%, 70%))`,
        };
      
      case 3: // Cruz/Plus
        return {
          ...baseStyle,
          background: `linear-gradient(90deg, transparent 35%, hsl(${hue}, 100%, 90%) 35%, hsl(${hue}, 100%, 90%) 65%, transparent 65%), 
                      linear-gradient(0deg, transparent 35%, hsl(${hue}, 100%, 90%) 35%, hsl(${hue}, 100%, 90%) 65%, transparent 65%)`,
          filter: `drop-shadow(0 0 ${size}px hsl(${hue}, 100%, 80%)) brightness(1.2)`,
        };
      
      default:
        return {
          ...baseStyle,
          background: `radial-gradient(circle, white, transparent)`,
          borderRadius: '50%',
        };
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="introduction"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        backgroundColor: '#ab70ab',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '60vh',
        overflow: 'hidden'
      }}
    >
      {/* Trail de brillitos */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        {trailPoints.map(point => (
          <div
            key={point.id}
            style={getSparkleStyle(point)}
          />
        ))}
        
        {/* Efecto de resplandor de fondo para el trail */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: trailPoints.length > 5 
              ? `radial-gradient(circle at ${trailPoints[trailPoints.length - 1]?.x}px ${trailPoints[trailPoints.length - 1]?.y}px, 
                   rgba(250, 248, 236, 0.1) 0%, 
                   rgba(250, 248, 236, 0.05) 30%, 
                   transparent 60%)`
              : 'transparent',
            opacity: isHovering ? 0.6 : 0.3,
            transition: 'opacity 0.5s ease',
          }}
        />
      </div>

      {/* Contenido */}
      <div 
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px'
        }}
      >
        <p 
          style={{
            color: '#f0e6f7',
            fontSize: '1.3rem',
            lineHeight: '1.8',
            fontWeight: '400',
            margin: '0 20px'
          }}
        >
          Passionate about{" "}
          <span
            style={{
              transition: 'color 0.6s ease, text-shadow 0.6s ease',
              color: highlights[highlightIndex] === "technology" ? '#faf8ec' : '#f0e6f7',
              textShadow: highlights[highlightIndex] === "technology" 
                ? '0 0 10px #fff176, 0 0 20px #ffde59' 
                : 'none'
            }}
          >
            technology
          </span>{" "}
          and{" "}
          <span
            style={{
              transition: 'color 0.6s ease, text-shadow 0.6s ease',
              color: highlights[highlightIndex] === "innovation" ? '#faf8ec' : '#f0e6f7',
              textShadow: highlights[highlightIndex] === "innovation" 
                ? '0 0 10px #fff176, 0 0 20px #ffde59' 
                : 'none'
            }}
          >
            innovation
          </span>
          , with a strong interest in solving complex problems and building
          impactful solutions. Skilled in{" "}
          <span
            style={{
              transition: 'color 0.6s ease, text-shadow 0.6s ease',
              color: highlights[highlightIndex] === "software" ? '#faf8ec' : '#f0e6f7',
              textShadow: highlights[highlightIndex] === "software" 
                ? '0 0 10px #fff176, 0 0 20px #ffde59' 
                : 'none'
            }}
          >
            software
          </span>{" "}
          development,{" "}
          <span
            style={{
              transition: 'color 0.6s ease, text-shadow 0.6s ease',
              color: highlights[highlightIndex] === "data" ? '#faf8ec' : '#f0e6f7',
              textShadow: highlights[highlightIndex] === "data" 
                ? '0 0 10px #fff176, 0 0 20px #ffde59' 
                : 'none'
            }}
          >
            data
          </span>{" "}
          analysis, and process optimization, and always eager to learn and
          collaborate in diverse, dynamic environments.
        </p>
      </div>
    </section>
  );
};

export default Introduction;