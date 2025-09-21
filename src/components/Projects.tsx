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

  const styles = {
    section: {
      padding: '0'
    },
    container: {
      display: 'flex',
      maxWidth: '100%',
      margin: '0',
      gap: '70px',
      fontFamily: "'Montserrat', sans-serif",
      color: '#4e3b61',
      marginBottom: '5%',
      marginTop: '5%',
      padding: '0 20px',
      boxSizing: 'border-box' as const,
      width: '100%',
      alignItems: 'stretch'
    },
    innerContainer: {
      marginLeft: '9%',
      marginRight: '9%'
    },
    title: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      fontSize: '2.9rem',
      color: '#7591be',
      marginTop: '5%',
      marginBottom: '40px',
      textAlign: 'center' as const,
      letterSpacing: '4px',
      maxWidth: '100%',
      padding: '0 20px',
      boxSizing: 'border-box' as const
    },
    menu: {
      flex: '0 0 40%',
      maxWidth: '40%',
      display: 'flex',
      flexDirection: 'column' as const,
      height: '650px', // Altura fija igual que la card de detalles
      justifyContent: 'space-between'
    },
    menuItem: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '15px',
      padding: '15px 20px',
      borderRadius: '12px',
      background: '#ffffff',
      boxShadow: '0px 5px 20px rgba(146, 92, 147, 0.2)',
      cursor: 'pointer',
      fontWeight: 500,
      color: '#555',
      transition: 'all 0.3s ease',
      position: 'relative' as const,
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
      textAlign: 'center' as const,
      fontSize: '0.95rem'
    },
    menuItemLast: {
      marginBottom: '0'
    },
    menuItemActive: {
      background: '#ffffff',
      color: '#7591be',
      fontWeight: 600,
      boxShadow: '0px 5px 20px rgba(146, 92, 147, 0.3)',
      transform: 'translateX(5px)'
    },
    detailWrapper: {
      flex: '0 0 60%',
      maxWidth: '60%'
    },
    projectDetail: {
      width: '100%',
      height: '650px', // Altura fija
      background: '#ffffff',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0px 5px 20px rgba(146, 92, 147, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative' as const,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column' as const,
      boxSizing: 'border-box' as const
    },
    projectDetailBorder: {
      content: "''",
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(135deg, #738fbd 0%, #a8c3d4 20%, #eec6c7 60%, #db88a4 80%, #cc8eb1 100%)',
      borderRadius: '16px 16px 0 0'
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as const,
      borderRadius: '14px',
      marginBottom: '20px',
      flexShrink: 0
    },
    projectContent: {
      flex: 1,
      overflowY: 'auto' as const,
      paddingRight: '10px'
    },
    projectText: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1rem',
      margin: '10px 0',
      lineHeight: 1.6,
      color: '#555',
      fontWeight: 300,
      letterSpacing: '0.3px'
    },
    strong: {
      color: '#555'
    },
    githubLink: {
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '15px',
      padding: '12px 20px',
      color: 'white',
      background: 'linear-gradient(135deg, #7591be, #a8c3d4)',
      borderRadius: '8px',
      fontWeight: 600,
      textDecoration: 'none',
      transition: '0.3s',
      flexShrink: 0,
      fontSize: '1rem',
      fontFamily: "'Montserrat', sans-serif"
    },
    githubIcon: {
      marginRight: '8px',
      color: 'white'
    }
  };

  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.title}>Portfolio highlights</h2>
      <div style={styles.innerContainer}>
        <div style={styles.container}>
          {/* Menú de proyectos */}
          <div style={styles.menu}>
            {proyectos.map((proyecto, index) => (
              <div
                key={proyecto.id}
                style={{
                  ...styles.menuItem,
                  ...(index === proyectos.length - 1 ? styles.menuItemLast : {}),
                  ...(seleccionado.id === proyecto.id ? styles.menuItemActive : {})
                }}
                onClick={() => setSeleccionado(proyecto)}
                onMouseEnter={(e) => {
                  if (seleccionado.id !== proyecto.id) {
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (seleccionado.id !== proyecto.id) {
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }
                }}
              >
                {proyecto.nombre}
              </div>
            ))}
          </div>

          {/* Detalle del proyecto */}
          <div style={styles.detailWrapper}>
            <div 
              style={styles.projectDetail}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0px 8px 30px rgba(146, 92, 147, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 5px 20px rgba(146, 92, 147, 0.2)';
              }}
            >
              <div style={styles.projectDetailBorder}></div>
              <img src={seleccionado.imagen} alt={seleccionado.nombre} style={styles.projectImage} />
              <div style={styles.projectContent}>
                <p style={styles.projectText}>
                  <span style={styles.strong}>Technologies:</span> {seleccionado.tecnologias}
                </p>
                <p style={styles.projectText}>{seleccionado.descripcion}</p>
              </div>
              <a
                href={seleccionado.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0px 5px 15px rgba(117, 145, 190, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaGithub style={styles.githubIcon} />
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