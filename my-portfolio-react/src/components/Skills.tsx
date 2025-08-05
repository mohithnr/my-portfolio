import React from 'react';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'C', 'Python'],
    icon: '💻',
  },
  {
    category: 'Web Technology',
    skills: [
      'ReactJs',
      'ExpressJs',
      'NodeJs',
      'JavaScript',
      'MongoDB',
      'SQL',
      'Firebase',
    ],
    icon: '🌐',
  },
  {
    category: 'CS Fundamentals',
    skills: ['Data Structures and Algorithms', 'OOPS', 'OS', 'DBMS'],
    icon: '📚',
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
    icon: '🛠️',
  },
];

const Skills: React.FC = () => {
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

          .skills-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 150px;
            width: 100%;
          }

          @media (max-width: 768px) {
            .skills-container {
              padding: 0 25px;
            }
          }
        `}
      </style>

      <section
        id="skills"
        style={{
          background: '#0a192f',
          padding: '100px 0',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
        className="fade-in-up"
      >
        <div className="skills-container">
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
              03.
            </h2>
            <h3 style={{
              color: '#ccd6f6',
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: '600',
              fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              margin: 0,
              marginRight: '20px',
            }}>
              Skills & Technologies
            </h3>
            <div style={{
              height: '1px',
              backgroundColor: '#233554',
              width: '300px',
              position: 'relative',
              top: '5px',
            }}></div>
          </div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {skillsData.map((group, index) => (
              <div
                key={index}
                style={{
                  background: '#112240',
                  borderRadius: '4px',
                  padding: '30px 25px',
                  boxShadow: hoveredIndex === index 
                    ? '4px 4px 0 0 #64ffda' 
                    : '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  border: hoveredIndex === index 
                    ? '1px solid #64ffda' 
                    : '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  cursor: 'pointer',
                  transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  gap: '12px',
                }}>
                  <span style={{
                    fontSize: '24px',
                    filter: 'drop-shadow(0 2px 2px #0a192f44)',
                  }}>
                    {group.icon}
                  </span>
                  <h4 style={{
                    color: '#ccd6f6',
                    fontSize: '20px',
                    fontWeight: '600',
                    fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    margin: 0,
                  }}>
                    {group.category}
                  </h4>
                </div>

                {/* Skills List */}
                <ul style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '8px 15px',
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                }}>
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} style={{
                      position: 'relative',
                      paddingLeft: '20px',
                      fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                      fontSize: '13px',
                      color: '#8892b0',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0px',
                        color: '#64ffda',
                        fontSize: '14px',
                        lineHeight: '12px',
                      }}>▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Skill Tags Alternative (commented out, using list instead) */}
                {/* 
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '15px',
                }}>
                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.5rem',
                      margin: '0.25rem',
                      background: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                      borderRadius: '3px',
                      fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
                */}
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
          }}>
            <p style={{
              color: '#8892b0',
              fontSize: '18px',
              lineHeight: '1.6',
              fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              fontWeight: '400',
              margin: 0,
            }}>
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;