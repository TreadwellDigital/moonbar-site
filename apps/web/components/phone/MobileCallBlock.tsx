'use client'

import Link from 'next/link'
import { useRegion } from '../layout/SiteSettings'

/**
 * Combined Phone + SMS CTA block — visible only at ≤1120px.
 * The desktop fixed bar (StickyCallBar) is hidden at this breakpoint.
 *
 * Uses a CSS class on the section for show/hide so media queries work.
 * Inline display:none on the section itself cannot be overridden by a
 * media query — that was the root cause of the previous invisible block.
 */
export function MobileCallBlock() {
  const rc = useRegion()

  const tel1 = rc.phoneSpecial.replace(/[\s-]/g, '')
  const tel2 = rc.phoneStandard.replace(/[\s-]/g, '')

  return (
    <>
      <style suppressHydrationWarning>{`
        /* Hidden on desktop; block on mobile */
        .mcb-section { display: none; }
        @media (max-width: 1120px) {
          .mcb-section { display: block; }
        }

        /* Divider between phone terms and SMS section */
        .mcb-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.25);
          margin: 1.5rem 0;
        }
      `}</style>

      <section
        className="mcb-section"
        style={{
          background: 'linear-gradient(180deg, #F068B5 0%, #B74F8A 100%)',
          color: '#fff',
          padding: '2rem 1.75rem',
        }}
      >
        {/* ── Offer 1: Special ───────────────────────────────────────── */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{
            fontFamily: '"Overpass", sans-serif',
            fontWeight: 900,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            margin: '0 0 0.25rem',
            lineHeight: 1.2,
          }}>
            20 Minute Special Offer
          </p>
          <a
            href={`tel:${tel1}`}
            style={{
              display: 'block',
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 900,
              fontSize: '1.875rem',
              color: '#fff',
              textDecoration: 'none',
              lineHeight: 1.1,
              margin: '0.25rem 0',
            }}
          >
            {rc.phoneSpecial}
          </a>
          <p style={{
            fontFamily: '"Overpass", sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.9)',
            margin: '0.25rem 0 0.875rem',
            lineHeight: 1.4,
          }}>
            {rc.phoneSpecialOffer}
          </p>
          <a
            href={`tel:${tel1}`}
            className="btn-green"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '13.25rem',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              height: '2.25rem',
              boxSizing: 'border-box',
            }}
          >
            Click To Call Now
          </a>
        </div>

        {/* ── Offer 2: Standard ──────────────────────────────────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: '"Overpass", sans-serif',
            fontWeight: 900,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            margin: '0 0 0.25rem',
            lineHeight: 1.2,
          }}>
            Call &amp; Pay by Card
          </p>
          <a
            href={`tel:${tel2}`}
            style={{
              display: 'block',
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 900,
              fontSize: '1.875rem',
              color: '#fff',
              textDecoration: 'none',
              lineHeight: 1.1,
              margin: '0.25rem 0',
            }}
          >
            {rc.phoneStandard}
          </a>
          <p style={{
            fontFamily: '"Overpass", sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.9)',
            margin: '0.25rem 0 0.875rem',
            lineHeight: 1.4,
          }}>
            {rc.phoneStandardOffer}
          </p>
          <a
            href={`tel:${tel2}`}
            className="btn-green"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '13.25rem',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              height: '2.25rem',
              boxSizing: 'border-box',
            }}
          >
            Click To Call Now
          </a>
        </div>

        {/* ── Phone terms ────────────────────────────────────────────── */}
        <p style={{
          fontFamily: '"Overpass", sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.5,
          margin: 0,
        }}>
          {rc.termsLong}
          <br />
          {rc.sp}
        </p>

        {/* ── Divider between phone terms and SMS ────────────────────── */}
        <hr className="mcb-divider" aria-hidden="true" />

        {/* ── SMS placeholder ────────────────────────────────────────── */}
        <div>
          <p style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 900,
            fontSize: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            margin: '0 0 0.5rem',
            lineHeight: 1.2,
          }}>
            <span style={{ color: '#87f6ec' }}>NEW!</span> Psychic SMS Readings
          </p>
          <p style={{
            fontFamily: '"Overpass", sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 1rem',
            lineHeight: 1.5,
          }}>
            Buy credits securely through the Moonbar Wallet, then chat privately
            with a Psychic by SMS &mdash; with no premium-rate number.
          </p>
          <Link
            href="/psychic-sms-readings"
            className="btn-green"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '13.25rem',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              height: '2.25rem',
              boxSizing: 'border-box',
            }}
          >
            Discover SMS Readings
          </Link>
        </div>
      </section>
    </>
  )
}
