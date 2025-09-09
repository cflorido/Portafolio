import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Skills.css";

function Skills() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/1018/400/300" alt="Skill 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1015/400/300" alt="Skill 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1019/400/300" alt="Skill 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1020/400/300" alt="Skill 4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Skills;
