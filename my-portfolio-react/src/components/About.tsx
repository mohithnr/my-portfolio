import React from 'react';

const About: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/mohithnr',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mohith-n-r-085a94263',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/Mohith_N__Raj/',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.814 2.133 8.052-.074l2.981-2.842-.174-.12a7.998 7.998 0 0 1-2.981-4.99c-.078-.45-.118-.951-.118-1.473 0-.522.04-1.023.118-1.473a8.006 8.006 0 0 1 2.981-4.99l.174-.12L18.4 4.438a1.374 1.374 0 0 0-.961-.438H13.483zm-2.866 12.815a1.23 1.23 0 0 1-1.38-.934 1.23 1.23 0 0 1 .934-1.38l3.684-.85a1.23 1.23 0 0 1 1.38.934 1.23 1.23 0 0 1-.934 1.38l-3.684.85z"/>
                </svg>
            )
        },
        {
            name: 'HackerRank',
            url: 'https://www.hackerrank.com/profile/appurajshekar201',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.642-1.114-.642-10.886 0-12S10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.805c0-.141-.117-.258-.258-.258H8.963c-.141 0-.258.117-.258.258v10.427c0 .141.117.258.258.258h.742c.141 0 .258-.117.258-.258V13.39h4.074v3.842c0 .141.117.258.258.258h.742c.141 0 .258-.117.258-.258V6.805c0-.143-.117-.258-.258-.258h-.742z"/>
                </svg>
            )
        }
    ];

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

                    .social-links {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 30px;
                        flex-wrap: wrap;
                    }

                    .social-link {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        background: transparent;
                        border: 1px solid #233554;
                        border-radius: 4px;
                        color: #8892b0;
                        text-decoration: none;
                        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                        position: relative;
                    }

                    .social-link:hover {
                        color: #64ffda;
                        border-color: #64ffda;
                        transform: translateY(-3px);
                        box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.4);
                    }

                    .social-link::after {
                        content: attr(aria-label);
                        position: absolute;
                        bottom: -35px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #0a192f;
                        color: #64ffda;
                        padding: 5px 8px;
                        border-radius: 3px;
                        font-size: 12px;
                        font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace;
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                        white-space: nowrap;
                        border: 1px solid #233554;
                    }

                    .social-link:hover::after {
                        opacity: 1;
                    }

                    @media (max-width: 768px) {
                        .about-container {
                            padding: 0 25px;
                        }

                        .profile-image-size {
                            width: 220px;
                            height: 220px;
                        }

                        .social-links {
                            gap: 15px;
                        }

                        .social-link {
                            width: 45px;
                            height: 45px;
                        }
                    }

                    @media (max-width: 480px) {
                        .profile-image-size {
                            width: 180px;
                            height: 180px;
                        }

                        .social-links {
                            gap: 12px;
                        }

                        .social-link {
                            width: 40px;
                            height: 40px;
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

                            {/* Social Links */}
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
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