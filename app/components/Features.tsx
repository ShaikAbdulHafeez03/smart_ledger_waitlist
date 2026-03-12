'use client';

const features = [
  {
    id: 'chat',
    icon: '💬',
    title: 'Chat-Driven Events',
    description:
      'Just say "Spent ₹5,000 on office tea" — AI maps it to the right ledger account, no journal entry knowledge required.',
    size: 'large',
    accent: 'var(--emerald)',
  },
  {
    id: 'proof',
    icon: '📎',
    title: 'Mandatory Proof Engine',
    description:
      'No entry gets posted without an attached invoice or receipt. Every rupee is evidenced.',
    size: 'small',
    accent: '#3B82F6',
  },
  {
    id: 'maker',
    icon: '✅',
    title: 'Maker-Checker Governance',
    description:
      'Built-in approval workflows for founders and their accountants. No surprises.',
    size: 'small',
    accent: '#8B5CF6',
  },
  {
    id: 'immutable',
    icon: '🔒',
    title: 'Immutable Ledger',
    description:
      'Append-only record system. Every change is timestamped and traceable — creating trust for future audits and investors.',
    size: 'large',
    accent: '#F59E0B',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: 'var(--navy)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Core Functionality</p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Everything you need to stay{' '}
            <span className="gradient-text">audit-ready</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.id}
              className="glass-card"
              style={{
                borderRadius: 20,
                padding: '36px 32px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
                // Large cards span 2 cols on wide screens
                gridColumn: f.size === 'large' ? 'span 1' : 'span 1',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 16px 48px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${f.accent}18`,
                  border: `1px solid ${f.accent}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  marginBottom: 24,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 12,
                  letterSpacing: '-0.01em',
                }}
              >
                {f.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: 15 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
