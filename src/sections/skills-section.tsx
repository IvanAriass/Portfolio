import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { skills } from '@/data/skills'
import type { SkillCategory } from '@/types'
import { cn } from '@/lib/utils'
import { staggerContainer, staggerItem } from '@/lib/animations'
import type { Texture, Gradient } from '@/components/ui/section'

const CATEGORY_ORDER: SkillCategory[] = [
  'frontend',
  'backend',
  'database',
  'devops',
  'tools',
  'languages',
]

interface SkillsSectionProps {
  muted?: boolean
  texture?: Texture | Texture[]
  gradient?: Gradient
}

export function SkillsSection({ muted, texture, gradient }: SkillsSectionProps) {
  const { t } = useTranslation()

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    label: t(`skills.categories.${category}`),
    items: skills.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0)

  return (
    <Section id="skills" title={t('skills.title')} muted={muted} texture={texture} gradient={gradient}>
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {grouped.map((group) => (
          <motion.div key={group.category} variants={staggerItem}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {group.label}
            </h3>

            <div className="space-y-3">
              {group.items.map((skill) => (
                <div key={skill.id}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs text-neutral-400">{skill.level}/5</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <motion.div
                      className={cn(
                        'h-full rounded-full',
                        skill.level >= 4
                          ? 'bg-neutral-800 dark:bg-white'
                          : 'bg-neutral-400 dark:bg-neutral-500',
                      )}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
