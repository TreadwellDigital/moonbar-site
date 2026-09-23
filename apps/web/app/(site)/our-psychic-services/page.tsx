import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServicesIntroClient } from './IntroClient'
import { PageIntro } from '@/components/shared/PageIntro'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Psychic Services | Moonbar Psychic Tarot',
  }
}

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

const SERVICES = [
  { icon: 'icon1.png', title: 'Psychic Readings', body: 'Psychic Readings offer guidance and insight into all areas of your life, opening up new possibilities.', href: '/our-psychic-services/psychic-readings' },
  { icon: 'icon2.png', title: 'Love & Relationships', body: "If you're seeking answers on your love life, speak with one of our gifted Psychic relationship experts.", href: '/our-psychic-services/love-and-relationship-psychic-readings' },
  { icon: 'icon3.png', title: 'Life Questions', body: "Need answers to life's big questions? Call one of our expert Psychics Readers today.", href: '/our-psychic-services/life-questions-psychic-reading' },
  { icon: 'icon4.png', title: 'Job & Career', body: 'Not sure whether now is a right time for a career change? Speak to our Psychics for the answers!', href: '/our-psychic-services/job-and-career-psychic-readings' },
  { icon: 'icon5.png', title: 'Tarot Readings', body: 'Select and speak to a Tarot reader and let the cards intuitively guide you to positive energies.', href: '/our-psychic-services/tarot-card-readings' },
  { icon: 'icon6.png', title: 'Spiritual Readings', body: 'Open up your mind to the spiritual world, super-charge your personal development and growth.', href: '/our-psychic-services/spiritual-readings' },
  { icon: 'icon7.png', title: 'Psychic Mediums', body: 'Connect with the Spirit world when you have a Mediumship reading with our gifted Psychic Mediums.', href: '/our-psychic-services/psychic-mediumship-reading' },
  { icon: 'icon8.png', title: 'Angel Card Readings', body: 'Connect to the Angelic Realm with an Angel Card Reading from one of our gifted Readers.', href: '/our-psychic-services/angel-card-readings' },
  { icon: 'icon9.png', title: 'Clairvoyant Readings', body: "Explore your Past, Present and Future by speaking with Moonbar's gifted Clairvoyant Readers.", href: '/our-psychic-services/clairvoyant-readings' },
]

export default function OurPsychicServicesPage() {

  return (
    <>
      <style suppressHydrationWarning>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.75rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        @media (max-width: 1120px) and (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Intro */}
      <PageIntro breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our Services' },
      ]}>
        <h1>Our Psychic Services</h1>
        <p className="page-intro__lead">The team at Moonbar Psychic Tarot specialise in Psychic Readings over the phone. Our Psychic Readers can give you the Psychic advice and guidance that you are seeking.</p>
        <ServicesIntroClient />
      </PageIntro>

      {/* Mobile call block */}
      <MobileCallBlock />

      {/* Services grid */}
      <section style={{ background: '#fff' }}>
        <div className="services-grid">
          {SERVICES.map(({ icon, title, body, href }) => (
            <div key={title} style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://moonbar.com.au/images/icons/${icon}`}
                alt={title}
                style={{ width: '6rem', height: '6rem', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }}
              />
              <h3 style={{ fontFamily: '"Raleway", sans-serif', fontSize: '1.25rem', fontWeight: 900, color: '#626262', margin: '0 0 0.75rem' }}>
                {title}
              </h3>
              <p style={{ fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', color: '#626262', lineHeight: 1.5, margin: '0 0 1rem' }}>
                {body}
              </p>
              <Link
                href={href}
                style={{ color: '#F068B5', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}
              >
                Click to Discover More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reader feed */}
      <ReaderFeed heading="Moonbar's Available Psychic Readers" />

      {/* How to section */}
      <HowToSection />

      <BackToTop />
    </>
  )
}
