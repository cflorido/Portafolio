import React, { useState } from "react";
import "./Projects.css";

const Projects = ({ id }: { id?: string }) => {
  const proyectos = [
    {
      "id": 1,
      "nombre": "Personal Portfolio",
      "descripcion": "A sleek and responsive portfolio website designed to highlight my professional experience, showcase key projects, and provide easy access to contact information in a clean and user-friendly layout.",
      "tecnologias": "Vite, React, TypeScript, CSS",
      "github": "https://github.com/cflorido/Portafolio",
      "imagen": "public/Portafolio.png"
    }
    ,
    {
      "id": 2,
      "nombre": "Differential Privacy for Trajectories",
      "descripcion": "An experimental project applying differential privacy algorithms to mobility trajectories, generating metrics like origin-destination matrices and heatmaps using real Beijing datasets.",
      "tecnologias": "Python, Jupyter Notebook, NumPy, Matplotlib, Folium",
      "github": "https://github.com/cflorido/Differential-Privacy-Mechanisms-for-Trajectories.git",
      "imagen": "public/Privacidad.png"
    },
  ];

  const [seleccionado, setSeleccionado] = useState(proyectos[0]);

  return (
<section id={id}>    
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
        <img src={seleccionado.imagen} alt={seleccionado.nombre} />
        <p>{seleccionado.descripcion}</p>
        <p><strong>Tecnologías:</strong> {seleccionado.tecnologias}</p>
<a 
  
  href={seleccionado.github} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="github-link"
>
  Ver en GitHub
</a>

      </div>
    </div>
    </>
  );
};

export default Projects;
