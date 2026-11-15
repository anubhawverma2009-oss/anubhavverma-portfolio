import { site, socials, nav } from '../data/portfolio'
import { linkTo, navigateToSection } from '../router'
import { socialIcon, HeartIcon, ArrowUpIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <a {...linkTo('home')} className="brand" aria-label="Back to top">
            <span className="brand__mark" aria-hidden="true">AV</span>
            <span className="brand__name">
              Anubhav<span> · Verma</span>
            </span>
          </a>

          <p className="footer__meta">
            Designed &amp; Built with <HeartIcon className="heart" /> curiosity, creativity &amp; passion by Anubhav Verma.
          </p>

          <nav className="footer__socials" aria-label="Social links">
            {socials.map((s) => {
              const Icon = socialIcon(s.id)
              return (
                <a
                  key={s.id}
                  href={s.url}
                  className="icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon />
                </a>
              )
            })}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {year} Anubhav Verma · {site.domain}</span>
          <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {nav.slice(1, 5).map((n) => (
              <a key={n.id} {...linkTo(n.id)} style={{ color: 'inherit' }}>
                {n.label}
              </a>
            ))}
          </span>
          <button
            className="link-pill"
            onClick={() => navigateToSection('home')}
            aria-label="Back to top"
          >
            <ArrowUpIcon />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
