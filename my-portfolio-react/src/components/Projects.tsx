import React from 'react';

const Projects: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const projectsData = [
        {
            title: "Farm-Connect",
            techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "Firebase", "Flask"],
            github: "https://github.com/mohithnr/Farm-Connect",
            live: "https://farm-connect-delta.vercel.app/",
            icon: "🌾",
            features: [
                "Developed an AI-driven marketplace connecting farmers and buyers with comprehensive crop and farmer profiles featuring seamless management capabilities.",
                "Engineered machine learning models to recommend optimal crops based on soil conditions and integrated 5-day weather forecasts for strategic planning.",
                "Created a generative AI farming assistant that delivers personalized, step-by-step cultivation guidance, enhancing farmer accessibility and decision-making."
            ]
        },
        {
            title: "Drug Inventory System",
            techStack: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "SQL", "Razor-Pay"],
            github: "https://github.com/mohithnr/Drug-inventory-system",
            live: null,
            icon: "💊",
            features: [
                "Developed a full-stack medicine management platform with real-time inventory tracking, low-stock alerts, and expiry monitoring.",
                "Enabled secure role-based access (RBAC) for pharmacists and users; supported seamless medicine browsing, ordering, and delivery tracking.",
                "Integrated Razorpay for secure online payments and Generative AI for AI-driven drug suggestions based on symptoms and history."
            ]
        },
        {
            title: "Medical Report Analyzer",
            techStack: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "Servam AI", "OCR", "PDFKit"],
            github: "https://github.com/mohithnr/medical-report-analyzer",
            live: null,
            icon: "🔬",
            features: [
                "Developed an AI-powered platform to analyze medical reports and provide automated diagnostic summaries.",
                "Leveraged Tesseract.js for OCR, NLP for highlighting key findings, and enabled multilingual abnormality detection with AI-generated PDF reports.",
                "Integrated Servam AI for converting diagnostic text into voice, enhancing accessibility."
            ]
        }
    ];

    return (
        <>
            <style>
                {`
                    @keyframes slideInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                    }
                    
                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .slide-in-up {
                        animation: slideInUp 0.7s ease-out forwards;
                    }
                    
                    .bounce-icon {
                        animation: bounce 2s ease-in-out infinite;
                    }
                    
                    @media (max-width: 768px) {
                        .projects-section {
                            padding: 2rem 1.5rem !important;
                            margin: 1rem auto !important;
                        }
                        .projects-title {
                            font-size: 2rem !important;
                        }
                        .project-card {
                            padding: 1.5rem !important;
                        }
                        .project-title {
                            font-size: 1.2rem !important;
                        }
                        .tech-tag {
                            font-size: 0.8rem !important;
                            padding: 0.3rem 0.6rem !important;
                        }
                    }
                `}
            </style>
            
            <section
                id="projects"
                className="projects-section fade-in-up"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.8)',
                    padding: '3.5rem 2.5rem',
                    margin: '2rem auto',
                    maxWidth: '800px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    boxSizing: 'border-box'
                }}
            >
                {/* Decorative floating element */}
                <div style={{
                    position: 'absolute',
                    top: '-30%',
                    left: '-30%',
                    width: '140%',
                    height: '140%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'slideInUp 6s ease-in-out infinite alternate'
                }}></div>

                <h2
                    className="projects-title"
                    style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                        fontWeight: '700',
                        marginBottom: '2.5rem',
                        textAlign: 'center',
                        letterSpacing: '-0.01em',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    Projects
                </h2>

                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-card slide-in-up"
                            style={{
                                background: hoveredIndex === index 
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                                borderRadius: '16px',
                                padding: '2rem',
                                boxShadow: hoveredIndex === index
                                    ? '0 15px 35px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.25)'
                                    : '0 8px 25px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                                border: '1px solid rgba(59, 130, 246, 0.15)',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.2}s`,
                                animationFillMode: 'both'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Project Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <span 
                                    className={hoveredIndex === index ? 'bounce-icon' : ''}
                                    style={{
                                        fontSize: '2.5rem',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    {project.icon}
                                </span>
                                <h3 
                                    className="project-title"
                                    style={{
                                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        margin: 0,
                                        textAlign: 'center'
                                    }}
                                >
                                    {project.title}
                                </h3>
                            </div>

                            {/* Tech Stack */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.6rem',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <span style={{
                                    color: '#475569',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginRight: '0.5rem'
                                }}>
                                    Tech Stack:
                                </span>
                                {project.techStack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="tech-tag"
                                        style={{
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            color: '#2563eb',
                                            padding: '0.3rem 0.7rem',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            border: '1px solid rgba(59, 130, 246, 0.2)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                        color: 'white',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    🔗 GitHub
                                </a>
                                {project.live && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{
                                            background: 'linear-gradient(135deg, #10b981, #059669)',
                                            color: 'white',
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        🚀 Live Demo
                                    </a>
                                )}
                            </div>

                            {/* Features */}
                            <ul style={{
                                margin: 0,
                                padding: 0,
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem'
                            }}>
                                {project.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        style={{
                                            color: '#475569',
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            position: 'relative',
                                            paddingLeft: '1.5rem',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0.3rem',
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: '#3b82f6'
                                        }}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;