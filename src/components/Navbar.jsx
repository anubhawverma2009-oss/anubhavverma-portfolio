import { useEffect, useState } from 'react'
import { nav, site } from '../data/portfolio'
import { useActiveSection, useMediaQuery } from '../hooks'
import { MenuIcon, CloseIcon, MailIcon } from './icons'

const NAV_IDS = nav.map((n) => n.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const isDesktop = useMediaQuery('(min-width: 981px)')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll + close with Escape while the mobile menu is open */
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const go = () => setOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#home" className="brand" aria-label="Anubhav Verma — home">
            <span className="brand__mark" aria-hidden="true">AV</span>
            <span className="brand__name">
              Anubhav<span> · Verma</span>
            </span>
          </a>

          {isDesktop && (
            <nav aria-label="Primary">
              <ul className="nav-links">
                {nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={active === item.id ? 'active' : ''}
                      aria-current={active === item.id ? 'true' : undefined}
                    >
                      <span className="dot" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {isDesktop && (
              <a href="#contact" className="btn btn--ghost nav-cta" style={{ padding: '10px 20px' }}>
                <MailIcon />
                Let's Connect
              </a>
            )}
            {!isDesktop && (
              <button
                className="nav-burger"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-hidden={!open}
        {...(open ? {} : { inert: '' })}
      >
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={go}
              className={active === item.id ? 'active' : ''}
              style={{ transitionDelay: open ? `${90 + i * 55}ms` : '0ms' }}
            >
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href="#contact" className="btn btn--primary" onClick={go}>
            <MailIcon />
            Let's Connect
          </a>
        </div>
      </div>
    </>
  )
}
