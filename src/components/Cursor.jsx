import { useEffect, useRef } from 'react'
import { useReducedMotion, useMediaQuery } from '../hooks'

/**
 * Two-layer custom cursor (dot + trailing ring) for fine pointers.
 * Automatically disabled for touch devices and reduced-motion users.
 * The ring expands over links/buttons via event delegation.
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const reduced = useReducedMotion()
  const fine = useMediaQuery('(pointer: fine)')

  useEffect(() => {
    if (!fine || reduced) return
    document.documentElement.classList.add('custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let x = -100, y = -100, rx = -100, ry = -100
    let raf

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x}px, ${y}px)`
    }
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select')
      ring.classList.toggle('hovering', Boolean(interactive))
    }
    const loop = () => {
      /* ring trails the dot with easing */
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [fine, reduced])

  if (!fine || reduced) return null
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
