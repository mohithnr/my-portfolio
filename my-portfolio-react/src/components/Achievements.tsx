import React from 'react';

const achievements = [
  {
    title: "Solved over 800+ DSA problems on LeetCode with a peak rating of 1734",
    link: "https://leetcode.com/u/Mohith_N__Raj/",
    linkText: "LeetCode",
    category: "Competitive Programming",
    technologies: ["Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    title: "Completed an 8-week Advanced DSA Live Program by GeeksForGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/a882e35cf6bdeccd54b61390f2b94daa.pdf",
    linkText: "Certificate",
    category: "Certification",
    technologies: ["Advanced DSA", "Live Coding", "Competitive Programming"]
  },
  {
    title: "Earned Gold badge in Java and Silver badge in Python on HackerRank",
    link: "https://www.hackerrank.com/profile/appurajshekar201",
    linkText: "HackerRank Profile",
    category: "Programming Skills",
    technologies: ["Java", "Python", "Problem Solving"]
  },
  {
    title: "Cleared Java (Basic) skill certification on HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/1a1ca34e34a7",
    linkText: "View Certificate",
    category: "Certification",
    technologies: ["Java", "OOP", "Basic Programming"]
  },
  {
    title: "Cleared SQL (Basic) skill certification on HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/e473682d2967",
    linkText: "View Certificate",
    category: "Certification",
    technologies: ["SQL"]
  }
];

const Achievements: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --primary-bg: #0f172a;
          --secondary-bg: #1e293b;
          --accent-primary: #3b82f6;
          --accent-secondary: #60a5fa;
          --text-primary: #e0e7ff;
          --text-secondary: #94a3b8;
          --border-primary: #384655;
        }

        body, .achievements-page {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          background: var(--primary-bg);
          color: var(--text-primary);
          margin: 0;
          min-height: 100vh;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 100px 150px;
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 768px) {
          .achievements-container {
            padding: 100px 25px;
          }
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 50px;
          white-space: nowrap;
        }

        .section-header h2 {
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(14px, 5vw, 20px);
          font-weight: 400;
          margin: 0 10px 0 0;
        }

        /* Animated waving letters for the heading text */
        .animated-text span {
          display: inline-block;
          animation: textWave 2s ease-in-out infinite;
        }

        @keyframes textWave {
          0%, 40%, 100% { transform: translateY(0); }
          20% { transform: translateY(-8px); }
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: clamp(26px, 5vw, 32px);
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          margin: 0 20px 0 0;
          /* Remove any previous animation on h3, we animate letters individually */
        }

        .section-header .line {
          height: 1px;
          background-color: var(--border-primary);
          width: 300px;
          position: relative;
          top: 5px;
        }
          

        .achievement-card {
          background: var(--secondary-bg);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
        }

        .achievement-category {
          color: var(--accent-primary);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .achievement-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .achievement-link {
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.25s ease;
        }

        .achievement-link:hover {
          color: var(--accent-secondary);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .tech-tag {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 400;
          transition: all 0.25s ease;
          cursor: default;
          user-select: none;
        }

        .tech-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
      <section id="achievements" className="fade-in-up" style={{ minHeight: "100vh" }}>
        <div className="achievements-container">
          <div className="section-header">
            <h2>05.</h2>
            <h3 aria-label="Achievements & Certifications" className="animated-text">
              {'Achievements & Certifications'.split('').map((char, i) => (
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
            </h3>
            <div className="line"></div>
          </div>
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-category">{item.category}</div>
              <div className="achievement-title">{item.title}</div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                {item.linkText}
              </a>
              <div className="tech-stack">
                {item.technologies.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievements;
