'use client'

import { useState } from 'react'

export function EmailReadingsIntroClient() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style suppressHydrationWarning>{`
        @media (min-width: 1121px) {
          .email-hidden-mobile { display: block; }
          .email-show-mobile { display: none; }
        }
        @media (max-width: 1120px) {
          .email-hidden-mobile { display: none; }
          .email-show-mobile { display: block; }
        }
      `}</style>

      {/* Desktop: always shown */}
      <div className="email-hidden-mobile">
        <p>There are a couple of different Psychic Email Reading options available for you to purchase; a Silver Reading or a Gold Reading. Both are incredibly well written by our gifted team of Psychics - the only difference between them is the number of questions that you can ask.</p>
        <p>Our Silver Psychic Email Readings give you the option to ask one question and you will get a response of around 500 words.</p>
        <p>Our Gold Psychic Email Readings give you the option to ask three questions and you will get a lovely, detailed Psychic response of around 1100 words.</p>
      </div>

      {/* Mobile: disclosure */}
      <div className="email-show-mobile">
        <button
          aria-expanded={expanded}
          aria-controls="email-intro-expanded"
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', color: '#F068B5', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', cursor: 'pointer', marginTop: '0.5rem' }}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>
        {expanded && (
          <div id="email-intro-expanded">
            <p>There are a couple of different Psychic Email Reading options available for you to purchase; a Silver Reading or a Gold Reading. Both are incredibly well written by our gifted team of Psychics - the only difference between them is the number of questions that you can ask.</p>
            <p>Our Silver Psychic Email Readings give you the option to ask one question and you will get a response of around 500 words.</p>
            <p>Our Gold Psychic Email Readings give you the option to ask three questions and you will get a lovely, detailed Psychic response of around 1100 words.</p>
          </div>
        )}
      </div>
    </>
  )
}
