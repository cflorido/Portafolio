import React, { useEffect, useState, useRef } from "react";

const Hobbies = () => {
  const [trailPoints, setTrailPoints] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  const hobbiesData = [
    { icon: "fas fa-yarn", name: "CROCHET" },
    { icon: "fas fa-golf-ball", name: "GOLF" },
    { icon: "fas fa-paint-brush", name: "PINTAR" },
    { icon: "fas fa-book", name: "LEER" }
  ];

  // Crear puntos del trail
  const createTrailPoint = (x, y) => {
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
  const handleMouseMove = (e) => {
    if (!sectionRef.current || !isHovering) return;
    const rect = sectionRef.current.getBoundingClientRect();
    createTrailPoint(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
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
  const getSparkleStyle = (point) => {
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
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 flex items-center justify-center"
    >
      {/* Trail */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {trailPoints.map((point) => (
          <div
            key={point.id}
            className="absolute pointer-events-none"
            style={getSparkleStyle(point)}
          />
        ))}

        <div
          className="absolute inset-0 transition-opacity duration-500"
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
      <div className="relative z-10 max-w-6xl w-full flex justify-center items-center">
        <div className="flex justify-center gap-20 w-full flex-wrap items-center">
          {hobbiesData.map((hobby, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group">
              {/* Texto curvado arriba del círculo */}
              <svg 
                width="180" 
                height="50" 
                viewBox="0 0 180 50" 
                className="overflow-visible transform transition-transform duration-300 group-hover:scale-110"
              >
                <defs>
                  <path
                    id={`textPath-${index}`}
                    d="M 20 22 Q 90 2, 160 22"
                    fill="none"
                    stroke="none"
                  />
                </defs>
                <text className="text-xl font-semibold fill-purple-100">
                  <textPath href={`#textPath-${index}`} startOffset="50%" textAnchor="middle">
                    {hobby.name}
                  </textPath>
                </text>
              </svg>

              {/* Círculo con icono */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex justify-center items-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <i className={`${hobby.icon} text-5xl text-purple-600`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
    </div>
  );
};

export default Hobbies;