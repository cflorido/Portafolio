import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation";
import "swiper/css/pagination";

// módulos opcionales
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Skills() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/img1.jpg" alt="Imagen 1" className="rounded-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img2.jpg" alt="Imagen 2" className="rounded-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img3.jpg" alt="Imagen 3" className="rounded-xl w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Skills;
