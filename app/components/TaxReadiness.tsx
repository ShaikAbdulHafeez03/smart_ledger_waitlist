'use client';

const FEATURES = [
  {
    icon: '🧮',
    title: 'Live Tax Liability Tracker',
    description: 'Always know your estimated tax owed. Automatically updated as income and expenses change.',
  },
  {
    icon: '💰',
    title: 'Deduction Discovery',
    description: 'AI flags potentially deductible expenses that most SMBs miss — saving real money.',
  },
  {
    icon: '🗓️',
    title: 'Deadline Reminders',
    description: 'Quarterly estimated tax reminders, sent early with all the numbers you need.',
  },
];

export default function TaxReadiness({ layout = 'default' }: { layout?: 'tab' | 'default' }) {
  return (
    <section id="tax-readiness" className="tax-section">
      <div className="tax-container">

        {/* Left: Copy + Feature list */}
        <div className="tax-left">
          {layout !== 'tab' && <p className="section-label" style={{ marginBottom: 12 }}>Compliance & Tax</p>}
          <h2 className="tax-heading">
            Never be surprised <br />
            <span className="tax-gradient-text">by your tax bill.</span>
          </h2>
          <p className="tax-subtext">
            Fintan tracks your tax liability in real time, surfaces deductible expenses
            automatically, and reminds you of quarterly deadlines — so tax season is just
            another Tuesday.
          </p>

          {/* Feature cards */}
          <div className="tax-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="tax-feature-card">
                <div className="tax-feature-icon">{f.icon}</div>
                <div>
                  <p className="tax-feature-title">{f.title}</p>
                  <p className="tax-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup window */}
        <div className="tax-mockup-window">
          {/* Header */}
          <div className="tax-header">
            <span style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>
              Tax Dashboard — 2025
            </span>
          </div>

          <div className="tax-content">
            {/* Owed Block */}
            <div className="tax-block tax-block-red">
              <div className="tax-block-label">Estimated Tax Owed (YTD)</div>
              <div className="tax-block-value tax-value-red">$22,400</div>
              <div className="tax-block-subtext">Based on 24% effective rate</div>
            </div>

            {/* Reserved Block */}
            <div className="tax-block tax-block-green">
              <div className="tax-block-label">Tax Reserve Set Aside</div>
              <div className="tax-block-value tax-value-green">
                $24,000 <span style={{ fontSize: 24 }}>✓</span>
              </div>
              <div className="tax-block-subtext text-green-sub">Fully funded — you're covered</div>
            </div>

            {/* Insight Block */}
            <div className="tax-insight">
              <span style={{ fontSize: 14 }}>🔍</span>
              <span style={{ color: '#1E293B', fontSize: 13.5, lineHeight: 1.5 }}>
                AI found <strong style={{ color: 'var(--emerald)' }}>$4,200 in new deductions</strong> this quarter — home office, equipment, and subscriptions.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .tax-section {
          background: ${layout === 'tab' ? 'transparent' : 'var(--off-white)'};
          padding: ${layout === 'tab' ? '40px 0' : '100px 24px'};
        }

        /* ── Two-column wrapper ── */
        .tax-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* ── Left column ── */
        .tax-left {
          flex: 1 1 300px;
          min-width: 0;
        }

        .tax-heading {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .tax-gradient-text {
          display: block;
          color: var(--navy);
        }

        .tax-subtext {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ── Feature cards ── */
        .tax-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tax-feature-card {
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
        .tax-features > :nth-child(1) { animation-delay: 0.1s; }
        .tax-features > :nth-child(2) { animation-delay: 0.2s; }
        .tax-features > :nth-child(3) { animation-delay: 0.3s; }
        .tax-feature-card:hover {
          box-shadow: 0 8px 28px rgba(13,27,42,0.12);
          transform: translateY(-2px);
        }

        .tax-feature-icon {
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

        .tax-feature-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .tax-feature-desc {
          font-size: 13.5px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* ── Mockup window ── */
        .tax-mockup-window {
          flex: 1 1 340px;
          min-width: 0;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(13,27,42,0.12);
          border: 1px solid rgba(13,27,42,0.07);
          animation: floatWindow 6s infinite ease-in-out;
          will-change: transform;
          padding: 32px;
        }

        .tax-header {
          margin-bottom: 24px;
        }

        .tax-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tax-block {
          padding: 20px;
          border-radius: 12px;
          border: 1px solid;
        }

        .tax-block-red {
          background-color: #FEF2F2;
          border-color: #FECACA;
        }

        .tax-block-green {
          background-color: #F0FDF4;
          border-color: #BBF7D0;
        }

        .tax-block-label {
          font-size: 13px;
          color: #64748B;
          margin-bottom: 8px;
        }

        .tax-block-value {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tax-value-red {
          color: #EF4444;
        }

        .tax-value-green {
          color: #10B981;
        }

        .tax-block-subtext {
          font-size: 13px;
          color: #64748B;
        }

        .text-green-sub {
          color: #059669;
        }

        .tax-insight {
          margin-top: 8px;
          background: #F8FAFC;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .tax-reserve-block {
          background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02));
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 12px;
          padding: 16px;
          margin-top: 20px;
          animation: glowPulse 3s infinite ease-in-out;
        }

        /* ── Animations ── */
        @keyframes taxFadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(16,185,129,0); }
          50% { box-shadow: 0 0 16px rgba(16,185,129,0.2); }
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
          .tax-section {
            padding: 64px 16px;
          }

          .tax-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .tax-left {
            width: 100%;
            text-align: center;
          }

          .tax-subtext {
            max-width: 100%;
          }

          .tax-features {
            align-items: center;
          }

          .tax-feature-card {
            width: 100%;
            max-width: 420px;
            text-align: left;
          }

          .tax-mockup-window {
            width: 100%;
            max-width: 420px;
            padding: 24px;
          }
        }

        /* ── Tablet (641px – 900px) ── */
        @media (min-width: 641px) and (max-width: 900px) {
          .tax-section {
            padding: 80px 20px;
          }

          .tax-container {
            gap: 40px;
            justify-content: center;
          }

          .tax-left,
          .tax-mockup-window {
            flex: 1 1 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .tax-left {
            text-align: center;
          }

          .tax-subtext {
            max-width: 100%;
          }

          .tax-features {
            align-items: center;
          }

          .tax-feature-card {
            max-width: 480px;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
