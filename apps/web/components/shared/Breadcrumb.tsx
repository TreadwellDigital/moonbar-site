import Link from 'next/link'

export interface BreadcrumbItem {
  /** Display text */
  label: string
  /** href present on ancestor levels; omitted on the current page */
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

/**
 * Inner-page breadcrumb trail.
 * Spec: Overpass 0.625rem, left-aligned, ~1rem top padding.
 * Ancestor levels render as links; current page is plain text.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        paddingTop: '1rem',
        textAlign: 'left',
        fontFamily: '"Overpass", sans-serif',
        fontSize: '0.625rem',
        lineHeight: 1.4,
        color: '#888',
      }}
    >
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          {i > 0 && (
            <span aria-hidden="true" style={{ margin: '0 0.35em', color: '#bbb' }}>
              &rsaquo;
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              style={{ color: '#888', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" style={{ color: '#555' }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
