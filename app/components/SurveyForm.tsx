'use client';

import { useState } from 'react';

interface SurveyFormProps {
  email: string;
  dark?: boolean;
}

type Step = 'intro' | 'software_lacks' | 'willing_to_try' | 'features' | 'done';

const inputStyle = (dark: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '12px 16px',
  borderRadius: 10,
  border: dark ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(13,27,42,0.15)',
  background: dark ? 'rgba(255,255,255,0.07)' : 'white',
  color: dark ? 'white' : 'var(--navy)',
  fontSize: 14,
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  resize: 'vertical' as const,
});

const optionBtnStyle = (selected: boolean, dark: boolean): React.CSSProperties => ({
  flex: 1,
  padding: '11px 0',
  borderRadius: 10,
  border: selected
    ? '1.5px solid var(--emerald)'
    : dark
    ? '1px solid rgba(255,255,255,0.18)'
    : '1px solid rgba(13,27,42,0.15)',
  background: selected
    ? 'rgba(16,185,129,0.15)'
    : dark
    ? 'rgba(255,255,255,0.05)'
    : 'white',
  color: selected ? 'var(--emerald)' : dark ? 'rgba(255,255,255,0.75)' : 'var(--navy)',
  fontWeight: selected ? 700 : 500,
  fontSize: 14,
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
  transition: 'all 0.15s',
});

const labelStyle = (dark: boolean): React.CSSProperties => ({
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: dark ? 'rgba(255,255,255,0.6)' : 'var(--slate)',
  marginBottom: 8,
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
});

