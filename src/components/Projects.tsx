import { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = ({ id }: { id?: string }) => {
  const proyectos = [
    {
      "id": 1,
      "nombre": "Personal Portfolio",
      "descripcion": "This portfolio you’re viewing right now is a fully responsive and modern website designed to adapt seamlessly to any device. Beyond serving as a showcase of my professional experience and projects, it also reflects my personal style and passion for design. My goal was to create a clean, engaging, and user-friendly space where both my work and personality come through.",
      "tecnologias": "Vite, React, TypeScript, CSS",
      "github": "https://github.com/cflorido/Portafolio",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/Portafolio.png"
    }
    ,
    {
  "id": 5,
  "nombre": "Climate Derivatives Pricing",
  "descripcion": "A research project focused on valuing temperature-based climate derivatives, specifically Heating Degree Days (HDD) and Cooling Degree Days (CDD), to mitigate climate risk in Colombian coffee-growing regions. The work combines deterministic models (Fourier series with third-degree harmonics) and stochastic models (mean reversion) to project temperature data and price temperature options. An interactive tool was also developed to explore pricing dynamics under different climate scenarios, offering risk management strategies for coffee producers against extreme temperature variations.",
  "tecnologias": "Python, NumPy, Pandas, Statsmodels, Matplotlib",
  "github": "https://github.com/cflorido/AppPricing.git",
  "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/ClimatePricing.png"
},
      {
        "id": 2,
        "nombre": "Differential Privacy for Trajectories",
        "descripcion": "This thesis project explores the application of differential privacy to human mobility trajectories, with a focus on protecting sensitive location data while preserving analytical value. The work compares different differential privacy mechanisms by varying key metrics and evaluating their impact on data utility. It produces relevant visualizations such as flow maps of trajectories, heatmaps, and origin-destination matrices, providing insight into how privacy-preserving techniques affect mobility analysis outcomes. The project balances theoretical rigor with practical experimentation using real-world datasets from Beijing.",
        "tecnologias": "Python, Jupyter Notebook, NumPy, Matplotlib, Folium",
        "github": "https://github.com/cflorido/Differential-Privacy-Mechanisms-for-Trajectories.git",
        "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/Privacidad.png"
      }
      ,
    {
      "id": 3,
      "nombre": "Text Analytics for Political Fake News Detection",
      "descripcion": "A collaborative project focused on detecting political fake news using text analytics and multiple machine learning models, including Naive Bayes, Random Forest, KNN, and Gradient Boosting. The system analyzes textual patterns to identify misinformation, optimizing detection with metrics like F1-score and ROC AUC.",
      "tecnologias": "Python, Scikit-learn, Pandas, NumPy, TF-IDF, SMOTE",
      "github": "https://github.com/cflorido/Proyecto1_B1",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/text_analytics.png"
    },
    {
      "id": 4,
      "nombre": "Banking subscription Prediction",
      "descripcion": "A comprehensive project analyzing customer behavior and predicting subscription to term deposits (CDTs) using data cleaning, exploratory analysis, and machine learning models. The project includes visualization dashboards, predictive modeling with neural networks and Random Forest, threshold optimization to maximize expected bank revenue, and deployment on AWS.",
      "tecnologias": "Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, SMOTEENN, Dash, AWS",
      "github": "https://github.com/cflorido/Proyecto_2_Analitica",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/BankingProducts.png"
    }
  ];

  const [seleccionado, setSeleccionado] = useState(proyectos[0]);

  return (
   <section id={id}>
  <h2 className="projects-title-projects">Portfolio highlights</h2>
  <div className="projects-inner-container">
    <div className="projects-container-projects">
      {/* Menú de proyectos */}
      <div className="projects-menu-projects">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`menu-item-projects ${seleccionado.id === proyecto.id ? "activo-projects" : ""}`}
            onClick={() => setSeleccionado(proyecto)}
          >
            {proyecto.nombre}
          </div>
        ))}
      </div>

      {/* Detalle del proyecto */}
      <div className="project-detail-wrapper-projects">
        <div className="project-detail-projects">
          <img src={seleccionado.imagen} alt={seleccionado.nombre} />
          <div className="project-content-projects">
            <p>{seleccionado.descripcion}</p>
            <p><strong>Technologies:</strong> {seleccionado.tecnologias}</p>
          </div>
<a
  href={seleccionado.github}
  target="_blank"
  rel="noopener noreferrer"
  className="github-link-projects"
>
  <FaGithub style={{ marginRight: "8px", color: "white" }} />
  GitHub
</a>

        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;