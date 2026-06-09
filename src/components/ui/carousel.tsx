import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CarouselProps {
  images: string[]
  alt?: string
  fill?: boolean
}

export function Carousel({ images, alt = '', fill = false }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const goTo = useCallback(
    (i: number) => setIndex(((i % images.length) + images.length) % images.length),
    [images.length],
  )

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  if (images.length === 0) return null

  const showNav = images.length > 1

  return (
    <div className={cn('relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800', fill && 'h-full')}>
      <div className={fill ? 'h-full w-full' : 'aspect-video w-full'}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt ? `${alt} — captura ${index + 1}` : `Captura ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {showNav && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/40 text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-neutral-900/60 active:scale-90"
            aria-label="Anterior"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/40 text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-neutral-900/60 active:scale-90"
            aria-label="Siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  'rounded-full transition-all duration-300',
                  i === index
                    ? 'h-2 w-5 bg-white shadow-sm'
                    : 'h-2 w-2 bg-white/40 hover:bg-white/60',
                )}
                aria-label={`Ir a captura ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
