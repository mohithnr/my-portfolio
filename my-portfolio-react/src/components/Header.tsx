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
        { href: '#about', label: 'About Me' },
        { href: '#education', label: 'Education' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Achievements' }
    ];

    return (
        <>
            <style>
                {`
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .slide-down {
                        animation: slideDown 0.6s ease-out forwards;
                    }

                    @media (max-width: 768px) {
                        .desktop-nav {
                            display: none !important;
                        }
                        .mobile-nav {
                            display: block !important;
                        }
                    }

                    @media (min-width: 769px) {
                        .mobile-nav {
                            display: none !important;
                        }
                    }
                `}
            </style>

            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    background: isScrolled
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: isScrolled
                        ? '1px solid rgba(59, 130, 246, 0.2)'
                        : '1px solid rgba(226, 232, 240, 0.3)',
                    boxShadow: isScrolled
                        ? '0 8px 32px rgba(0, 0, 0, 0.12)'
                        : '0 4px 16px rgba(0, 0, 0, 0.06)',
                    padding: isScrolled ? '0.8rem 1.5rem' : '1rem 1.5rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1000
                }}
                className="slide-down"
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    <h1
                        style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: isScrolled ? '1.8rem' : '2.1rem',
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                            margin: 0,
                            cursor: 'pointer',
                            transition: 'font-size 0.4s ease'
                        }}
                    >
                        Mohith's Portfolio
                    </h1>

                    {/* Hamburger for Mobile */}
                    <div className="mobile-nav">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.8rem',
                                color: '#1e40af'
                            }}
                            aria-label="Toggle navigation"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <ul
                            style={{
                                display: 'flex',
                                listStyle: 'none',
                                gap: '1.5rem',
                                margin: 0,
                                padding: 0,
                                alignItems: 'center'
                            }}
                        >
                            {navLinks.map((item, index) => (
                                <li
                                    key={item.href}
                                    style={{
                                        opacity: 0,
                                        animation: `slideDown 0.6s ease-out ${0.2 + index * 0.1}s forwards`
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveSection(item.href.slice(1))}
                                        style={{
                                            color: activeSection === item.href.slice(1)
                                                ? '#2563eb'
                                                : '#475569',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '8px',
                                            background:
                                                activeSection === item.href.slice(1)
                                                    ? 'rgba(59, 130, 246, 0.1)'
                                                    : 'transparent',
                                            border:
                                                activeSection === item.href.slice(1)
                                                    ? '1px solid rgba(59, 130, 246, 0.2)'
                                                    : '1px solid transparent',
                                            transition: 'all 0.3s ease',
                                            display: 'block'
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile Nav Dropdown */}
                {menuOpen && (
                    <div
                        style={{
                            marginTop: '1rem',
                            background: 'white',
                            borderRadius: '0.5rem',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                        className="mobile-nav"
                    >
                        {navLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    setActiveSection(item.href.slice(1));
                                    setMenuOpen(false);
                                }}
                                style={{
                                    color: activeSection === item.href.slice(1)
                                        ? '#2563eb'
                                        : '#334155',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    background:
                                        activeSection === item.href.slice(1)
                                            ? 'rgba(59, 130, 246, 0.08)'
                                            : 'transparent',
                                    border:
                                        activeSection === item.href.slice(1)
                                            ? '1px solid rgba(59, 130, 246, 0.2)'
                                            : '1px solid transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <div
                style={{
                    height: isScrolled ? '80px' : '100px',
                    transition: 'height 0.4s ease'
                }}
            ></div>
        </>
    );
};

export default Header;
