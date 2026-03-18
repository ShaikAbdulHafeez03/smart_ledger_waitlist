'use client';

import { useEffect, useState } from 'react';

const CHAT_MESSAGES = [
  { role: 'user', text: 'What was my biggest expense category last quarter?', delay: 0 },
  {
    role: 'ai',
    text: 'Your largest Q1 expense was Payroll at ₹38,400 (52% of total spend), followed by Software (₹8,200) and Marketing (₹6,500). Payroll grew 8% vs Q4 — in line with your headcount increase.',
    delay: 1600,
  },
  { role: 'user', text: 'Any subscriptions I should cancel?', delay: 4000 },
  {
    role: 'ai',
    text: '',
    highlight: true,
    delay: 5800,
  },
];

const FEATURES = [
  {
    icon: '💬',
    title: 'Natural Language Queries',
    description: 'Ask "Why did expenses spike in March?" and get a sourced, accurate answer instantly.',
  },
  {
    icon: '🔔',
    title: 'Proactive Anomaly Alerts',
    description: 'The AI monitors your books 24/7 and surfaces unusual patterns before they become problems.',
  },
  {
    icon: '🎯',
    title: 'Goal Tracking',
    description: 'Set revenue, profit, or expense targets. The AI reports progress and suggests adjustments.',
  },
];

type Msg = { role: string; text: string; highlight?: boolean };

