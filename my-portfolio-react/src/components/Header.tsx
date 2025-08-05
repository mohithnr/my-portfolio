import React from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('about');
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: '01. About', number: '01' },
        { href: '#education', label: '02. Education', number: '02' },
        { href: '#skills', label: '03. Skills', number: '03' },
        { href: '#projects', label: '04. Projects', number: '04' },
        { href: '#achievements', label: '05. Achievements', number: '05' }
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
                    
                    :root {
                        --navy: #0a192f;
                        --light-navy: #112240;
                        --lightest-navy: #233554;
                        --slate: #8892b0;
                        --light-slate: #a8b2d1;
                        --lightest-slate: #ccd6f6;
                        --white: #e6f1ff;
                        --green: #64ffda;
                        --font-mono: 'JetBrains Mono', monospace;
                        --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
                        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
                        font-size: 13px;
                        font-weight: 400;
                        padding: 10px 15px;
                        border-radius: 4px;
                        transition: var(--transition);
                        position: relative;
                        letter-spacing: 0.1em;
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
                        font-size: 12px;
                    }

                    .logo {
                        color: var(--green);
                        font-family: var(--font-mono);
                        font-size: 20px;
                        font-weight: 600;
                        text-decoration: none;
                        letter-spacing: -0.02em;
                        position: relative;
                        padding: 10px;
                        border: 2px solid var(--green);
                        border-radius: 4px;
                        transition: var(--transition);
                        background: transparent;
                    }

                    .logo:hover {
                        background: rgba(100, 255, 218, 0.1);
                        transform: translateY(-2px);
                        box-shadow: 0 10px 30px -10px rgba(100, 255, 218, 0.3);
                    }

                    @media (max-width: 768px) {
                        .desktop-nav {
                            display: none !important;
                        }
                        .mobile-nav-button {
                            display: flex !important;
                        }
                    }

                    @media (min-width: 769px) {
                        .mobile-nav-button {
                            display: none !important;
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

                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(10, 25, 47, 0.8);
                        backdrop-filter: blur(5px);
                        z-index: 9;
                        opacity: ${menuOpen ? '1' : '0'};
                        visibility: ${menuOpen ? 'visible' : 'hidden'};
                        transition: var(--transition);
                    }

                    .header-container {
                        background: ${isScrolled 
                            ? 'rgba(10, 25, 47, 0.85)' 
                            : 'rgba(10, 25, 47, 0.95)'};
                        backdrop-filter: blur(10px);
                        border-bottom: none;
                        box-shadow: ${isScrolled 
                            ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' 
                            : 'none'};
                    }
                `}
            </style>

            <header
                className="header-container"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: isScrolled ? '15px 50px' : '20px 50px',
                    transition: 'var(--transition)',
                    zIndex: 1000,
                    fontFamily: 'var(--font-sans)'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: '1600px',
                        margin: '0 auto'
                    }}
                    className="fade-in-down"
                >
                    <a
                        href="#"
                        className="logo"
                        style={{
                            fontSize: isScrolled ? '18px' : '20px',
                            transition: 'var(--transition)'
                        }}
                    >
                        MOHITH
                    </a>

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
                        <ol
                            style={{
                                display: 'flex',
                                listStyle: 'none',
                                gap: '35px',
                                margin: 0,
                                padding: 0,
                                alignItems: 'center'
                            }}
                        >
                            {navLinks.map((item, index) => (
                                <li
                                    key={item.href}
                                    className="nav-item"
                                    style={{
                                        animationDelay: `${0.1 + index * 0.1}s`
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveSection(item.href.slice(1))}
                                        className={`nav-link ${
                                            activeSection === item.href.slice(1) ? 'active' : ''
                                        }`}
                                    >
                                        <span className="nav-number">{item.number}.</span>
                                        {item.label.split('.')[1].trim()}
                                    </a>
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
                                    style={{
                                        color: 'var(--green)',
                                        background: 'transparent',
                                        border: '1px solid var(--green)',
                                        borderRadius: '4px',
                                        padding: '12px 16px',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '13px',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)',
                                        marginLeft: '15px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
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
                                <a
                                    href={item.href}
                                    onClick={() => {
                                        setActiveSection(item.href.slice(1));
                                        setMenuOpen(false);
                                    }}
                                    className="mobile-nav-link"
                                >
                                    <span className="mobile-nav-number">{item.number}.</span>
                                    {item.label.split('.')[1].trim()}
                                </a>
                            </li>
                        ))}
                        <li
                            className="mobile-nav-item"
                            style={{
                                animationDelay: `${0.1 + navLinks.length * 0.1}s`,
                                margin: '40px 0 20px'
                            }}
                        >
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--green)',
                                    background: 'transparent',
                                    border: '1px solid var(--green)',
                                    borderRadius: '4px',
                                    padding: '18px 50px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    display: 'inline-block'
                                }}
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