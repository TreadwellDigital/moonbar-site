'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from './CookieBanner'
import { StickyCallBar } from '@/components/phone/StickyCallBar'
import { getRegionConfig, type RegionConfig } from '@/lib/region.config'

const RegionContext = createContext<RegionConfig | null>(null)

export function useRegion(): RegionConfig {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used inside SiteSettings')
  return ctx
}

export function SiteSettings({ children }: { children: ReactNode }) {
  const rc = getRegionConfig()

  return (
    <RegionContext.Provider value={rc}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <StickyCallBar />
      <CookieBanner />
    </RegionContext.Provider>
  )
}
