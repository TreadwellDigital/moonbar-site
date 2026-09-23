import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cookies Policy',
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

const h2Style: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontSize: '1.25rem',
  fontWeight: 900,
  marginTop: '2rem',
  marginBottom: '0.75rem',
  color: '#626262',
}

const pStyle: React.CSSProperties = {
  marginBottom: '1rem',
}

export default function CookiesPolicyPage() {
  return (
    <>
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3.75rem 1rem', fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', lineHeight: 1.45, color: '#626262' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Cookies Policy' },
        ]} />
        <h1 style={{ fontFamily: '"Raleway", sans-serif', fontSize: '1.875rem', fontWeight: 900, color: '#626262', marginBottom: '1.5rem', marginTop: '2rem' }}>
          Cookies Policy
        </h1>

        <p style={pStyle}>
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
        </p>
        <p style={pStyle}>
          A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer&apos;s hard drive.
        </p>

        <h2 style={h2Style}>Strictly necessary cookies</h2>
        <p style={pStyle}>
          These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.
        </p>
        {/* TODO: List specific strictly necessary cookies and their purposes before launch */}

        <h2 style={h2Style}>Analytical/performance cookies</h2>
        <p style={pStyle}>
          They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
        </p>
        {/* TODO: List specific analytical cookies and their purposes before launch */}

        <h2 style={h2Style}>Functionality cookies</h2>
        <p style={pStyle}>
          These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
        </p>
        {/* TODO: List specific functionality cookies and their purposes before launch */}

        <h2 style={h2Style}>Targeting cookies</h2>
        <p style={pStyle}>
          These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.
        </p>
        {/* TODO: List specific targeting cookies and third-party vendors before launch */}

        <h2 style={h2Style}>Google Analytics</h2>
        <p style={pStyle}>
          We use Google Analytics to collect information about how visitors use our site. Google Analytics stores information about what pages you visit, how long you are on the site, how you got here and what you click on. We do not collect or store your personal information (e.g. your name or address) so this information cannot be used to identify who you are.
        </p>
        <p style={pStyle}>
          We do not allow Google to use or share our analytics data. You can opt out of Google Analytics by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#F068B5' }}>
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: '#fff8e1', border: '2px solid #f9a825', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', color: '#626262' }}>
          <p style={{ margin: 0 }}>
            <strong>Note for site owner / legal review before launch:</strong> This policy requires legal review before launch to reconcile named cookies and vendors with the rebuilt site. Remove any legacy references (Joomla, retired vendors) only after owner/legal approval. A full cookie audit should be carried out and this page updated with the actual cookies set by the live site.
          </p>
        </div>
      </main>

      <BackToTop />
    </>
  )
}
