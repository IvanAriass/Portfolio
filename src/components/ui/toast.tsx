import { motion, AnimatePresence } from 'framer-motion'
import { useToastStore } from '@/lib/toast-store'

const typeStyles: Record<string, string> = {
  success: 'border-l-emerald-500 dark:border-l-emerald-400',
  error: 'border-l-red-500 dark:border-l-red-400',
}

const icons: Record<string, string> = {
  success: 'M10 15.172l-3.536-3.536a.5.5 0 0 1 .708-.708L10 13.756l6.364-6.364a.5.5 0 0 1 .708.708L10 15.172z',
  error: 'M8 8l4-4m0 4l-4 4',
}

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts)
  const removeToast = useToastStore((s) => s.removeToast)

  return (
    <div className="fixed bottom-6 right-6 z-60 flex flex-col gap-3">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex items-start gap-3 rounded-xl border border-neutral-200/70 bg-white px-4 py-3 shadow-lg backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/95 ${typeStyles[toast.type]}`}
            style={{ borderLeftWidth: '3px' }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`mt-0.5 shrink-0 ${toast.type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}
            >
              <path d={icons[toast.type]} />
            </svg>

            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {toast.message}
            </p>

            <button
              onClick={() => removeToast(toast.id)}
              className="ml-auto shrink-0 rounded-lg p-0.5 text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              aria-label="Dismiss"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
