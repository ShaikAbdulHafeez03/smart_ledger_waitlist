'use client';

import WaitlistForm from './WaitlistForm';

export default function WaitlistFooter() {
  return (
    <section
      id="waitlist"
      style={{
        background: 'linear-gradient(135deg, #0a1628, var(--navy), #0d2a1c)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Discount badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(16,185,129,0.15)',
            border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 16 }}>🎁</span>
          <span style={{ color: 'var(--emerald)', fontWeight: 700, fontSize: 14 }}>
            First 100 users get 50% lifetime discount
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Be first in line for the{' '}
          <span className="gradient-text">future of accounting</span>
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Join solopreneurs and freelancers across India who are tired of
          spreadsheet chaos and audit surprises. Your AI accountant is coming.
        </p>

        {/* Form — centred */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WaitlistForm dark id="footer-form" />
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 40,
            marginTop: 48,
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '100', label: 'Early spots' },
            { value: '50%', label: 'Lifetime off' },
            { value: '0', label: 'Spam, ever' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 13,
          }}
        >
          © 2026 AI Core · Built with ❤️ for 🇮🇳 solopreneurs
        </div>
      </div>
    </section>
  );
}
