'use client';

const milestones = [
  {
    phase: 'Phase 1',
    title: 'MVP Launch',
    description:
      'Chat-driven journal entries, mandatory proof uploads, and a clean dashboard for tracking expenses.',
    status: 'current',
    quarter: 'Q3 2026',
    icon: '🚀',
  },
  {
    phase: 'Phase 2',
    title: 'GST Integration',
    description:
      'Automatic GST categorisation, input tax credit tracking, and GSTR-2A reconciliation — built right in.',
    status: 'upcoming',
    quarter: 'To Be Announced',
    icon: '🧾',
  },
  {
    phase: 'Phase 3',
    title: 'Automated Filing',
    description:
      'One-click GSTR-1 and GSTR-3B filing. AI-verified returns with audit trail. Your CA will love you.',
    status: 'upcoming',
    quarter: 'To Be Announced',
    icon: '⚡',
  },
];

export default function Timeline() {
  return (
    <section
      id="roadmap"
      style={{
        background: 'var(--off-white)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 740, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>The Journey</p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: 'var(--navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Where we&apos;re going,{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p style={{ color: 'var(--slate)', marginTop: 14, fontSize: 16 }}>
            A transparent roadmap for early supporters.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 27,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--emerald), rgba(16,185,129,0.1))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {milestones.map((m, i) => (
              <div key={m.phase} style={{ display: 'flex', gap: 28, position: 'relative' }}>
                {/* Node */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    background: m.status === 'current' ? 'var(--navy)' : 'white',
                    border:
                      m.status === 'current'
                        ? '3px solid var(--emerald)'
                        : '2px solid #E2E8F0',
                    boxShadow:
                      m.status === 'current'
                        ? '0 0 0 6px rgba(16,185,129,0.15)'
                        : 'none',
                    zIndex: 1,
                    transition: 'transform 0.2s',
                  }}
                >
                  {m.icon}
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    paddingTop: 10,
                    paddingBottom: i < milestones.length - 1 ? 0 : 0,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 8,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: m.status === 'current' ? 'var(--emerald)' : 'var(--slate)',
                      }}
                    >
                      {m.phase}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        background: m.status === 'current' ? 'rgba(16,185,129,0.1)' : '#F1F5F9',
                        color: m.status === 'current' ? 'var(--emerald)' : 'var(--slate)',
                        padding: '3px 10px',
                        borderRadius: 100,
                        fontWeight: 600,
                      }}
                    >
                      {m.quarter}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.7 }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
