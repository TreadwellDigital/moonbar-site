'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'moonbar_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY)
      if (!stored) setVisible(true)
    } catch {}
  }, [])

  function dismiss(value: 'accepted' | 'declined') {
    try { localStorage.setItem(COOKIE_KEY, value) } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] border-t text-sm"
      style={{
        background: 'rgba(44,44,44,0.97)',
        borderColor: 'rgba(255,255,255,0.1)',
        fontFamily: 'Overpass, sans-serif',
        padding: '1rem',
      }}
    >
      <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-black text-white mb-1">Our Cookie Policy</p>
          <p style={{ color: '#aaa' }}>
            If your browser settings permit, we have placed cookies on your computer for analytics and other
            site-improvement purposes. You can give or withdraw consent at any time by{' '}
            <Link href="/cookies-policy" className="underline hover:text-white transition-colors" style={{ color: '#F068B5' }}>
              changing your cookie settings
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          <button
            onClick={() => dismiss('accepted')}
            className="text-xs font-black uppercase px-5 py-2 transition-opacity hover:opacity-80"
            style={{
              background: 'linear-gradient(#F068B5 0%, #B74F8A 100%)',
              color: '#fff',
              fontFamily: 'Overpass, sans-serif',
            }}
          >
            Don&apos;t show this message again
          </button>
          <button
            onClick={() => dismiss('declined')}
            className="text-xs font-black uppercase px-4 py-2 border transition-colors hover:border-white hover:text-white"
            aria-label="Close cookie notice"
            style={{ borderColor: '#666', color: '#aaa', fontFamily: 'Overpass, sans-serif' }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
