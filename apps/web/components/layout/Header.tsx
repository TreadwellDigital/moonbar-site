'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRegion } from './SiteSettings'

const NAV_LINKS = [
  { label: 'HOME',        href: '/' },
  { label: 'PHONE',       href: '/psychic-phone-readings' },
  { label: 'SMS',         href: '/psychic-sms-readings' },
  { label: 'WALLET',      href: null, wallet: true },
  { label: 'LIVE CHAT',   href: null, chat: true },
  {
    label: 'OUR SERVICES',
    href: '/our-psychic-services',
    children: [
      { label: 'Psychic Readings',     href: '/our-psychic-services/psychic-readings' },
      { label: 'Love & Relationships', href: '/our-psychic-services/love-and-relationship-psychic-readings' },
      { label: 'Life Questions',       href: '/our-psychic-services/life-questions-psychic-reading' },
      { label: 'Job & Career',         href: '/our-psychic-services/job-and-career-psychic-readings' },
      { label: 'Tarot Readings',       href: '/our-psychic-services/tarot-card-readings' },
      { label: 'Spiritual Readings',   href: '/our-psychic-services/spiritual-readings' },
      { label: 'Psychic Mediums',      href: '/our-psychic-services/psychic-mediumship-reading' },
      { label: 'Angel Card Readings',  href: '/our-psychic-services/angel-card-readings' },
      { label: 'Clairvoyant Readings', href: '/our-psychic-services/clairvoyant-readings' },
    ],
  },
]

const HELP_LINK = { label: 'HELP', href: '/customer-service' }

const navStyle: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 900,
  fontSize: '1.125rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: '#ffffff',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

/** 135-degree Moonbar brand gradient — shared with HowToSection */
const BRAND_GRADIENT = 'linear-gradient(135deg, #f068b5 0%, #b07fdc 50%, #87f6ec 100%)'