export default function SurveyForm({ email, dark = false }: SurveyFormProps) {
  const [step, setStep] = useState<Step>('intro');
  const [name, setName] = useState('');
  const [usesSoftware, setUsesSoftware] = useState<'yes' | 'no' | null>(null);
  const [lacks, setLacks] = useState('');
  const [willing, setWilling] = useState<'yes' | 'no' | null>(null);
  const [features, setFeatures] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [skipSurvey, setSkipSurvey] = useState(false);

  if (skipSurvey) return null;

  const headingColor = dark ? 'white' : 'var(--navy)';
  const mutedColor = dark ? 'rgba(255,255,255,0.55)' : 'var(--slate)';

  const submitSurvey = async (finalFeatures: string) => {
    setLoading(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name.trim() || null,
          usesCurrentSoftware: usesSoftware === 'yes',
          currentSoftwareLacks: usesSoftware === 'yes' ? lacks.trim() || null : null,
          willingToTry: usesSoftware === 'no' ? willing === 'yes' : null,
          desiredFeatures: finalFeatures.trim() || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data?.error ?? 'Unable to save your response. Please try again.');
        return;
      }
      setStep('done');
    } catch {
      setSubmitError('Network error — unable to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const cardStyle: React.CSSProperties = {
    marginTop: 20,
    padding: '28px 28px',
    background: dark ? 'rgba(255,255,255,0.05)' : 'white',
    border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(13,27,42,0.1)',
    borderRadius: 18,
    width: '100%',
    maxWidth: 480,
    boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.06)',
    position: 'relative',
  };

  if (step === 'done') {
    return (
      <div style={cardStyle}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>🙏</div>
          <h4 style={{ fontSize: 17, fontWeight: 700, color: headingColor, marginBottom: 6 }}>
            Thanks for sharing!
          </h4>
          <p style={{ fontSize: 14, color: mutedColor, lineHeight: 1.6 }}>
            Your feedback will directly shape the product. We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      {/* Skip button */}
      <button
        onClick={() => setSkipSurvey(true)}
        style={{
          position: 'absolute',
          top: 14,
          right: 18,
          background: 'none',
          border: 'none',
          color: mutedColor,
          fontSize: 12,
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Skip ✕
      </button>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--emerald)', marginBottom: 4 }}>
          Quick Survey · 2 min
        </p>
        <h4 style={{ fontSize: 18, fontWeight: 700, color: headingColor, letterSpacing: '-0.01em' }}>
          Help us build the right product
        </h4>
        <p style={{ fontSize: 13, color: mutedColor, marginTop: 4 }}>
          Totally optional — every answer shapes what we build first.
        </p>
      </div>

      {/* ── Step: intro ──────────────────────────────────── */}
      {step === 'intro' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Name */}
          <div>
            <label style={labelStyle(dark)}>Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setFieldError(''); }}
              placeholder="e.g. John Doe"
              style={{ ...inputStyle(dark), border: fieldError && !name.trim() ? '1px solid #EF4444' : inputStyle(dark).border }}
            />
          </div>

          {/* Q1: Uses software? */}
          <div>
            <label style={labelStyle(dark)}>
              Do you currently use any accounting software?
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {(['yes', 'no'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setUsesSoftware(opt)}
                  style={optionBtnStyle(usesSoftware === opt, dark)}
                >
                  {opt === 'yes' ? '✓ Yes, I do' : '✗ No, I don\'t'}
                </button>
              ))}
            </div>
          </div>

          {fieldError && (
            <p style={{ color: '#EF4444', fontSize: 13, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', lineHeight: 1.5 }}>
              ⚠️ {fieldError}
            </p>
          )}
          <button
            className="btn-primary"
            disabled={!usesSoftware}
            onClick={() => {
              if (!name.trim()) { setFieldError('Please enter your name.'); return; }
              if (!usesSoftware) return;
              setFieldError('');
              setStep(usesSoftware === 'yes' ? 'software_lacks' : 'willing_to_try');
            }}
            style={{ width: '100%', opacity: !usesSoftware ? 0.5 : 1 }}
          >
            Next →
          </button>
        </div>
      )}

      {/* ── Step: software_lacks (Yes branch) ────────────── */}
      {step === 'software_lacks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={labelStyle(dark)}>
              What do you feel your current tool <span style={{ color: '#EF4444' }}>lacks</span> the most?
            </label>
            <textarea
              rows={4}
              value={lacks}
              onChange={(e) => { setLacks(e.target.value); setFieldError(''); }}
              placeholder="e.g. No GST auto-fill, difficult reconciliation, can't attach invoices easily…"
              style={{ ...inputStyle(dark), border: fieldError ? '1px solid #EF4444' : inputStyle(dark).border }}
            />
          </div>

          {fieldError && (
            <p style={{ color: '#EF4444', fontSize: 13, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', lineHeight: 1.5 }}>
              ⚠️ {fieldError}
            </p>
          )}

          <button
            className="btn-primary"
            onClick={() => {
              if (!lacks.trim()) { setFieldError('Please describe what your current tool lacks.'); return; }
              setFieldError('');
              setStep('features');
            }}
            style={{ width: '100%' }}
          >
            Next →
          </button>
        </div>
      )}

      {/* ── Step: willing_to_try (No branch) ─────────────── */}
      {step === 'willing_to_try' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={labelStyle(dark)}>
              Are you open to trying a new accounting tool?
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {(['yes', 'no'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setWilling(opt)}
                  style={optionBtnStyle(willing === opt, dark)}
                >
                  {opt === 'yes' ? '✓ Absolutely!' : '✗ Not really'}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn-primary"
            disabled={!willing}
            onClick={() => { if (willing) setStep('features'); }}
            style={{ width: '100%', opacity: !willing ? 0.5 : 1 }}
          >
            Next →
          </button>
        </div>
      )}

      {/* ── Step: features (shared final Q) ──────────────── */}
      {step === 'features' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={labelStyle(dark)}>
              What features would you <span style={{ color: 'var(--emerald)' }}>most want</span> in your ideal accounting tool?
            </label>
            <textarea
              rows={4}
              value={features}
              onChange={(e) => { setFeatures(e.target.value); setFieldError(''); }}
              placeholder="e.g. Auto GST filing, WhatsApp-driven entries, one-click CA sharing, mobile app…"
              style={{ ...inputStyle(dark), border: fieldError ? '1px solid #EF4444' : inputStyle(dark).border }}
            />
          </div>

          {fieldError && (
            <p style={{ color: '#EF4444', fontSize: 13, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', lineHeight: 1.5 }}>
              ⚠️ {fieldError}
            </p>
          )}
          {submitError && (
            <p style={{ color: '#EF4444', fontSize: 13, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', lineHeight: 1.5 }}>
              ⚠️ {submitError}
            </p>
          )}
          <button
            className="btn-primary"
            disabled={loading}
            onClick={() => {
              if (!features.trim()) { setFieldError('Please share at least one feature you\'d like.'); return; }
              setFieldError('');
              submitSurvey(features);
            }}
            style={{ width: '100%' }}
          >
            {loading ? 'Submitting…' : 'Submit Feedback 🚀'}
          </button>
        </div>
      )}

      {/* Step indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
        {(['intro', step === 'software_lacks' ? 'software_lacks' : 'willing_to_try', 'features'] as const).map((s, i) => {
          const stepOrder = ['intro', step === 'software_lacks' ? 'software_lacks' : 'willing_to_try', 'features'];
          const currentIdx = stepOrder.indexOf(step);
          return (
            <div
              key={i}
              style={{
                width: i <= currentIdx ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i <= currentIdx ? 'var(--emerald)' : (dark ? 'rgba(255,255,255,0.15)' : '#E2E8F0'),
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
