'use client'

import { useState } from 'react'

export function IntroSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section style={{ background: '#F0F0F0', padding: '3rem 1rem 0' }}>
      <div
        className="text-center"
        style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1rem', lineHeight: 1.15 }}
      >
        {/* Opening paragraph — bottom padding separates it from h3 */}
        <div style={{ paddingBottom: '1rem' }}>
          <p style={{ fontSize: '1.125rem', color: '#626262', marginTop: 0, marginBottom: 0, lineHeight: 1.15 }}>
            Hello and Welcome to Moonbar&apos;s Live Psychic and Tarot readings. Get guidance on all areas of your life to help you move forward and look positively to the future. Speak to one of our handpicked, gifted live Psychic Readers today. In-depth Phone Psychic Readings from less than $2 per minute!
          </p>
        </div>

        {/* Read more toggle — mobile only */}
        <button
          className="lg:hidden mb-4 text-sm font-sans underline"
          style={{ color: '#F068B5' }}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>

        {/* h3 + closing paragraph: always on desktop, expandable on mobile */}
        <div className={`${expanded ? 'block' : 'hidden'} lg:block`}>
          <h3
            style={{
              fontFamily: '"Overpass", sans-serif',
              fontSize: '1.563rem',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#626262',
              margin: '0 0 1rem',
              textAlign: 'center',
            }}
          >
            Call Moonbar&apos;s gifted Psychic Readers Now
          </h3>
          <p style={{ fontSize: '1.125rem', color: '#626262', marginTop: 0, marginBottom: 0, lineHeight: 1.15 }}>
            We pride ourselves in having the best, worldwide Psychics, Mediums, Clairvoyants and Tarot Readers. Make that call today for your live phone psychic reading.
          </p>
        </div>

        {/* Bottom spacing before divider (~30px) */}
        <div style={{ height: '1.875rem' }} />
      </div>

      {/* Pink divider — ends the section, no space after */}
      <div
        style={{
          width: '7.188rem',
          height: '0.375rem',
          margin: '0 auto',
          background: '#f068b5',
        }}
      />
    </section>
  )
}
