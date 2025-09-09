import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      categoria: "Programming",
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      categoria: "Frameworks",
      items: ["React", "Angular", "Node.js", "Spring Boot", "Flask", "Django"]
    },
    {
      categoria: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      categoria: "DevOps",
      items: ["Docker", "Kubernetes", "CI/CD", "Jenkins"]
    },
    {
      categoria: "Data Science",
      items: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn"]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="skills-swiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-card">
              <h3 className="skill-category">{skill.categoria}</h3>
              <ul className="skill-list">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Skills;
