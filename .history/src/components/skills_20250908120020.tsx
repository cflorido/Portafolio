import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Datos de ejemplo para el carrusel
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Naturaleza Salvaje",
      description: "Explora los paisajes más impresionantes del mundo",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      color: "from-green-600 to-blue-600"
    },
    {
      id: 2,
      title: "Ciudades Vibrantes",
      description: "Descubre la energía de las grandes metrópolis",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Aventuras Oceánicas",
      description: "Sumérgete en las profundidades del océano",
      imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 4,
      title: "Montañas Majestuosas",
      description: "Alcanza las cimas más altas y experimenta la libertad",
      imageUrl: "https://images.unsplash.com/photo-1464822759844-d150badb3805?w=800&h=400&fit=crop",
      color: "from-orange-600 to-red-600"
    }
  ];

  // Auto-play funcionalidad
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToPrevious = (): void => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = (): void => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = (): void => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
        {/* Contenedor principal del carrusel */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full relative">
              <div className={`bg-gradient-to-br ${item.color} h-96 flex items-center justify-center relative overflow-hidden`}>
                {/* Imagen de fondo */}
                <img 
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                
                {/* Contenido del slide */}
                <div className="relative z-10 text-center text-white p-8">
                  <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
                    {item.title}
                  </h2>
                  <p className="text-xl opacity-90 max-w-md mx-auto drop-shadow-md">
                    {item.description}
                  </p>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Siguiente slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores de posición */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Controles adicionales */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={toggleAutoPlay}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isAutoPlaying 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isAutoPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        
        <div className="text-gray-600 font-medium">
          {currentIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
};

export default Skills;