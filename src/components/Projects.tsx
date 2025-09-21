import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({ id }: { id?: string }) => {
  const proyectos = [
    {
      "id": 1,
      "nombre": "Personal Portfolio",
      "descripcion": "This portfolio you're viewing right now is a fully responsive and modern website designed to adapt seamlessly to any device. Beyond serving as a showcase of my professional experience and projects, it also reflects my personal style and passion for design. My goal was to create a clean, engaging, and user-friendly space where both my work and personality come through.",
      "tecnologias": "Vite, React, TypeScript, CSS",
      "github": "https://github.com/cflorido/Portafolio",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/Portafolio.png"
    },
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
    },
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
    },
    {
      "id": 6,
      "nombre": "Yellow Fever Vaccination Analysis – ETL & Power BI",
      "descripcion": "A Business Intelligence project analyzing Yellow Fever vaccination coverage in Colombia (2016–2019). The work involved building an AWS-based ETL pipeline (S3, Glue, Redshift) to process national vaccination and mortality data, structured into a star schema for analytical queries. Interactive dashboards were developed in Power BI to visualize trends by year, department, and region, providing insights for public health decision-making and strategies to reduce vaccination gaps.",
      "tecnologias": "Python, Pandas, NumPy, Matplotlib, Seaborn, AWS S3, AWS Glue, AWS Redshift, SQL, Power BI",
      "github": "https://github.com/cflorido/yellow-fever-vaccine-coverage-analysis-final",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/yellow_fever.png"
    }
  ];

  const [seleccionado, setSeleccionado] = useState(proyectos[0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap');

        .projects-container-projects {
          display: flex;
          max-width: 100%;
          margin: 0;
          gap: 70px;
          font-family: 'Montserrat', sans-serif;
          color: #4e3b61;
          margin-bottom: 5%;
          margin-top: 5%;
          padding: 0 20px;
          box-sizing: border-box;
          width: 100%;
          align-items: stretch;
        }

        .projects-inner-container {
          margin-left: 9%;
          margin-right: 13%;
        }

        .projects-title-projects {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 2.9rem;
          color: #7591be;
          margin-top: 5%;
          margin-bottom: 40px;
          text-align: center;
          letter-spacing: 4px;
          max-width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .projects-menu-projects {
          flex: 0 0 40%;
          max-width: 40%;
          display: flex;
          flex-direction: column;
          height: 650px;
          justify-content: space-between;
        }

        .menu-item-projects {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          padding: 15px 20px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0px 5px 20px rgba(146, 92, 147, 0.2);
          cursor: pointer;
          font-weight: 500;
          color: #555;
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
          background-clip: padding-box;
          text-align: center;
          font-size: 0.95rem;
        }

        .menu-item-projects:last-child {
          margin-bottom: 0;
        }

        .menu-item-projects:hover {
          transform: translateX(5px);
        }

        .menu-item-projects.activo-projects {
          background: #ffffff;
          color: #7591be;
          font-weight: 600;
          box-shadow: 0px 5px 20px rgba(146, 92, 147, 0.3);
          transform: translateX(5px);
        }

        .project-detail-wrapper-projects {
          flex: 0 0 60%;
          max-width: 60%;
        }

        .project-detail-projects {
          width: 100%;
          height: 650px;
          background: #ffffff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0px 5px 20px rgba(146, 92, 147, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .project-detail-projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #738fbd 0%, #a8c3d4 20%, #eec6c7 60%, #db88a4 80%, #cc8eb1 100%);
          border-radius: 16px 16px 0 0;
        }

        .project-detail-projects:hover {
          transform: scale(1.02);
          box-shadow: 0px 8px 30px rgba(146, 92, 147, 0.3);
        }

        .project-detail-projects img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .project-content-projects {
          flex: 1;
          overflow-y: auto;
          padding-right: 10px;
        }

        .project-content-projects::-webkit-scrollbar {
          width: 6px;
        }

        .project-content-projects::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .project-content-projects::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #7591be, #a8c3d4);
          border-radius: 3px;
        }

        .project-text-projects {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          margin: 10px 0;
          line-height: 1.6;
          color: #555;
          font-weight: 300;
          letter-spacing: 0.3px;
        }

        .technologies-label-projects {
          color: #7591be;
          font-weight: 600;
        }

        .github-link-projects {
          display: inline-flex;
          align-items: center;
          margin-top: 15px;
          padding: 12px 20px;
          color: white;
          background: linear-gradient(135deg, #7591be, #a8c3d4);
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
          flex-shrink: 0;
          font-size: 1rem;
          font-family: 'Montserrat', sans-serif;
          width: auto;
          align-self: flex-start;
        }

        .github-link-projects:hover {
          transform: translateY(-2px);
          box-shadow: 0px 5px 15px rgba(117, 145, 190, 0.4);
        }

        .github-icon-projects {
          margin-right: 8px;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .projects-container-projects {
            flex-direction: column-reverse;
            gap: 30px;
            padding: 30px 20px;
            max-width: 95%;
          }

          .projects-menu-projects {
            flex: none;
            max-width: none;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            height: auto;
          }
          
          .project-detail-wrapper-projects {
            flex: none;
            max-width: none;
          }

          .menu-item-projects {
            flex: 1 1 45%;
            text-align: center;
            min-width: 120px;
            height: 60px;
            min-height: 60px;
            padding: 12px 15px;
            font-size: 0.9rem;
          }

          .project-detail-projects {
            width: 100%;
            min-height: 500px;
            height: auto;
            padding: 30px;
          }

          .project-detail-projects img {
            height: 150px;
          }
          
          .projects-title-projects {
            font-size: 2.2rem;
            letter-spacing: 2px;
          }
        }

        @media (max-width: 768px) {
          .projects-container-projects {
            gap: 25px;
            padding: 25px 15px;
            max-width: 100%;
          }

          .projects-menu-projects {
            gap: 8px;
          }

          .menu-item-projects {
            flex: 1 1 100%;
            height: 55px;
            min-height: 55px;
            padding: 10px 12px;
            font-size: 0.85rem;
          }

          .project-detail-projects {
            min-height: 450px;
            padding: 25px;
          }

          .project-detail-projects img {
            height: 130px;
          }
          
          .projects-title-projects {
            font-size: 1.8rem;
            letter-spacing: 1px;
            margin-bottom: 30px;
          }
          
          .project-text-projects {
            font-size: 0.9rem;
            margin: 8px 0;
          }
          
          .github-link-projects {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .projects-container-projects {
            gap: 20px;
            padding: 20px 10px;
          }

          .menu-item-projects {
            height: 50px;
            min-height: 50px;
            padding: 8px 10px;
            font-size: 0.8rem;
          }

          .project-detail-projects {
            min-height: 400px;
            padding: 20px;
          }

          .project-detail-projects img {
            height: 110px;
          }
          
          .projects-title-projects {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
            margin-bottom: 25px;
          }
          
          .project-text-projects {
            font-size: 0.85rem;
            margin: 6px 0;
            line-height: 1.5;
          }
          
          .github-link-projects {
            padding: 8px 14px;
            font-size: 0.85rem;
          }
        }
      `}</style>
      
      <section id={id} style={{ padding: '0' }}>
        <h2 className="projects-title-projects">Portfolio highlights</h2>
        <div className="projects-inner-container">
          <div className="projects-container-projects">
            {/* Menú de proyectos */}
            <div className="projects-menu-projects">
              {proyectos.map((proyecto) => (
                <div
                  key={proyecto.id}
                  className={`menu-item-projects ${seleccionado.id === proyecto.id ? 'activo-projects' : ''}`}
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
                  <p className="project-text-projects">
                    <span className="technologies-label-projects">Technologies:</span> {seleccionado.tecnologias}
                  </p>
                  <p className="project-text-projects">{seleccionado.descripcion}</p>
                </div>
                <a
                  href={seleccionado.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link-projects"
                >
                  <FaGithub className="github-icon-projects" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;