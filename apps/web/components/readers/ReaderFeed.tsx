/**
 * ReaderFeed — renders the Allstar embed feed.
 * The embed script is loaded globally in app/layout.tsx:
 *   <script type="module" src="https://feeds.allstar.ms/embed.js" data-psychic-feed data-site="mb-au" />
 *
 * The Reader type and sub-components (ReaderCard, ReaderModal) are kept for
 * reference but are no longer rendered by this component.
 */

export interface Reader {
  id: string
  name: string
  pin: string
  photoUrl: string
  stars: number
  starCount: number
  skills: string[]
  tagline: string
  readingCount: number
  status: 'online' | 'busy' | 'offline'
  ratePerMin: number
  isNew: boolean
  isPinned: boolean
}

interface ReaderFeedProps {
  /** Optional section heading displayed above the embed. */
  heading?: string
}

export function ReaderFeed({ heading }: ReaderFeedProps = {}) {
  return (
    <section style={{ background: '#ebebeb', paddingBottom: '2rem' }}>
      {heading && (
        <div className="container-wide text-center" style={{ paddingTop: '3.5rem', paddingBottom: '1rem' }}>
          <h2
            className="font-display font-black"
            style={{ fontSize: '2.5rem', lineHeight: 1.1, color: '#626262' }}
          >
            {heading}
          </h2>
        </div>
      )}
      <div id="psychic-feed" />
    </section>
  )
}
