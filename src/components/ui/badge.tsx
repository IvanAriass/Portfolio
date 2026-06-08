import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline'
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
        variant === 'outline' && 'border border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
