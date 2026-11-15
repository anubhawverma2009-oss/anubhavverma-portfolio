import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import { Fragment } from 'react'
import { site, socials } from '../data/portfolio'
import { linkTo } from '../router'
import { useInView, useLowPower, useReducedMotion, useMediaQuery } from '../hooks'
import ErrorBoundary from './ErrorBoundary'
import { socialIcon, ArrowRightIcon, MapPinIcon, SparkIcon } from './icons'

/* The 3D scene is code-split so first paint never waits for Three.js. */
const HeroScene = lazy(() => import('../three/HeroScene'))

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && canvas.getContext('webgl2')) ||
           !!canvas.getContext('webgl')
  } catch {
    return false
  }
}

export default function Hero() {
  const wrapRef = useRef(null)
  const inView = useInView(wrapRef)
  const reduced = useReducedMotion()
  const lowPower = useLowPower()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [webgl, setWebgl] = useState(true)

  useEffect(() => setWebgl(hasWebGL()), [])

  const sceneOn = webgl && !reduced && !(lowPower && isMobile)

  return (
    <section id="home" className="hero" ref={wrapRef}>
      {/* 3D layer */}
      {sceneOn && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <HeroScene visible={inView} lowPower={lowPower} isMobile={isMobile} />
          </Suspense>
        </ErrorBoundary>
      )}
      {!sceneOn && <div className="orb-fallback" aria-hidden="true" />}

      <div className="container hero__inner">
        <div className="hero__badge-row hero-enter" style={{ '--d': '60ms' }}>
          <span className="avatar" aria-hidden="true">
            {site.profileImage ? (
              <img src={site.profileImage} alt="" />
            ) : (
              site.firstName[0] + (site.name.split(' ')[1]?.[0] ?? '')
            )}
          </span>
          <span className="hero__tag">
            <span className="pulse" aria-hidden="true" />
            {site.roles.join(' · ')}
          </span>
        </div>

        <h1 className="display hero-enter" style={{ '--d': '150ms' }}>
          Hi, I'm <span className="grad-text">Anubhav Verma</span>.
        </h1>

        {/* Tagline renders from site.tagline (portfolio/home.js): segments are
            separated by dot seps; with three segments the middle one keeps the
            signature gradient. */}
        <p className="hero__tagline hero-enter" style={{ '--d': '260ms' }}>
          {site.tagline
            .split('·')
            .map((segment, i, parts) => (
              <Fragment key={i}>
                {i > 0 && <span className="sep">·</span>}
                {parts.length === 3 && i === 1 ? (
                  <span className="grad-text">{segment.trim()}</span>
                ) : (
                  segment.trim()
                )}
              </Fragment>
            ))}
        </p>

        <p className="hero__intro hero-enter" style={{ '--d': '360ms' }}>
          {site.intro}
        </p>

        <div className="hero__actions hero-enter" style={{ '--d': '460ms' }}>
          <a {...linkTo('projects')} className="btn btn--primary">
            Explore My Work
            <ArrowRightIcon />
          </a>
          <a {...linkTo('contact')} className="btn btn--ghost">
            Let's Connect
          </a>
        </div>

        <div
          className="hero__socials hero-enter"
          style={{ '--d': '560ms' }}
          aria-label="Social profiles"
        >
          {socials.map((s) => {
            const Icon = socialIcon(s.id)
            return (
              <a
                key={s.id}
                href={s.url}
                className="icon-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} — opens in a new tab`}
                title={s.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>

        <div className="hero__meta hero-enter" style={{ '--d': '660ms' }}>
          <span>
            <MapPinIcon />
            {site.location}
          </span>
          <span>
            <SparkIcon />
            aka {site.alias}
          </span>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        Scroll
        <span className="line" />
      </div>
    </section>
  )
}
