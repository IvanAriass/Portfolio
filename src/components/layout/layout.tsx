import type { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
