import { certificates } from '../data/portfolio'
import { LinkedinIcon, ArrowUpRightIcon, DownloadIcon, AwardIcon } from './icons'
import { Reveal, SectionHead } from './ui'

export default function Certificates() {
  const { featured, linkedin, drive } = certificates

  return (
    <section id="certificates" className="section section--alt" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHead
          index={5}
          kicker="Certificates"
          title={<>Proof of <span className="grad-text">Learning</span></>}
          lead={certificates.description}
        />

        {/* Featured certificates — renders only when entries exist */}
        {featured.length > 0 && (
          <div className="certs-featured">
            {featured.map((cert, i) => (
              <Reveal key={cert.title} delay={(i % 3) * 80}>
                <a
                  className="card cert-card"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${cert.title} — opens in a new tab`}
                >
                  <span className="cert-card__icon" aria-hidden="true">
                    <AwardIcon />
                  </span>
                  <span className="cert-card__text">
                    <span className="cert-card__title">{cert.title}</span>
                    <span className="cert-card__meta">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ''}
                    </span>
                  </span>
                  <span className="cert-link__arrow" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {/* Link cards — Drive card only renders when drive.url is set */}
        <div className="certs-summary">
          <Reveal>
            <a
              className="card cert-link"
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkedin.title} — opens in a new tab`}
            >
              <span className="cert-link__icon" aria-hidden="true">
                <LinkedinIcon />
              </span>
              <span className="cert-link__text">
                <span className="cert-link__title">{linkedin.title}</span>
                <span className="cert-link__subtitle">{linkedin.subtitle}</span>
                <span className="cert-link__updated">
                  <span className="pulse" aria-hidden="true" />
                  {linkedin.label}
                </span>
              </span>
              <span className="cert-link__arrow" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </a>
          </Reveal>

          {drive.url && (
            <Reveal delay={120}>
              <a
                className="card cert-link"
                href={drive.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${drive.title} — opens in a new tab`}
              >
                <span className="cert-link__icon" aria-hidden="true">
                  <DownloadIcon />
                </span>
                <span className="cert-link__text">
                  <span className="cert-link__title">{drive.title}</span>
                  <span className="cert-link__subtitle">{drive.subtitle}</span>
                </span>
                <span className="cert-link__arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
