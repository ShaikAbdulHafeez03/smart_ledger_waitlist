'use client';

const FEATURES = [
  {
    icon: '⚖️',
    title: 'Double-Entry Bookkeeping',
    description: 'GAAP-structured chart of accounts. Every transaction is properly classified automatically.',
  },
  {
    icon: '🔗',
    title: 'Auto-Import & Categorize',
    description: 'Connect banks, Stripe, PayPal and more. AI categorizes transactions with 94%+ accuracy.',
  },
  {
    icon: '👁️',
    title: 'Full Audit Trail',
    description: 'Every change is logged with timestamp and user. Your books are always verifiable.',
  },
];

const LEDGER_ROWS = [
  { desc: 'Client Payment — Acme Corp', debit: '$12,400', credit: '-', debitColor: '#10B981', creditColor: '#94A3B8' },
  { desc: 'AWS — June Invoice', debit: '-', credit: '$3,280', debitColor: '#94A3B8', creditColor: '#EF4444' },
  { desc: 'Stripe Payout', debit: '$8,900', credit: '-', debitColor: '#10B981', creditColor: '#94A3B8' },
  { desc: 'Payroll — June', debit: '-', credit: '$14,000', debitColor: '#94A3B8', creditColor: '#EF4444' },
];

export default function LedgerAndBooks({ layout = 'default' }: { layout?: 'tab' | 'default' }) {
  return (
    <section id="ledger-and-books" className="ledger-section">
      <div className="ledger-container">

        {/* Left: Copy + Feature list */}
        <div className="ledger-left">
          {layout !== 'tab' && <p className="section-label" style={{ marginBottom: 12 }}>Core Accounting</p>}
          <h2 className="ledger-heading">
            Books that balance.{' '}
            <span className="ledger-gradient-text">Automatically.</span>
          </h2>
          <p className="ledger-subtext">
            A true double-entry ledger built for SMBs. Every debit has a credit. Every entry is
            traceable. Fintan handles the accounting mechanics so you can focus on running
            your business.
          </p>

          {/* Feature cards */}
          <div className="ledger-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="ledger-feature-card">
                <div className="ledger-feature-icon">{f.icon}</div>
                <div>
                  <p className="ledger-feature-title">{f.title}</p>
                  <p className="ledger-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Ledger Mockup */}
        <div className="ledger-mockup-window">
          {/* Header */}
          <div className="ledger-header">
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>
              General Ledger — June 2025
            </span>
          </div>

          {/* Table */}
          <div className="ledger-table-container">
            <div className="ledger-table-header">
              <div className="col-desc">DESCRIPTION</div>
              <div className="col-amt">DEBIT</div>
              <div className="col-amt">CREDIT</div>
            </div>

            {LEDGER_ROWS.map((row, i) => (
              <div key={i} className="ledger-table-row">
                <div className="col-desc row-desc">{row.desc}</div>
                <div className="col-amt" style={{ color: row.debitColor, fontWeight: row.debit !== '-' ? 600 : 400 }}>{row.debit}</div>
                <div className="col-amt" style={{ color: row.creditColor, fontWeight: row.credit !== '-' ? 600 : 400 }}>{row.credit}</div>
              </div>
            ))}

            {/* Footer / Net Balance */}
            <div className="ledger-table-footer">
              <div className="col-desc" style={{ fontWeight: 700, color: 'var(--navy)' }}>Net Balance</div>
              <div className="col-amt" style={{ color: 'var(--emerald)', fontWeight: 700 }}>$21,300</div>
              <div className="col-amt" style={{ color: 'var(--emerald)', fontWeight: 700 }}>$17,280</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .ledger-section {
          background: ${layout === 'tab' ? 'transparent' : 'var(--off-white)'};
          padding: ${layout === 'tab' ? '40px 0' : '100px 24px'};
        }

        /* ── Two-column wrapper ── */
        .ledger-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* ── Left column ── */
        .ledger-left {
          flex: 1 1 300px;
          min-width: 0;
        }

        .ledger-heading {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .ledger-gradient-text {
          display: block;
          color: var(--navy);
        }

        .ledger-subtext {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ── Feature cards ── */
        .ledger-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ledger-feature-card {
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
        .ledger-features > :nth-child(1) { animation-delay: 0.1s; }
        .ledger-features > :nth-child(2) { animation-delay: 0.2s; }
        .ledger-features > :nth-child(3) { animation-delay: 0.3s; }
        .ledger-feature-card:hover {
          box-shadow: 0 8px 28px rgba(13,27,42,0.12);
          transform: translateY(-2px);
        }

        .ledger-feature-icon {
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

        .ledger-feature-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .ledger-feature-desc {
          font-size: 13.5px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* ── Ledger Mockup window ── */
        .ledger-mockup-window {
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

        .ledger-header {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
        }

        .ledger-table-container {
          padding: 0 24px 24px;
          background: white;
        }

        .ledger-table-header {
          display: flex;
          padding-bottom: 12px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 12px;
          font-size: 11px;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 0.05em;
        }

        .ledger-table-row {
          display: flex;
          padding: 12px 12px;
          border-bottom: 1px dashed #E2E8F0;
          font-size: 13.5px;
          transition: background-color 0.2s ease, transform 0.2s;
          border-radius: 8px;
          margin: 0 -12px;
          cursor: pointer;
        }
        .ledger-table-row:hover {
          background-color: #F8FAFC;
          transform: translateX(2px);
        }

        .ledger-table-footer {
          display: flex;
          padding-top: 16px;
          margin-top: 4px;
          font-size: 14px;
        }

        .col-desc {
          flex: 1;
          padding-right: 16px;
        }

        .row-desc {
          color: #475569;
        }

        .col-amt {
          width: 80px;
          text-align: right;
          flex-shrink: 0;
        }

        /* ── Animations ── */
        @keyframes ledgerFadeUp {
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
          .ledger-section {
            padding: 64px 16px;
          }

          .ledger-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .ledger-left {
            width: 100%;
            text-align: center;
          }

          .ledger-subtext {
            max-width: 100%;
          }

          .ledger-features {
            align-items: center;
          }

          .ledger-feature-card {
            width: 100%;
            max-width: 420px;
            text-align: left;
          }

          .ledger-mockup-window {
            width: 100%;
            max-width: 420px;
          }
          
          .col-amt {
            width: 60px;
          }
        }

        /* ── Tablet (641px – 900px) ── */
        @media (min-width: 641px) and (max-width: 900px) {
          .ledger-section {
            padding: 80px 20px;
          }

          .ledger-container {
            gap: 40px;
            justify-content: center;
          }

          .ledger-left,
          .ledger-mockup-window {
            flex: 1 1 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .ledger-left {
            text-align: center;
          }

          .ledger-subtext {
            max-width: 100%;
          }

          .ledger-features {
            align-items: center;
          }

          .ledger-feature-card {
            max-width: 480px;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
