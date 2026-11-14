import { site, socials, contactMailto } from '../data/portfolio'
import { socialIcon, MailIcon, ArrowUpRightIcon, SparkIcon } from './icons'
import { Reveal, SectionHead, Slot } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead
          index={6}
          kicker="Connect"
          title={<>Let's build something <span className="grad-text">together</span></>}
        />

        <div className="contact-grid">
          {/* CTA card */}
          <Reveal className="contact-cta">
            <h2>
              Have an idea, a hackathon, or an opportunity?
              <br />
              <span className="grad-text">I'd love to hear about it.</span>
            </h2>
            <p>{site.collaborationNote}</p>

            <div className="contact-email">
              {site.email ? (
                <a className="email-line" href={`mailto:${site.email}`}>
                  <MailIcon />
                  {site.email}
                </a>
              ) : (
                <Slot>add your email in portfolio.js (site.email)</Slot>
              )}
            </div>

            <div className="contact-actions">
              {site.email ? (
                <a className="btn btn--primary" href={contactMailto} target="_blank" rel="noopener noreferrer">
                <MailIcon />
               Say Hello
              </a>
              ) : (
                <a className="btn btn--primary" href={socials[0].url} target="_blank" rel="noopener noreferrer">
                  Reach out on GitHub
                  <ArrowUpRightIcon />
                </a>
              )}
              <a className="btn btn--ghost" href={site.resume.url} download>
                {site.resume.label}
              </a>
            </div>

            <p
              style={{
                marginTop: 26,
                color: 'var(--text-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <SparkIcon style={{ width: 14, height: 14, color: 'var(--cyan)' }} />
              Usually fastest to reach on Instagram or GitHub.
            </p>
          </Reveal>

          {/* Social profile cards */}
          <div className="social-cards">
            {socials.map((s, i) => {
              const Icon = socialIcon(s.id)
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <a
                    className="social-card"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — opens in a new tab`}
                  >
                    <span className="social-card__icon">
                      <Icon />
                    </span>
                    <span>
                      <b>{s.label}</b>
                      <span>{s.handle}</span>
                    </span>
                    <span className="arrow">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
