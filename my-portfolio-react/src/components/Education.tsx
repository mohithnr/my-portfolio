import React, { useState, useEffect } from 'react';

const Education = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    const interval = setInterval(animateCursor, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  const educationData = [
    {
      institution: 'Siddaganga Institute of Technology (SIT), Tumkur',
      degree: 'B.E. in Information Science & Engineering',
      year: '2022 - 2026',
      grade: '9.08',
      type: 'current',
      description: 'Currently pursuing Bachelor of Engineering with focus on modern software development, data structures, and emerging technologies.',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Web Development', 'Database Systems'],
    },
    {
      institution: 'KPS PU College, Arasikere',
      degree: 'Pre-University Education',
      year: '2020 - 2022',
      grade: '96.83',
      type: 'completed',
      description: 'Completed pre-university education with exceptional performance in Science stream.',
      highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    },
    {
      institution: 'Rotary High School',
      degree: 'High School Education',
      year: '2020 (SSLC passed out)',
      grade: '97.44',
      type: 'completed',
      description: 'Achieved outstanding results in secondary school education with consistent academic excellence.',
      highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
    },
  ];

  return (
    <div style={{ position: 'relative', cursor: 'none', overflow: 'hidden' }}>
      <style>{`
        :root {
          --accent-primary: #3b82f6;
          --accent-secondary: #60a5fa;
          --primary-bg: #0f172a;
          --secondary-bg: #1e293b;
          --glass-bg: rgba(11, 32, 61, 0.65);
          --glass-border: rgba(72, 179, 252, 0.3);
          --glass-shadow: rgba(72, 179, 252, 0.28);
          --text-primary: #e0e7ff;
          --text-secondary: #94a3b8;
          --border-primary: #384655;
        }

        body, .education-page {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          color: var(--text-primary);
          margin: 0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        // .custom-cursor {
        //   position: fixed;
        //   width: 20px;
        //   height: 20px;
        //   background: rgba(59, 130, 246, 0.8);
        //   border-radius: 50%;
        //   pointer-events: none;
        //   z-index: 9999;
        //   mix-blend-mode: screen;
        //   transition: transform 0.1s ease;
        // }

        // .custom-cursor::after {
        //   content: '';
        //   position: absolute;
        //   top: -15px;
        //   left: -15px;
        //   width: 50px;
        //   height: 50px;
        //   border: 2px solid rgba(59, 130, 246, 0.3);
        //   border-radius: 50%;
        //   animation: pulseGlow 2s ease-in-out infinite;
        // }

        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: float 15s ease-in-out infinite;
          opacity: 0.6;
        }

        .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 2s; }
        .particle:nth-child(3) { top: 60%; left: 20%; animation-delay: 4s; }
        .particle:nth-child(4) { top: 80%; left: 70%; animation-delay: 6s; }
        .particle:nth-child(5) { top: 30%; left: 90%; animation-delay: 8s; }
        .particle:nth-child(6) { top: 70%; left: 5%; animation-delay: 10s; }
        .particle:nth-child(7) { top: 40%; left: 60%; animation-delay: 12s; }
        .particle:nth-child(8) { top: 90%; left: 40%; animation-delay: 14s; }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          animation: sparkle 3s ease-in-out infinite;
          border-radius: 50%;
        }

        .sparkle:nth-child(9) { top: 25%; left: 30%; animation-delay: 1s; }
        .sparkle:nth-child(10) { top: 75%; left: 85%; animation-delay: 2s; }
        .sparkle:nth-child(11) { top: 45%; left: 15%; animation-delay: 3s; }

        /* Section Styling */
        .section-background {
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          background-size: 200% 200%;
          animation: backgroundShift 20s ease infinite;
          min-height: 100vh;
          padding: 120px 0;
          position: relative;
          z-index: 2;
        }

        .container-padding {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 150px;
        }

        @media (max-width: 1200px) {
          .container-padding { padding: 0 100px !important; }
        }
        @media (max-width: 768px) {
          .container-padding { padding: 0 50px !important; }
        }
        @media (max-width: 480px) {
          .container-padding { padding: 0 25px !important; }
        }

        /* Content Glow Container */
        .content-glow {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px var(--glass-shadow);
          padding: 60px 50px;
          margin: 20px 0;
          position: relative;
        }

        @media (max-width: 768px) {
          .content-glow {
            padding: 40px 30px;
          }
        }

        /* Section Header */
        .section-header {
          margin-bottom: 60px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .section-title {
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
          font-weight: 400;
          font-size: clamp(16px, 3vw, 20px);
          margin: 0 10px 0 0;
        }

        .section-heading {
          color: var(--text-primary);
          font-family: 'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif;
          font-weight: 600;
          font-size: clamp(28px, 5vw, 32px);
          margin: 0 20px 0 0;
        }

        .header-line {
          height: 1px;
          background: linear-gradient(90deg, var(--accent-primary), transparent);
          width: 300px;
          position: relative;
          top: 2px;
        }

        @media (max-width: 768px) {
          .header-line {
            width: 100px;
          }
        }

        /* Animated Text */
        .animated-text span {
          display: inline-block;
          animation: textWave 2s ease-in-out infinite;
        }

        /* Education Grid */
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        /* Education Card */
        .education-card {
          background: rgba(26, 31, 46, 0.8);
          border: 1px solid var(--glass-border);
          border-radius: 15px;
          padding: 40px;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          backdrop-filter: blur(5px);
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .education-card:hover {
          background: rgba(59, 130, 246, 0.05);
          border-color: var(--accent-primary);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
        }

        .education-card:hover::before {
          transform: scaleX(1);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .education-header {
            flex-direction: column;
            gap: 10px;
          }
        }

        .education-institution {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .education-degree {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 400;
          font-size: 1rem;
          color: var(--accent-primary);
          margin-bottom: 15px;
        }

        .education-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .education-year {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .year-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-primary);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .year-indicator.completed {
          background: var(--accent-secondary);
          animation: none;
        }

        .education-grade {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--accent-primary);
          padding: 5px 12px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .education-description {
          font-family: 'Inter', sans-serif;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 20px 0;
          font-size: 0.95rem;
        }

        .education-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .highlight-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease;
          cursor: default;
          user-select: none;
        }

        .highlight-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        /* Core Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(20px) rotate(270deg); }
        }

        @keyframes textWave {
          0%, 40%, 100% { transform: translateY(0); }
          20% { transform: translateY(-8px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
        }

        @keyframes backgroundShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        /* Fade and Slide Animations */
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

        /* Scroll Indicator */
        .scroll-indicator {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          z-index: 10;
          animation: textWave 2s ease-in-out infinite;
        }

        .scroll-indicator::after {
          content: '';
          display: block;
          width: 1px;
          height: 30px;
          background: var(--accent-primary);
          margin: 10px auto 0;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .scroll-indicator {
            display: none;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />

      {/* Floating Particles */}
      <div className="floating-particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
        {[...Array(3)].map((_, i) => (
          <div key={`sparkle-${i}`} className="sparkle" />
        ))}
      </div>

      <section className={`section-background ${isLoaded ? 'fade-in-up loaded' : 'fade-in-up'}`}>
        <div className="container-padding">
          <div className="content-glow">
            {/* Section Header */}
            <div className={`section-header ${isLoaded ? 'slide-in-left loaded' : 'slide-in-left'}`}>
              <h2 className="section-title">
                <span className="animated-text">
                  {'02.'.split('').map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                      {char}
                    </span>
                  ))}
                </span>
              </h2>
              <h3 className="section-heading">
                <span className="animated-text">
                  {'Education'.split('').map((char, i) => (
                    <span
                      key={i}
                      style={{
                        animationDelay: `${i * 0.05 + 0.5}s`,
                        display: char === ' ' ? 'inline' : 'inline-block',
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </h3>
              <div className="header-line" />
            </div>

            {/* Education Grid */}
            <div className="education-grid">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`education-card ${isLoaded ? 'fade-in-up loaded' : 'fade-in-up'}`}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div className="education-header">
                    <div>
                      <div className="education-institution">{edu.institution}</div>
                      <div className="education-degree">{edu.degree}</div>
                    </div>
                  </div>

                  <div className="education-meta">
                    <div className="education-year">
                      <div className={`year-indicator ${edu.type === 'current' ? '' : 'completed'}`} />
                      {edu.year}
                    </div>
                    <div className="education-grade">{edu.type === 'current' ? `CGPA: ${edu.grade}` : `${edu.grade}%`}</div>
                  </div>

                  <div className="education-description">{edu.description}</div>

                  <div className="education-highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">scroll</div>
      </section>
    </div>
  );
};

export default Education;
