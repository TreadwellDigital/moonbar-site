import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Life Questions Psychic Readings | Moonbar Psychic Tarot',
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

export default function LifeQuestionsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Life Question Readings"
        lead="Our supportive Psychic Readers are here to help, offering guidance and clarity so that you feel confident in moving forward in your life and are ready for new beginnings."
        h3="Speak to Moonbar's Life Question Readers now"
        secondary="A breakdown in family relationships can be one of the most difficult and stressful things anyone has to go through. Emotional issues such as separation and divorce, especially when children are caught in the middle can leave you upset and confused, making decisions and handling your feelings even harder."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Life Questions' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Life Question Psychic Reading?</h2>
          <p>Family relationships, a change in career, a house move. A life question reading covers all of these topics and more. The nice thing about a life reading is that it can cover all bases; we have a super team of readers who are ready and willing to answer any question that may have you stumped and yearning for a reply.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Psychic Life Question Reading work over the phone?</h2>
          <p>Lucky for you, life readings can be answered by any of our Psychic readers. Whether you&apos;re wondering if there&apos;s a holiday coming up for you, or you&apos;re concerned about a change in the home, your reader will connect with their guides and provide you with an intuitive and helpful life reading. A phone call with one of our talented Psychics is great for life readings because the reader can link in through the vibrations in your voice and provide you with a positive and accommodating reading.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />

      <HowToSection />
    </>
  )
}
