/**
 * /api/readers — proxies the Allstar Psychics reader feed API.
 *
 * This keeps the Allstar API key server-side (never exposed to the browser)
 * and lets us add caching, error handling, and transformation in one place.
 *
 * TODO: Replace ALLSTAR_READERS_ENDPOINT and ALLSTAR_API_KEY with real values
 * once provided by Allstar Psychics Ltd.
 */
import { NextResponse } from 'next/server'
import type { Reader } from '@/components/readers/ReaderFeed'

const ALLSTAR_ENDPOINT = process.env.ALLSTAR_READERS_ENDPOINT ?? ''
const ALLSTAR_API_KEY  = process.env.ALLSTAR_API_KEY          ?? ''
const REGION           = process.env.NEXT_PUBLIC_REGION        ?? 'AU'

export const revalidate = 60 // ISR cache: 60 seconds

export async function GET() {
  // If no endpoint configured yet, return mock data for development
  if (!ALLSTAR_ENDPOINT) {
    return NextResponse.json(getMockReaders())
  }

  try {
    const res = await fetch(ALLSTAR_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${ALLSTAR_API_KEY}`,
        'X-Region':      REGION,
        'Content-Type':  'application/json',
      },
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`Allstar API responded ${res.status}`)
    }

    const raw = await res.json()
    // Transform Allstar response shape → our Reader interface
    // Update this mapping to match the real API response
    const readers: Reader[] = (raw.readers ?? raw).map((r: any) => ({
      id:           String(r.id ?? r.readerId),
      name:         r.name ?? r.readerName,
      pin:          String(r.pin ?? r.pinNumber),
      photoUrl:     r.photoUrl ?? r.photo ?? '',
      stars:        r.stars ?? r.rating ?? 5,
      starCount:    r.starCount ?? r.ratingCount ?? 0,
      skills:       r.skills ?? r.specialisms ?? [],
      tagline:      r.tagline ?? r.description ?? '',
      readingCount: r.readingCount ?? r.totalReadings ?? 0,
      status:       mapStatus(r.status ?? r.readerStatus),
      ratePerMin:   parseFloat(r.ratePerMin ?? r.rate ?? 1.50),
      isNew:        Boolean(r.isNew ?? r.newReader),
      isPinned:     Boolean(r.isPinned ?? r.featured),
    }))

    // Sort: pinned first, then online, then busy, then offline
    readers.sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
      const order = { online: 0, busy: 1, offline: 2 }
      return order[a.status] - order[b.status]
    })

    return NextResponse.json(readers)
  } catch (err) {
    console.error('Reader feed error:', err)
    // Graceful degradation — return mock data if API fails
    return NextResponse.json(getMockReaders(), { status: 200 })
  }
}

function mapStatus(raw: string): Reader['status'] {
  const s = (raw ?? '').toLowerCase()
  if (s === 'available' || s === 'online' || s === 'free') return 'online'
  if (s === 'busy' || s === 'engaged' || s === 'in_call')  return 'busy'
  return 'offline'
}

/** Development mock data — replace with real API */
function getMockReaders(): Reader[] {
  return [
    {
      id: '1', name: 'Luna Rose', pin: '1234',
      photoUrl: '', stars: 5, starCount: 284, readingCount: 284,
      skills: ['Psychic', 'Tarot', 'Love & Relationships'],
      tagline: 'I offer compassionate, insightful readings with 15 years of experience.',
      status: 'online', ratePerMin: 1.50, isNew: false, isPinned: true,
    },
    {
      id: '2', name: 'Celeste Moon', pin: '2345',
      photoUrl: '', stars: 5, starCount: 156, readingCount: 156,
      skills: ['Clairvoyant', 'Medium', 'Spiritual Counsellor'],
      tagline: 'Connecting you with loved ones and guiding you on your spiritual path.',
      status: 'online', ratePerMin: 2.00, isNew: true, isPinned: false,
    },
    {
      id: '3', name: 'Sophia Star', pin: '3456',
      photoUrl: '', stars: 4, starCount: 92, readingCount: 92,
      skills: ['Astrology', 'Tarot'],
      tagline: 'Using the stars and cards to illuminate your path forward.',
      status: 'busy', ratePerMin: 1.75, isNew: false, isPinned: false,
    },
  ]
}
