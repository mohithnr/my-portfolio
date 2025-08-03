import React from 'react';

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            style={{
                background: '#f8fafc',
                padding: '3rem 1rem',
                borderRadius: '16px',
                maxWidth: '800px',
                margin: '2rem auto',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                textAlign: 'center'
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: '#1e40af'
                }}
            >
                📬 Contact Information
            </h2>

            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                📧 <strong>Email:</strong> mohith.1si22is053@gmail.com
            </p>

            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                📞 <strong>Phone:</strong> +91-6361113046
            </p>

            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                💼 <strong>LinkedIn:</strong>{' '}
                <a
                    href="https://www.linkedin.com/in/mohith-n-r-085a94263/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}
                >
                    linkedin.com/in/mohith
                </a>
            </p>

            <p style={{ fontSize: '1.1rem' }}>
                💬 <strong>WhatsApp:</strong>{' '}
                <a
                    href="https://wa.me/916361113046"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}
                >
                    Chat on WhatsApp
                </a>
            </p>
        </section>
    );
};

export default Contact;
