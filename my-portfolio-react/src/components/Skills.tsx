import React from 'react';

const Skills: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const skillsData = [
        {
            category: "Languages",
            skills: ["Java", "C", "Python"],
            icon: "💻"
        },
        {
            category: "Web Technology",
            skills: ["ReactJs", "ExpressJs", "NodeJs", "JavaScript", "MongoDB", "SQL", "Firebase"],
            icon: "🌐"
        },
        {
            category: "CS Fundamentals",
            skills: ["Data Structures and Algorithms", "OOPS", "OS", "DBMS"],
            icon: "📚"
        },
        {
            category: "Developer Tools",
            skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
            icon: "🛠️"
        }
    ];

    return (
        <>
            <style>
                {`
                    @keyframes slideInRight {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
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
                    
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                    
                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .slide-in-right {
                        animation: slideInRight 0.6s ease-out forwards;
                    }
                    
                    .pulse-icon {
                        animation: pulse 2s ease-in-out infinite;
                    }
                    
                    @media (max-width: 768px) {
                        .skills-section {
                            padding: 2rem 1.5rem !important;
                            margin: 1rem auto !important;
                        }
                        .skills-title {
                            font-size: 2rem !important;
                        }
                        .skill-item {
                            padding: 1.5rem !important;
                            font-size: 1rem !important;
                        }
                        .skill-icon {
                            font-size: 1.5rem !important;
                        }
                    }
                `}
            </style>
            
            <section
                id="skills"
                className="skills-section fade-in-up"
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
                    top: '-25%',
                    right: '-25%',
                    width: '130%',
                    height: '130%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'slideInRight 5s ease-in-out infinite alternate'
                }}></div>

                <h2
                    className="skills-title"
                    style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                        fontWeight: '700',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        letterSpacing: '-0.01em',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    Skills
                </h2>

                <ul style={{ 
                    padding: 0, 
                    margin: 0, 
                    listStyle: "none",
                    position: 'relative',
                    zIndex: 2
                }}>
                    {skillsData.map((skillGroup, index) => (
                        <li
                            key={index}
                            className="skill-item slide-in-right"
                            style={{
                                background: hoveredIndex === index 
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                                borderRadius: '16px',
                                padding: '2rem 1.5rem',
                                marginBottom: index === skillsData.length - 1 ? '0' : '1.5rem',
                                fontSize: '1.1rem',
                                boxShadow: hoveredIndex === index
                                    ? '0 12px 30px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.2)'
                                    : '0 6px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
                                textAlign: 'center',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                                border: '1px solid rgba(59, 130, 246, 0.15)',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.15}s`,
                                animationFillMode: 'both',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                marginBottom: '0.5rem'
                            }}>
                                <span 
                                    className={hoveredIndex === index ? 'pulse-icon skill-icon' : 'skill-icon'}
                                    style={{
                                        fontSize: '2rem',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    {skillGroup.icon}
                                </span>
                                <strong style={{
                                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: '1.3rem',
                                    fontWeight: '700'
                                }}>
                                    {skillGroup.category}:
                                </strong>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '0.8rem',
                                alignItems: 'center'
                            }}>
                                {skillGroup.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        style={{
                                            background: hoveredIndex === index 
                                                ? 'rgba(59, 130, 246, 0.15)' 
                                                : 'rgba(59, 130, 246, 0.1)',
                                            color: '#2563eb',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '8px',
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Skills;