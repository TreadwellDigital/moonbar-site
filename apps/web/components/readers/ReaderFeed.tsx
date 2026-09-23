'use client'

import { useEffect, useState, useCallback } from 'react'
import { ReaderCard } from './ReaderCard'
import { ReaderModal } from './ReaderModal'

export interface Reader {
  id: string
  name: string
  pin: string
  photoUrl: string
  stars: number
  starCount: number
  skills: string[]
  tagline: string
  readingCount: number
  status: 'online' | 'busy' | 'offline'
  ratePerMin: number
  isNew: boolean
  isPinned: boolean
}

const POLL_INTERVAL_MS = 60_000

interface ReaderFeedProps {
  /** Section heading. Defaults to "Moonbar's Available Psychic Readers". */
  heading?: string
}

/**
 * Fetches the live reader feed from Allstar Psychics API.
 * Polls every 60 seconds for fresh status.
 *
 * TODO: Replace /api/readers with the real Allstar API endpoint
 * once credentials are available.
 */
export function ReaderFeed({ heading = "Moonbar's Available Psychic Readers" }: ReaderFeedProps = {}) {
  const [readers, setReaders]         = useState<Reader[]>([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState<string | null>(null)
  const [selectedReader, setSelected] = useState<Reader | null>(null)
  const [showAll, setShowAll]         = useState(false)
  const [hasNew, setHasNew]           = useState(false)

  const fetchReaders = useCallback(async (isRefresh = false) => {
    try {
      const res = await fetch('/api/readers')
      if (!res.ok) throw new Error('Failed to load readers')
      const data: Reader[] = await res.json()
      setReaders(prev => {
        if (isRefresh && prev.length > 0) {
          const newIds = new Set(data.map(r => r.id))
          const prevIds = new Set(prev.map(r => r.id))
          const hasNewReaders = data.some(r => !prevIds.has(r.id))
          if (hasNewReaders) setHasNew(true)
        }
        return data
      })
      setError(null)
    } catch (e) {
      setError('Could not load readers. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReaders()
    const timer = setInterval(() => fetchReaders(true), POLL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [fetchReaders])

  const displayed = showAll ? readers : readers.slice(0, 6)

  return (
    <section className="py-14" style={{ background: '#ebebeb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-black text-moonbar-dark text-center mb-2">
          {heading}
        </h2>
        <p className="text-moonbar-mid text-center text-sm mb-8 max-w-2xl mx-auto">
          Browse our gifted readers below. Click to view profile or call now.
        </p>

        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-72 animate-pulse border border-purple-100" />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-gray-500">
            <p>{error}</p>
            <button onClick={() => fetchReaders()} className="btn-primary mt-4 text-sm">
              Try again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {hasNew && (
              <div className="mb-4 text-center">
                <button
                  onClick={() => { setHasNew(false); fetchReaders() }}
                  className="text-sm text-moonbar-gold border border-moonbar-gold/30 rounded-full px-4 py-1.5 hover:bg-moonbar-gold/10 transition-colors"
                >
                  ✨ New readers are available — click to refresh
                </button>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayed.map(reader => (
                <ReaderCard
                  key={reader.id}
                  reader={reader}
                  onSelect={() => setSelected(reader)}
                />
              ))}
            </div>

            {readers.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="btn-outline"
                >
                  {showAll ? 'Show Less' : `See All ${readers.length} Readers`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {selectedReader && (
        <ReaderModal reader={selectedReader} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
