'use client';

import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: 'var(--navy)',
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
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
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
            gap: 8,
            background: 'rgba(16,185,129,0.12)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 28,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block' }} />
          <span style={{ fontSize: 13, color: 'var(--emerald)', fontWeight: 600 }}>
            Early Access · First 100 users get 50% lifetime off
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: 'white',
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}
        >
          Accounting that{' '}
          <span className="gradient-text">speaks human.</span>
          <br />
          Evidence that satisfies{' '}
          <span style={{ color: 'var(--slate-light)' }}>auditors.</span>
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
    </section>
  );
}
