'use client'

import { useState } from 'react'

export function SilverIntroClient() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style suppressHydrationWarning>{`
        @media (min-width: 1121px) {
          .silver-hidden-mobile { display: block; }
          .silver-show-mobile { display: none; }
        }
        @media (max-width: 1120px) {
          .silver-hidden-mobile { display: none; }
          .silver-show-mobile { display: block; }
        }
      `}</style>

      {/* Desktop: always shown */}
      <div className="silver-hidden-mobile">
        <p>Please note: You must provide your date of birth to show you are over 18. Due to regulations, we are not allowed to answer questions on health, pregnancy, finance and legal issues.</p>
      </div>

      {/* Mobile: disclosure */}
      <div className="silver-show-mobile">
        <button
          aria-expanded={expanded}
          aria-controls="silver-intro-expanded"
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', color: '#F068B5', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', cursor: 'pointer', marginTop: '0.5rem' }}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>
        {expanded && (
          <div id="silver-intro-expanded">
            <p>Please note: You must provide your date of birth to show you are over 18. Due to regulations, we are not allowed to answer questions on health, pregnancy, finance and legal issues.</p>
          </div>
        )}
      </div>
    </>
  )
}
