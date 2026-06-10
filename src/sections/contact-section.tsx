import { useState, type FormEvent, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useToastStore } from '@/lib/toast-store'
import type { Texture, Gradient } from '@/components/ui/section'

interface ContactSectionProps {
  muted?: boolean
  texture?: Texture | Texture[]
  gradient?: Gradient
}

export function ContactSection({ muted, texture, gradient }: ContactSectionProps) {
  const { t } = useTranslation()
  const addToast = useToastStore((s) => s.addToast)
  const [sending, setSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setSending(true)

    try {
      const form = formRef.current
      const data = new FormData(form)

      const response = await fetch('https://formspree.io/f/mojzlzpk', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        addToast('success', t('contact.success'))
        form.reset()
      } else {
        addToast('error', t('contact.error'))
      }
    } catch {
      addToast('error', t('contact.error'))
    } finally {
      setSending(false)
    }
  }

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      muted={muted}
      texture={texture}
      gradient={gradient}
    >
      <div className="mx-auto max-w-xl">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={staggerItem}>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? t('contact.sending') : t('contact.send')}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  )
}
