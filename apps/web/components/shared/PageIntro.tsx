import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'

interface PageIntroProps {
  breadcrumbs: BreadcrumbItem[]
  children: React.ReactNode
}

/**
 * Light-grey page-introduction wrapper used on inner pages that don't use ServiceIntro.
 * Renders breadcrumb at top, children (h1, lead paragraph etc.) centred below,
 * then closes with the 7.188rem × 0.375rem pink divider.
 */
export function PageIntro({ breadcrumbs, children }: PageIntroProps) {
  return (
    <section className="page-intro" style={{ background: '#f5f5f5' }}>
      <div className="page-intro__inner">
        <Breadcrumb items={breadcrumbs} />
        <div style={{ marginTop: '2rem' }}>
          {children}
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
