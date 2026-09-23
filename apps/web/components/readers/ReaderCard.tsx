'use client'

import Image from 'next/image'
import type { Reader } from './ReaderFeed'

interface Props {
  reader: Reader
  onSelect: () => void
}

const STATUS_LABEL: Record<Reader['status'], string> = {
  online:  'Available',
  busy:    'Busy',
  offline: 'Offline',
}

const STATUS_CLASS: Record<Reader['status'], string> = {
  online:  'badge-online',
  busy:    'badge-busy',
  offline: 'badge-offline',
}

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < n ? 'text-moonbar-star' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

export function ReaderCard({ reader, onSelect }: Props) {
  return (
    <article className="bg-white border border-purple-100 rounded-2xl flex flex-col overflow-hidden group animate-fade-in hover:border-moonbar-gold/50 hover:shadow-md transition-all duration-300">
      {/* Photo */}
      <div className="relative h-52 bg-purple-50 overflow-hidden">
        {reader.photoUrl ? (
          <Image
            src={reader.photoUrl}
            alt={reader.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">🔮</span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-card-gradient" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {reader.isNew && (
            <span className="bg-moonbar-gold text-moonbar-night text-xs font-bold px-2 py-0.5 rounded-full">
              NEW
            </span>
          )}
          {reader.isPinned && (
            <span className="bg-moonbar-purple text-white text-xs px-2 py-0.5 rounded-full border border-moonbar-gold/30">
              📌 Featured
            </span>
          )}
        </div>
        {/* Status */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_CLASS[reader.status]}`}>
            {STATUS_LABEL[reader.status]}
          </span>
        </div>
        {/* PIN */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-gray-300 text-xs px-2 py-1 rounded-lg font-mono">
          PIN: {reader.pin}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-moonbar-night font-display text-lg leading-tight">{reader.name}</h3>
          <div className="text-right shrink-0">
            <Stars n={reader.stars} />
            <p className="text-gray-400 text-xs mt-0.5">{reader.readingCount} readings</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{reader.tagline}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {reader.skills.map(skill => (
            <span
              key={skill}
              className="bg-purple-50 border border-purple-200 text-moonbar-purple text-xs px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Rate */}
        <p className="text-moonbar-gold text-xs font-semibold">
          From ${reader.ratePerMin.toFixed(2)}/min
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <button
            onClick={onSelect}
            className="btn-primary flex-1 text-xs py-2"
          >
            View Profile
          </button>
          {reader.status === 'online' ? (
            <button
              onClick={onSelect}
              className="btn-call flex-1 text-xs py-2"
            >
              📞 Call Now
            </button>
          ) : (
            <span className={`flex-1 text-xs py-2 text-center rounded-lg font-medium ${
              reader.status === 'busy' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-gray-50 text-gray-400 border border-gray-200'
            }`}>
              {reader.status === 'busy' ? '⏳ Busy' : 'Offline'}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
