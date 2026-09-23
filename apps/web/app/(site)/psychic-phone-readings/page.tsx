import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { PageIntro } from '@/components/shared/PageIntro'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Live Psychic Phone Readings | Moonbar Psychic Tarot',
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

export default function PsychicPhoneReadingsPage() {

  return (
    <>
      {/* Intro */}
      <PageIntro breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Phone Readings' },
      ]}>
        <h1>Live Psychic Phone Readings</h1>
        <p className="page-intro__lead">Gain quick, informative Psychic insight by having a Psychic phone reading with one of Moonbar Psychic&apos;s gifted Readers.</p>
        <p>Our new Click to Call Now buttons make it easier for you to have a Psychic Reading. You can use the new &ldquo;Quick Connect&rdquo; button, which enters the PIN number of your chosen Psychic, connecting you to your chosen Psychic Reader even quicker!</p>
        <h3>Speak to Moonbar&apos;s Psychic Readers now</h3>
      </PageIntro>

      {/* Mobile call block */}
      <MobileCallBlock />

      {/* Reader feed */}
      <ReaderFeed heading="All Moonbar's Psychic Readers" />

      {/* How to section */}
      <HowToSection />

      {/* What is a Psychic Reading? */}
      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Psychic Reading?</h2>
          <p>A Psychic reading offers insight and guidance to help you understand yourself and your circumstances better. A Psychic reading makes you aware of the choices available to you and you can then make appropriate decisions for your highest good and wellbeing. A Psychic reading opens you up to possibilities you could not have imagined for yourself and lifts doubt and worry from your life.</p>
          <p>Often, some people find that they are drawn specifically to a Psychic that would be most suited to their reading. You can either take a note of the Psychic&apos;s PIN number and enter when prompted, or, use the &ldquo;Quick Connect&rdquo; button to let us connect you automatically.</p>
          <p>Love and relationships are always a regular theme as are career and life and of course romance too. We have a great range of gifted Psychic readers and we are adding new Psychic readers every week as our popularity grows. If you have never called a phone Psychic then why not do it today, we are sure you won&apos;t regret it.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      {/* How does a Psychic Reading work over the phone? */}
      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Psychic Reading work over the phone?</h2>
          <p>In a very similar way to a face-to-face reading. Some Psychics prefer to work on the telephone so they can avoid reading body language and then the reading is 100% intuitive. The Psychic &lsquo;tunes in&rsquo; to the caller&apos;s energy using their heightened sensory skills and divination tools such as Tarot cards or pendulums. Once a connection is established the Psychic then delivers guidance to the client.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
