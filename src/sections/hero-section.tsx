import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="bg-hero-gradient bg-noise relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.p
          variants={heroItem}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          variants={heroItem}
          className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          Iván Arias
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
            {t('hero.role')}
          </span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mt-6 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-10 flex items-center gap-4"
        >
          <Button as="a" href="#projects">
            {t('hero.cta')}
          </Button>
          <Button as="a" href="#contact" variant="secondary">
            {t('hero.contact')}
          </Button>
        </motion.div>

        <motion.div
          variants={heroItem}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {t('hero.openToWork')}
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
