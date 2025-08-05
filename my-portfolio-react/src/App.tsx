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
import './styles/main.css';

function App() {
  return (
    <>
      {/* Global Responsive Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

          /* Global Reset & Base Styles */
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html, body, #root {
            margin: 0;
            padding: 0;
            background: #0a192f;
            color: #ccd6f6;
            font-family: 'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }

          /* Global Container Responsive System */
          .app-container {
            background: #0a192f;
            min-height: 100vh;
            width: 100%;
            overflow-x: hidden;
          }

          /* Global Section Spacing */
          section {
            margin: 0;
            padding: 100px 0;
            background: #0a192f;
          }

          /* Global Container Pattern */
          .global-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 150px;
            width: 100%;
          }

          /* Global Responsive Breakpoints */
          @media (max-width: 1200px) {
            .global-container {
              padding: 0 100px;
            }
          }

          @media (max-width: 768px) {
            .global-container {
              padding: 0 25px;
            }
            
            section {
              padding: 80px 0;
            }

            /* Typography adjustments */
            h1 { font-size: clamp(40px, 8vw, 80px) !important; }
            h2 { font-size: clamp(26px, 5vw, 32px) !important; }
            h3 { font-size: clamp(20px, 4vw, 28px) !important; }
            p { font-size: clamp(16px, 3vw, 20px) !important; }
          }

          @media (max-width: 480px) {
            .global-container {
              padding: 0 20px;
            }
            
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

          /* Global Animation Classes */
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

          /* Global Section Header Pattern */
          .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            white-space: nowrap;
          }

          .section-number {
            color: #64ffda;
            font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: clamp(14px, 5vw, 20px);
            font-weight: 400;
            margin: 0 10px 0 0;
          }

          .section-title {
            color: #ccd6f6;
            font-size: clamp(26px, 5vw, 32px);
            font-weight: 600;
            font-family: 'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif;
            margin: 0 20px 0 0;
          }

          .section-line {
            height: 1px;
            background-color: #233554;
            width: 300px;
            position: relative;
            top: 5px;
          }

          @media (max-width: 768px) {
            .section-header {
              margin-bottom: 30px;
            }

            .section-line {
              width: 150px;
            }
          }

          @media (max-width: 480px) {
            .section-header {
              flex-direction: column;
              align-items: flex-start;
              white-space: normal;
            }

            .section-line {
              width: 100px;
              margin-top: 10px;
            }
          }

          /* Global Card Patterns */
          .card {
            background: #112240;
            border-radius: 4px;
            padding: 30px 25px;
            box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
            border: 1px solid rgba(100, 255, 218, 0.1);
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          .card:hover {
            transform: translateY(-4px);
            border-color: #64ffda;
            box-shadow: 4px 4px 0 0 #64ffda;
          }

          /* Global Button Pattern */
          .btn-primary {
            display: inline-block;
            padding: 1.25rem 1.75rem;
            background: transparent;
            color: #64ffda;
            border: 1px solid #64ffda;
            border-radius: 4px;
            font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            cursor: pointer;
          }

          .btn-primary:hover {
            background: rgba(100, 255, 218, 0.1);
            transform: translate(-4px, -4px);
            box-shadow: 4px 4px 0 0 #64ffda;
          }

          /* Grid System */
          .grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .grid-auto {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
          }

          @media (max-width: 768px) {
            .grid-2,
            .grid-3,
            .grid-auto {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          /* Utility Classes */
          .text-center { text-align: center; }
          .text-left { text-align: left; }
          .text-right { text-align: right; }
          
          .mb-small { margin-bottom: 20px; }
          .mb-medium { margin-bottom: 40px; }
          .mb-large { margin-bottom: 60px; }
          
          .mt-small { margin-top: 20px; }
          .mt-medium { margin-top: 40px; }
          .mt-large { margin-top: 60px; }

          /* Scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Remove scrollbar styling for cleaner look */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #0a192f;
          }

          ::-webkit-scrollbar-thumb {
            background: #64ffda;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #4db8a8;
          }
        `}
      </style>

      <div className="app-container">
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;