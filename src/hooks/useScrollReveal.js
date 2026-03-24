import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class `is-visible` is added.
 *
 * @param {object} options
 * @param {number} options.threshold  - 0–1, how much of the element must be visible (default 0.15)
 * @param {string} options.rootMargin - CSS margin on the root (default '0px 0px -60px 0px')
 * @param {boolean} options.once      - remove observer after first trigger (default true)
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
