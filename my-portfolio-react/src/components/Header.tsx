import React from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('about');
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ['about', 'education', 'skills', 'projects', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 90; // Account for fixed header
            const targetPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        setActiveSection(sectionId);
        setMenuOpen(false);
    };

    const navLinks = [
        { href: 'about', label: '01. About', number: '01' },
        { href: 'education', label: '02. Education', number: '02' },
        { href: 'skills', label: '03. Skills', number: '03' },
        { href: 'projects', label: '04. Projects', number: '04' },
        { href: 'achievements', label: '05. Achievements', number: '05' },
        { href: 'contact', label: '06. Contact', number: '06' },
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
                    
                    :root {
                        --navy: var(--primary-bg);
                        --light-navy: var(--secondary-bg);
                        --lightest-navy: var(--tertiary-bg);
                        --slate: var(--text-secondary);
                        --light-slate: var(--text-primary);
                        --lightest-slate: var(--text-primary);
                        --white: var(--text-primary);
                        --green: var(--accent-primary);
                        --font-mono: 'JetBrains Mono', monospace;
                        --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
                        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                    }

                    /* Ensure smooth scrolling for the whole document */
                    html {
                        scroll-behavior: smooth;
                        scroll-padding-top: 90px;
                    }

                    @keyframes fadeInDown {
                        from {
                            opacity: 0;
                            transform: translateY(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .fade-in-down {
                        animation: fadeInDown 0.6s ease-out forwards;
                    }

                    .nav-item {
                        opacity: 0;
                        animation: fadeIn 0.6s ease-out forwards;
                    }

                    .nav-link {
                        color: var(--lightest-slate);
                        text-decoration: none;
                        font-family: var(--font-mono);
                        font-size: clamp(11px, 1.5vw, 13px);
                        font-weight: 400;
                        padding: clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 15px);
                        border-radius: 4px;
                        transition: var(--transition);
                        position: relative;
                        letter-spacing: 0.1em;
                        cursor: pointer;
                        display: block;
                    }

                    .nav-link:hover {
                        color: var(--green);
                        transform: translateY(-3px);
                    }

                    .nav-link.active {
                        color: var(--green);
                    }

                    .nav-number {
                        color: var(--green);
                        margin-right: 8px;
                        font-size: clamp(10px, 1.2vw, 12px);
                    }

                    .logo {
                        color: var(--green);
                        font-family: var(--font-mono);
                        font-size: clamp(16px, 2.5vw, 20px);
                        font-weight: 600;
                        text-decoration: none;
                        letter-spacing: -0.02em;
                        position: relative;
                        padding: clamp(8px, 1.5vw, 10px);
                        border: 2px solid var(--green);
                        border-radius: 4px;
                        transition: var(--transition);
                        background: transparent;
                        cursor: pointer;
                    }

                    .logo:hover {
                        background: rgba(59, 130, 246, 0.1);
                        transform: translateY(-2px);
                        box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
                    }

                    .header-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        padding: ${isScrolled ? 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 50px)' : 'clamp(15px, 2.5vw, 20px) clamp(20px, 4vw, 50px)'};
                        transition: var(--transition);
                        z-index: 1000;
                        font-family: var(--font-sans);
                        background: ${isScrolled 
                            ? 'rgba(10, 14, 26, 0.85)' 
                            : 'rgba(10, 14, 26, 0.95)'};
                        backdrop-filter: blur(10px);
                        border-bottom: none;
                        box-shadow: ${isScrolled 
                            ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' 
                            : 'none'};
                    }

                    .header-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1600px;
                        margin: 0 auto;
                        width: 100%;
                    }

                    .desktop-nav {
                        display: flex;
                    }

                    .desktop-nav ol {
                        display: flex;
                        list-style: none;
                        gap: clamp(20px, 3vw, 35px);
                        margin: 0;
                        padding: 0;
                        align-items: center;
                        flex-wrap: wrap;
                    }

                    .resume-btn {
                        color: var(--green);
                        background: transparent;
                        border: 1px solid var(--green);
                        border-radius: 4px;
                        padding: clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 16px);
                        font-family: var(--font-mono);
                        font-size: clamp(11px, 1.5vw, 13px);
                        text-decoration: none;
                        transition: var(--transition);
                        margin-left: clamp(10px, 2vw, 15px);
                        white-space: nowrap;
                    }

                    .resume-btn:hover {
                        background: rgba(59, 130, 246, 0.1);
                        transform: translateY(-2px);
                    }

                    /* Mobile Styles */
                    @media (max-width: 768px) {
                        .desktop-nav {
                            display: none !important;
                        }
                        .mobile-nav-button {
                            display: flex !important;
                        }
                        .header-container {
                            padding: ${isScrolled ? '12px 20px' : '15px 20px'};
                        }
                    }

                    @media (min-width: 769px) {
                        .mobile-nav-button {
                            display: none !important;
                        }
                    }

                    /* Tablet adjustments */
                    @media (min-width: 769px) and (max-width: 1024px) {
                        .desktop-nav ol {
                            gap: 20px;
                        }
                        .nav-link {
                            padding: 8px 12px;
                            font-size: 12px;
                        }
                    }

                    /* Large screens */
                    @media (min-width: 1440px) {
                        .header-container {
                            padding: ${isScrolled ? '15px 60px' : '20px 60px'};
                        }
                        .desktop-nav ol {
                            gap: 40px;
                        }
                    }

                    .mobile-nav-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        padding: 8px;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        gap: 4px;
                        z-index: 11;
                        transition: var(--transition);
                    }

                    .hamburger-line {
                        width: 25px;
                        height: 2px;
                        background: var(--green);
                        transition: var(--transition);
                        transform-origin: center;
                    }

                    .mobile-nav-button.open .hamburger-line:nth-child(1) {
                        transform: rotate(45deg) translate(6px, 6px);
                    }

                    .mobile-nav-button.open .hamburger-line:nth-child(2) {
                        opacity: 0;
                    }

                    .mobile-nav-button.open .hamburger-line:nth-child(3) {
                        transform: rotate(-45deg) translate(6px, -6px);
                    }

                    .mobile-sidebar {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: min(75vw, 400px);
                        background: var(--light-navy);
                        box-shadow: -10px 0 30px -15px rgba(2, 12, 27, 0.7);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 50px 10px;
                        z-index: 10;
                        transform: translateX(${menuOpen ? '0' : '100%'});
                        visibility: ${menuOpen ? 'visible' : 'hidden'};
                        transition: var(--transition);
                    }

                    .mobile-nav-item {
                        margin: 20px 0;
                        opacity: 0;
                        animation: ${menuOpen ? 'fadeIn 0.6s ease-out forwards' : 'none'};
                    }

                    .mobile-nav-link {
                        color: var(--lightest-slate);
                        font-family: var(--font-mono);
                        font-size: 18px;
                        font-weight: 400;
                        text-decoration: none;
                        padding: 15px 20px;
                        display: block;
                        text-align: center;
                        transition: var(--transition);
                        letter-spacing: 0.1em;
                        cursor: pointer;
                    }

                    .mobile-nav-link:hover {
                        color: var(--green);
                    }

                    .mobile-nav-number {
                        color: var(--green);
                        display: block;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }

                    .mobile-resume-btn {
                        color: var(--green);
                        background: transparent;
                        border: 1px solid var(--green);
                        border-radius: 4px;
                        padding: 18px 50px;
                        font-family: var(--font-mono);
                        font-size: 14px;
                        text-decoration: none;
                        transition: var(--transition);
                        display: inline-block;
                        margin: 40px 0 20px;
                    }

                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(10, 14, 26, 0.8);
                        backdrop-filter: blur(5px);
                        z-index: 9;
                        opacity: ${menuOpen ? '1' : '0'};
                        visibility: ${menuOpen ? 'visible' : 'hidden'};
                        transition: var(--transition);
                    }

                    /* Extra small mobile adjustments */
                    @media (max-width: 480px) {
                        .logo {
                            font-size: 16px;
                            padding: 6px 8px;
                        }
                        .mobile-sidebar {
                            width: 85vw;
                            padding: 40px 10px;
                        }
                        .mobile-nav-link {
                            font-size: 16px;
                            padding: 12px 16px;
                        }
                        .mobile-resume-btn {
                            padding: 14px 30px;
                            font-size: 13px;
                        }
                    }

                    /* Landscape mobile adjustments */
                    @media (max-width: 767px) and (orientation: landscape) {
                        .header-container {
                            padding: 8px 20px;
                        }
                        .logo {
                            font-size: 14px;
                            padding: 6px;
                        }
                        .mobile-sidebar {
                            padding: 20px 10px;
                            justify-content: flex-start;
                            padding-top: 60px;
                        }
                        .mobile-nav-item {
                            margin: 10px 0;
                        }
                    }
                `}
            </style>

            <header className="header-container">
                <div className="header-content fade-in-down">
                    <button
                        className="logo"
                        onClick={() => scrollToSection('about')}
                        style={{
                            fontSize: isScrolled ? '18px' : '20px',
                            transition: 'var(--transition)'
                        }}
                    >
                        MOHITH
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        className={`mobile-nav-button ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <ol>
                            {navLinks.map((item, index) => (
                                <li
                                    key={item.href}
                                    className="nav-item"
                                    style={{
                                        animationDelay: `${0.1 + index * 0.1}s`
                                    }}
                                >
                                    <button
                                        onClick={() => scrollToSection(item.href)}
                                        className={`nav-link ${
                                            activeSection === item.href ? 'active' : ''
                                        }`}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            width: '100%',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span className="nav-number">{item.number}.</span>
                                        {item.label.split('.')[1].trim()}
                                    </button>
                                </li>
                            ))}
                            <li
                                className="nav-item"
                                style={{
                                    animationDelay: `${0.1 + navLinks.length * 0.1}s`
                                }}
                            >
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-btn"
                                >
                                    Resume
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Mobile Sidebar & Overlay */}
            <div className="overlay" onClick={() => setMenuOpen(false)}></div>
            <div className="mobile-sidebar">
                <nav>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {navLinks.map((item, index) => (
                            <li
                                key={item.href}
                                className="mobile-nav-item"
                                style={{
                                    animationDelay: `${0.1 + index * 0.1}s`
                                }}
                            >
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="mobile-nav-link"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        width: '100%'
                                    }}
                                >
                                    <span className="mobile-nav-number">{item.number}.</span>
                                    {item.label.split('.')[1].trim()}
                                </button>
                            </li>
                        ))}
                        <li
                            className="mobile-nav-item"
                            style={{
                                animationDelay: `${0.1 + navLinks.length * 0.1}s`
                            }}
                        >
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-resume-btn"
                            >
                                Resume
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div
                style={{
                    height: isScrolled ? '70px' : '90px',
                    transition: 'var(--transition)'
                }}
            ></div>
        </>
    );
};

export default Header;