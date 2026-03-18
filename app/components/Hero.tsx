'use client';

import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--navy)', // Dollar green
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Central Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: 1000,
          height: 600,
          background: 'radial-gradient(ellipse, var(--gold-glow) 0%, var(--green-glow) 40%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Accent Orb 1 */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Accent Orb 2 */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 760,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 8,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 28,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', boxShadow: '0 0 10px var(--gold)' }} />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500, textAlign: 'center' }}>
            Introducing Fintan 2.0 — <span style={{ color: 'var(--gold)', whiteSpace: 'nowrap' }}>Smarter & Faster</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 800,
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            lineHeight: 1.1,
            color: 'white',
            letterSpacing: '-0.01em',
            marginBottom: 24,
            wordBreak: 'break-word',
          }}
        >
          Accounting that <br />
          <span style={{
            color: 'var(--gold)'
          }}>
            speaks human.
          </span>
          <br />
          Evidence that satisfies {' '}
          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>auditors.</span>
        </h1>

        {/* Sub-text */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            maxWidth: 620,
            margin: '0 auto 48px',
          }}
        >
          Describe business events in plain English. Our AI handles the Indian compliance,
          GST-ready ledgers, and mandatory proof — keeping you{' '}
          <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
            100% audit-ready
          </strong>
          .
        </p>

        {/* CTA Form */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WaitlistForm dark id="hero-form" />
        </div>

        {/* Social proof */}
        <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
          Trusted by early believers — built for 🇮🇳 solopreneurs &amp; freelancers
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero { padding: 100px 16px 60px !important; }
          #hero h1 { font-size: clamp(32px, 10vw, 42px) !important; margin-bottom: 16px !important; }
        }
      `}</style>
    </section>
  );
}
