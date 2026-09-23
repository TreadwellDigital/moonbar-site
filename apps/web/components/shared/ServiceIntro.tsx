'use client'

/**
 * Client component for inner service page intros.
 * Desktop: secondary copy always shown.
 * Mobile: secondary copy behind a disclosure toggle.
 */
import { useState } from 'react'
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'

interface ServiceIntroProps {
  h1: string
  lead: string
  h3: string
  secondary: string
  breadcrumbs?: BreadcrumbItem[]
}

export function ServiceIntro({ h1, lead, h3, secondary, breadcrumbs }: ServiceIntroProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="page-intro" style={{ background: '#f5f5f5' }}>
      <style suppressHydrationWarning>{`
        .si-desktop { display: block; }
        .si-mobile { display: none; }
        @media (max-width: 1120px) {
          .si-desktop { display: none; }
          .si-mobile { display: block; }
        }
      `}</style>

      <div className="page-intro__inner">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} />
        )}

        <h1 style={{ marginTop: breadcrumbs ? '2rem' : undefined }}>{h1}</h1>
        <p className="page-intro__lead">{lead}</p>
        <h3>{h3}</h3>

        {/* Desktop — always show secondary */}
        <div className="si-desktop">
          <p style={{ fontSize: '0.938rem', lineHeight: 1.15, marginTop: '0.75rem' }}>{secondary}</p>
        </div>

        {/* Mobile — disclosure */}
        <div className="si-mobile">
          <button
            aria-expanded={expanded}
            aria-controls="si-more"
            onClick={() => setExpanded(e => !e)}
            style={{
              background: 'none',
              border: 'none',
              color: '#F068B5',
              fontFamily: '"Overpass", sans-serif',
              fontSize: '0.875rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              padding: 0,
            }}
          >
            {expanded ? 'Read less ↑' : 'Read more ↓'}
          </button>
          {expanded && (
            <div id="si-more">
              <p style={{ fontSize: '0.875rem', lineHeight: 1.15, marginTop: '0.5rem' }}>{secondary}</p>
            </div>
          )}
        </div>
      </div>

      {/* Pink divider — 7.188rem × 0.375rem */}
      <div
        aria-hidden="true"
        style={{
          width: '7.188rem',
          height: '0.375rem',
          background: '#F068B5',
          margin: '2.5rem auto 0',
        }}
      />
    </section>
  )
}
