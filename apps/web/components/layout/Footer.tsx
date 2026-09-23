'use client'

import Link from 'next/link'
import { useRegion } from './SiteSettings'

const navLinkStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: '"Overpass", sans-serif',
  fontSize: '0.813rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#9a9a9a',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  transition: 'color 0.2s',
}

const creditStyle: React.CSSProperties = {
  fontFamily: '"Overpass", sans-serif',
  fontSize: '0.75rem',
  color: '#666',
  lineHeight: 1.5,
  marginBottom: '0.5rem',
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={navLinkStyle}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9a9a9a' }}
    >
      {label}
    </Link>
  )
}

export function Footer() {
  const rc = useRegion()
  void rc

  return (
    <footer style={{ background: '#2C2C2C', color: '#fff' }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1552px;
          margin: 0 auto;
          padding: 3rem 2rem 3rem;
        }
        @media (min-width: 1121px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            padding-bottom: 8rem;
          }
        }
        .footer-credit-link {
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-credit-link:hover { color: #fff; }
      `}</style>

      <div className="footer-grid">

        {/* ── Col 1: Logo + Social ────────────────────────────────────── */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/templates/moonbar/images/colourlogo.svg"
            alt="Moonbar"
            style={{ width: '23.563rem', height: '5rem', objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
          />

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/moonbarpsychics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moonbar on Facebook"
              style={{ color: '#9a9a9a', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9a9a9a' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://twitter.com/moonbarpsychics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moonbar on Twitter"
              style={{ color: '#9a9a9a', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9a9a9a' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25h6.718l4.26 5.632 5.016-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Col 2: Primary nav ──────────────────────────────────────── */}
        <nav aria-label="Footer primary navigation">
          <NavLink href="/psychic-phone-readings" label="Phone Readings" />
          <NavLink href="/psychic-sms-readings"  label="SMS Readings"  />
          <NavLink href="/our-psychic-services"  label="Our Services"  />
          <NavLink href="/testimonials"            label="Testimonials"  />
          <NavLink href="/psychic-blog-articles"   label="Blog"          />
        </nav>

        {/* ── Col 3: Legal nav ────────────────────────────────────────── */}
        <nav aria-label="Footer legal navigation">
          <NavLink href="/terms-conditions" label="Terms & Conditions" />
          <NavLink href="/privacy-policy"   label="Privacy Policy"     />
          <NavLink href="/cookies-policy"   label="Cookies Policy"     />
          <NavLink href="/customer-service" label="Customer Services"  />
        </nav>

        {/* ── Col 4: Credits ──────────────────────────────────────────── */}
        <div>
          <p style={creditStyle}>
            Website by{' '}
            <a
              href="https://www.allstar.ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Allstar Media Services
            </a>
          </p>
          <p style={creditStyle}>
            Psychic Readings 🚀 by{' '}
            <a
              href="https://www.allstarpsychics.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Allstar Psychics
            </a>
            {' '}© {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  )
}
