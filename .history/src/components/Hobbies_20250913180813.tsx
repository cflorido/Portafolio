import React, { useEffect, useState, useRef } from "react";
import "./Hobbies.css"; // Importamos el CSS

const Hobbies = () => {
  const [trailPoints, setTrailPoints] = useState<any[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  // Crear puntos del trail
  const createTrailPoint = (x: number, y: number) => {
    const distance = Math.sqrt(
      Math.pow(x - lastPositionRef.current.x, 2) +
        Math.pow(y - lastPositionRef.current.y, 2)
    );

    if (distance > 8) {
      const newPoint = {
        id: trailIdRef.current++,
        x,
        y,
        life: 1,
        opacity: 1,
        size: Math.random() * 3 + 2,
        sparkleType: 0,
        createdAt: Date.now(),
      hue: Math.random() * 60 + 260,
      };

      setTrailPoints((prev) => [...prev, newPoint]);
      lastPositionRef.current = { x, y };
    }
  };

  // Eventos del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || !isHovering) return;
    const rect = sectionRef.current.getBoundingClientRect();
    createTrailPoint(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovering(true);
    const rect = sectionRef.current.getBoundingClientRect();
    lastPositionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    createTrailPoint(lastPositionRef.current.x, lastPositionRef.current.y);
  };

  const handleMouseLeave = () => setIsHovering(false);

  // Animación de desvanecimiento
  useEffect(() => {
    const fadeTrail = () => {
      setTrailPoints((prevPoints) =>
        prevPoints
          .map((point) => ({
            ...point,
            life: point.life - 0.008,
            opacity: Math.max(0, point.life - 0.008),
            size:
              point.size * (point.life > 0.7 ? 1 : (point.life - 0.008) * 1.5),
          }))
          .filter((point) => point.life > 0)
      );
    };

    const interval = setInterval(fadeTrail, 32);
    return () => clearInterval(interval);
  }, []);

  // Cleanup puntos antiguos
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrailPoints((prev) =>
        prev.filter((p) => Date.now() - p.createdAt < 15000)
      );
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  // Estilos dinámicos para los brillitos
  const getSparkleStyle = (point: any) => {
    const { size, opacity, hue } = point;
  return {
    left: point.x - size / 2,
    top: point.y - size / 2,
    width: size,
    height: size,
    opacity: opacity,
    background: `radial-gradient(circle, 
                  hsl(${hue}, 60%, 85%) 0%, 
                  hsl(${hue}, 50%, 75%) 50%, 
                  transparent 100%)`,
    filter: `drop-shadow(0 0 ${size}px hsl(${hue}, 60%, 80%))`,
  };
  };

  return (
    <section
      ref={sectionRef}
      className="hobbies"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trail */}
      <div className="trail-container">
        {trailPoints.map((point) => (
          <div
            key={point.id}
            className="sparkle"
            style={getSparkleStyle(point)}
          />
        ))}

        <div
          className="trail-background"
          style={{
            background:
              trailPoints.length > 5
                ? `radial-gradient(circle at ${
                    trailPoints[trailPoints.length - 1]?.x
                  }px ${trailPoints[trailPoints.length - 1]?.y}px, 
                   rgba(250, 248, 236, 0.1) 0%, 
                   rgba(250, 248, 236, 0.05) 30%, 
                   transparent 60%)`
                : "transparent",
            opacity: isHovering ? 0.6 : 0.3,
          }}
        />
      </div>

      {/* Contenido */}
<div className="intro-content">
<div className="hobbies-circles">
  <div className="hobby-item">
    {/* Nombre curvado */}
    <svg viewBox="0 0 180 100" className="hobby-name-svg">
          <path id="arc1" d="M 10,100 A 80,120 0 0,1 170,100" fill="none"/>
      <text className="hobby-name-text">
        <textPath href="#arc1" startOffset="50%" textAnchor="middle">
          Crochet
        </textPath>
      </text>
    </svg>
    <div className="circle">
      <i className="fas fa-yarn"></i>
    </div>
  </div>

  <div className="hobby-item">
    <svg viewBox="0 0 180 100" className="hobby-name-svg">
      <path id="arc2" d="M 10,90 A 80,80 0 0,1 170,90" fill="none"/>
      <text className="hobby-name-text">
        <textPath href="#arc2" startOffset="50%" textAnchor="middle">
          Golf
        </textPath>
      </text>
    </svg>
    <div className="circle">
      <i className="fas fa-golf-ball"></i>
    </div>
  </div>

  <div className="hobby-item">
    <svg viewBox="0 0 180 100" className="hobby-name-svg">
      <path id="arc3" d="M 10,100 A 80,100 0 0,1 170,100" fill="none"/>
      <text className="hobby-name-text">
        <textPath href="#arc3" startOffset="50%" textAnchor="middle">
          Pintar
        </textPath>
      </text>
    </svg>
    <div className="circle">
      <i className="fas fa-paint-brush"></i>
    </div>
  </div>

  <div className="hobby-item">
    <svg viewBox="0 0 180 100" className="hobby-name-svg">
      <path id="arc4" d="M 10,90 A 80,80 0 0,1 170,90" fill="none"/>
      <text className="hobby-name-text">
        <textPath href="#arc4" startOffset="50%" textAnchor="middle">
          Leer
        </textPath>
      </text>
    </svg>
    <div className="circle">
      <i className="fas fa-book"></i>
    </div>
  </div>
</div>


</div>

    </section>
  );
};

export default Hobbies;
