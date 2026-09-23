'use client'

import { useRegion } from '../layout/SiteSettings'

/**
 * Two call boxes (Special Offer + Standard) shown on homepage
 * and phone-readings page.
 */
export function CallBoxes() {
  const rc = useRegion()

  return (
    <div className="grid sm:grid-cols-2 gap-5 my-8">
      {/* Special Offer */}
      <div className="call-box">
        <p className="text-moonbar-gold text-xs font-bold uppercase tracking-widest">
          ⭐ 20 Minute Special Offer
        </p>
        <a
          href={`tel:${rc.phoneSpecial.replace(/\s/g, '')}`}
          className="block text-white text-2xl font-display font-bold mt-2 hover:text-moonbar-gold transition-colors"
        >
          {rc.phoneSpecial}
        </a>
        <p className="text-gray-400 text-sm mt-1">{rc.phoneSpecialOffer}</p>
        <a
          href={`tel:${rc.phoneSpecial.replace(/\s/g, '')}`}
          className="btn-call mt-4 w-full justify-center"
        >
          📞 Click To Call Now
        </a>
      </div>

      {/* Standard */}
      <div className="call-box">
        <p className="text-moonbar-gold text-xs font-bold uppercase tracking-widest">
          💳 Call &amp; Pay by Card
        </p>
        <a
          href={`tel:${rc.phoneStandard.replace(/\s/g, '')}`}
          className="block text-white text-2xl font-display font-bold mt-2 hover:text-moonbar-gold transition-colors"
        >
          {rc.phoneStandard}
        </a>
        <p className="text-gray-400 text-sm mt-1">{rc.phoneStandardOffer}</p>
        <a
          href={`tel:${rc.phoneStandard.replace(/\s/g, '')}`}
          className="btn-call mt-4 w-full justify-center"
        >
          📞 Click To Call Now
        </a>
      </div>

      {/* T&Cs */}
      <p className="sm:col-span-2 text-gray-600 text-xs text-center leading-relaxed">
        {rc.termsLong} {rc.sp}
      </p>
    </div>
  )
}
