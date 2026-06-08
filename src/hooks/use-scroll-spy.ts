import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (!element) continue

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(id)
            }
          }
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        },
      )

      observer.observe(element)
      observers.push(observer)
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect()
      }
    }
  }, [sectionIds, offset])

  return activeId
}
