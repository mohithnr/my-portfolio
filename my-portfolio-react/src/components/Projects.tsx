import React from "react";

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
    title: "Farm-Connect",
    techStack: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
      "Flask",
    ],
    github: "https://github.com/mohithnr/Farm-Connect",
    live: "https://farm-connect-delta.vercel.app/",
    icon: "🌾",
    features: [
      "Developed an AI-driven marketplace connecting farmers and buyers with comprehensive crop and farmer profiles featuring seamless management capabilities.",
      "Engineered machine learning models to recommend optimal crops based on soil conditions and integrated 5-day weather forecasts for strategic planning.",
      "Created a generative AI farming assistant that delivers personalized, step-by-step cultivation guidance, enhancing farmer accessibility and decision-making.",
    ],
  },
  {
    title: "Drug Inventory System",
    techStack: [
      "TailwindCSS",
      "ReactJS",
      "Node.js",
      "Express.js",
      "SQL",
      "Razor-Pay",
    ],
    github: "https://github.com/mohithnr/Drug-inventory-system",
    live: null,
    icon: "💊",
    features: [
      "Developed a full-stack medicine management platform with real-time inventory tracking, low-stock alerts, and expiry monitoring.",
      "Enabled secure role-based access (RBAC) for pharmacists and users; supported seamless medicine browsing, ordering, and delivery tracking.",
      "Integrated Razorpay for secure online payments and Generative AI for AI-driven drug suggestions based on symptoms and history.",
    ],
  },
  {
    title: "Medical Report Analyzer",
    techStack: [
      "TailwindCSS",
      "ReactJS",
      "Node.js",
      "Express.js",
      "Servam AI",
      "OCR",
      "PDFKit",
    ],
    github: "https://github.com/mohithnr/medical-report-analyzer",
    live: null,
    icon: "🔬",
    features: [
      "Developed an AI-powered platform to analyze medical reports and provide automated diagnostic summaries.",
      "Leveraged Tesseract.js for OCR, NLP for highlighting key findings, and enabled multilingual abnormality detection with AI-generated PDF reports.",
      "Integrated Servam AI for converting diagnostic text into voice, enhancing accessibility.",
    ],
  },
  {
    title: "Gosiri – Smart Dairy Management System",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    github: "https://github.com/mohithnr/gosiri",
    live: null,
    icon: "🐄",
    features: [
      "Authentication: Secure JWT-based login/registration for farmers.",
      "Dashboard: Overview of daily milk collection, sales, expenses, and profit/loss.",
      "Cow Management: Add and manage individual cows with detailed records.",
      "AI Chatbot: Multi-language chatbot to assist farmers regarding dairy farming.",
      "Milk Records: Track morning and evening milk production per cow.",
      "Sales Tracking: Record milk sales with automatic calculations.",
      "Expense Management: Log farm expenses with notes.",
      "Breeding Management: Track insemination dates and calving reminders.",
      "Reports: Visual charts for milk yield trends and financial analysis.",
    ],
  },
];

