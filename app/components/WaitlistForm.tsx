'use client';

import { useState } from 'react';
import SurveyForm from './SurveyForm';

interface WaitlistFormProps {
  dark?: boolean;
  id?: string;
}

export default function WaitlistForm({ dark = false, id }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [surveyCompleted, setSurveyCompleted] = useState(true); // true until we hear otherwise
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedEmail(email);
        setSurveyCompleted(Boolean(data.surveyCompleted));
        setStatus(data.duplicate ? 'duplicate' : 'success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong, please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const shareText = encodeURIComponent(
    `I just joined the waitlist for Fintan — the future of AI accounting for Indian solopreneurs. Chat-driven bookkeeping with GST compliance built in. Join me! 🚀`
  );
  const shareUrl = encodeURIComponent('https://fintan.app');
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

  // ── Already enrolled ──────────────────────────────────────────────
  if (status === 'duplicate') {
    return (
      <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          id={id}
          style={{
            textAlign: 'center',
            padding: '32px 24px',
            background: dark ? 'rgba(245,158,11,0.1)' : 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.35)',
            borderRadius: 16,
            width: '100%',
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: dark ? 'white' : 'var(--navy)',
              marginBottom: 8,
            }}
          >
            You&apos;re already enrolled!
          </h3>
          <p
            style={{
              color: dark ? 'rgba(255,255,255,0.7)' : 'var(--slate)',
              fontSize: 15,
            }}
          >
            <strong style={{ color: dark ? '#FCD34D' : '#B45309' }}>{email}</strong> is already
            on our waitlist. We&apos;ll notify you the moment we launch. 🚀
          </p>
        </div>
        {/* Show survey if they haven't filled it out yet */}
        {!surveyCompleted && <SurveyForm email={submittedEmail} dark={dark} />}
      </div>
    );
  }

  // ── Successful signup — show thank-you + survey ───────────────────
  if (status === 'success') {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Thank-you card */}
        <div
          id={id}
          style={{
            textAlign: 'center',
            padding: '32px 24px',
            background: dark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 16,
            width: '100%',
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎉</div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: dark ? 'white' : 'var(--navy)',
              marginBottom: 8,
            }}
          >
            You&apos;re on the list!
          </h3>
          <p
            style={{
              color: dark ? 'rgba(255,255,255,0.7)' : 'var(--slate)',
              marginBottom: 24,
              fontSize: 15,
            }}
          >
            We&apos;ll be in touch soon. Spread the word and help us build faster!
          </p>
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share on X (Twitter)
          </a>
        </div>

        {/* Survey card — appears directly below */}
        <SurveyForm email={submittedEmail} dark={dark} />
      </div>
    );
  }

  // ── Default: email form ───────────────────────────────────────────
  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      style={{ width: '100%', maxWidth: 480 }}
      noValidate
    >
      <div
        className="waitlist-form-container"
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); setStatus('idle'); }}
          placeholder="you@company.com"
          id={id ? `${id}-email` : 'email-input'}
          className="waitlist-input"
          style={{
            flex: 1,
            minWidth: 200,
            padding: '13px 18px',
            borderRadius: 10,
            border: dark
              ? '1px solid rgba(255,255,255,0.2)'
              : '1px solid rgba(13,27,42,0.15)',
            background: dark ? 'rgba(255,255,255,0.08)' : 'white',
            color: dark ? 'white' : 'var(--navy)',
            fontSize: 15,
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
          }}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="btn-primary waitlist-btn"
          disabled={status === 'loading'}
          id={id ? `${id}-btn` : 'submit-btn'}
        >
          {status === 'loading' ? 'Joining…' : 'Get Early Access'}
        </button>
      </div>
      {errorMsg && (
        <p style={{ color: '#EF4444', fontSize: 13, marginTop: 8 }}>{errorMsg}</p>
      )}
      <p
        style={{
          fontSize: 12,
          color: dark ? 'rgba(255,255,255,0.4)' : 'var(--slate)',
          marginTop: 10,
        }}
      >
        No spam, ever. Unsubscribe anytime.
      </p>

      <style>{`
        @media (max-width: 640px) {
          .waitlist-form-container { flex-direction: column !important; width: 100% !important; align-items: stretch !important; }
          .waitlist-input { min-width: 0 !important; width: 100% !important; margin-bottom: 8px !important; }
          .waitlist-btn { width: 100% !important; }
        }
      `}</style>
    </form>
  );
}
