import React from 'react';

const Education: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const educationData = [
        {
            institution: "Siddaganga Institute of Technology (SIT), Tumkur",
            degree: "B.E. in Information Science & Engineering",
            year: "2022 - 2026",
            grade:"9.08",
            type: "current"
        },
        {
            institution: "KPS PU College, Arasikere",
            degree: "Pre-University Education",
            year: "2020 - 2022",
            grade:"96.83",
            type: "completed"
        },
        {
            institution: "Rotary High School",
            degree: "High School Education",
            year: "2020 (SSLC passed out)",
            grade:"97.44",
            type: "completed"
        }
    ];

    return (
        <>
            <style>
                {`
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
                    
                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .slide-in-left {
                        animation: slideInLeft 0.6s ease-out forwards;
                    }
                    
                    @media (max-width: 768px) {
                        .education-section {
                            padding: 2rem 1.5rem !important;
                            margin: 1rem auto !important;
                        }
                        .education-title {
                            font-size: 2rem !important;
                        }
                        .education-item {
                            padding: 1.5rem !important;
                            font-size: 1rem !important;
                        }
                    }
                `}
            </style>
            
            <section
                id="education"
                className="education-section fade-in-up"
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
                    top: '-20%',
                    left: '-20%',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'slideInLeft 5s ease-in-out infinite alternate'
                }}></div>

                <h2
                    className="education-title"
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
                    Education
                </h2>

                <ul style={{ 
                    padding: 0, 
                    margin: 0, 
                    listStyle: "none",
                    position: 'relative',
                    zIndex: 2
                }}>
                    {educationData.map((edu, index) => (
                        <li
                            key={index}
                            className="education-item slide-in-left"
                            style={{
                                background: hoveredIndex === index 
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                                borderRadius: '16px',
                                padding: '2rem 1.5rem',
                                marginBottom: index === educationData.length - 1 ? '0' : '1.5rem',
                                fontSize: '1.1rem',
                                boxShadow: hoveredIndex === index
                                    ? '0 12px 30px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.2)'
                                    : '0 6px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
                                textAlign: 'center',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                                border: '1px solid rgba(59, 130, 246, 0.15)',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.2}s`,
                                animationFillMode: 'both'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <strong style={{
                                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                display: 'block',
                                marginBottom: '0.5rem'
                            }}>
                                {edu.institution}
                            </strong>
                            
                            <div style={{
                                color: '#475569',
                                fontWeight: '500',
                                marginBottom: '0.3rem',
                                fontSize: '1.05rem'
                            }}>
                                {edu.degree}
                            </div>
                            <div style={{
                                color: '#334155',
                                fontWeight: '500',
                                fontSize: '1.05rem',
                                marginTop: '0.3rem'
                            }}>
                                {edu.type === 'current' ? `CGPA: ${edu.grade}` : `Percentage: ${edu.grade}%`}
                            </div>
                            <div style={{
                                color: '#64748b',
                                fontWeight: '400',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: edu.type === 'current' ? '#10b981' : '#3b82f6'
                                }}></span>
                                {edu.year}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Education;