const Projects: React.FC = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>
        {`
          :root {
            --accent-primary: #3b82f6;
            --primary-bg: #0f172a;
            --secondary-bg: #1e293b;
            --border-primary: #384655;
            --text-primary: #e0e7ff;
            --text-secondary: #94a3b8;
          }
          body, .projects-page {
            font-family: 'Josefin Sans', 'Inter', sans-serif;
            margin: 0;
            background: var(--primary-bg);
            color: var(--text-primary);
          }
          @keyframes fadeInUp {
            from {opacity: 0; transform: translateY(20px);}
            to {opacity: 1; transform: translateY(0);}
          }
          @keyframes slideInLeft {
            from {opacity: 0; transform: translateX(-20px);}
            to {opacity: 1; transform: translateX(0);}
          }
          @keyframes textWave {
            0%, 100% {transform: translateY(0);}
            50% {transform: translateY(-8px);}
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
          }
          .fade-in-up.loaded {
            opacity: 1;
          }
          .slide-in-left {
            animation: slideInLeft 0.6s ease forwards;
            opacity: 0;
          }
          .slide-in-left.loaded {
            opacity: 1;
          }

          .animated-background {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(270deg, #0f172a, #1e293b, #0f172a);
            background-size: 600% 600%;
            animation: gradientShift 15s ease infinite;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 100px 0;
            /* Fixed z-index to be below mobile sidebar */
            position: relative;
            z-index: 1;
          }
          
          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
          }
          
          .particle, .sparkle {
            position: absolute;
            background: var(--accent-primary);
            border-radius: 50%;
            opacity: 0.6;
            animation: float 6s ease-in-out infinite;
          }
          
          .particle {
            width: 4px;
            height: 4px;
          }
          
          .sparkle {
            width: 2px;
            height: 2px;
            opacity: 0.8;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }
          
          .particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
          .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
          .particle:nth-child(3) { top: 80%; left: 40%; animation-delay: 2s; }
          .particle:nth-child(4) { top: 40%; left: 60%; animation-delay: 3s; }
          .particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 4s; }
          .particle:nth-child(6) { top: 70%; left: 10%; animation-delay: 5s; }
          .particle:nth-child(7) { top: 30%; left: 30%; animation-delay: 2.5s; }
          .particle:nth-child(8) { top: 90%; left: 90%; animation-delay: 1.5s; }
          
          .sparkle:nth-child(9) { top: 25%; left: 75%; animation-delay: 0.5s; }
          .sparkle:nth-child(10) { top: 75%; left: 25%; animation-delay: 3.5s; }
          .sparkle:nth-child(11) { top: 50%; left: 90%; animation-delay: 4.5s; }

          .projects-container {
            position: relative;
            max-width: 1000px;
            width: 90%;
            margin: auto;
            /* Ensure content is above particles but below mobile sidebar */
            z-index: 10;
          }
          
          .section-header {
            display: flex;
            align-items: center;
            white-space: nowrap;
            margin-bottom: 50px;
            gap: 10px;
          }
          
          .section-label {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 400;
            font-size: clamp(14px, 5vw, 20px);
            color: var(--accent-primary);
          }
          
          .section-heading {
            font-family: 'Josefin Sans', 'Inter', sans-serif;
            font-weight: 600;
            font-size: clamp(26px, 5vw, 32px);
            color: var(--text-primary);
            overflow: hidden;
          }
          
          .animated-text span {
            display: inline-block;
            animation: textWave 2s ease-in-out infinite;
          }
          
          .header-line {
            background: linear-gradient(90deg, var(--border-primary), transparent);
            width: 300px;
            height: 1px;
            margin-left: auto;
            opacity: 0.7;
          }
          
          .projects-list {
            display: flex;
            flex-direction: column;
            gap: 50px;
          }
          
          .project-card {
            position: relative;
            background: var(--secondary-bg);
            border-radius: 16px;
            padding: 30px 40px;
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            /* Ensure cards don't interfere with mobile sidebar */
            z-index: 5;
          }
          
          .project-card:hover {
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
            transform: translateY(-8px);
            /* Hover state should still be below mobile sidebar */
            z-index: 6;
          }
          
          .project-label {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 400;
            font-size: 13px;
            color: var(--accent-primary);
            margin-bottom: 8px;
          }
          
          .project-title {
            font-family: 'Josefin Sans', 'Inter', sans-serif;
            font-weight: 600;
            font-size: clamp(24px, 5vw, 28px);
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
          }
          
          .project-description {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            color: var(--text-primary);
            background: var(--primary-bg);
            padding: 20px 25px;
            border-radius: 8px;
            box-shadow: inset 0 0 15px rgba(59, 130, 246, 0.2);
            margin-bottom: 20px;
          }
          
          .features-list {
            list-style: none;
            padding-left: 20px;
            margin: 0;
          }
          
          .features-list li {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            color: var(--text-primary);
            position: relative;
            margin-bottom: 14px;
            padding-left: 20px;
          }
          
          .features-list li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--accent-primary);
            font-size: 18px;
            line-height: 14px;
          }
          
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .tech-item {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            font-weight: 500;
            color: var(--accent-primary);
            background: rgba(59, 130, 246, 0.15);
            border-radius: 12px;
            padding: 6px 14px;
            white-space: nowrap;
            user-select: none;
            cursor: default;
          }
          
          .links {
            display: flex;
            gap: 15px;
            margin-top: 10px;
          }
          
          .proj-link {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            color: var(--accent-primary);
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid var(--accent-primary);
            background: transparent;
            text-decoration: none;
            display: inline-block;
            transition: all 0.25s ease;
            cursor: pointer;
          }
          
          .proj-link:hover {
            background: var(--accent-primary);
            color: var(--primary-bg);
            transform: translate(-3px, -3px);
            box-shadow: 3px 3px 0 var(--accent-primary);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .animated-background {
              padding: 80px 20px;
            }
            
            .projects-container {
              width: 95%;
            }
            
            .project-card {
              padding: 25px 20px;
            }
            
            .section-header {
              margin-bottom: 40px;
              flex-wrap: wrap;
            }
            
            .header-line {
              width: 150px;
            }
            
            .projects-list {
              gap: 40px;
            }
            
            .project-description {
              padding: 15px 20px;
            }
            
            .features-list li {
              font-size: 14px;
            }
            
            .tech-item {
              font-size: 12px;
              padding: 4px 10px;
            }
          }
          
          @media (max-width: 480px) {
            .animated-background {
              padding: 60px 15px;
            }
            
            .project-card {
              padding: 20px 15px;
            }
            
            .project-title {
              font-size: 22px;
            }
            
            .project-description {
              padding: 15px;
            }
            
            .features-list li {
              font-size: 13px;
            }
            
            .links {
              flex-wrap: wrap;
              gap: 10px;
            }
            
            .proj-link {
              padding: 6px 12px;
              font-size: 12px;
            }
          }
        `}
      </style>

      <div className="animated-background">
        <div className="floating-particles" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
          ))}
          {[...Array(3)].map((_, i) => (
            <div key={i + 8} className="sparkle" style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>

        <div className="projects-container">
          <div className={`section-header ${loaded ? "loaded" : ""}`}>
            <h2 className="section-label">04.</h2>
            <h3 className="section-heading" aria-label="Some Things I've Built">
              <span className="animated-text">
                {"Some Things I've Built".split("").map((char, i) => (
                  <span
                    key={i}
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      display: char === " " ? "inline" : "inline-block",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h3>
            <div className="header-line"></div>
          </div>

          <div className="projects-list">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">
                  <span>{project.icon}</span> {project.title}
                </h3>
                <div className="project-description">
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;