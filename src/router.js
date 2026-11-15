/* -------------------------------------------------------------------------
   Minimal path-based router (History API) — zero dependencies.
   Turns the hash-anchor navigation (`/#about`) into clean paths (`/about`)
   while reusing the browser's native scrolling, so the existing
   scroll-padding / scroll-margin alignment keeps working unchanged.
------------------------------------------------------------------------- */
import { nav } from './data/portfolio'

const SECTIONS = nav.map((n) => n.id)

export const pathFor = (id) => `/${id}`

export function sectionFromLocation() {
  const seg = window.location.pathname.replace(/\/+$/, '').split('/').pop()
  return SECTIONS.includes(seg) ? seg : null
}

/** Native scroll — honors the CSS scroll-margin/scroll-padding offsets. */
export function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior, block: 'start' })
}

/** Click handler for in-app links: push clean path + smooth-scroll. */
export function navigateToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (sectionFromLocation() !== id) window.history.pushState({}, '', pathFor(id))

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' })

  /* Environment fallback: some embedded/throttled Chromium contexts suppress
     programmatic smooth scrolls entirely. If the viewport hasn't started
     moving two frames in, land instantly instead — same target, so normal
     browsers (where the smooth animation is already underway) are unaffected. */
  const startY = window.scrollY
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      if (Math.abs(window.scrollY - startY) < 1) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
      }
    })
  )
}

/** Link props helper: real href (SEO / new-tab / fallback) + SPA behavior. */
export const linkTo = (id) => ({
  href: pathFor(id),
  onClick: (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    navigateToSection(id)
  },
})

/** Back/forward + initial deep-link handling. Call once in App. */
export function installRouter() {
  const onPop = () => {
    const id = sectionFromLocation()
    if (id) scrollToSection(id, 'instant')
  }
  /* Deferred landing: instant scroll to the current section, repeated after
     fonts settle (text height shifts slightly as webfonts swap in). */
  const deferredLand = () => {
    const land = () => scrollToSection(sectionFromLocation(), 'instant')
    land()
    if (document.fonts?.ready) document.fonts.ready.then(land)
    else requestAnimationFrame(() => requestAnimationFrame(land))
  }

  /* Same-document hash changes (e.g. navigating to an old /#about bookmark
     while already on the site): upgrade to the clean path and land.
     Chromium's same-document fragment scroll is unreliable, so we schedule
     our own instant landing — it targets the same scroll-margin-aligned
     position, so it never fights the browser. */
  const onHash = () => {
    const seg = window.location.hash.replace(/^#\/?/, '')
    if (SECTIONS.includes(seg)) {
      window.history.replaceState({}, '', pathFor(seg))
      deferredLand()
    }
  }
  window.addEventListener('popstate', onPop)
  window.addEventListener('hashchange', onHash)

  /* Legacy hash deep links (e.g. /#about shared before path URLs):
     upgrade to the canonical clean path, then land. */
  const hashSeg = window.location.hash.replace(/^#\/?/, '')
  if (SECTIONS.includes(hashSeg)) {
    window.history.replaceState({}, '', pathFor(hashSeg))
  }

  /* Initial deep link (e.g. refresh on /skills): land instantly. */
  if (window.location.pathname !== '/') deferredLand()
  return () => {
    window.removeEventListener('popstate', onPop)
    window.removeEventListener('hashchange', onHash)
  }
}
