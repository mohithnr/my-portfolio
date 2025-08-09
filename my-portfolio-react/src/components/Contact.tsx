import React from "react";

const Contact: React.FC = () => {
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

          .contact-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 150px;
            width: 100%;
          }

          @media (max-width: 768px) {
            .contact-container {
              padding: 0 25px;
            }
          }
        `}
      </style>

      <section
        id="contact"
        style={{
          background: '#0a192f',
          padding: '100px 0',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
        className="fade-in-up"
      >
        <div className="contact-container">
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
              06.
            </h2>
            <h3 style={{
              color: '#ccd6f6',
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: '600',
              fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              margin: 0,
              marginRight: '20px',
            }}>
              Get In Touch
            </h3>
            <div style={{
              height: '1px',
              backgroundColor: '#233554',
              width: '300px',
              position: 'relative',
              top: '5px',
            }}></div>
          </div>

          {/* Contact Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '50px',
            alignItems: 'start',
          }}>
            {/* Introduction Text */}
            <div style={{
              textAlign: 'center',
              marginBottom: '40px',
            }}>
              <p style={{
                color: '#8892b0',
                fontSize: '20px',
                lineHeight: '1.6',
                fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                fontWeight: '400',
                margin: '0 0 30px 0',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Information Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              marginBottom: '40px',
            }}>
              {/* Email Card */}
              <a
                href="mailto:mohith.1si22is053@gmail.com"
                style={{
                  background: '#112240',
                  borderRadius: '4px',
                  padding: '30px 25px',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid #64ffda';
                  e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '15px',
                }}>📧</div>
                <h4 style={{
                  color: '#ccd6f6',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  margin: '0 0 10px 0',
                }}>
                  Email
                </h4>
                <p style={{
                  color: '#8892b0',
                  fontSize: '14px',
                  fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                  margin: 0,
                  wordBreak: 'break-all',
                }}>
                  mohith.1si22is053@gmail.com
                </p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+916361113046"
                style={{
                  background: '#112240',
                  borderRadius: '4px',
                  padding: '30px 25px',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid #64ffda';
                  e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '15px',
                }}>📞</div>
                <h4 style={{
                  color: '#ccd6f6',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  margin: '0 0 10px 0',
                }}>
                  Phone
                </h4>
                <p style={{
                  color: '#8892b0',
                  fontSize: '14px',
                  fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                  margin: 0,
                }}>
                  +91-6361113046
                </p>
              </a>

              {/* LinkedIn Card */}
              <div style={{
                background: '#112240',
                borderRadius: '4px',
                padding: '30px 25px',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.border = '1px solid #64ffda';
                e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.1)';
                e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
              }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '15px',
                }}>💼</div>
                <h4 style={{
                  color: '#ccd6f6',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  margin: '0 0 10px 0',
                }}>
                  LinkedIn
                </h4>
                <a
                  href="https://www.linkedin.com/in/mohith-n-r-085a94263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#64ffda',
                    fontSize: '14px',
                    fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ccd6f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64ffda';
                  }}
                >
                  linkedin.com/in/mohith
                </a>
              </div>

              {/* WhatsApp Card */}
              <div style={{
                background: '#112240',
                borderRadius: '4px',
                padding: '30px 25px',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.border = '1px solid #64ffda';
                e.currentTarget.style.boxShadow = '4px 4px 0 0 #64ffda';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.1)';
                e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
              }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '15px',
                }}>💬</div>
                <h4 style={{
                  color: '#ccd6f6',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: "'Inter', 'San Francisco', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  margin: '0 0 10px 0',
                }}>
                  WhatsApp
                </h4>
                <a
                  href="https://wa.me/916361113046"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#64ffda',
                    fontSize: '14px',
                    fontFamily: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', Consolas, 'Courier New', monospace",
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ccd6f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64ffda';
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div style={{
              textAlign: 'center',
              marginTop: '40px',
            }}>
              <a
                href="mailto:mohith.1si22is053@gmail.com"
                style={{
                  display: 'inline-block',
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
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;