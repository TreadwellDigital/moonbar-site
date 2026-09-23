import type { Metadata } from 'next'
import Link from 'next/link'
import { getRegionConfig } from '@/lib/region.config'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { IntroSection } from '@/components/home/IntroSection'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { JsonLd, buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema, buildFaqSchema } from '@/components/seo/JsonLd'

export const revalidate = 3600

const HOME_FAQS = [
  { question: 'How do I speak to a psychic at Moonbar?', answer: 'Simply call one of the numbers displayed on our site. You can choose a specific psychic reader by entering their PIN number when prompted, or let fate decide and connect to the next available reader.' },
  { question: 'How much does a psychic phone reading cost?', answer: 'Moonbar offers two payment options. Our 20-minute special offer allows you to speak for 20 minutes for a fixed price when paying by card. You can also call our standard number and pay per minute.' },
  { question: "Are Moonbar's psychic readers genuine?", answer: 'All of our psychics are vetted by our UK-based Psychic Bureau and thoroughly tested before they are able to perform readings for Moonbar.' },
  { question: 'What services does Moonbar offer?', answer: 'Moonbar offers live psychic phone readings, SMS psychic readings and live psychic chat. Our readers specialise in tarot, clairvoyance, mediumship, love and relationships, life guidance, career advice, spiritual counselling, astrology, and angel card readings.' },
  { question: 'Is there a money-back guarantee?', answer: 'Yes. If you call our standard price number and are not satisfied with your reading, we offer a full refund for your call.' },
  { question: 'Are the psychic readings available 24/7?', answer: 'Yes — Moonbar has psychic readers available 24 hours a day, 365 days a year, located across the world.' },
]

export async function generateMetadata(): Promise<Metadata> {
  const rc = getRegionConfig()
  const title = 'Moonbar Psychic Tarot | Live Psychic & Spiritual Readings'
  const description = 'Welcome to Moonbar Live Psychic and Tarot readings. Get guidance on all areas of your life to help you move forward and look positively to the future, by speaking to one of our handpicked, gifted Psychic Readers today.'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url:   `https://${rc.domain}`,
      images: [{ url: 'https://moonbar.com.au/images/homeimage/moonbar.jpeg' }],
    },
  }
}

function BackToTop() {
  return (
    <div className="text-center py-6">
      <a href="#" className="back-to-top inline-block" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://moonbar.com.au/templates/moonbar/images/backtotop.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full"
        />
      </a>
    </div>
  )
}

