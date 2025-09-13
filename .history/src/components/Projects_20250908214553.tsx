import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const proyectos = [
    {
      id: 1,
      nombre: "Portfolio Personal",
      descripcion: "Página web personal construida con React, mostrando mi experiencia, proyectos y contacto.",
      tecnologias: "React, CSS, JavaScript",
      github: "https://github.com/cflorido/Portafolio",
      imagen: "public/Portafolio.png",
    },
    {
      id: 2,
      nombre: "Tesis",
      descripcion: "Aplicación de e-commerce con carrito de compras y pasarela de pagos.",
      tecnologias: "React, Node.js, MongoDB",
      github: "https://github.com/cflorido/Differential-Privacy-Mechanisms-for-Trajectories.git",
      imagen: "public/Privacidad.png"
    },
    {
      id: 3,
      nombre: "App de Tareas",
      descripcion: "Aplicación para gestionar tareas diarias con autenticación.",
      tecnologias: "React, Firebase, Tailwind",
      github: "https://github.com/usuario/todo-app",
      imagen: "https://via.placeholder.com/300x200?text=ToDo+App"
    }
  ];

  const [seleccionado, setSeleccionado] = useState(proyectos[0]);

  return (
      <>
<h2 className="prjects-title">Projects</h2>
   <div className="projects-container">
      
      {/* Menú de proyectos */}
      <div className="projects-menu">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`menu-item ${seleccionado.id === proyecto.id ? "activo" : ""}`}
            onClick={() => setSeleccionado(proyecto)}
          >
            {proyecto.nombre}
          </div>
        ))}
      </div>

      {/* Información del proyecto seleccionado */}
      <div className="project-detail">
        <h2>{seleccionado.nombre}</h2>
        <img src={seleccionado.imagen} alt={seleccionado.nombre} />
        <p>{seleccionado.descripcion}</p>
        <p><strong>Tecnologías:</strong> {seleccionado.tecnologias}</p>
        <a href={seleccionado.github} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>
    </div>
    </>
  );
};

export default Projects;
