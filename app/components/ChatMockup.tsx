'use client';

import { useEffect, useState } from 'react';

const MESSAGES = [
  { role: 'user', text: 'Bought a new laptop for ₹80,000', delay: 0 },
  {
    role: 'ai',
    text: "Great! I'll record this as a Capital Expense. Please upload the GST invoice to post it to your ledger. 📎",
    delay: 1400,
  },
  { role: 'user', text: 'Paid ₹12,500 for cloud hosting — AWS invoice attached ✓', delay: 3200 },
  {
    role: 'ai',
    text: 'Perfect! Recorded under IT & Software Expenses (GST Input Credit eligible). Entry is now pending your approval. ✅',
    delay: 4800,
  },
];

type Msg = { role: string; text: string };

export default function ChatMockup() {
  const [visible, setVisible] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let loopTimeout: ReturnType<typeof setTimeout>;

    const run = () => {
      setVisible([]);
      setTyping(false);

      MESSAGES.forEach((msg, i) => {
        // Show typing indicator just before AI message
        if (msg.role === 'ai') {
          const typingT = setTimeout(() => setTyping(true), msg.delay - 600);
          timeouts.push(typingT);
        }
        const t = setTimeout(() => {
          setTyping(false);
          setVisible((prev) => [...prev, { role: msg.role, text: msg.text }]);
        }, msg.delay);
        timeouts.push(t);
      });

      // Loop every 8 seconds after last message
      loopTimeout = setTimeout(run, MESSAGES[MESSAGES.length - 1].delay + 4000);
      timeouts.push(loopTimeout);
    };

    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="demo"
      style={{
        background: 'var(--off-white)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>
        {/* Left: copy */}
        <div style={{ flex: '1 1 280px' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>See It in Action</p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              color: 'var(--navy)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Just describe it.{' '}
            <span className="gradient-text">We handle the rest.</span>
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: 16, lineHeight: 1.75, maxWidth: 380 }}>
            No accounting jargon. No journal entries. Type what happened in plain English and AI Core
            categorises it, captures GST, and requests proof — automatically.
          </p>
        </div>

        {/* Right: chat window */}
        <div
          style={{
            flex: '1 1 340px',
            background: 'var(--navy)',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(13,27,42,0.35)',
            border: '1px solid rgba(255,255,255,0.08)',
            minWidth: 0,
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
            <span style={{ marginLeft: 10, color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
              AI Core — Smart Ledger
            </span>
          </div>

          {/* Messages */}
          <div style={{ padding: '24px 20px', minHeight: 260, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {visible.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  animation: 'fadeSlideUp 0.35s ease forwards',
                }}
              >
                {msg.role === 'ai' && (
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      marginRight: 10,
                      flexShrink: 0,
                      alignSelf: 'flex-end',
                    }}
                  >
                    ₹
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '75%',
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background:
                      msg.role === 'user'
                        ? 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))'
                        : 'rgba(255,255,255,0.09)',
                    color: 'white',
                    fontSize: 14,
                    lineHeight: 1.55,
                    border: msg.role === 'ai' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--emerald), var(--emerald-dark))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  ₹
                </div>
                <div
                  style={{
                    padding: '12px 18px',
                    borderRadius: '18px 18px 18px 4px',
                    background: 'rgba(255,255,255,0.09)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map((n) => (
                    <span
                      key={n}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.5)',
                        display: 'inline-block',
                        animation: `bounce 1.2s ease ${n * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