export default function HomePage() {
  const rc = getRegionConfig()

  return (
    <>
      <JsonLd schemas={[
        buildOrganizationSchema(),
        buildWebSiteSchema(),
        buildLocalBusinessSchema(),
        buildFaqSchema(HOME_FAQS),
      ]} />

      {/* ── 2. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <picture>
          <source
            media="(max-width: 1120px)"
            srcSet="https://moonbar.com.au/images/homeimage/homemobile.jpg"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/images/homeimage/home.jpg"
            alt="Moonbar Psychic Tarot"
            className="w-full block"
          />
        </picture>

        {/* Title — 2.5rem from bottom */}
        <div className="absolute left-0 right-0 text-center text-white" style={{ bottom: '2.5rem' }}>
          <h1
            className="font-display font-black text-white"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Welcome to Moonbar
          </h1>
          <h2
            className="font-display text-white mt-1"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', fontWeight: 500, letterSpacing: '0.05em' }}
          >
            Live Psychic &amp; Tarot
          </h2>
        </div>
      </section>

      {/* ── 3. Opening introduction ─────────────────────────────────────── */}
      <IntroSection />

      {/* ── 4. Mobile call-offer block (≤1120px only) ───────────────────── */}
      <MobileCallBlock />

      {/* ── 5. Available readers ─────────────────────────────────────────── */}
      <section className="bg-white pt-14 pb-4">
        <div className="container-wide">
          <h2
            className="font-display font-black text-center"
            style={{ fontSize: '2.5rem', lineHeight: 1.1, color: '#626262' }}
          >
            Moonbar&apos;s Available Psychic Readers
          </h2>
        </div>
        <ReaderFeed />
      </section>

      {/* ── 6. How to make a Psychic call ───────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f068b5 0%, #d888c1 25%, #b4b9d4 50%, #9cd9e1 76%, #87f6ec 100%)',
          padding: '3.75rem 1rem',
        }}
      >
        <div className="container-wide text-center text-white">
          {/* 2.5rem Raleway heading */}
          <h2 className="font-display font-black text-white" style={{ fontSize: '2.5rem' }}>
            How to make a Psychic call
          </h2>
          <span className="white-divider" />

          <div className="flex flex-col lg:flex-row justify-center gap-10">
            {[
              {
                img: 'https://moonbar.com.au/images/icons/crystal.png',
                title: 'Choose a Psychic Reader',
                body: 'Take a moment to browse through our available Psychic Readers. Their skill set ranges from Tarot readings, Love and Relationship readings, to readings using instruments such as the Crystal Ball. Once you have selected your chosen Psychic Reader, make a note of their PIN number as you will need to enter this to connect to that Reader.',
              },
              {
                img: 'https://moonbar.com.au/images/icons/smartphone.png',
                title: 'Connecting',
                body: "You can call Moonbar Psychics via Credit and Debit card, by calling the number displayed on the website. Payments are taken in our secure over the phone system. It's really simple to use and the prompts on the phone call will guide you through the process. You don't always have to pre-select one of the Psychic Readers, you do also have the option to let fate decide and connect to the next available Psychic Reader.",
              },
              {
                img: 'https://moonbar.com.au/images/icons/question.png',
                title: 'During the call',
                body: "Once you're connected, we always advise having a pen and paper at the ready to take a note of the important messages that you are about to hear. Most importantly, enjoy your Psychic Reading! Remember, all of our Psychic Readers love receiving feedback, so please do go onto their profile and leave a review.",
              },
            ].map(({ img, title, body }) => (
              <div key={title} className="text-center" style={{ maxWidth: '17.5rem', margin: '0 auto' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={title}
                  className="mx-auto mb-4"
                  style={{ width: '10.375rem', height: '10.375rem', objectFit: 'contain' }}
                />
                <h3 className="font-sans font-black text-white mb-3" style={{ fontSize: '1.563rem' }}>
                  {title}
                </h3>
                <p className="text-white/90" style={{ fontSize: '1.125rem', lineHeight: 1.15 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. App banner ───────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: '3.5rem 1rem' }} className="text-center">
        <div className="container-wide">
          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262' }}>
            Available to Download on
          </h2>
          <a
            href="https://play.google.com/store/apps/details?id=ms.allstar.android.moonbar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6"
            aria-label="Android App on Google Play"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://moonbar.com.au/templates/moonbar/images/google.png"
              alt="Android App on Google Play"
              style={{ width: '17.375rem', height: '5.188rem', objectFit: 'contain' }}
            />
          </a>
        </div>
      </section>

      {/* ── 8. Services information ─────────────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: '3.5rem', paddingBottom: '1rem' }}>
        <div className="container-narrow text-center">

          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262', margin: '0 0 1rem' }}>
            Psychic Phone Readings
          </h2>
          <p style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15, marginTop: 0 }}>
            Speaking to a Psychic over the phone is one of the easiest and quickest ways to gain guidance. We have many Psychics live 24/7, located across the world that are awaiting your call.
          </p>
          <p style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15, marginTop: '0.75rem' }}>
            You have 2 payment options for your Psychic call - either pay by Phonebill or by Card. Psychic Readings by Phonebill are charged at $2.75 per minute - additional mobile charges may apply. Or select to call and pay by Card for fixed prices and options - look out for special discounts and offers when paying by card. Call our Psychics today!
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary">Call a Psychic Now</Link>
          </div>

          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262', margin: '2.5rem 0 1rem' }}>
            Psychic SMS Readings
          </h2>
          <p style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15, marginTop: 0 }}>
            Chat privately with one of Moonbar&apos;s gifted Psychic Readers by text message. Buy credits securely through the Moonbar Wallet using PayPal or card, then use your Wallet balance for your SMS reading &mdash; with no premium rate number.
          </p>
          <p style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15, marginTop: '0.75rem' }}>
            SMS readings give you time to ask questions and read your replies at your own pace. Top up your Moonbar Wallet, then follow the current keyword and number instructions on the SMS page to begin.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-sms-readings" className="btn-primary">Discover SMS Readings</Link>
          </div>

          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262', margin: '2.5rem 0 1rem' }}>
            Psychic Live Chat Readings
          </h2>
          <p style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15, marginTop: 0 }}>
            Chat to our gifted psychics in your browser, no call charges! Once you have logged in and added some credit you can start your LIVE 1 on 1 in browser reading. You can filter psychics based on skill and rating to ensure you always make the best possible connection with your psychic. Keep an eye out for special offers and credit promotions!
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={rc.chatUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start Live Chat
            </a>
          </div>
        </div>
        <BackToTop />
      </section>

      {/* ── 9 & 10. Why speak + What to expect — one continuous white flow ─ */}
      <section className="bg-white" style={{ paddingBottom: '1rem' }}>
        <div className="container-narrow text-center">

          {/* Why speak */}
          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262', margin: '0 0 1rem' }}>
            Why Speak to Moonbar&apos;s gifted Psychics?
          </h2>
          <div style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15 }}>
            {[
              "- Having a Psychic Reading over the phone can often seem a little intimidating. Moonbar's Psychic readers are calming, friendly and will reassure you when you first connect. -",
              "- We understand that you may wish to speak with a Psychic at any point throughout the day, that's why we have Psychics live on Moonbar 24 hours a day, 365 days a year. -",
              "- If you are calling on our standard price number, we offer a money-back guarantee, providing you with a full refund for your call in the unlikely event that you are not satisfied with your call -",
              "- Our Psychic Phone readings are priced extremely competitively and give you fantastic value for money versus other Psychic services -",
              "- All of our Psychics are vetted by our UK based Psychic Bureau and are thoroughly tested before being able to perform Psychic Readings for Moonbar Psychics. -",
              "- We offer some incredible special offers throughout the year. Keep your eyes peeled! -",
              "- The Moonbar mobile app makes speaking to a Psychic reader even easier! Download the Android app now! -",
              "- Moonbar Psychics has quickly become one of the biggest providers of Psychic readings in Australia and as we continue to grow, we will be releasing new features to make your Moonbar experience even better! -",
            ].map((line, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : '0.75rem' }}>{line}</p>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary">Call Moonbar&apos;s Psychics Now</Link>
          </div>

          {/* What to expect — 2.5rem below the CTA above */}
          <h2 className="font-display font-black" style={{ fontSize: '1.875rem', color: '#626262', margin: '2.5rem 0 1rem' }}>
            What to Expect When Calling?
          </h2>
          <div style={{ fontSize: '0.938rem', color: '#626262', lineHeight: 1.15 }}>
            <p style={{ marginTop: 0 }}>It&apos;s just normal that when you first connect over the phone to your chosen Psychic reader that they will ask you to confirm your name, date of birth and that you are or have the bill payers permission to make your Psychic call. These are regulatory requirements and once you have confirmed these details, the Psychic, Clairvoyant, Medium or Tarot reader that you have connected to will then ask you to advise the reason of your call.</p>
            <p style={{ marginTop: '0.75rem' }}>If you would like your chosen Psychic Reader to look at a specific area; it&apos;s a good idea to tell the Psychic at the start of the reading so they can focus on the subject in depth. You could also choose to have a &apos;general&apos; reading which will give you overall insight on your life and highlight any areas that may be coming up. Once you have chosen your reader, make a note of their personal 4 digit pin number.</p>
            <p style={{ marginTop: '0.75rem' }}>Whether you choose to pay by credit or debit card, or via your phonebill &ndash; simply follow the prompt instructions on the phone and you will be put through to your reader. If you don&apos;t mind which Psychic you speak to and decide to leave it to fate, then you will automatically be put through to the next available Psychic!</p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary">Call Moonbar&apos;s Psychics Now</Link>
          </div>
        </div>
        <BackToTop />
      </section>

      {/* ── 11. Live-chat promo above footer ────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(35deg, #f068b5 0%, #d888c1 25%, #b4b9d4 50%, #9cd9e1 76%, #87f6ec 100%)',
          padding: '3rem 1rem',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://moonbar.com.au/templates/moonbar/images/footerbox_logo.png"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto opacity-20 pointer-events-none hidden md:block"
          style={{ objectFit: 'contain', objectPosition: 'right center' }}
        />
        <div className="container-wide relative z-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center" style={{ flexWrap: 'nowrap' }}>
            <div className="text-center md:text-left">
              <h2 className="font-display font-black text-white" style={{ fontSize: '1.875rem' }}>
                NEW! Live Psychic Chat!
              </h2>
              <p className="text-white/90 mt-1">Chat to our readers in your browser</p>
            </div>
            <a href={rc.chatUrl} target="_blank" rel="noopener noreferrer" className="btn-green whitespace-nowrap">
              Start Live Chat &gt;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
