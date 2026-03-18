'use client';

const FEATURES = [
  {
    icon: '📈',
    title: 'P&L, Cashflow & Balance Sheet',
    description: 'All three core financial statements generated automatically from your live data.',
  },
  {
    icon: '📥',
    title: 'One-Click Export',
    description: 'Export to PDF, Excel, or QBO format. Share with your CPA without leaving the app.',
  },
  {
    icon: '🔮',
    title: 'Cash Flow Forecasting',
    description: 'AI projects your next 90-day cash position based on historical patterns and open invoices.',
  },
];

export default function Reporting({ layout = 'default' }: { layout?: 'tab' | 'default' }) {
  return (
    <section id="reporting" className="reporting-section">
      <div className="reporting-container">

        {/* Left: Copy + Feature list */}
        <div className="reporting-left">
          {layout !== 'tab' && <p className="section-label" style={{ marginBottom: 12 }}>Financial Insights</p>}
          <h2 className="reporting-heading">
            Reports that <br />
            <span className="reporting-gradient-text">tell a story.</span>
          </h2>
          <p className="reporting-subtext">
            Investor-ready P&L, cash flow statements, and balance sheets generated in
            seconds. Export to PDF, Excel, or share a live link directly with your accountant or
            board.
          </p>

          {/* Feature cards */}
          <div className="reporting-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="reporting-feature-card">
                <div className="reporting-feature-icon">{f.icon}</div>
                <div>
                  <p className="reporting-feature-title">{f.title}</p>
                  <p className="reporting-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup window */}
        <div className="reporting-mockup-window">
          {/* Header */}
          <div className="reporting-header">
            <span style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>
              P&L Summary — Q2 2025
            </span>
          </div>

          <div className="reporting-table">
            {/* Total Revenue */}
            <div className="reporting-row" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: 16, marginBottom: 8 }}>
              <span style={{ fontWeight: 600, color: '#1E293B', fontSize: 14 }}>Total Revenue</span>
              <span style={{ fontWeight: 700, color: '#10B981', fontSize: 14 }}>$282,600</span>
            </div>

            {/* Cost of Goods */}
            <div className="reporting-row">
              <span style={{ color: '#64748B', fontSize: 13.5 }}>Cost of Goods</span>
              <span style={{ color: '#64748B', fontSize: 13.5 }}>($84,400)</span>
            </div>

            {/* Gross Profit */}
            <div className="reporting-row" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: 16, marginBottom: 8 }}>
              <span style={{ fontWeight: 600, color: '#1E293B', fontSize: 14 }}>Gross Profit</span>
              <span style={{ fontWeight: 600, color: '#10B981', fontSize: 14 }}>$198,200</span>
            </div>

            {/* Operating Expenses */}
            <div className="reporting-row">
              <span style={{ color: '#64748B', fontSize: 13.5 }}>Operating Expenses</span>
              <span style={{ color: '#64748B', fontSize: 13.5 }}>($112,000)</span>
            </div>

            {/* Net Income */}
            <div className="reporting-row" style={{ paddingTop: 16, borderTop: '2px solid #E2E8F0', marginTop: 12 }}>
              <span style={{ fontWeight: 800, color: '#0F172A', fontSize: 16 }}>Net Income</span>
              <span style={{ fontWeight: 800, color: 'var(--emerald)', fontSize: 16 }}>$86,200</span>
            </div>
          </div>

          {/* Footer insight */}
          <div className="reporting-insight">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span style={{ color: '#64748B', fontSize: 13 }}>
              Net margin: <strong style={{ color: '#6366F1', fontWeight: 600 }}>30.5%</strong> — up from 26.1% in Q1
            </span>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .reporting-section {
          background: ${layout === 'tab' ? 'transparent' : 'var(--off-white)'};
          padding: ${layout === 'tab' ? '40px 0' : '100px 24px'};
        }

        /* ── Two-column wrapper ── */
        .reporting-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* ── Left column ── */
        .reporting-left {
          flex: 1 1 300px;
          min-width: 0;
        }

        .reporting-heading {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .reporting-gradient-text {
          display: block;
          color: var(--navy);
        }

        .reporting-subtext {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ── Feature cards ── */
        .reporting-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .reporting-feature-card {
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
        .reporting-features > :nth-child(1) { animation-delay: 0.1s; }
        .reporting-features > :nth-child(2) { animation-delay: 0.2s; }
        .reporting-features > :nth-child(3) { animation-delay: 0.3s; }
        .reporting-feature-card:hover {
          box-shadow: 0 8px 28px rgba(13,27,42,0.12);
          transform: translateY(-2px);
        }

        .reporting-feature-icon {
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

        .reporting-feature-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .reporting-feature-desc {
          font-size: 13.5px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* ── Mockup window ── */
        .reporting-mockup-window {
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

        .reporting-header {
          margin-bottom: 24px;
        }

        .reporting-table {
          display: flex;
          flex-direction: column;
        }

        .reporting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          margin: 0 -12px;
          border-radius: 8px;
          transition: background-color 0.2s ease, transform 0.2s;
          cursor: pointer;
        }
        .reporting-row:hover {
          background-color: #F8FAFC;
          transform: translateX(2px);
        }

        .reporting-insight {
          margin-top: 32px;
          background: #F8FAFC;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(13,27,42,0.04);
        }

        /* ── Animations ── */
        @keyframes reportingFadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
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
          .reporting-section {
            padding: 64px 16px;
          }

          .reporting-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .reporting-left {
            width: 100%;
            text-align: center;
          }

          .reporting-subtext {
            max-width: 100%;
          }

          .reporting-features {
            align-items: center;
          }

          .reporting-feature-card {
            width: 100%;
            max-width: 420px;
            text-align: left;
          }

          .reporting-mockup-window {
            width: 100%;
            max-width: 420px;
            padding: 24px;
          }
        }

        /* ── Tablet (641px – 900px) ── */
        @media (min-width: 641px) and (max-width: 900px) {
          .reporting-section {
            padding: 80px 20px;
          }

          .reporting-container {
            gap: 40px;
            justify-content: center;
          }

          .reporting-left,
          .reporting-mockup-window {
            flex: 1 1 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .reporting-left {
            text-align: center;
          }

          .reporting-subtext {
            max-width: 100%;
          }

          .reporting-features {
            align-items: center;
          }

          .reporting-feature-card {
            max-width: 480px;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
