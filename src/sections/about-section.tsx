import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { useTranslation } from 'react-i18next'
import { staggerContainer, staggerItem, slideUp } from '@/lib/animations'
import { skills } from '@/data/skills'
import type { Texture, Gradient } from '@/components/ui/section'

interface AboutSectionProps {
  muted?: boolean
  texture?: Texture | Texture[]
  gradient?: Gradient
}

const highlights = [
  { key: 'experience', icon: '🎯', value: '2', suffix: '+' },
  { key: 'projects', icon: '📦', value: '3', suffix: '' },
  { key: 'technologies', icon: '🛠', value: '21', suffix: '' },
] as const

const focusAreas = ['web', 'mobile', 'backend', 'ui'] as const

function HighlightCard({ icon, value, suffix, label }: { icon: string; value: string; suffix: string; label: string }) {
  return (
    <motion.div
      variants={staggerItem}
      className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="mb-2 text-xl">{icon}</div>
      <div className="text-2xl font-bold text-neutral-900 dark:text-white">
        {value}
        {suffix}
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
        <motion.div
          className="md:col-span-3"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
            {t('about.bio')}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
            {t('about.detail')}
          </p>

          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">
              {t('about.focus_title')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="outline">
                  {t(`about.focus_items.${area}`)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button as="a" href="/cv.pdf" variant="secondary" download>
              {t('about.download_cv')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <HighlightCard
                key={h.key}
                icon={h.icon}
                value={h.value}
                suffix={h.suffix}
                label={t(`about.highlights.${h.key}`)}
              />
            ))}

            <motion.div
              variants={staggerItem}
              className="col-span-2 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
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
