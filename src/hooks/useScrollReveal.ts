import { useEffect, useRef } from 'react'

const REVEAL_CLASSES = ['reveal', 'reveal-left', 'reveal-scale'] as const

/**
 * Attaches IntersectionObservers to all .reveal / .reveal-left / .reveal-scale
 * elements inside (and including) the returned ref container.
 * Adds "revealed" once each element enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    // Collect container itself if it has a reveal class, plus all reveal children
    const targets: HTMLElement[] = []
    if (REVEAL_CLASSES.some((c) => container.classList.contains(c))) {
      targets.push(container)
    }
    container
      .querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-scale')
      .forEach((el) => targets.push(el))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, ...options },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
