import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= offset) {
          setActiveId(sectionIds[i])
          return
        }
      }

      setActiveId(sectionIds[0])
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
