import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Carousel } from '@/components/ui/carousel'
import { GitHubIcon } from '@/components/ui/icons'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/projects'
import type { Project } from '@/types'
import type { Texture, Gradient } from '@/components/ui/section'

interface ProjectsSectionProps {
  muted?: boolean
  texture?: Texture | Texture[]
  gradient?: Gradient
}

export function ProjectsSection({ muted, texture, gradient }: ProjectsSectionProps) {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<Project | null>(null)

  const open = useCallback((p: Project) => setSelected(p), [])
  const close = useCallback(() => setSelected(null), [])

  if (projects.length === 0) {
    return (
      <Section id="projects" title={t('projects.title')} muted={muted} texture={texture} gradient={gradient}>
        <p className="text-center text-neutral-500 dark:text-neutral-400">
          {t('projects.no_projects')}
        </p>
      </Section>
    )
  }

  return (
    <Section id="projects" title={t('projects.title')} muted={muted} texture={texture} gradient={gradient}>
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={staggerItem}>
            <Card
              hover
              className="group relative flex flex-col cursor-pointer"
              onClick={() => open(project)}
            >
              <div className="pointer-events-none absolute inset-0 -m-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 0 1px rgba(99,102,241,0.25), 0 0 24px rgba(99,102,241,0.1)',
                }}
              />

              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 backdrop-blur-xs dark:bg-neutral-900/90 dark:text-neutral-300">
                  {project.year}
                </span>
              </div>

              <motion.div
                className="mb-1 flex items-center gap-2"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
              </motion.div>

              {project.repo && (
                <motion.p
                  className="mb-3 truncate text-xs text-neutral-400 dark:text-neutral-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.repo}
                </motion.p>
              )}

              <motion.div
                className="mb-3 flex flex-wrap gap-1.5"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </motion.div>

              {(project.stars != null || project.forks != null) && (
                <motion.div
                  className="mb-3 flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {project.stars != null && (
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 hover:scale-110" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                  {project.forks != null && (
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 hover:scale-110" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.25 2.25 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                      </svg>
                      {project.forks}
                    </span>
                  )}
                </motion.div>
              )}

              <motion.div
                className="mt-auto flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                {project.links.map((link) => (
                  <Button
                    key={link.url}
                    as="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="group/btn"
                  >
                    {link.type === 'github' && (
                      <GitHubIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:rotate-[6deg]" />
                    )}
                    {link.label}
                  </Button>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Modal open={selected != null} onClose={close}>
        {selected && (
          <div className="flex min-h-0 flex-1 flex-col md:flex-row">
            <div className="relative min-h-0 md:w-3/5">
              <Carousel
                images={selected.images ?? [selected.image]}
                alt={selected.title}
                fill
              />
            </div>

            <div className="flex flex-col overflow-y-auto p-6 md:w-2/5 md:p-8">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {selected.title}
                </h3>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  {selected.year}
                </span>
              </div>

              {selected.repo && (
                <a
                  href={selected.links.find((l) => l.type === 'github')?.url ?? `https://github.com/${selected.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 inline-flex items-center gap-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  {selected.repo}
                </a>
              )}

              <div className="mb-4 flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {(selected.stars != null || selected.forks != null) && (
                <div className="mb-4 flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
                  {selected.stars != null && (
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      {selected.stars}
                    </span>
                  )}
                  {selected.forks != null && (
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.25 2.25 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                      </svg>
                      {selected.forks}
                    </span>
                  )}
                </div>
              )}

              {t(`projects.descriptions.${selected.id}`, '') && (
                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`projects.descriptions.${selected.id}`)}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {selected.links.map((link) => (
                  <Button
                    key={link.url}
                    as="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    {link.type === 'github' && (
                      <GitHubIcon className="h-4 w-4 shrink-0" />
                    )}
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
