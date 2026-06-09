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
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900',
        hover && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
      {...(props as object)}
    >
      {children}
    </motion.div>
  )
}
