'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(13, 27, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #10B981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 800,
              color: 'white',
            }}
          >
            ₹
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            AI<span style={{ color: 'var(--emerald)' }}>Core</span>
          </span>
        </div>

        {/* CTA */}
        <button
          className="btn-primary"
          onClick={handleJoinClick}
          id="navbar-cta"
          style={{ padding: '10px 22px', fontSize: 14 }}
        >
          Join Waitlist →
        </button>
      </div>
    </nav>
  );
}
