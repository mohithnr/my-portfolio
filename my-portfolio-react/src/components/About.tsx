import React from 'react';

const About: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        33% { transform: translateY(-8px) rotate(1deg); }
                        66% { transform: translateY(4px) rotate(-1deg); }
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
                `}
            </style>

            <section
                id="about"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    boxShadow: isHovered
                        ? '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.2)'
                        : '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.8)',
                    padding: '3rem 2rem',
                    margin: '3rem auto',
                    maxWidth: '850px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fade-in-up"
            >
                {/* Decorative glow */}
                <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-30%',
                    width: '150%',
                    height: '150%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 5s ease-in-out infinite',
                    zIndex: 1
                }}></div>

                {/* Content container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    zIndex: 2,
                    position: 'relative',
                }}>
                    {/* Profile Image */}
                    <img
                        src="/images/mohith.jpeg"
                        alt="Mohith Profile"
                        style={{
                            width: '130px',
                            height: '130px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />

                    <h2 style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                        fontWeight: '700',
                        textAlign: 'center',
                        letterSpacing: '-0.01em',
                        margin: 0
                    }}>
                        About Me
                    </h2>

                    <p style={{
                        color: '#475569',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        lineHeight: '1.7',
                        textAlign: 'center',
                        fontWeight: '400',
                        maxWidth: '600px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 2
                    }}>
    I’m <span style={{
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '600'
    }}>Mohith N R</span>, an Information Science Engineering student at 
    <span style={{
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '600'
    }}> Siddaganga Institute of Technology</span>.

    <br /><br />

    I enjoy building full-stack web applications using technologies like 
    <span style={{
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '600'
    }}> React, Node.js, Express, MongoDB, and Tailwind CSS</span>.

    <br /><br />

    I'm passionate about solving problems, creating useful tools, and continuously learning through real-world projects and collaboration.
</p>

                </div>
            </section>
        </>
    );
};

export default About;
