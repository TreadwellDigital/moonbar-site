'use client'

import { useRegion } from '../layout/SiteSettings'

/**
 * Fixed contact bar — desktop only (>1120px).
 * Uses the main 135deg brand gradient.
 */
export function StickyCallBar() {
  const rc = useRegion()

  return (
    <>
      <style>{`
        @media (max-width: 1120px) {
          .sticky-call-bar { display: none !important; }
        }
        /* Pink left marker on live-chat column only */
        .scb-livechat {
          position: relative;
        }
        .scb-livechat::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 5px;
          background: #F068B5;
        }
      `}</style>

      <div
        className="sticky-call-bar fixed bottom-0 left-0 right-0 z-50 text-white"
        style={{
          background: 'linear-gradient(135deg, #f068b5 0%, #d888c1 25%, #b4b9d4 50%, #9cd9e1 76%, #87f6ec 100%)',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
        }}
      >
        {/* Inner container — 1200px max */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
          }}
        >
          {/* ── Offer 1: Special (22%) ──────────────────── */}
          <div
            style={{ width: '22%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1rem', textAlign: 'center' }}
          >
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 900, fontSize: '1.25rem', textTransform: 'none', color: '#fff', margin: '0 0 0.15rem', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              20 Minute Special Offer
            </p>
            <a
              href={`tel:${rc.phoneSpecial.replace(/[\s-]/g, '')}`}
              style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 900, fontSize: '2rem', color: '#b74f8a', lineHeight: 1.1, textDecoration: 'none' }}
            >
              {rc.phoneSpecial}
            </a>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.85)', margin: '0.15rem 0 0', lineHeight: 1.2 }}>
              {rc.phoneSpecialOffer}
            </p>
          </div>

          {/* ── Offer 2: Standard (22%) ─────────────────── */}
          <div
            style={{ width: '22%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1rem', textAlign: 'center' }}
          >
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 900, fontSize: '1.25rem', textTransform: 'none', color: '#fff', margin: '0 0 0.15rem', lineHeight: 1.2 }}>
              Call &amp; Pay by Card
            </p>
            <a
              href={`tel:${rc.phoneStandard.replace(/[\s-]/g, '')}`}
              style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 900, fontSize: '2rem', color: '#b74f8a', lineHeight: 1.1, textDecoration: 'none' }}
            >
              {rc.phoneStandard}
            </a>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.85)', margin: '0.15rem 0 0', lineHeight: 1.2 }}>
              {rc.phoneStandardOffer}
            </p>
          </div>

          {/* ── Terms (28%) ─────────────────────────────── */}
          <div
            style={{ width: '28%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0.75rem 1rem', textAlign: 'center' }}
          >
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 900, fontSize: '0.875rem', color: '#fff', margin: '0 0 0.2rem', lineHeight: 1.2 }}>
              Terms &amp; Conditions
            </p>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 400, fontSize: '0.813rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.4 }}>
              {rc.termsLong} {rc.sp}
            </p>
          </div>

          {/* ── Live Chat + SMS (28%) ───────────────────── */}
          <div
            className="scb-livechat"
            style={{ width: '28%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0.5rem 1rem 0.5rem 28px', gap: '0.5rem', boxSizing: 'border-box' }}
          >
            {/* Live Chat row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
              <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 900, fontSize: '0.938rem', color: '#fff', margin: 0, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                LIVE CHAT
              </p>
              <a
                href={rc.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
                style={{ minWidth: 'auto', fontSize: '0.75rem', padding: '0.3rem 0.75rem', whiteSpace: 'nowrap' }}
              >
                Start Live Chat &gt;
              </a>
            </div>

            {/* SMS Readings row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
              <p style={{ fontFamily: '"Overpass", sans-serif', fontWeight: 900, fontSize: '0.938rem', color: '#fff', margin: 0, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                SMS READINGS
              </p>
              <a
                href="/psychic-sms-readings"
                className="btn-primary"
                style={{ minWidth: 'auto', fontSize: '0.75rem', padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}
              >
                Find Out More &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
