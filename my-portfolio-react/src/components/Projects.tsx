import React from 'react';

interface Project {
  title: string;
  techStack: string[];
  github: string;
  live: string | null;
  icon: string;
  features: string[];
}

const projectsData: Project[] = [
  {
    title: 'Farm-Connect',
    techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TailwindCSS', 'Firebase', 'Flask'],
    github: 'https://github.com/mohithnr/Farm-Connect',
    live: 'https://farm-connect-delta.vercel.app/',
    icon: '🌾',
    features: [
      'Developed an AI-driven marketplace connecting farmers and buyers with comprehensive crop and farmer profiles featuring seamless management capabilities.',
      'Engineered machine learning models to recommend optimal crops based on soil conditions and integrated 5-day weather forecasts for strategic planning.',
      'Created a generative AI farming assistant that delivers personalized, step-by-step cultivation guidance, enhancing farmer accessibility and decision-making.',
    ],
  },
  {
    title: 'Drug Inventory System',
    techStack: ['TailwindCSS', 'ReactJS', 'Node.js', 'Express.js', 'SQL', 'Razor-Pay'],
    github: 'https://github.com/mohithnr/Drug-inventory-system',
    live: null,
    icon: '💊',
    features: [
      'Developed a full-stack medicine management platform with real-time inventory tracking, low-stock alerts, and expiry monitoring.',
      'Enabled secure role-based access (RBAC) for pharmacists and users; supported seamless medicine browsing, ordering, and delivery tracking.',
      'Integrated Razorpay for secure online payments and Generative AI for AI-driven drug suggestions based on symptoms and history.',
    ],
  },
  {
    title: 'Medical Report Analyzer',
    techStack: ['TailwindCSS', 'ReactJS', 'Node.js', 'Express.js', 'Servam AI', 'OCR', 'PDFKit'],
    github: 'https://github.com/mohithnr/medical-report-analyzer',
    live: null,
    icon: '🔬',
    features: [
      'Developed an AI-powered platform to analyze medical reports and provide automated diagnostic summaries.',
      'Leveraged Tesseract.js for OCR, NLP for highlighting key findings, and enabled multilingual abnormality detection with AI-generated PDF reports.',
      'Integrated Servam AI for converting diagnostic text into voice, enhancing accessibility.',
    ],
  },
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .slide-in-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }

          .projects-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 150px;
            width: 100%;
          }

          @media (max-width: 768px) {
            .projects-container {
              padding: 0 25px;
            }
          }
        `}
      </style>

      <section
        id="projects"
        style={{
          background: '#0a192f',
          padding: '100px 0',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
        className="fade-in-up"
      >
        <div className="projects-container">
          {/* Section Header */}
          <div className="slide-in-left" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '50px',
            whiteSpace: 'nowrap',
          }}>
            <h2 style={{
              color: '#64ffda',
              fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
              fontSize: 'clamp(14px, 5vw, 20px)',
              fontWeight: '400',
              margin: 0,
              marginRight: '10px',
            }}>
              04.
            </h2>
            <h3 style={{
              color: '#ccd6f6',
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: '600',
              fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              margin: 0,
              marginRight: '20px',
            }}>
              Some Things I've Built
            </h3>
            <div style={{
              height: '1px',
              backgroundColor: '#233554',
              width: '300px',
              position: 'relative',
              top: '5px',
            }}></div>
          </div>

          {/* Projects List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}>
            {projectsData.map((project, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  marginBottom: '50px',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Content */}
                <div style={{
                  zIndex: 2,
                  position: 'relative',
                }}>
                  {/* Project Label */}
                  <p style={{
                    color: '#64ffda',
                    fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                    fontSize: '13px',
                    fontWeight: '400',
                    margin: '0 0 10px 0',
                  }}>
                    Featured Project
                  </p>

                  {/* Project Title */}
                  <h3 style={{
                    color: '#ccd6f6',
                    fontSize: 'clamp(24px, 5vw, 28px)',
                    fontWeight: '600',
                    fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    margin: '0 0 20px 0',
                  }}>
                    {project.icon} {project.title}
                  </h3>

                  {/* Project Description */}
                  <div style={{
                    background: '#112240',
                    padding: '25px',
                    borderRadius: '4px',
                    marginBottom: '25px',
                    boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                    position: 'relative',
                    zIndex: 2,
                  }}>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      color: '#a8b2d1',
                      fontSize: '18px',
                      lineHeight: '1.6',
                      fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontWeight: '400',
                    }}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{
                          position: 'relative',
                          paddingLeft: '20px',
                          marginBottom: '15px',
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0px',
                            color: '#64ffda',
                            fontSize: '14px',
                            lineHeight: '12px',
                          }}>▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <ul style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 2,
                    margin: '0 0 10px 0',
                    padding: 0,
                    listStyle: 'none',
                    gap: '10px',
                  }}>
                    {project.techStack.map((tech, techIndex) => (
                      <li key={techIndex} style={{
                        color: '#a8b2d1',
                        fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                      }}>
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: '25px',
                    gap: '15px',
                  }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.75rem 1.25rem',
                        background: 'transparent',
                        color: '#64ffda',
                        border: '1px solid #64ffda',
                        borderRadius: '4px',
                        fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                        fontSize: '13px',
                        fontWeight: '400',
                        textDecoration: 'none',
                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                        e.currentTarget.style.transform = 'translate(-2px, -2px)';
                        e.currentTarget.style.boxShadow = '2px 2px 0 0 #64ffda';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translate(0, 0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '0.75rem 1.25rem',
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid #64ffda',
                          borderRadius: '4px',
                          fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                          fontSize: '13px',
                          fontWeight: '400',
                          textDecoration: 'none',
                          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#64ffda';
                          e.currentTarget.style.color = '#0a192f';
                          e.currentTarget.style.transform = 'translate(-2px, -2px)';
                          e.currentTarget.style.boxShadow = '2px 2px 0 0 #64ffda';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                          e.currentTarget.style.color = '#64ffda';
                          e.currentTarget.style.transform = 'translate(0, 0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Mobile Layout (Responsive Override) */}
                <style>
                  {`
                    /* Clean project layout styles already handled above */
                  `}
                </style>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div style={{
            textAlign: 'center',
            marginTop: '80px',
          }}>
            <a
              href="https://github.com/mohithnr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1.25rem 1.75rem',
                background: 'transparent',
                color: '#64ffda',
                border: '1px solid #64ffda',
                borderRadius: '4px',
                fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                fontSize: '14px',
                fontWeight: '400',
                textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                e.currentTarget.style.transform = 'translate(-4px, -4px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Show More Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;