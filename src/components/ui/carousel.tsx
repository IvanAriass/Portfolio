import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CarouselProps {
  images: string[]
  alt?: string
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
}

export function Carousel({ images, alt = '' }: CarouselProps) {
  const [[index, dir], setState] = useState([0, 0])

  const goTo = useCallback(
    (i: number) => setState(([curr]) => [((i % images.length) + images.length) % images.length, i - curr]),
    [images.length],
  )

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  if (images.length === 0) return null

  const showNav = images.length > 1

  return (
    <div className="group/carousel relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
      <div className="aspect-video w-full">
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.img
            key={index}
            src={images[index]}
            alt={alt ? `${alt} — captura ${index + 1}` : `Captura ${index + 1}`}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {showNav && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-neutral-900 opacity-0 group-hover/carousel:opacity-100 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
            aria-label="Anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-neutral-900 opacity-0 group-hover/carousel:opacity-100 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
            aria-label="Siguiente"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-6 bg-white shadow-sm'
                    : 'w-2 bg-white/50 hover:bg-white/70',
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
