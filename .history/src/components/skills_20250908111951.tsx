"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Carrusel.css";

export default function Carrusel() {
  const tarjetas = [
    { id: 1, titulo: "Tarjeta 1" },
    { id: 2, titulo: "Tarjeta 2" },
    { id: 3, titulo: "Tarjeta 3" },
    { id: 4, titulo: "Tarjeta 4" },
    { id: 5, titulo: "Tarjeta 5" },
  ];

  return (
    <div className="carrusel-contenedor">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="miSwiper"
      >
        {tarjetas.map((tarjeta) => (
          <SwiperSlide key={tarjeta.id}>
            <div className="tarjeta">{tarjeta.titulo}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
