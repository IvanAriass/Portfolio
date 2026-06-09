import { motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { scaleIn } from '@/lib/animations'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900',
        hover && 'cursor-pointer transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-neutral-900/50',
        className,
      )}
      {...(props as object)}
    >
      {children}
    </motion.div>
  )
}
