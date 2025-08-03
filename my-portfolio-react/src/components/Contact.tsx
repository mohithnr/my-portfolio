import React from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [hoveredField, setHoveredField] = React.useState<string | null>(null);
    const [isSubmitHovered, setIsSubmitHovered] = React.useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // Handle form submission here
        if (formData.name && formData.email && formData.message) {
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

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
                    
                    @keyframes glow {
                        0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
                        50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.6); }
                    }
                    
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                    
                    .fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .slide-in-down {
                        animation: slideInDown 0.6s ease-out forwards;
                    }
                    
                    .glow-effect {
                        animation: glow 2s ease-in-out infinite;
                    }
                    
                    .pulse-effect {
                        animation: pulse 2s ease-in-out infinite;
                    }
                    
                    @media (max-width: 768px) {
                        .contact-section {
                            padding: 2rem 1.5rem !important;
                            margin: 1rem auto !important;
                        }
                        .contact-title {
                            font-size: 2rem !important;
                        }
                        .contact-info {
                            font-size: 1rem !important;
                            padding: 1.5rem !important;
                        }
                        .form-container {
                            padding: 1.5rem !important;
                        }
                    }
                `}
            </style>
            
            <section
                id="contact"
                className="contact-section fade-in-up"
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
                    className="contact-title slide-in-down"
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
                    Get In Touch
                </h2>

                {/* Contact Information */}
                <div 
                    className="contact-info slide-in-down"
                    style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                        borderRadius: '16px',
                        padding: '2rem',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                        position: 'relative',
                        zIndex: 2,
                        animationDelay: '0.2s',
                        animationFillMode: 'both'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1.5rem'
                    }}>
                        <span style={{ fontSize: '2rem' }}>📧</span>
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
                            Contact Information
                        </span>
                    </div>
                    
                    <div style={{
                        color: '#374151',
                        fontSize: '1.1rem',
                        lineHeight: '2',
                        fontWeight: '500'
                    }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <strong>Email:</strong> mohith.1si22is053@gmail.com
                        </div>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <strong>Phone:</strong> +91-6361113046
                        </div>
                        <div>
                            <strong>LinkedIn:</strong>{" "}
                            <a
                                href="https://www.linkedin.com/in/mohith-n-r-085a94263/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.textDecoration = 'underline';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.textDecoration = 'none';
                                }}
                            >
                                linkedin.com/in/mohith
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div 
                    className="form-container slide-in-down"
                    style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 100%)',
                        borderRadius: '16px',
                        padding: '2rem',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                        position: 'relative',
                        zIndex: 2,
                        animationDelay: '0.4s',
                        animationFillMode: 'both'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <span style={{ fontSize: '2rem' }}>✉️</span>
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
                            Send Message
                        </span>
                    </div>

                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "1.5rem" 
                    }}>
                        {/* Name Field */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="name" style={{ 
                                fontWeight: 600, 
                                color: "#374151",
                                fontSize: '1rem' 
                            }}>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                onFocus={() => setHoveredField('name')}
                                onBlur={() => setHoveredField(null)}
                                style={{
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    border: hoveredField === 'name' 
                                        ? "2px solid #3b82f6" 
                                        : "2px solid rgba(226, 232, 240, 0.8)",
                                    fontSize: "1rem",
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: hoveredField === 'name' 
                                        ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
                                        : 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Email Field */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="email" style={{ 
                                fontWeight: 600, 
                                color: "#374151",
                                fontSize: '1rem' 
                            }}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                onFocus={() => setHoveredField('email')}
                                onBlur={() => setHoveredField(null)}
                                style={{
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    border: hoveredField === 'email' 
                                        ? "2px solid #3b82f6" 
                                        : "2px solid rgba(226, 232, 240, 0.8)",
                                    fontSize: "1rem",
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: hoveredField === 'email' 
                                        ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
                                        : 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Message Field */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="message" style={{ 
                                fontWeight: 600, 
                                color: "#374151",
                                fontSize: '1rem' 
                            }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                onFocus={() => setHoveredField('message')}
                                onBlur={() => setHoveredField(null)}
                                style={{
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    border: hoveredField === 'message' 
                                        ? "2px solid #3b82f6" 
                                        : "2px solid rgba(226, 232, 240, 0.8)",
                                    fontSize: "1rem",
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: hoveredField === 'message' 
                                        ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
                                        : 'none',
                                    outline: 'none',
                                    resize: "vertical",
                                    minHeight: '120px'
                                }}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            className={isSubmitHovered ? 'glow-effect' : ''}
                            onClick={handleSubmit}
                            onMouseEnter={() => setIsSubmitHovered(true)}
                            onMouseLeave={() => setIsSubmitHovered(false)}
                            style={{
                                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isSubmitHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                                boxShadow: isSubmitHovered
                                    ? '0 15px 35px rgba(59, 130, 246, 0.4)'
                                    : '0 8px 25px rgba(59, 130, 246, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span>🚀</span>
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;