/**
 * Shared "How to make a Psychic call" section.
 * Used on homepage and all inner pages that require it.
 * Full-width brand gradient — do not create a smaller inner-page variant.
 */

export function HowToSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #f068b5 0%, #87f6ec 100%)',
        padding: '3.75rem 1rem',
        textAlign: 'center',
      }}
    >
      <style suppressHydrationWarning>{`
        .how-to-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          max-width: 1552px;
          margin: 2rem auto 0;
        }
        .how-to-col {
          flex: 0 0 17.5rem;
          max-width: 17.5rem;
        }
        @media (max-width: 1120px) {
          .how-to-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>

      <h2
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#ffffff',
          margin: '0 0 0',
          lineHeight: 1.1,
        }}
      >
        How to make a Psychic call
      </h2>

      {/* White divider */}
      <div
        style={{
          width: '7.188rem',
          height: '0.313rem',
          background: '#ffffff',
          margin: '1rem auto 0',
        }}
      />

      <div className="how-to-grid">
        {/* Step 1 */}
        <div className="how-to-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/images/icons/crystal.png"
            alt="Crystal ball icon"
            style={{ width: '10.375rem', height: '10.375rem', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }}
          />
          <p
            style={{
              fontFamily: '"Overpass", sans-serif',
              fontSize: '0.938rem',
              lineHeight: 1.15,
              color: '#ffffff',
              margin: 0,
            }}
          >
            Browse through our available readers and choose the Psychic reader you wish to speak with.
          </p>
        </div>

        {/* Step 2 */}
        <div className="how-to-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/images/icons/smartphone.png"
            alt="Smartphone icon"
            style={{ width: '10.375rem', height: '10.375rem', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }}
          />
          <p
            style={{
              fontFamily: '"Overpass", sans-serif',
              fontSize: '0.938rem',
              lineHeight: 1.15,
              color: '#ffffff',
              margin: 0,
            }}
          >
            Call either of the numbers at the top of the page (or below on mobile) and enter the PIN number of your chosen Psychic Reader or press 0 to be connected to the next available Reader.
          </p>
        </div>

        {/* Step 3 */}
        <div className="how-to-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://moonbar.com.au/images/icons/question.png"
            alt="Question mark icon"
            style={{ width: '10.375rem', height: '10.375rem', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }}
          />
          <p
            style={{
              fontFamily: '"Overpass", sans-serif',
              fontSize: '0.938rem',
              lineHeight: 1.15,
              color: '#ffffff',
              margin: 0,
            }}
          >
            Enjoy your reading and feel free to ask your Psychic reader as many questions as you like.
          </p>
        </div>
      </div>
    </section>
  )
}
