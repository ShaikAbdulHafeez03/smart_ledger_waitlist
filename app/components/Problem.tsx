'use client';

const traditional = [
  { icon: '📊', label: 'Complex manual data entry for every transaction' },
  { icon: '🔍', label: 'No built-in proof or invoice attachment' },
  { icon: '⚠️', label: 'Audit panic — chasing documents at the last minute' },
  { icon: '🐌', label: 'Accountant dependency for every small update' },
];

const aiCore = [
  { icon: '💬', label: 'Chat-driven — describe events in plain English' },
  { icon: '📎', label: 'Mandatory proof engine with every posted entry' },
  { icon: '🔒', label: 'Always audit-ready with immutable, timestamped records' },
  { icon: '⚡', label: 'Maker-checker workflows — built for founder + accountant' },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--off-white)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>The Problem</p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: 'var(--navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Old tools weren&apos;t built for{' '}
            <span className="gradient-text">solo founders</span>
          </h2>
          <p style={{ color: 'var(--slate)', marginTop: 14, fontSize: 17 }}>
            Here&apos;s how the same accounting challenge looks, before and after.
          </p>
        </div>

        {/* Comparison grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {/* Traditional */}
          <div
            style={{
              background: 'white',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: 20,
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(239,68,68,0.08)',
                borderRadius: 8,
                padding: '6px 14px',
                marginBottom: 28,
              }}
            >
              <span style={{ color: '#EF4444', fontWeight: 700, fontSize: 13 }}>
                ✗ Traditional Tools
              </span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {traditional.map((item) => (
                <li
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{item.icon}</span>
                  <span style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.5 }}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Core */}
          <div
            style={{
              background: 'var(--navy)',
              borderRadius: 20,
              padding: '36px 32px',
              boxShadow: '0 4px 40px rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(16,185,129,0.15)',
                borderRadius: 8,
                padding: '6px 14px',
                marginBottom: 28,
              }}
            >
              <span style={{ color: 'var(--emerald)', fontWeight: 700, fontSize: 13 }}>
                ✓ AI Core
              </span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {aiCore.map((item) => (
                <li
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.5 }}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
