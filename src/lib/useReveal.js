import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Adds the `.is-revealed` class to every `[data-reveal]` element as it scrolls
 * into view. Re-scans on route change so freshly mounted pages animate too.
 */
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('[data-reveal]:not(.is-revealed)')
    )
    if (!els.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
