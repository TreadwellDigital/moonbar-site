'use client'

import { useState } from 'react'

export function ServicesIntroClient() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style suppressHydrationWarning>{`
        @media (min-width: 1121px) {
          .services-hidden-mobile { display: block; }
          .services-show-mobile { display: none; }
        }
        @media (max-width: 1120px) {
          .services-hidden-mobile { display: none; }
          .services-show-mobile { display: block; }
        }
      `}</style>

      {/* Desktop: always shown */}
      <div className="services-hidden-mobile">
        <p>Whether your question is on Love and Relationships, Life Questions, Job &amp; Career, contacting the Spirit world, or simply just wish to let the Tarot or Angel Cards pass on messages, our team of live Psychic Readers are available 24/7. Don&apos;t leave the future to fate, speak to our gifted Psychics today.</p>
      </div>

      {/* Mobile: disclosure */}
      <div className="services-show-mobile">
        <button
          aria-expanded={expanded}
          aria-controls="services-intro-expanded"
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', color: '#F068B5', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', cursor: 'pointer', marginTop: '0.5rem' }}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>
        {expanded && (
          <div id="services-intro-expanded">
            <p>Whether your question is on Love and Relationships, Life Questions, Job &amp; Career, contacting the Spirit world, or simply just wish to let the Tarot or Angel Cards pass on messages, our team of live Psychic Readers are available 24/7. Don&apos;t leave the future to fate, speak to our gifted Psychics today.</p>
          </div>
        )}
      </div>
    </>
  )
}
