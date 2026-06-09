import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { useTranslation } from 'react-i18next'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { skills } from '@/data/skills'
import type { Texture, Gradient } from '@/components/ui/section'

interface AboutSectionProps {
  muted?: boolean
  texture?: Texture | Texture[]
  gradient?: Gradient
}

const values = ['quality', 'learning', 'solving', 'collab'] as const

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M.5 3.5A1.5 1.5 0 0 1 2 2h3.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12H14a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1-1.5-1.5V3.5Z" />
    </svg>
  )
}

function StackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5ZM1.5 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5ZM7 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM1 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1Zm1.5.5v.5h11v-.5h-11Z" />
    </svg>
  )
}

const statIcons = [StarIcon, FolderIcon, StackIcon]

function HighlightCard({ icon: Icon, value, suffix, label }: { icon: typeof StarIcon; value: string; suffix: string; label: string }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group rounded-xl border border-neutral-200 bg-white p-4 transition-shadow duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-neutral-900/50"
    >
      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors duration-300 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-700">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-2xl font-bold text-neutral-900 dark:text-white">
        {value}{suffix}
      </div>
      <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
    </motion.div>
  )
}

export function AboutSection({ muted, texture, gradient }: AboutSectionProps) {
  const { t } = useTranslation()

  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 8)

  return (
    <Section id="about" title={t('about.title')} muted={muted} texture={texture} gradient={gradient}>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <Reveal>
            <div className="flex items-start gap-6">
              <div className="hidden flex-shrink-0 sm:block">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neutral-200 bg-gradient-to-br from-neutral-100 to-white text-lg font-bold tracking-tight text-neutral-400 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-500">
                  IA
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  {t('about.bio')}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
                  {t('about.detail')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
                {t('about.values_title')}
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {values.map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t(`about.values.${v}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="a" href="/cv.pdf" variant="secondary" download>
                {t('about.download_cv')}
              </Button>

              <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  {t('about.contact')}
                </span>
                <a
                  href="https://github.com/IvanAriass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/icons.svg#github-icon" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/iv%C3%A1n-arias-pastor-877754317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" aria-hidden="true">
                    <use href="/icons.svg#linkedin-icon" />
                  </svg>
                </a>
                <a
                  href="mailto:ariaspastorivan0@gmail.com"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                  aria-label="Email"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="md:col-span-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: 'experience', value: '2', suffix: '+' },
              { key: 'projects', value: '3', suffix: '' },
              { key: 'technologies', value: '21', suffix: '' },
            ].map((h, i) => (
              <HighlightCard
                key={h.key}
                icon={statIcons[i]}
                value={h.value}
                suffix={h.suffix}
                label={t(`about.highlights.${h.key}`)}
              />
            ))}

            <motion.div
              variants={staggerItem}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="col-span-2 rounded-xl border border-neutral-200 bg-white p-4 transition-shadow duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-neutral-900/50"
            >
              <h4 className="mb-2.5 text-xs font-semibold text-neutral-900 dark:text-white">
                {t('skills.title')}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {topSkills.map((s) => (
                  <Badge key={s.id}>{s.name}</Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
