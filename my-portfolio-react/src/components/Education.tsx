import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Siddaganga Institute of Technology (SIT), Tumkur',
      degree: 'B.E. in Information Science & Engineering',
      year: '2022 - 2026',
      grade: '9.08',
      type: 'current',
    },
    {
      institution: 'KPS PU College, Arasikere',
      degree: 'Pre-University Education',
      year: '2020 - 2022',
      grade: '96.83',
      type: 'completed',
    },
    {
      institution: 'Rotary High School',
      degree: 'High School Education',
      year: '2020 (SSLC passed out)',
      grade: '97.44',
      type: 'completed',
    },
  ];

  return (
    <>
      <style>{`
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

        section.education-section {
          background: #0a192f;
          padding: 100px 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 150px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 25px;
          }
        }

        .header-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 50px;
          white-space: nowrap;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .section-number {
          color: #64ffda;
          font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
          font-weight: 400;
          font-size: clamp(14px, 5vw, 20px);
          margin: 0;
          margin-right: 10px;
        }

        .section-title {
          color: #ccd6f6;
          font-family: 'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif;
          font-weight: 600;
          font-size: clamp(26px, 5vw, 32px);
          margin: 0;
          margin-right: 20px;
        }

        .header-line {
          height: 1px;
          background-color: #233554;
          width: 300px;
          position: relative;
          top: 5px;
        }

        ul.education-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px; 
        }

        @media (max-width: 768px) {
          ul.education-list {
            grid-template-columns: 1fr;
          }
        }

        li.education-card {
          background: #112240;
          border: 1px solid rgba(100, 255, 218, 0.1);
          border-radius: 8px;
          padding: 20px 25px;
          box-shadow: 0 4px 24px rgba(100, 255, 218, 0.04);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
          position: relative;
          color: #8892b0;
        }

        li.education-card:hover {
          background: #0a192f;
          border-color: #64ffda;
          box-shadow: 4px 4px 0 0 #64ffda;
          transform: translateY(-4px);
          color: #64ffda;
          z-index: 1;
        }

        .education-institution {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 1.1rem;
          color: #64ffda;
          margin-bottom: 6px;
        }

        .education-degree {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          margin-bottom: 6px;
          color: #ccd6f6;
        }

        .education-grade {
          font-family: 'JetBrains Mono', monospace;
          color: #64ffda;
          font-weight: 500;
          font-size: 0.95rem;
          margin-bottom: 6px;
        }

        .education-year {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #8892b0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .year-dot {
          width: 8px;
          height: 8px;
          background-color: #64ffda;
          border-radius: 50%;
          display: inline-block;
        }

        .year-dot.completed {
          background-color: #1de9b6;
        }
      `}</style>

      <section className="education-section" id="education" aria-labelledby="education-heading">
        <div className="container">
          <div className="header-wrapper">
            <h2 className="section-number">02.</h2>
            <h3 className="section-title" id="education-heading">
              Education
            </h3>
            <div className="header-line" />
          </div>

          <ul className="education-list">
            {educationData.map((edu, index) => (
              <li key={index} tabIndex={0} className="education-card" aria-label={`${edu.institution}, ${edu.degree}, ${edu.year}`}>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-grade">
                  {edu.type === 'current' ? `CGPA: ${edu.grade}` : `Percentage: ${edu.grade}%`}
                </div>
                <div className="education-year">
                  <span className={`year-dot ${edu.type === 'current' ? '' : 'completed'}`} />
                  {edu.year}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;
