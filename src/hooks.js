import { useEffect, useRef, useState, useCallback } from 'react'

/* -------------------------------------------------------------------------
   Shared hooks — reveal-on-scroll, active section, media queries, tilt
------------------------------------------------------------------------- */

/** Adds `.is-visible` when the element enters the viewport (once). */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Tracks which section is currently in view (for nav highlighting). */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [ids])
  return active
}

/** Reactive CSS media-query state. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export const useReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')

/** Rough "low powered device" heuristic used to lighten the 3D scene. */
export function useLowPower() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const coarse = useMediaQuery('(pointer: coarse)')
  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : 8
  return isMobile || (coarse && cores <= 4)
}

/**
 * Pointer-driven 3D tilt + spotlight position for cards.
 * Usage: <div className="card tilt" {...tiltProps}> …
 */
export function useTilt(max = 7) {
  const ref = useRef(null)
  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || e.pointerType === 'touch') return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (0.5 - py) * max
      const ry = (px - 0.5) * max
      el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    },
    [max]
  )
  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }, [])
  return { ref, onPointerMove, onPointerLeave }
}

/** True when the element has scrolled into (and stays in) the viewport —
    used to pause the WebGL render loop when the hero is off-screen. */
export function useInView(ref) {
  const [inView, setInView] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.02,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return inView
}
