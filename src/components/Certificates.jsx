import { certificates } from '../data/portfolio'
import { DocIcon, EyeIcon, CalendarIcon, FingerIcon } from './icons'
import { Reveal, SectionHead, Slot } from './ui'

function CertCard({ cert, index }) {
  const hasPreview = Boolean(cert.image || cert.url)
  const isDev = import.meta.env.DEV

  return (
    <Reveal as="article" delay={(index % 2) * 90} className="card cert-card">
      {/* preview */}
      <div className="cert-card__preview">
        {cert.image ? (
          <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
        ) : (
          <div className="cert-ph" role="img" aria-label={`${cert.title} — certificate image placeholder`}>
            <div className="cert-ph__inner">
              <DocIcon />
              <span>{isDev ? 'certificate image · add in portfolio.js' : 'certificate preview'}</span>
            </div>
          </div>
        )}
      </div>

      {/* body */}
      <div className="cert-card__body">
        <span className="type">{cert.type}</span>
        <h3>{cert.title}</h3>
        <dl className="cert-card__meta">
          <div>
            <dt>Issued by</dt>
            <dd>{cert.issuer}</dd>
          </div>
          {cert.date && (
            <div>
              <dt>
                <CalendarIcon style={{ width: 11, height: 11, verticalAlign: '-1px' }} /> Date
              </dt>
              <dd>{cert.date}</dd>
            </div>
          )}
          {cert.credentialId && (
            <div>
              <dt>
                <FingerIcon style={{ width: 11, height: 11, verticalAlign: '-1px' }} /> Credential
              </dt>
              <dd style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{cert.credentialId}</dd>
            </div>
          )}
        </dl>

        <div className="cert-card__actions">
          {hasPreview ? (
            <a
              className="link-pill"
              href={cert.url || cert.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon />
              View Certificate
            </a>
          ) : (
            <Slot>set image or url to enable “View Certificate”</Slot>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHead
          index={5}
          kicker="Certificates"
          title={<>Proof of <span className="grad-text">learning</span></>}
          lead="Genuine certificates only — placeholders stay clearly marked until real files are added."
        />

        <div className="certs-grid">
          {certificates.map((c, i) => (
            <CertCard key={c.title} cert={c} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="skill-note">
            <DocIcon />
            {import.meta.env.DEV
              ? 'Adding a new certificate = adding one block to the certificates array in src/data/portfolio.js — no redesign needed.'
              : 'More certificates — added as they are earned.'}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
