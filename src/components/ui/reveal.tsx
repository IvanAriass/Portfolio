import { motion, type MotionProps, type Variants } from 'framer-motion'
import type { ElementType, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type RevealElement = 'div' | 'section' | 'article' | 'span'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: RevealElement
  delay?: number
  once?: boolean
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
}

export function Reveal({
  as = 'div',
  delay = 0,
  once = true,
  className,
  children,
  ...props
}: RevealProps) {
  const Component = motion[as as keyof typeof motion] as ElementType

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={revealVariants}
      custom={delay}
      className={cn(className)}
      {...(props as MotionProps)}
    >
      {children}
    </Component>
  )
}