export function Header() {
  const rc = useRegion()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  /** True only on the homepage hero route */
  const isHome = pathname === '/'

  const resolveHref = (link: { href: string | null; wallet?: boolean; chat?: boolean }) => {
    if (link.wallet) return rc.walletUrl
    if (link.chat)   return rc.chatUrl
    return link.href!
  }

  /* ─────────────────────────────────────────────────────────────────
      Homepage:  absolute, transparent — overlays the hero image.
      Inner pages: relative, solid brand gradient — normal document flow.
  ─────────────────────────────────────────────────────────────────── */
  const headerProps = isHome
    ? { className: 'absolute top-0 left-0 right-0 z-50' }
    : { style: { background: BRAND_GRADIENT } as React.CSSProperties }

  /* Desktop inner-container height differs per variant */
  const desktopContainerStyle: React.CSSProperties = {
    display: 'none',           /* overridden to flex by media query */
    alignItems: 'center',
    maxWidth: '1552px',
    margin: '0 auto',
    padding: '0 1rem',
    ...(isHome
      ? { paddingTop: '0.875rem', paddingBottom: '0.875rem' }
      : { height: '4.688rem' }),
  }

  /* Logo dimensions: larger on homepage (over the hero), compact on inner pages */
  const logoLinkStyle: React.CSSProperties = isHome
    ? { flexShrink: 0, display: 'block', width: '4.5rem', height: '4.063rem' }
    : { flexShrink: 0, display: 'block', height: '3rem', width: 'auto' }

  const logoImgStyle: React.CSSProperties = isHome
    ? { width: '100%', height: '100%', objectFit: 'contain' }
    : { height: '100%', width: 'auto', objectFit: 'contain' }

  /* Mobile header BG: semi-transparent on homepage hero, gradient on inner pages */
  const mobileHeaderBg = isHome
    ? 'rgba(0,0,0,0.25)'
    : 'transparent'   /* parent <header> already has the gradient */

  return (
    <header {...headerProps}>

      {/* ─────────────────────────────────────────────────────────────
          Global scoped styles
      ───────────────────────────────────────────────────────────────── */}
      <style suppressHydrationWarning>{`
        /* Show desktop / hide mobile above 1120px */
        @media (min-width: 1121px) {
          #desktop-header { display: flex !important; }
          #mobile-header  { display: none  !important; }
        }

        /* Nav item gap */
        .hdr-nav-list { gap: 2rem; }
        @media (min-width: 1121px) and (max-width: 1400px) {
          .hdr-nav-list { gap: 1.125rem; }
        }

        /* Centre-out underline on nav links */
        .hdr-link { position: relative; padding-bottom: 0.15em; }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 50%; right: 50%;
          height: 2px;
          background: #fff;
          transition: left 0.2s, right 0.2s;
        }
        .hdr-link:hover::after, .hdr-link.active::after { left: 0; right: 0; }

        /* Dropdown */
        .hdr-dropdown {
          display: none;
          position: absolute;
          top: 100%; left: 0;
          min-width: 13rem;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 200;
        }
        .hdr-group:hover .hdr-dropdown { display: block; }
      `}</style>

      {/* ── Desktop header (>1120px) ────────────────────────────────── */}
      <div id="desktop-header" style={desktopContainerStyle}>

        {/* Logo */}
        <Link href="/" aria-label="Moonbar home" style={logoLinkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/templates/moonbar/images/logo.svg"
            alt="Moonbar"
            style={logoImgStyle}
          />
        </Link>

        {/* Main nav */}
        <nav style={{ flex: 1, marginLeft: '4rem', minWidth: 0 }}>
          <ul
            className="hdr-nav-list"
            style={{
              listStyle: 'none',
              margin: 0, padding: 0,
              display: 'flex', alignItems: 'center', flexWrap: 'nowrap',
            }}
          >
            {NAV_LINKS.map((link) => {
              const href = resolveHref(link)
              const isActive  = !link.wallet && !link.chat && pathname === link.href
              const isExternal = link.wallet || link.chat

              if (link.children) {
                return (
                  <li key={link.label} className="hdr-group" style={{ position: 'relative', flexShrink: 0 }}>
                    <Link
                      href={link.href!}
                      className="hdr-link"
                      style={{ ...navStyle, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      {link.label}
                      <svg style={{ width: '0.6rem', height: '0.6rem', marginTop: '0.1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="hdr-dropdown">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: 'block',
                            padding: '0.5rem 1rem',
                            fontFamily: '"Overpass", sans-serif',
                            fontSize: '0.875rem',
                            color: '#626262',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = '#F068B5'; e.currentTarget.style.background = '#fdf0f8' }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = '#626262'; e.currentTarget.style.background = '' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.label} style={{ flexShrink: 0 }}>
                  {isExternal ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hdr-link" style={navStyle}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={href} className={`hdr-link${isActive ? ' active' : ''}`} style={navStyle}>
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* HELP — pinned right */}
        <Link
          href={HELP_LINK.href}
          className={`hdr-link${pathname === HELP_LINK.href ? ' active' : ''}`}
          style={{ ...navStyle, flexShrink: 0, marginLeft: '2rem' }}
        >
          {HELP_LINK.label}
        </Link>
      </div>

      {/* ── Mobile header (≤1120px) ─────────────────────────────────── */}
      <div
        id="mobile-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          background: mobileHeaderBg,
        }}
      >
        <Link href="/" aria-label="Moonbar home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/templates/moonbar/images/logo.svg"
            alt="Moonbar"
            style={{ height: '2.5rem', width: 'auto' }}
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: '#F068B5', border: 'none', borderRadius: '50%',
            padding: '0.4rem', color: '#fff', cursor: 'pointer', lineHeight: 0,
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile fly-out menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #eee', fontFamily: '"Overpass", sans-serif' }}>
          {[...NAV_LINKS, HELP_LINK].map((link) => {
            const href = resolveHref(link as any)
            const isExternal = (link as any).wallet || (link as any).chat
            return (
              <div key={link.label}>
                {(link as any).children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      style={{
                        width: '100%', textAlign: 'left',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem', fontWeight: 900,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                        background: 'none', border: 'none',
                        borderBottom: '1px solid #eee',
                        color: '#626262', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between',
                      }}
                      aria-expanded={servicesOpen}
                    >
                      {link.label} <span>{servicesOpen ? '−' : '+'}</span>
                    </button>
                    {servicesOpen && (
                      <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid #F068B5', marginLeft: '1rem' }}>
                        {(link as any).children.map((child: any) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            style={{ display: 'block', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: '#626262', textDecoration: 'none' }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    style={{ display: 'block', padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #eee', color: '#626262', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    style={{ display: 'block', padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #eee', color: '#626262', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      )}
    </header>
  )
}
