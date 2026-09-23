import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Angel Card Readings | Moonbar Psychic Tarot',
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

export default function AngelCardReadingsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Angel Card Readings"
        lead="Some of our Psychics specialise in Angel Card Readings and have a lot of knowledge about Guardian Angels. These readings are often quite spiritually based but can highlight concerns or difficulties that you may be facing in life."
        h3="Speak to Moonbar's Angel Card Readers now"
        secondary="It is said that our Guardian Angel is always around us but is not allowed to help us unless asked. Speak to one of our specialist Angel readers and gain insight and guidance on your guardian angel and how they are waiting to help you."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Angel Card Readings' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is an Angel Card Reading?</h2>
          <p>Angel Cards are an accessible and easy way to connect with the Angelic Realm. They provide loving guidance and messages of encouragement and hope. Angel Card readings are gentle and kind and if you&apos;re having an especially tough time, they are the perfect way to ease yourself through your troubles to find authentic ways to heal and soothe.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does an Angel Card Reading work over the phone?</h2>
          <p>If you&apos;re seeking answers from an Angel Card reading you are more likely to already aware of the Angels who surround you. As you connect to your reader you will naturally feel a strong and compassionate exchange of energy as your Angels get to work on channeling their loving guidance with extra special care to help put you back together again.</p>
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
