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
  }
];

const Achievements: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 100px 150px;
          background: #0a192f;
          color: #ccd6f6;
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
          color: #64ffda;
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(14px, 5vw, 20px);
          font-weight: 400;
          margin: 0 10px 0 0;
        }

        .section-header h3 {
          color: #ccd6f6;
          font-size: clamp(26px, 5vw, 32px);
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          margin: 0 20px 0 0;
        }

        .section-header .line {
          height: 1px;
          background-color: #233554;
          width: 300px;
          position: relative;
          top: 5px;
        }

        .achievement-card {
          background: #112240;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 30px rgba(2, 12, 27, 0.7);
          transition: transform 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
        }

        .achievement-category {
          color: #64ffda;
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
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.25s ease;
        }

        .achievement-link:hover {
          color: #64ffda;
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
          background: rgba(100, 255, 218, 0.1);
          color: #64ffda;
          border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 400;
          transition: all 0.25s ease;
        }

        .tech-tag:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <section id="achievements" className="fade-in-up" style={{ background: '#0a192f', minHeight: '100vh' }}>
        <div className="achievements-container">
          {/* Section Header */}
          <div className="section-header">
            <h2>05.</h2>
            <h3>Achievements & Certifications</h3>
            <div className="line"></div>
          </div>

          {/* Cards */}
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
                  <span className="tech-tag" key={idx}>{tech}</span>
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
