import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Live Tarot Readings | Moonbar Psychic Tarot',
}

export const revalidate = 3600

function BackToTop() {
  return (
    <div className="back-to-top-block text-center">
      <a href="#" className="back-to-top inline-block" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://moonbar.com.au/templates/moonbar/images/backtotop.svg" alt="" aria-hidden="true" style={{ width: '2.813rem', height: '2.813rem' }} />
      </a>
    </div>
  )
}

const tarotItems = [
  {
    icon: 'https://moonbar.com.au/images/icons/tarot1.png',
    title: 'The Major Arcana Cards',
    body: 'The Major Arcana cards represent a journey to spiritual-awareness and illustrate the various stages we encounter as we search for a greater understanding. When a Tarot reading is mostly made up of these cards, the client is usually experiencing life-changing events which will have long-term influences. These are important lessons the client must pay attention to in order to move forward.',
  },
  {
    icon: 'https://moonbar.com.au/images/icons/tarot2.png',
    title: 'The Minor Arcana Cards',
    body: 'The Minor Arcana consists of four suits: Cups, Pentacles, Swords and Wands. Each suit consists of 14 Tarot cards, including 10 numbered and 4 Court Cards. The numbered cards reflect everyday life situations, while to Tarot Court Cards reflect personality-types or actual people. When a Tarot reading is mostly made up of these cards, the client is dealing with day-to-day issues.',
  },
  {
    icon: 'https://moonbar.com.au/images/icons/tarot3.png',
    title: 'Suit of Wands',
    body: 'The Suit of Wands is representative of the element fire. Its Tarot meaning is associated with inspiration, spirituality, strength, creativity, ambition and determination. They address our personalities, egos and personal energy.',
  },
  {
    icon: 'https://moonbar.com.au/images/icons/tarot4.png',
    title: 'Suit of Pentacles',
    body: 'The Suit of Pentacles is representative of the element earth. Its tarot meaning is associated with material aspects of life including property, money, work and business. The negative aspects of the suit of pentacles include being greedy, overly materialistic and possessive.',
  },
  {
    icon: 'https://moonbar.com.au/images/icons/tarot5.png',
    title: 'Suit of Cups',
    body: 'The Suit of Cups is representative of the element water. Its Tarot meaning is associated with relationships, love, feelings and connections. The suit of cups Tarot cards indicate what you are thinking with your heart rather than your head, and are linked to imagination, creativity and fanaticism.',
  },
  {
    icon: 'https://moonbar.com.au/images/icons/tarot6.png',
    title: 'Suit of Swords',
    body: 'The Suit of Swords is representative of the element air. Its Tarot meaning is associated with force, power, oppression, action, conflict and courage. This suit can also mean hatred and enemies, and of all the suits, this one is considered the most dangerous and powerful.',
  },
]

export default function TarotCardReadingsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Tarot Readings"
        lead="The Tarot cards work well when looking at a specific concern or to answer an important question for you. They can highlight your past, present and future, providing you with the choices that you have on your journey forward in life."
        h3="Speak to Moonbar's Tarot Readers now"
        secondary="The Tarot cards originate back to the 14th Century and is the French term for a special pack of playing cards popularly used for the purpose of divination. Many Psychic readers use Tarot cards to strengthen the link with you and focus more in depth on your situation, giving you more insight to circumstances and outcomes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Tarot Readings' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <HowToSection />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>Discover more about Tarot Readings</h2>
          <style suppressHydrationWarning>{`
            .tarot-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              margin-top: 1.5rem;
            }
            @media (max-width: 768px) {
              .tarot-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="tarot-grid">
            {tarotItems.map((item) => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt={item.title} style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Tarot Reading?</h2>
          <p>Tarot cards are used to intuitively guide you for your highest good and wellbeing. Whatever your circumstances, the Tarot reader will tune in to your energy to reveal, through the cards, a story that weaves together your past, present, and future allowing you to understand, heal, and embrace the options and opportunities around and ahead of you.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Tarot Reader Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Tarot Reading work over the phone?</h2>
          <p>Connecting to your energy through their Psychic ability, a Tarot reader will cast one or more cards that reflect your past, present, and future circumstances. Tarot readings are a powerful way of establishing what or who is keeping you stuck and for providing outcomes and solutions to your deepest and most difficult dilemmas &ndash; some of which you may not even be aware of.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Tarot Reader Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
