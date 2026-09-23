'use client'

import { useState } from 'react'

export function GoldIntroClient() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style suppressHydrationWarning>{`
        @media (min-width: 1121px) {
          .gold-hidden-mobile { display: block; }
          .gold-show-mobile { display: none; }
        }
        @media (max-width: 1120px) {
          .gold-hidden-mobile { display: none; }
          .gold-show-mobile { display: block; }
        }
      `}</style>

      {/* Desktop: always shown */}
      <div className="gold-hidden-mobile">
        <p>Please note: You must provide your date of birth to show you are over 18. Due to regulations, we are not allowed to answer questions on health, pregnancy, finance and legal issues.</p>
      </div>

      {/* Mobile: disclosure */}
      <div className="gold-show-mobile">
        <button
          aria-expanded={expanded}
          aria-controls="gold-intro-expanded"
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', color: '#F068B5', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', cursor: 'pointer', marginTop: '0.5rem' }}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>
        {expanded && (
          <div id="gold-intro-expanded">
            <p>Please note: You must provide your date of birth to show you are over 18. Due to regulations, we are not allowed to answer questions on health, pregnancy, finance and legal issues.</p>
          </div>
        )}
      </div>
    </>
  )
}
