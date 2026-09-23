import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { getSmsConfig, buildSmsUri } from '@/lib/sms-config'

export const metadata: Metadata = {
  title: 'Psychic SMS Readings | Moonbar Psychic Tarot',
  description:
    'Chat privately with a Moonbar Psychic by SMS. Buy credits securely through the Moonbar Wallet using PayPal or card and enjoy a text reading with no premium rate number.',
}

export const revalidate = 3600

// ── Shared styles ────────────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontWeight: 900,
  fontSize: '1.875rem',
  lineHeight: 1.15,
  margin: '2.5rem 0 1rem',
  color: '#626262',
}

const proseStyle: React.CSSProperties = {
  fontFamily: '"Overpass", sans-serif',
  fontSize: '0.938rem',
  lineHeight: 1.45,
  color: '#626262',
  margin: '0 0 1rem',
}

const narrowStyle: React.CSSProperties = {
  width: 'min(calc(100% - 2rem), 820px)',
  marginInline: 'auto',
}

function BackToTop() {
  return (
    <div className="back-to-top-block text-center">
      <a href="#" className="back-to-top inline-block" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://moonbar.com.au/templates/moonbar/images/backtotop.svg"
          alt=""
          aria-hidden="true"
          style={{ width: '2.813rem', height: '2.813rem' }}
        />
      </a>
    </div>
  )
}

// ── Step circle ──────────────────────────────────────────────────────────────

function StepCircle({ n }: { n: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '3.75rem',
        height: '3.75rem',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f068b5 0%, #87f6ec 100%)',
        color: '#fff',
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 900,
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
      }}
    >
      {n}
    </div>
  )
}

// ── Benefit badge ────────────────────────────────────────────────────────────

function Benefit({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: '0.75rem 1rem',
        fontFamily: '"Overpass", sans-serif',
        fontSize: '0.938rem',
        color: '#626262',
      }}
    >
      <span style={{ color: '#F068B5', fontWeight: 700, marginRight: '0.4rem' }}>
        &#10003;
      </span>
      {label}
    </div>
  )
}

