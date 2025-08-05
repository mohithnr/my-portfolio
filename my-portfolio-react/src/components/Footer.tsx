import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <style>
                {`
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

                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .footer-container {
                        animation: slideUp 0.6s ease-out forwards;
                        background: rgba(10, 25, 47, 0.95);
                        backdrop-filter: blur(16px);
                        border-top: 1px solid rgba(226, 232, 240, 0.1);
                        box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.05);
                        padding: 2rem;
                        margin-top: 4rem;
                        text-align: center;
                        font-family: var(--font-mono);
                        font-size: 0.9rem;
                        color: var(--slate);
                        line-height: 1.8;
                    }

                    .footer-highlight {
                        background: linear-gradient(135deg, #64ffda 0%, #1de9b6 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-weight: 600;
                        letter-spacing: 0.03em;
                        font-size: 1rem;
                        margin-bottom: 1rem;
                        display: inline-block;
                    }

                    .footer-link {
                        color: var(--green);
                        text-decoration: none;
                        transition: var(--transition);
                    }

                    .footer-link:hover {
                        text-decoration: underline;
                        color: var(--lightest-slate);
                    }
                `}
            </style>

             <footer className="footer-container">
                <p className="footer-highlight">© 2023 Mohith's Portfolio. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Footer;
