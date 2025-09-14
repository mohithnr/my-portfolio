import React from 'react';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'C', 'Python'],
    icon: 'Languages',
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
    icon: 'Web Technology',
  },
  {
    category: 'CS Fundamentals',
    skills: ['Data Structures and Algorithms', 'OOPS', 'Operating Systems', 'DBMS', 'Computer Networks'],
    icon: 'CS Fundamentals',
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
    icon: 'Developer Tools',
  },
];

const categoryIcons: Record<string, string> = {
  'Languages': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Web Technology': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'CS Fundamentals': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', // generic icon for CS fundamentals
  'Developer Tools': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const skillLogos: Record<string, string> = {
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  ReactJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  ExpressJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  NodeJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Data Structures and Algorithms': '',
  OOPS: '',
  'Operating Systems': '',
  DBMS: '',
  'Computer Networks': '',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel.svg',
};

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      <style>{`
        :root {
          --accent-primary: #3b82f6;
          --primary-bg: #0f172a;
          --secondary-bg: #1e293b;
          --glass-bg: rgba(11, 32, 61, 0.65);
          --glass-border: rgba(72, 179, 252, 0.3);
          --glass-shadow: rgba(72, 179, 252, 0.28);
          --text-primary: #e0e7ff;
          --text-secondary: #94a3b8;
          --border-primary: #384655;
        }

        body, .skills-page {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          color: var(--text-primary);
          margin: 0;
        }

        @keyframes fadeInUp {
          from {opacity: 0; transform: translateY(50px);}
          to {opacity:1; transform: translateY(0);}
        }
        @keyframes slideInLeft {
          from {opacity: 0; transform: translateX(-50px);}
          to {opacity:1; transform: translateX(0);}
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        .fade-in-up.loaded,
        .slide-in-left.loaded {
          opacity: 1;
        }

        section.skills-section {
          padding: 120px 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: transparent;
          z-index: 1;
        }

        .container-glass {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px 40px;
          background: var(--glass-bg);
          border-radius: 28px;
          box-shadow: 0 25px 50px -12px var(--glass-shadow);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        .section-header {
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .section-label {
          font-family: 'Josefin Sans', monospace;
          font-weight: 700;
          font-size: 22px;
          color: var(--accent-primary);
          letter-spacing: 2px;
          margin-right: 14px;
          background: linear-gradient(90deg, var(--accent-primary), var(--text-primary));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .section-heading {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 700;
          margin: 0 20px 0 0;
          color: white !important;
          line-height: 1.2;
        }

        .header-line {
          height: 1px;
          width: 300px;
          background: linear-gradient(90deg, var(--accent-primary), transparent);
          position: relative;
          top: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skills-card {
          background: var(--secondary-bg);
          border-radius: 20px;
          padding: 30px 25px;
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.3);
          border: 1px solid var(--glass-border);
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
          transform-origin: center bottom;
          position: relative;
          user-select: none;
        }

        .skills-card:hover {
          box-shadow: 4px 4px 0 0 var(--accent-primary);
          border: 1px solid var(--accent-primary);
          transform: translateY(-6px);
          z-index: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .category-icon {
          width: 28px;
          height: 28px;
          filter: drop-shadow(0 2px 2px #0a192f44);
          object-fit: contain;
        }

        .category-title {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .skills-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 8px 15px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 10px;
          user-select: none;
        }

        .skill-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-text span {
          display: inline-block;
          animation: textWave 2s ease-in-out infinite;
        }

        @keyframes textWave {
          0%, 40%, 100% { transform: translateY(0); }
          20% { transform: translateY(-8px); }
        }

        .additional-note {
          margin-top: 60px;
          text-align: center;
          color: var(--text-secondary);
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          font-weight: 400;
        }

        /* Responsive Styles */
        
        /* Large tablets and small desktops */
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
          }
          
          .container-glass {
            padding: 40px 32px;
          }
          
          .section-heading {
            font-size: 32px;
          }
          
          .header-line {
            width: 200px;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          section.skills-section {
            padding: 80px 16px;
          }
          
          .container-glass {
            padding: 36px 24px;
            border-radius: 20px;
          }
          
          .section-header {
            margin-bottom: 40px;
            flex-wrap: wrap;
            white-space: normal;
          }
          
          .section-label {
            font-size: 18px;
            margin-right: 10px;
          }
          
          .section-heading {
            font-size: 28px;
            margin: 0 12px 0 0;
          }
          
          .header-line {
            width: 120px;
            flex-grow: 1;
            min-width: 60px;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
          }
          
          .skills-card {
            padding: 24px 20px;
            border-radius: 16px;
          }
          
          .category-title {
            font-size: 20px;
          }
          
          .additional-note {
            margin-top: 40px;
            font-size: 16px;
            padding: 0 12px;
          }
        }

        /* Mobile devices */
        @media (max-width: 640px) {
          section.skills-section {
            padding: 60px 12px;
            min-height: auto;
          }
          
          .container-glass {
            padding: 28px 20px;
            border-radius: 16px;
          }
          
          .section-header {
            margin-bottom: 32px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .section-label {
            font-size: 16px;
            margin-right: 0;
          }
          
          .section-heading {
            font-size: 24px;
            margin: 0;
            line-height: 1.1;
          }
          
          .header-line {
            width: 100%;
            max-width: 200px;
            align-self: stretch;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .skills-card {
            padding: 20px 16px;
            border-radius: 12px;
          }
          
          .skills-card:hover {
            transform: translateY(-3px);
            box-shadow: 2px 2px 0 0 var(--accent-primary);
          }
          
          .card-header {
            gap: 10px;
            margin-bottom: 16px;
          }
          
          .category-icon {
            width: 24px;
            height: 24px;
          }
          
          .category-title {
            font-size: 18px;
          }
          
          .skills-list {
            grid-template-columns: 1fr;
            gap: 6px 12px;
          }
          
          .skill-item {
            font-size: 13px;
            gap: 6px;
            margin-bottom: 8px;
          }
          
          .skill-logo {
            width: 18px;
            height: 18px;
          }
          
          .additional-note {
            margin-top: 32px;
            font-size: 14px;
            padding: 0 8px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          section.skills-section {
            padding: 40px 8px;
          }
          
          .container-glass {
            padding: 24px 16px;
          }
          
          .section-heading {
            font-size: 22px;
          }
          
          .skills-card {
            padding: 16px 12px;
          }
          
          .category-title {
            font-size: 16px;
          }
          
          .skill-item {
            font-size: 12px;
          }
          
          .additional-note {
            font-size: 13px;
            margin-top: 24px;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .section-label {
            font-size: 14px;
            letter-spacing: 1px;
          }
          
          .section-heading {
            font-size: 20px;
          }
          
          .skills-list {
            gap: 4px 8px;
          }
          
          .skill-item {
            font-size: 11px;
            gap: 4px;
          }
          
          .skill-logo {
            width: 16px;
            height: 16px;
          }
          
          .category-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <section className="skills-section fade-in-up" style={{ minHeight: '100vh' }}>
        <div className="container-glass">
          <div className="section-header slide-in-left">
            <div className="section-label">03.</div>
            <h2 className="section-heading" aria-label="Skills & Technologies">
              <span className="animated-text">
                {'Skills & Technologies'.split('').map((char, i) => (
                  <span
                    key={i}
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      display: char === ' ' ? 'inline' : 'inline-block',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h2>
            <div className="header-line" />
          </div>

          <div className="skills-grid">
            {skillsData.map((group, idx) => (
              <div
                key={idx}
                className="skills-card"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card-header">
                  <img
                    src={categoryIcons[group.category]}
                    alt={`${group.category} icon`}
                    className="category-icon"
                  />
                  <h3 className="category-title">{group.category}</h3>
                </div>
                <ul className="skills-list">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">
                      {skillLogos[skill] ? (
                        <img
                          src={skillLogos[skill]}
                          alt={`${skill} logo`}
                          className="skill-logo"
                        />
                      ) : (
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>▹</span>
                      )}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="additional-note">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;