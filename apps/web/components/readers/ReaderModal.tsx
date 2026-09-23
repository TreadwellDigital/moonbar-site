'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { Reader } from './ReaderFeed'
import { useRegion } from '../layout/SiteSettings'

interface Props {
  reader: Reader
  onClose: () => void
}

const SKILL_DESCRIPTIONS: Record<string, string> = {
  Psychic:
    'A developed natural intuition enabling them to link in with a person and understand the past, present and future.',
  Tarot:
    'Tarot cards are used to look at a specific situation in detail, offering insight alongside the reader\'s natural skills.',
  Medium:
    'A direct link to the afterlife — a medium can connect with loved ones who have passed over.',
  Clairvoyant:
    'A Psychic who sees images in their mind\'s eye while reading for someone — past, present and future.',
  Healer:
    'Healing focuses on the energy of the person, bringing peace, calm and clarity to mind, body and soul.',
  Astrology:
    'Based on a divine connection between the planets and people — offering insight into character and life patterns.',
  'Spiritual Counsellor':
    'A spiritual counsellor guides you on your path to create inner peace and happiness.',
}

export function ReaderModal({ reader, onClose }: Props) {
  const rc = useRegion()

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-moonbar-night border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 rounded-t-2xl overflow-hidden">
          {reader.photoUrl ? (
            <Image src={reader.photoUrl} alt={reader.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-moonbar-purple/30 flex items-center justify-center">
              <span className="text-8xl">🔮</span>
            </div>
          )}
          <div className="absolute inset-0 bg-card-gradient" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-white text-2xl font-display font-bold">{reader.name}</h2>
            <p className="text-gray-300 text-sm">PIN: {reader.pin}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <p className="text-gray-300">{reader.tagline}</p>

          {/* Skills */}
          <div>
            <h3 className="text-moonbar-gold text-xs font-bold uppercase tracking-widest mb-3">Skills</h3>
            <div className="space-y-3">
              {reader.skills.map(skill => (
                <div key={skill} className="bg-moonbar-purple/20 rounded-xl p-3">
                  <p className="text-white font-semibold text-sm mb-1">{skill}</p>
                  <p className="text-gray-400 text-xs">{SKILL_DESCRIPTIONS[skill] ?? ''}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call options */}
          <div className="border-t border-white/10 pt-5 space-y-3">
            <h3 className="text-moonbar-gold text-xs font-bold uppercase tracking-widest">Call {reader.name} Now</h3>

            {/* Special offer */}
            <div className="call-box">
              <p className="text-gray-400 text-xs mb-1">{rc.phoneSpecialOffer}</p>
              <a
                href={`tel:${rc.phoneSpecial.replace(/\s/g, '')},,${reader.pin}#`}
                className="btn-call w-full justify-center"
              >
                📞 {rc.phoneSpecial} — Quick Connect PIN {reader.pin}
              </a>
            </div>

            {/* Standard */}
            <div className="call-box">
              <p className="text-gray-400 text-xs mb-1">{rc.phoneStandardOffer}</p>
              <a
                href={`tel:${rc.phoneStandard.replace(/\s/g, '')},,${reader.pin}#`}
                className="btn-call w-full justify-center"
              >
                📞 {rc.phoneStandard} — Quick Connect PIN {reader.pin}
              </a>
            </div>

            <p className="text-gray-600 text-xs text-center">{rc.termsShort}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
