import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './styles/global.css';

function App() {
  return (
    <>
      {/* Custom Cursor System */}
      <style>
        {`
          /* Custom Cursor Implementation */
          .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.1) 70%);
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            transition: transform 0.1s ease;
          }

          .cursor-trail {
            position: fixed;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.5);
            pointer-events: none;
            z-index: 9998;
          }

          /* App Container */
          .app-container {
            background: var(--primary-bg);
            min-height: 100vh;
            width: 100%;
            overflow-x: hidden;
            position: relative;
            cursor: none;
          }

          /* Global Section Spacing */
          section {
            margin: 0;
            padding: 100px 0;
            background: var(--primary-bg);
            position: relative;
          }

          /* Typography adjustments for mobile */
          @media (max-width: 768px) {
            h1 { font-size: clamp(40px, 8vw, 80px) !important; }
            h2 { font-size: clamp(26px, 5vw, 32px) !important; }
            h3 { font-size: clamp(20px, 4vw, 28px) !important; }
            p { font-size: clamp(16px, 3vw, 20px) !important; }
            
            section {
              padding: 80px 0;
            }
          }

          @media (max-width: 480px) {
            section {
              padding: 60px 0;
            }

            /* Mobile-specific adjustments */
            .about-grid,
            .skills-grid,
            .projects-grid {
              display: block !important;
              gap: 30px !important;
            }

            /* Button responsive */
            a[style*="padding"] {
              padding: 1rem 1.5rem !important;
              font-size: 13px !important;
            }
          }
        `}
      </style>

      <div className="app-container">
        <Header />
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      
      
      
      
      
      
      
      
      
    </>
  );
}

export default App;