// ── FAQ item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      style={{
        borderBottom: '1px solid #e5e5e5',
        padding: '1.25rem 0',
      }}
    >
      <p
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 900,
          fontSize: '1rem',
          color: '#626262',
          margin: '0 0 0.5rem',
        }}
      >
        {q}
      </p>
      <p style={proseStyle}>{a}</p>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PsychicSmsReadingsPage() {
  const sms = getSmsConfig()
  const smsUri = sms.isLive ? buildSmsUri(sms.number!, sms.keyword!) : null

  // Safe display values — never render bracketed placeholders to visitors
  const displayKeyword = sms.keyword ?? null
  const displayNumber  = sms.number  ?? null

  return (
    <>
      <style suppressHydrationWarning>{`
        /* SMS three-step grid */
        .sms-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
          max-width: 1100px;
          margin: 2rem auto 0;
          padding: 0 1rem;
        }
        @media (max-width: 1120px) {
          .sms-steps {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
        }

        /* Benefits grid */
        .sms-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem 1rem;
          max-width: 820px;
          margin: 1.5rem auto 0;
          padding: 0 1rem;
        }
        @media (max-width: 768px) {
          .sms-benefits {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .sms-benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Introduction ───────────────────────────────────────────────── */}
      <section className="page-intro" style={{ background: '#f5f5f5' }}>
        <div className="page-intro__inner">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'SMS' },
            ]}
          />

          <div style={{ marginTop: '2rem' }}>
            <h1>Psychic SMS Readings</h1>

            <p className="page-intro__lead">
              Chat privately with one of Moonbar&apos;s gifted Psychic Readers by text message.
              Buy credits securely through the Moonbar Wallet using PayPal or card, then use your
              Wallet balance for your SMS reading &mdash; with no premium rate number.
            </p>

            <h3>Psychic guidance, straight to your phone</h3>

            {/* Secondary copy — only render the keyword/number sentence when live */}
            <p style={{ fontSize: '0.938rem', lineHeight: 1.45, marginTop: '0.75rem', color: '#626262', fontFamily: '"Overpass", sans-serif' }}>
              {sms.isLive
                ? `SMS readings give you time to ask questions and read your replies at your own pace. Simply top up your Moonbar Wallet, send ${displayKeyword} to ${displayNumber}, and continue your conversation by ordinary text message.`
                : 'SMS readings give you time to ask questions and read your replies at your own pace. Simply top up your Moonbar Wallet and continue your conversation by ordinary text message.'
              }
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.75rem' }}>
              <a
                href={sms.walletLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', textDecoration: 'none', minWidth: '14rem', justifyContent: 'center' }}
              >
                Buy SMS Credits
              </a>

              {smsUri && (
                <a
                  href={smsUri}
                  className="btn-green"
                  style={{ display: 'inline-flex', textDecoration: 'none', minWidth: '14rem', justifyContent: 'center' }}
                >
                  Start an SMS Reading
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Pink divider */}
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

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section
        className="content-section"
        style={{ background: 'linear-gradient(135deg, #f068b5 0%, #87f6ec 100%)', color: '#fff', padding: '3.75rem 0' }}
      >
        <div style={narrowStyle}>
          <h2
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 900,
              fontSize: '1.875rem',
              lineHeight: 1.15,
              color: '#fff',
              margin: '0 0 0.5rem',
              textAlign: 'center',
            }}
          >
            How to start a Psychic SMS Reading
          </h2>
          {/* White divider */}
          <div
            aria-hidden="true"
            style={{ width: '7.188rem', height: '0.313rem', background: '#fff', margin: '1rem auto 0' }}
          />
        </div>

        <div className="sms-steps">
          {/* Step 1 */}
          <div>
            <StepCircle n={1} />
            <h3
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#fff',
                margin: '0 0 0.75rem',
              }}
            >
              Buy SMS Credits
            </h3>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45, margin: 0 }}>
              Visit the Moonbar Wallet and choose your credit bundle. Pay securely using PayPal or
              a debit or credit card through Stripe.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <StepCircle n={2} />
            <h3
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#fff',
                margin: '0 0 0.75rem',
              }}
            >
              Send Your First Text
            </h3>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45, margin: 0 }}>
              {sms.isLive
                ? `Send ${displayKeyword} to ${displayNumber} from the mobile number connected to your Moonbar Wallet. This is not a premium rate number.`
                : 'Text the service keyword to our service number from the mobile connected to your Moonbar Wallet. This is not a premium rate number.'}
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <StepCircle n={3} />
            <h3
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#fff',
                margin: '0 0 0.75rem',
              }}
            >
              Continue Your Reading
            </h3>
            <p style={{ fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45, margin: 0 }}>
              Ask your question and continue your private conversation by SMS. The service cost is
              taken from your Moonbar Wallet credit balance rather than being charged as a premium
              rate text.
            </p>
          </div>
        </div>

        {/* Service note */}
        <p
          style={{
            fontFamily: '"Overpass", sans-serif',
            fontSize: '0.813rem',
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            marginTop: '2rem',
            padding: '0 1rem',
          }}
        >
          Standard SMS charges from your mobile network may apply. Please check your mobile plan if you are unsure.
        </p>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href={sms.walletLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              textDecoration: 'none',
              background: '#fff',
              color: '#F068B5',
              minWidth: '14rem',
              justifyContent: 'center',
            }}
          >
            Buy SMS Credits
          </a>
        </div>
      </section>

      {/* ── Benefits ───────────────────────────────────────────────────── */}
      <section className="content-section" style={{ background: '#fff', textAlign: 'center' }}>
        <div style={narrowStyle}>
          <h2 style={h2Style}>Why choose a Psychic SMS Reading?</h2>
          <p style={proseStyle}>
            A Psychic SMS Reading is a simple, discreet way to receive guidance without making a
            phone call or keeping a browser open. You can take time to consider your questions and
            return to your Psychic&apos;s messages whenever you need.
          </p>
        </div>

        <div className="sms-benefits">
          {[
            'No premium rate number',
            'Pay securely through the Moonbar Wallet',
            'Pay by PayPal or card',
            'Read and reply at your own pace',
            'Keep your messages on your phone',
            'No app or phone call required',
          ].map((label) => (
            <Benefit key={label} label={label} />
          ))}
        </div>

        {/* Closing CTA */}
        <div style={{ marginTop: '2rem' }}>
          {smsUri ? (
            <a
              href={smsUri}
              className="btn-green"
              style={{ display: 'inline-flex', textDecoration: 'none', minWidth: '14rem', justifyContent: 'center' }}
            >
              Start Your SMS Reading
            </a>
          ) : (
            <a
              href={sms.walletLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', textDecoration: 'none', minWidth: '14rem', justifyContent: 'center' }}
            >
              Buy SMS Credits
            </a>
          )}
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────────────────────── */}
      <section className="content-section" style={{ background: '#f5f5f5' }}>
        <div style={narrowStyle}>
          <h2 style={h2Style}>Psychic SMS Reading FAQs</h2>

          <FaqItem
            q="Is this a premium rate SMS service?"
            a="No. You purchase credits through the Moonbar Wallet and the service cost is taken from your Wallet balance. Your mobile network's normal SMS charges may still apply."
          />

          <FaqItem
            q="How do I pay for my SMS reading?"
            a="Choose a credit bundle in the Moonbar Wallet and pay securely using PayPal or a debit or credit card through Stripe."
          />

          <FaqItem
            q="How do I begin my reading?"
            a={
              sms.isLive
                ? `Once you have credits, text ${displayKeyword} to ${displayNumber} from the mobile number connected to your Moonbar Wallet. We will then guide you through starting your SMS reading.`
                : 'Once you have credits, text the service keyword to our service number from the mobile number connected to your Moonbar Wallet. We will then guide you through starting your SMS reading.'
            }
          />

          <FaqItem
            q="What happens if I run out of credits?"
            a="You will need to top up your Moonbar Wallet before you can continue your reading. Your messages will not be charged to your phone bill as premium rate texts."
          />
        </div>
      </section>

      <BackToTop />
    </>
  )
}
