import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    AOS.init({ duration: 1000, offset: 60 })
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  React.useEffect(() => {
    const animateCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08
      }))
      requestAnimationFrame(animateCursor)
    }
    animateCursor()
  }, [mousePosition])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mohithnr',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohith-n-r-085a94263',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Mohith_N__Raj/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.814 2.133 8.052-.074l2.981-2.842-.174-.12a7.998 7.998 0 0 1-2.981-4.99c-.078-.45-.118-.951-.118-1.473 0-.522.04-1.023.118-1.473a8.006 8.006 0 0 1 2.981-4.99l.174-.12L18.4 4.438a1.374 1.374 0 0 0-.961-.438H13.483zm-2.866 12.815a1.23 1.23 0 0 1-1.38-.934 1.23 1.23 0 0 1 .934-1.38l3.684-.85a1.23 1.23 0 0 1 1.38.934 1.23 1.23 0 0 1-.934 1.38l-3.684.85z" />
        </svg>
      )
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/appurajshekar201',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.642-1.114-.642-10.886 0-12S10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.805c0-.141-.117-.258-.258-.258H8.963c-.141 0-.258.117-.258.258v10.427c0 .141.117.258.258.258h.742c.141 0 .258-.117.258-.258V13.39h4.074v3.842c0 .141.117.258.258.258h.742c.141 0 .258-.117.258-.258V6.805c0-.143-.117-.258-.258-.258h-.742z" />
        </svg>
      )
    }
  ]

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB'
  ]

  return (
    <div style={{ position: 'relative', cursor: 'none' }}>
      <style>{`
        :root {
          --accent-primary: #3b82f6;
          --bg-primary: #0f172a;
          --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          --container-bg: rgba(15, 23, 42, 0.85);
          --text-primary: #e0e7ff;
          --text-secondary: #94a3b8;
          --border-primary: #384655;
        }
        body, .about-page {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          background: var(--bg-gradient);
          color: var(--text-primary);
          margin: 0;
          min-height: 100vh;
          overflow-x: hidden;
        }
        // .custom-cursor {
        //   width: 20px;
        //   height: 20px;
        //   border: 2px solid var(--accent-primary);
        //   border-radius: 50%;
        //   position: fixed;
        //   pointer-events: none;
        //   background: rgba(59,130,246,0.12);
        //   z-index: 10000;
        //   transition: background .2s, border .2s;
        // }
        .floating-particles {
          pointer-events: none;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(60deg, var(--accent-primary) 20%, transparent 100%);
          opacity: 0.1;
          width: 40px;
          height: 40px;
          animation: floatEffect 14s linear infinite;
        }
        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: var(--accent-primary);
          width: 8px;
          height: 8px;
          opacity: 0.13;
          animation: sparkleEffect 8s linear infinite;
        }
        @keyframes floatEffect {
          0% { transform: translateY(0) scale(0.5);}
          100% { transform: translateY(300px) scale(1);}
        }
        @keyframes sparkleEffect {
          0% { transform: scale(1);}
          50% { transform: scale(1.5);}
          100% { transform: scale(1);}
        }
        .about-section {
          padding: 120px 0;
          min-height: 100vh;
          background: transparent;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .about-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px 40px;
          width: 100%;
          position: relative;
          background: var(--container-bg);
          border-radius: 28px;
          box-shadow: 0 8px 38px -10px rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .section-label span {
          font-family: 'Josefin Sans', monospace;
          font-weight: 700;
          font-size: 22px;
          color: var(--accent-primary);
          letter-spacing: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--text-primary));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s infinite;
        }
        .section-heading {
          font-family: 'Josefin Sans', 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 24px 0;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .profile-image-area {
          position: relative;
          margin-bottom: 40px;
        }
        .profile-border {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 3px solid transparent;
          background: linear-gradient(45deg, var(--accent-primary), var(--text-primary), var(--accent-primary)) border-box;
          background-clip: border-box;
          transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          animation: pulseGlow 2s ease-in-out infinite;
          z-index: 1;
        }
        .profile-image {
          position: relative;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 38px 0 rgba(59,130,246,0.14);
          background: linear-gradient(45deg, rgba(59,130,246,0.1), transparent);
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          z-index: 2;
        }
        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(20%) contrast(1);
          transition: filter 0.3s;
        }
        .profile-image:hover img {
          filter: grayscale(0%) contrast(1.15);
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(140px, 220px));
          gap: 16px 26px;
          list-style: none;
          margin: 36px 0 0 0;
          padding: 0;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
          font-size: 15px;
        }
        .tech-item {
          position: relative;
          padding-left: 22px;
          cursor: default;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .tech-item::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 19px;
        }
        .tech-item:hover {
          color: var(--accent-primary);
          transform: translateX(9px);
        }
        .social-container {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: transparent;
          border: 2px solid var(--border-primary);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 21px;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          position: relative;
          cursor: pointer;
        }
        .social-link:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: scale(1.07) translateY(-4px);
          box-shadow: 0 12px 36px -8px rgba(59, 130, 246, 0.35);
          z-index: 2;
        }
        .resume-button {
          margin-top: 50px;
          padding: 18px 36px;
          background: transparent;
          color: var(--accent-primary);
          border: 2px solid var(--accent-primary);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .resume-button:hover {
          background: rgba(59,130,246,0.12);
          transform: translate(-6px, -6px);
          box-shadow: 6px 6px 0 0 var(--accent-primary);
          z-index: 2;
        }
        .about-stats {
          display: flex;
          justify-content: space-around;
          margin-top: 70px;
          padding: 30px 0;
          border-top: 1px solid var(--border-primary);
          color: var(--text-secondary);
          font-family: 'Josefin Sans', sans-serif;
        }
        .about-stats > div {
          text-align: center;
        }
          .section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.section-label {
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 24px;
  white-space: nowrap;
}

.header-line {
  flex-grow: 1;
  border-bottom: 1px solid var(--accent-primary);
  opacity: 0.4;
}

        .stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 26px;
          color: var(--accent-primary);
        }
        .stat-label {
          margin-top: 8px;
          font-size: 14px;
        }
        @media (max-width: 870px) {
          .about-container {
            padding: 36px 24px;
          }
          .profile-border, .profile-image {
            width: 180px;
            height: 180px;
          }
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .section-heading {
            font-size: 28px;
          }
        }
        @media (max-width: 440px) {
          .profile-border, .profile-image {
            width: 140px;
            height: 140px;
          }
          .resume-button {
            padding: 14px 26px;
            font-size: 14px;
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 24px 0 var(--accent-primary); }
          50% { box-shadow: 0 0 42px 6px var(--accent-primary); }
        }
      `}</style>

      <div
        className="custom-cursor"
        style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }}
      />

      <div className="floating-particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{ left: `${15 + Math.random() * 80}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{ left: `${25 + Math.random() * 55}%`, top: `${Math.random() * 97}%` }}
          />
        ))}
      </div>

      <section id="about" className="about-section" data-aos="fade-up">
        <div className="about-container">
          <div className="section-header">
  <h2 className="section-label">01.</h2>
  <h3 className="section-heading animated-text" aria-label="About Me" style={{ whiteSpace: 'nowrap' }}>
    {'About Me'.split('').map((char, i) => (
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
  <div className="header-line"></div>
</div>

          
          
          
          
          
          
          
          
          
          

          <div className="main-content">
            <div
              className="profile-image-area"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="profile-border"
                style={{
                  transform: isHovered ? 'translate(-6px, -6px) scale(1.1)' : 'none'
                }}
              />
              <div
                className="profile-image"
                style={{ transform: isHovered ? 'translate(-3px, -3px) scale(1.05)' : 'none' }}
              >
                <img
                  src="/images/mohith.jpeg"
                  alt="Mohith N R - Full Stack Developer"
                  onError={(e) => {
                    const fallback = e.currentTarget.parentElement
                    if (fallback) {
                      fallback.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--accent-primary);font-size:42px;font-weight:bold;font-family:'Josefin Sans',sans-serif;">MR</div>`
                    }
                  }}
                />
              </div>
            </div>

            <div
              className="text-content"
              style={{ maxWidth: '700px', textAlign: 'left', color: 'var(--text-primary)' }}
            >
              <p>
                Hello! I'm{' '}
                <span
                  style={{
                    background: 'linear-gradient(45deg, var(--accent-primary), var(--text-primary))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                  }}
                >
                  Mohith N R
                </span>
                , an Information Science Engineering student at{' '}
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Siddaganga Institute of Technology
                </span>
                .
              </p>
              <p>
                I enjoy building full-stack web applications that solve real-world problems. My focus
                is on creating digital experiences that are not only functional but also intuitive and
                accessible.
              </p>
              <p>
                I'm passionate about learning new technologies, contributing to open-source projects,
                and continuously improving my craft through hands-on experience and collaboration.
              </p>
              <p>Here are some technologies I've been working with recently:</p>

              <ul className="tech-grid">
                {technologies.map((tech, i) => (
                  <li key={i} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="social-container">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                  Check out my resume!
                </a>
              </div>

              <div className="about-stats">
                <div>
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Problems Solved</div>
                </div>
                <div>
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div>
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
