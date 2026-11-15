import { about, site, socials } from '../data/portfolio'
import { iconByName, socialIcon, DownloadIcon, ArrowUpRightIcon } from './icons'
import { Reveal, SectionHead } from './ui'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead
          index={1}
          kicker="About"
          title={<>Curious by default, <span className="grad-text">builder by choice</span></>}
          lead="A student who learns by making — here's what drives me."
        />

        <div className="about-grid">
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 90}>
                {p}
              </Reveal>
            ))}

            <Reveal delay={120}>
              <dl className="about-facts">
                {about.quickFacts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="about-side" delay={150}>
            <div className="about-card">
              <div className="who">
                <span className="avatar" aria-hidden="true">
                  {site.profileImage ? (
                    <img src={site.profileImage} alt="" />
                  ) : (
                    'AV'
                  )}
                </span>
                <div>
                  <b>{site.name}</b>
                  <small>{site.domain}</small>
                </div>
              </div>
              <p>
                Student exploring technology through personal projects and hackathons, using AI-assisted development
                 to turn ideas into practical digital solutions in tourism, civic-tech and AI.
              </p>
              <div className="acts">
                <a href={site.resume.url} className="link-pill" download>
                  <DownloadIcon />
                  {site.resume.label}
                </a>
                <a
                  href={socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-pill"
                >
                  <ArrowUpRightIcon />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Highlight pillars */}
        <div className="pillars">
          {about.highlights.map((h, i) => {
            const Icon = iconByName[h.icon] || iconByName.sparkle
            return (
              <Reveal className="pillar" key={h.title} delay={i * 70}>
                <div className="pillar__icon">
                  <Icon />
                </div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