export default function AskAnything({ layout = 'default' }: { layout?: 'tab' | 'default' }) {
  const [visible, setVisible] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setVisible([]);
      setTyping(false);

      CHAT_MESSAGES.forEach((msg) => {
        if (msg.role === 'ai') {
          const t = setTimeout(() => setTyping(true), msg.delay - 700);
          timeouts.push(t);
        }
        const t = setTimeout(() => {
          setTyping(false);
          setVisible((prev) => [...prev, { role: msg.role, text: msg.text, highlight: msg.highlight }]);
        }, msg.delay);
        timeouts.push(t);
      });

      const loopT = setTimeout(run, CHAT_MESSAGES[CHAT_MESSAGES.length - 1].delay + 4500);
      timeouts.push(loopT);
    };

    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section id="ask-anything" className="ask-section">
      <div className="ask-container">

        {/* Left: Copy + Feature list */}
        <div className="ask-left">
          {layout !== 'tab' && <p className="section-label" style={{ marginBottom: 12 }}>AI Intelligence Layer</p>}
          <h2 className="ask-heading">
            Ask anything.{' '}
            <span className="ask-gradient-text">Get real answers.</span>
          </h2>
          <p className="ask-subtext">
            Fintan's AI doesn't just show numbers — it explains them. Ask about trends, flag
            anomalies, or request a cash flow forecast in plain English. The AI knows your books,
            your history, and your goals.
          </p>

          {/* Feature cards */}
          <div className="ask-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="ask-feature-card">
                <div className="ask-feature-icon">{f.icon}</div>
                <div>
                  <p className="ask-feature-title">{f.title}</p>
                  <p className="ask-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live chat mockup */}
        <div className="ask-chat-window">
          {/* Chat header */}
          <div className="ask-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="ask-avatar">₹</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>
                AI Chat — Live
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div className="ask-online-dot" />
              <span style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="ask-messages">
            {visible.map((msg, i) => (
              <div
                key={i}
                className={`ask-msg-row ${msg.role === 'user' ? 'ask-msg-row--user' : 'ask-msg-row--ai'}`}
              >
                {msg.role === 'ai' && <div className="ask-avatar ask-avatar--sm">₹</div>}
                <div className={`ask-bubble ${msg.role === 'user' ? 'ask-bubble--user' : 'ask-bubble--ai'}`}>
                  {msg.highlight ? (
                    <span>
                      I found{' '}
                      <strong style={{ color: '#EF4444' }}>3 potentially unused tools</strong>{' '}
                      costing ₹3,900/mo: Notion (last login 47 days ago), Loom Pro (0 videos this
                      quarter), and an old Zoom plan. Want me to flag these for review?
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="ask-msg-row ask-msg-row--ai">
                <div className="ask-avatar ask-avatar--sm">₹</div>
                <div className="ask-typing-bubble">
                  {[0, 1, 2].map((n) => (
                    <span key={n} className="ask-dot" style={{ animationDelay: `${n * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="ask-input-bar">
            <div className="ask-input-placeholder">Ask about your finances…</div>
            <div className="ask-send-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .ask-section {
          background: ${layout === 'tab' ? 'transparent' : 'var(--off-white)'};
          padding: ${layout === 'tab' ? '40px 0' : '100px 24px'};
        }

        /* ── Two-column wrapper ── */
        .ask-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        /* ── Left column ── */
        .ask-left {
          flex: 1 1 300px;
          min-width: 0;
        }

        .ask-heading {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .ask-gradient-text {
          display: block;
          background: linear-gradient(135deg, var(--emerald), #0D9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ask-subtext {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.75;
          max-width: 420px;
          margin-bottom: 36px;
        }

        /* ── Feature cards ── */
        .ask-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ask-feature-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: white;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 2px 12px rgba(13,27,42,0.06);
          border: 1px solid rgba(13,27,42,0.06);
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
          opacity: 0;
          transform: translateY(20px);
          animation: cardFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .ask-features > :nth-child(1) { animation-delay: 0.1s; }
        .ask-features > :nth-child(2) { animation-delay: 0.2s; }
        .ask-features > :nth-child(3) { animation-delay: 0.3s; }
        .ask-feature-card:hover {
          box-shadow: 0 8px 28px rgba(13,27,42,0.12);
          transform: translateY(-2px);
        }

        .ask-feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(13,148,136,0.15));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .ask-feature-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .ask-feature-desc {
          font-size: 13.5px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* ── Chat window ── */
        .ask-chat-window {
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

        .ask-chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(13,27,42,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
        }

        .ask-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--emerald), #0D9488);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
        }

        .ask-avatar--sm {
          width: 28px;
          height: 28px;
          font-size: 12px;
          margin-right: 8px;
          align-self: flex-end;
        }

        .ask-online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          animation: pulseOnline 2s infinite ease-out;
        }

        .ask-messages {
          padding: 20px 16px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #F8FAFC;
        }

        .ask-msg-row {
          display: flex;
          animation: askFadeUp 0.35s ease forwards;
        }
        .ask-msg-row--user  { justify-content: flex-end; }
        .ask-msg-row--ai    { justify-content: flex-start; align-items: flex-end; }

        .ask-bubble {
          max-width: 78%;
          padding: 11px 14px;
          font-size: 13.5px;
          line-height: 1.6;
        }

        .ask-bubble--user {
          background: linear-gradient(135deg, #10B981, #047857);
          color: white;
          border-radius: 16px 16px 4px 16px;
        }

        .ask-bubble--ai {
          background: white;
          color: var(--navy);
          border-radius: 16px 16px 16px 4px;
          box-shadow: 0 2px 8px rgba(13,27,42,0.08);
          border: 1px solid rgba(13,27,42,0.06);
        }

        .ask-typing-bubble {
          padding: 12px 16px;
          background: white;
          border-radius: 16px 16px 16px 4px;
          border: 1px solid rgba(13,27,42,0.06);
          box-shadow: 0 2px 8px rgba(13,27,42,0.08);
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .ask-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          display: inline-block;
          opacity: 0.7;
          animation: askBounce 1.2s ease infinite;
        }

        .ask-input-bar {
          padding: 14px 16px;
          border-top: 1px solid rgba(13,27,42,0.07);
          background: white;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .ask-input-placeholder {
          flex: 1;
          background: #F1F5F9;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #94A3B8;
        }

        .ask-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--emerald), #059669);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.15s;
        }
        .ask-send-btn:hover { transform: scale(1.08); }

        /* ── Animations ── */
        @keyframes askFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes askBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-5px); }
        }
        @keyframes pulseOnline {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          70% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
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
          .ask-section {
            padding: 64px 16px;
          }

          .ask-container {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .ask-left {
            width: 100%;
            text-align: center;
          }

          .ask-subtext {
            max-width: 100%;
          }

          .ask-features {
            align-items: center;
          }

          .ask-feature-card {
            width: 100%;
            max-width: 420px;
            text-align: left;
          }

          .ask-chat-window {
            width: 100%;
            max-width: 420px;
          }

          .ask-messages {
            min-height: 240px;
          }
        }

        /* ── Tablet (641px – 900px) ── */
        @media (min-width: 641px) and (max-width: 900px) {
          .ask-section {
            padding: 80px 20px;
          }

          .ask-container {
            gap: 40px;
            justify-content: center;
          }

          .ask-left,
          .ask-chat-window {
            flex: 1 1 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .ask-left {
            text-align: center;
          }

          .ask-subtext {
            max-width: 100%;
          }

          .ask-features {
            align-items: center;
          }

          .ask-feature-card {
            max-width: 480px;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
