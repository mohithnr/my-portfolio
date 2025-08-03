import React from 'react';

const Achievements: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const achievementsData = [
        {
            title: "Solved over 800+ DSA problems on LeetCode with a peak rating of 1734",
            link: "https://leetcode.com/u/Mohith_N__Raj/",
            linkText: "LeetCode",
            icon: "💻",
            category: "Competitive Programming"
        },
        {
            title: "Completed an 8-week Advanced DSA Live Program by GeeksForGeeks",
            link: "https://media.geeksforgeeks.org/courses/certificates/a882e35cf6bdeccd54b61390f2b94daa.pdf",
            linkText: "GeeksForGeeks",
            icon: "📚",
            category: "Certification"
        },
        {
            title: "Earned Gold badge in Java and Silver badge in Python on HackerRank",
            link: "https://www.hackerrank.com/profile/appurajshekar201",
            linkText: "HackerRank",
            icon: "🏆",
            category: "Programming Skills"
        },
        {
            title: "Cleared Java (Basic) skill certification on HackerRank",
            link: "https://www.hackerrank.com/certificates/iframe/1a1ca34e34a7",
            linkText: "Certificate",
            icon: "🎯",
            category: "Certification"
        }
    ];

    return (
        <>
            <style>
                {`
                    @keyframes slideInDown {
                        from {
                            opacity: 0;
                            transform: translateY(-30px);
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
                    
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    
                    @keyframes glow {
                        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
                        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
                    }
                    
                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .slide-in-down {
                        animation: slideInDown 0.6s ease-out forwards;
                    }
                    
                    .spin-icon {
                        animation: spin 3s linear infinite;
                    }
                    
                    .glow-effect {
                        animation: glow 2s ease-in-out infinite;
                    }
                    
                    @media (max-width: 768px) {
                        .achievements-section {
                            padding: 2rem 1.5rem !important;
                            margin: 1rem auto !important;
                        }
                        .achievements-title {
                            font-size: 2rem !important;
                        }
                        .achievement-item {
                            padding: 1.5rem !important;
                            font-size: 1rem !important;
                        }
                        .achievement-icon {
                            font-size: 1.8rem !important;
                        }
                    }
                `}
            </style>
            
            <section
                id="achievements"
                className="achievements-section fade-in-up"
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
                    top: '-35%',
                    right: '-35%',
                    width: '150%',
                    height: '150%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'slideInDown 6s ease-in-out infinite alternate'
                }}></div>

                <h2
                    className="achievements-title"
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
                    Achievements
                </h2>

                <ul style={{ 
                    padding: 0, 
                    margin: 0, 
                    listStyle: "none",
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {achievementsData.map((achievement, index) => (
                        <li
                            key={index}
                            className="achievement-item slide-in-down"
                            style={{
                                background: hoveredIndex === index 
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                                borderRadius: '16px',
                                padding: '2rem 1.5rem',
                                fontSize: '1.1rem',
                                boxShadow: hoveredIndex === index
                                    ? '0 15px 35px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.25)'
                                    : '0 8px 25px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
                                textAlign: 'center',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredIndex === index ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
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
                            {/* Achievement Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '0.5rem'
                            }}>
                                <span 
                                    className={`achievement-icon ${hoveredIndex === index ? 'spin-icon' : ''}`}
                                    style={{
                                        fontSize: '2.2rem',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    {achievement.icon}
                                </span>
                                <span style={{
                                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                    color: 'white',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {achievement.category}
                                </span>
                            </div>

                            {/* Achievement Title */}
                            <span style={{
                                fontWeight: '600',
                                color: '#374151',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                marginBottom: '1rem',
                                maxWidth: '600px'
                            }}>
                                {achievement.title}
                            </span>

                            {/* Achievement Link */}
                            <a 
                                href={achievement.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={hoveredIndex === index ? 'glow-effect' : ''}
                                style={{
                                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                    color: 'white',
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '2px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                🔗 View {achievement.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Achievements;