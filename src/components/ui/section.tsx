import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'

export type Texture = 'noise' | 'dots' | 'grid'
export type Gradient = 'glow' | 'warm' | 'cool'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  title?: string
  subtitle?: string
  muted?: boolean
  separator?: 'default' | 'strong' | 'none'
  texture?: Texture | Texture[]
  gradient?: Gradient
}

export function Section({ id, title, subtitle, muted, separator = 'default', texture, gradient, className, children, ...props }: SectionProps) {
  const textureClasses = texture
    ? (Array.isArray(texture) ? texture : [texture]).map((t) => `bg-${t}`)
    : []

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8',
        'relative',
        textureClasses,
        gradient && `bg-gradient-${gradient}`,
        separator === 'default' && 'before:pointer-events-none before:absolute before:inset-x-[15%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-neutral-200/70 before:to-transparent dark:before:via-neutral-800/40',
        separator === 'strong' && 'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-neutral-300 before:to-transparent dark:before:via-neutral-700',
        muted && 'bg-neutral-50 dark:bg-neutral-900/40',
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-5xl">
        {title && (
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">
                  {subtitle}
                </p>
              )}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.15}>{children}</Reveal>
      </div>
    </section>
  )
}
