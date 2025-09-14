import React, { useState, useEffect, useRef } from 'react';
import './Data.css';

const Data: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Arrays para la animación
  const ages = Array.from({ length: 22 }, (_, i) => i.toString().padStart(2, '0'));
  const nationalities = ['American', 'Brazilian', 'Mexican', 'Argentine', 'Chilean', 'Peruvian', 'Venezuelan', 'Colombian'];
  const englishLevels = ['Basic', 'Pre-Intermediate', 'Intermediate', 'Upper Intermediate'];

  // Estados para los valores actuales durante la animación
  const [currentAge, setCurrentAge] = useState('21');
  const [currentNationality, setCurrentNationality] = useState('Colombian');
  const [currentLevel, setCurrentLevel] = useState('Upper Intermediate');

  // Estados para controlar la animación de cada slot
  const [ageSlotPosition, setAgeSlotPosition] = useState(0);
  const [nationalitySlotPosition, setNationalitySlotPosition] = useState(0);
  const [levelSlotPosition, setLevelSlotPosition] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startSlotMachineAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const createSlotMachineAnimation = (
    items: string[], 
    finalValue: string,
    setPosition: (pos: number) => void,
    duration: number
  ) => {
    const finalIndex = items.indexOf(finalValue);
    // Agregamos múltiples copias del array para simular el rollo continuo
    const extendedItems = [...items, ...items, ...items, ...items, ...items];
    const finalPosition = (extendedItems.length - items.length + finalIndex) * -70; // -70px por cada item
    
    let startTime: number;
    let startPosition = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        // Función de easing que empieza rápido y desacelera (ease-out cuadrática)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + (finalPosition - startPosition) * easeOut;
        setPosition(currentPosition);
        requestAnimationFrame(animate);
      } else {
        setPosition(finalPosition);
      }
    };

    requestAnimationFrame(animate);
  };

  const startSlotMachineAnimation = () => {
    setIsAnimating(true);

    // Iniciar animaciones con diferentes duraciones para que terminen en momentos diferentes
    createSlotMachineAnimation(ages, '21', setAgeSlotPosition, 2000);
    
    setTimeout(() => {
      createSlotMachineAnimation(nationalities, 'Colombian', setNationalitySlotPosition, 2500);
    }, 300);
    
    setTimeout(() => {
      createSlotMachineAnimation(englishLevels, 'Upper Intermediate', setLevelSlotPosition, 3000);
    }, 600);

    // Terminar la animación
    setTimeout(() => {
      setIsAnimating(false);
    }, 3500);
  };

  const renderSlotItems = (items: string[], position: number, suffix: string = '') => {
    // Crear múltiples copias para el efecto de rollo continuo
    const extendedItems = [...items, ...items, ...items, ...items, ...items];
    
    return (
      <div 
        className="slot-reel" 
        style={{ 
          transform: `translateY(${position}px)`,
          transition: isAnimating ? 'none' : 'transform 0.3s ease'
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="slot-item">
            {item}{suffix}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="data-container" ref={containerRef}>
      <div className="data-item">
        <h3 className="data-label">My Age</h3>
        <div className="data-value-container slot-container">
          {renderSlotItems(ages, ageSlotPosition, ' years old')}
        </div>
      </div>
            
      <div className="data-item">
        <h3 className="data-label">My nationality</h3>
        <div className="data-value-container slot-container">
          {renderSlotItems(nationalities, nationalitySlotPosition)}
        </div>
      </div>
            
      <div className="data-item">
        <h3 className="data-label">My English Level</h3>
        <div className="data-value-container slot-container">
          {renderSlotItems(englishLevels, levelSlotPosition)}
        </div>
      </div>
    </div>
  );
};

export default Data;