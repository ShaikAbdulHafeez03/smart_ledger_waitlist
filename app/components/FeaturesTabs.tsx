'use client';

import { useState } from 'react';
import AskAnything from './AskAnything';
import LedgerAndBooks from './LedgerAndBooks';
import Reconciliation from './Reconciliation';
import Reporting from './Reporting';
import TaxReadiness from './TaxReadiness';

const tabs = [
  { id: 'ai', label: 'AI Assistant', icon: '🧠' },
  { id: 'ledger', label: 'Ledger & Books', icon: '📒' },
  { id: 'reconciliation', label: 'Reconciliation', icon: '🔄' },
  { id: 'reporting', label: 'Reporting', icon: '📊' },
  { id: 'tax', label: 'Tax Readiness', icon: '🧾' },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="features-tabs" style={{ background: '#F9FAFB', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="features-tab-header" style={{ textAlign: 'left', marginBottom: 60 }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900,
            color: '#0B2A15',
            letterSpacing: '-0.02em',
            marginBottom: 20,
            lineHeight: 1.1
          }}>
            Everything your business <br />
            <span style={{ 
              color: 'var(--gold)', 
              fontStyle: 'italic',
              fontWeight: 500
            }}>
              needs to stay ahead.
            </span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#475569',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            Five powerful modules. One unified platform. No accounting degree required.
          </p>
        </div>

        {/* Tabs */}
        <div className="features-tab-wrapper" style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className="features-tab-btn"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: isActive ? '1px solid transparent' : '1px solid rgba(13,27,42,0.06)',
                  background: isActive ? 'linear-gradient(135deg, #10B981, #047857)' : 'white',
                  color: isActive ? 'white' : '#475569',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 8px 24px rgba(16,185,129,0.25)' : '0 2px 8px rgba(13,27,42,0.03)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div 
          key={activeTab} 
          style={{ 
            position: 'relative', 
            minHeight: '550px',
            animation: 'tabFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {activeTab === 'ai' && <AskAnything layout="tab" />}
          {activeTab === 'ledger' && <LedgerAndBooks layout="tab" />}
          {activeTab === 'reconciliation' && <Reconciliation layout="tab" />}
          {activeTab === 'reporting' && <Reporting layout="tab" />}
          {activeTab === 'tax' && <TaxReadiness layout="tab" />}
        </div>
      </div>
      <style>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          #features-tabs { padding: 60px 16px !important; }
          .features-tab-header { margin-bottom: 30px !important; }
          .features-tab-btn {
            padding: 8px 16px !important;
            font-size: 13px !important;
            flex: 1 1 auto;
            justify-content: center;
          }
          .features-tab-wrapper { margin-bottom: 30px !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div style={{
      padding: '80px 24px',
      textAlign: 'center',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 24px 80px rgba(13,27,42,0.06)',
      border: '1px solid rgba(13,27,42,0.05)',
      animation: 'fadeIn 0.3s ease'
    }}>
      <h3 style={{ fontSize: '28px', color: '#03030A', marginBottom: '16px', fontWeight: 800, letterSpacing: '-0.02em' }}>{title}</h3>
      <p style={{ color: '#64748B', fontSize: '18px' }}>This module is currently in development. Check back soon for updates!</p>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
