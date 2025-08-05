import React from 'react';

const About: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

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

                    .tech-tag {
                        display: inline-block;
                        padding: 0.25rem 0.5rem;
                        margin: 0.25rem;
                        background: rgba(100, 255, 218, 0.1);
                        color: #64ffda;
                        border-radius: 3px;
                        font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
                        font-size: 0.75rem;
                        font-weight: 400;
                        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                    }

                    .tech-tag:hover {
                        background: rgba(100, 255, 218, 0.2);
                        transform: translateY(-2px);
                    }

                    .about-container {
                        max-width: 1000px;
                        margin: 0 auto;
                        padding: 0 150px;
                        width: 100%;
                    }

                    .about-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .profile-image-container {
                        position: relative;
                        margin-bottom: 50px;
                    }

                    .text-content {
                        max-width: 700px;
                        text-align: left;
                    }

                    /* Responsive image sizing */
                    .profile-image-size {
                        width: 280px;
                        height: 280px;
                    }

                    @media (max-width: 768px) {
                        .about-container {
                            padding: 0 25px;
                        }

                        .profile-image-size {
                            width: 220px;
                            height: 220px;
                        }
                    }

                    @media (max-width: 480px) {
                        .profile-image-size {
                            width: 180px;
                            height: 180px;
                        }
                    }
                `}
            </style>

            <section
                id="about"
                style={{
                    background: '#0a192f',
                    padding: '100px 0',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
                className="fade-in-up"
            >
                <div className="about-container">
                    {/* Section Header */}
                    <div className="slide-in-left" style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '50px',
                        whiteSpace: 'nowrap',
                    }}>
                        <h2 style={{
                            color: '#64ffda',
                            fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                            fontSize: 'clamp(14px, 5vw, 20px)',
                            fontWeight: '400',
                            margin: 0,
                            marginRight: '10px',
                        }}>
                            01.
                        </h2>
                        <h3 style={{
                            color: '#ccd6f6',
                            fontSize: 'clamp(26px, 5vw, 32px)',
                            fontWeight: '600',
                            fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                            margin: 0,
                            marginRight: '20px',
                        }}>
                            About Me
                        </h3>
                        <div style={{
                            height: '1px',
                            backgroundColor: '#233554',
                            width: '300px',
                            position: 'relative',
                            top: '5px',
                        }}></div>
                    </div>

                    {/* Content Container */}
                    <div className="about-content">
                        {/* Profile Image */}
                        <div className="profile-image-container">
                            <div 
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Circular border outline - simplified animation for better mobile experience */}
                                <div
                                    className="profile-image-size"
                                    style={{
                                        position: 'absolute',
                                        borderRadius: '50%',
                                        border: '3px solid #64ffda',
                                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                        transform: isHovered ? 'translate(-4px, -4px)' : 'translate(4px, 4px)',
                                        zIndex: 1,
                                    }}
                                />
                                
                                {/* Image container */}
                                <div 
                                    className="profile-image-size"
                                    style={{
                                        position: 'relative',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                        transform: isHovered ? 'translate(-2px, -2px)' : 'translate(0, 0)',
                                        zIndex: 2,
                                    }}
                                >
                                    <img
                                        src="/images/mohith.jpeg"
                                        alt="Mohith Profile"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-content">
                            <div style={{
                                color: '#8892b0',
                                fontSize: '20px',
                                lineHeight: '1.6',
                                fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                                fontWeight: '400',
                            }}>
                                <p style={{ margin: '0 0 15px 0' }}>
                                    Hello! I'm <span style={{ color: '#64ffda', fontWeight: '500' }}>Mohith N R</span>, an Information Science Engineering student at{' '}
                                    <span style={{ color: '#64ffda', fontWeight: '500' }}>Siddaganga Institute of Technology</span>.
                                </p>

                                <p style={{ margin: '0 0 15px 0' }}>
                                    I enjoy building full-stack web applications that solve real-world problems. 
                                    My focus is on creating digital experiences that are not only functional but also 
                                    intuitive and accessible.
                                </p>

                                <p style={{ margin: '0 0 15px 0' }}>
                                    I'm passionate about learning new technologies, contributing to open-source projects, 
                                    and continuously improving my craft through hands-on experience and collaboration.
                                </p>

                                <p style={{ margin: '0 0 20px 0' }}>
                                    Here are some technologies I've been working with recently:
                                </p>
                            </div>

                            {/* Technology List */}
                            <ul style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                                gap: '0px 10px',
                                padding: 0,
                                margin: '20px 0 0 0',
                                overflow: 'hidden',
                                listStyle: 'none',
                            }}>
                                {[
                                    'JavaScript (ES6+)',
                                    'TypeScript',
                                    'React',
                                    'Node.js',
                                    'Express.js',
                                    'MongoDB'
                                ].map((tech, index) => (
                                    <li key={index} style={{
                                        position: 'relative',
                                        marginBottom: '10px',
                                        paddingLeft: '20px',
                                        fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                                        fontSize: '13px',
                                        color: '#8892b0',
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0px',
                                            color: '#64ffda',
                                            fontSize: '14px',
                                            lineHeight: '12px',
                                        }}>▹</span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            {/* Resume Button */}
                            <div style={{ textAlign: 'center' }}>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '50px',
                                        padding: '1.25rem 1.75rem',
                                        background: 'transparent',
                                        color: '#64ffda',
                                        border: '1px solid #64ffda',
                                        borderRadius: '4px',
                                        fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                                        e.currentTarget.style.transform = 'translate(-4px, -4px)';
                                        e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.transform = 'translate(0, 0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    Check out my resume!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;