'use client';

const FEATURES = [
  {
    icon: '⚡',
    title: 'One-Click Reconcile',
    description: 'Most months reconcile automatically. You only see the exceptions that truly need review.',
  },
  {
    icon: '🔍',
    title: 'Smart Matching Engine',
    description: 'Fuzzy-matches transactions by amount, date, and vendor even when names differ slightly.',
  },
  {
    icon: '📌',
    title: 'Discrepancy Flagging',
    description: 'Unmatched items surface in a clear queue — no hunting through spreadsheets.',
  },
];

const STATUS_ITEMS = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    label: 'Chase Business Checking',
    status: 'Matched',
    color: '#10B981', // Emerald
    bgColor: '#ECFDF5',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    label: 'Stripe Payouts',
    status: 'Matched',
    color: '#10B981',
    bgColor: '#ECFDF5',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    label: 'PayPal Business',
    status: '2 unmatched',
    color: '#F59E0B', // Amber
    bgColor: '#FFFBEB',
  },
  {
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="12"></circle>
      </svg>
    ),
    label: 'Vendor Invoice #1042',
    status: 'Needs review',
    color: '#EF4444', // Red
    bgColor: '#FEF2F2',
  },
];

export default function Reconciliation({ layout = 'default' }: { layout?: 'tab' | 'default' }) {
  return (
    <section id="reconciliation" className="recon-section">
      <div className="recon-container">

        {/* Left: Copy + Feature list */}
        <div className="recon-left">
          {layout !== 'tab' && <p className="section-label" style={{ marginBottom: 12 }}>Automated Workflows</p>}
          <h2 className="recon-heading">
            Reconciliation{' '}
            <span className="recon-gradient-text">on autopilot.</span>
          </h2>
          <p className="recon-subtext">
            Stop spending weekends matching transactions. Fintan auto-reconciles your bank feeds
            against your books and flags only the items that need your attention.
          </p>

          {/* Feature cards */}
          <div className="recon-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="recon-feature-card">
                <div className="recon-feature-icon">{f.icon}</div>
                <div>
                  <p className="recon-feature-title">{f.title}</p>
                  <p className="recon-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup window */}
        <div className="recon-mockup-window">
          {/* Header */}
          <div className="recon-header">
            <span style={{ fontSize: 14, fontWeight: 600, color: '#475569' }}>
              Reconciliation Status
            </span>
            <div className="recon-badge">
              Auto-running
            </div>
          </div>

          {/* List of items */}
          <div className="recon-items">
            {STATUS_ITEMS.map((item, i) => (
              <div 
                key={i} 
                className="recon-list-item"
                style={{
                  backgroundColor: item.bgColor,
                  borderColor: `${item.color}40` // 25% opacity for border
                }}
              >
                <div className="recon-item-left">
                  <span style={{ color: item.color, display: 'flex' }}>
                    {item.icon}
                  </span>
                  <span className="recon-item-label">{item.label}</span>
                </div>
                <div className="recon-item-status" style={{ color: item.color }}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .recon-section {
          background: ${layout === 'tab' ? 'transparent' : 'var(--off-white)'};
          padding: ${layout === 'tab' ? '40px 0' : '100px 24px'};
        }

        /* ── Two-column wrapper ── */
        .recon-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* ── Left column ── */
        .recon-left {
          flex: 1 1 300px;
          min-width: 0;
        }

        .recon-heading {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .recon-gradient-text {
          display: block;
          color: var(--navy);
        }

        .recon-subtext {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ── Feature cards ── */
        .recon-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .recon-feature-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: white;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 2px 12px rgba(13,27,42,0.06);
          border: 1px solid rgba(13,27,42,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
          cursor: default;
          opacity: 0;
          transform: translateY(20px);
          animation: cardFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .recon-features > :nth-child(1) { animation-delay: 0.1s; }
        .recon-features > :nth-child(2) { animation-delay: 0.2s; }
        .recon-features > :nth-child(3) { animation-delay: 0.3s; }
        .recon-feature-card:hover {
          box-shadow: 0 8px 28px rgba(13,27,42,0.12);
          transform: translateY(-2px);
        }

        .recon-feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .recon-feature-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .recon-feature-desc {
          font-size: 13.5px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* ── Mockup window ── */
        .recon-mockup-window {
          flex: 1 1 340px;
          min-width: 0;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(13,27,42,0.12);
          border: 1px solid rgba(13,27,42,0.07);
          animation: floatWindow 6s infinite ease-in-out;
          will-change: transform;
        }

        .recon-header {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
        }

        .recon-badge {
          background-color: #CCFBF1;
          color: #0F766E;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 100px;
          animation: badgePulse 2s infinite;
        }

        .recon-items {
          padding: 0 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recon-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid;
          opacity: 0;
          transform: translateX(20px);
          animation: itemSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .recon-items > :nth-child(1) { animation-delay: 0.1s; }
        .recon-items > :nth-child(2) { animation-delay: 0.2s; }
        .recon-items > :nth-child(3) { animation-delay: 0.3s; }
        .recon-items > :nth-child(4) { animation-delay: 0.4s; }

        .recon-item-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .recon-item-label {
          font-size: 14px;
          color: #1E293B;
          font-weight: 500;
        }

        .recon-item-status {
          font-size: 13px;
          font-weight: 600;
        }

        /* ── Animations ── */
        @keyframes reconFadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes itemSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4); }
          50%      { box-shadow: 0 0 0 4px rgba(20, 184, 166, 0); }
        }
        @keyframes floatWindow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Mobile (≤ 640px) ── */
        @media (max-width: 640px) {
          .recon-section {
            padding: 64px 16px;
          }

          .recon-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .recon-left {
            width: 100%;
            text-align: center;
          }

          .recon-subtext {
            max-width: 100%;
          }

          .recon-features {
            align-items: center;
          }

          .recon-feature-card {
            width: 100%;
            max-width: 420px;
            text-align: left;
          }

          .recon-mockup-window {
            width: 100%;
            max-width: 420px;
          }
        }

        /* ── Tablet (641px – 900px) ── */
        @media (min-width: 641px) and (max-width: 900px) {
          .recon-section {
            padding: 80px 20px;
          }

          .recon-container {
            gap: 40px;
            justify-content: center;
          }

          .recon-left,
          .recon-mockup-window {
            flex: 1 1 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .recon-left {
            text-align: center;
          }

          .recon-subtext {
            max-width: 100%;
          }

          .recon-features {
            align-items: center;
          }

          .recon-feature-card {
            max-width: 480px;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
