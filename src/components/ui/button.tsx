import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonBase {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

interface ButtonAsButton extends ButtonBase, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
}

interface ButtonAsAnchor extends ButtonBase, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a'
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, as, ...rest } = props

  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary:
      'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
    secondary:
      'border border-neutral-300 bg-transparent hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800',
    ghost:
      'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (as === 'a') {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
}
