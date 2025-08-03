import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <style>
                {`
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

                    .slide-up {
                        animation: slideUp 0.6s ease-out forwards;
                    }

                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>

            <footer
                className="slide-up"
                style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    borderTop: '1px solid rgba(226, 232, 240, 0.3)',
                    boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.05)',
                    padding: '2rem',
                    marginTop: '4rem',
                    textAlign: 'center',
                    fontSize: '1rem',
                    color: '#475569',
                    lineHeight: '1.8'
                }}
            >
                <p
                    style={{
                        margin: '0 0 1rem',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '600',
                        letterSpacing: '0.03em'
                    }}
                >
                    © 2023 Mohith's Portfolio. All rights reserved.
                </p>

                {/* <p style={{ margin: 0 }}> */}
                    {/* 📧 Email: <a href="mailto:mohith.1si22is053@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>mohith.1si22is053@gmail.com</a> */}
                {/* </p> */}
                {/* <p style={{ margin: 0 }}> */}
                    {/* 📞 Phone: <a href="tel:+916361113046" style={{ color: '#2563eb', textDecoration: 'none' }}>+91 6361113046</a> */}
                {/* </p> */}
                {/* <p style={{ margin: 0 }}> */}
                    {/* 🔗 LinkedIn: <a */}
                        {/* // href="https://www.linkedin.com/in/mohith-n-r-085a94263/" */}
                        {/* // target="_blank" */}
                        {/* // rel="noopener noreferrer" */}
                        {/* // style={{ color: '#2563eb', textDecoration: 'none' }} */}
                    {/* // > */}
                        {/* linkedin.com/in/mohith-n-r */}
                    {/* </a> */}
                {/* </p> */}
            </footer>
        </>
    );
};

export default Footer;
