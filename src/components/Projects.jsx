import { projects } from '../data/portfolio'
import { useTilt, useReducedMotion } from '../hooks'
import { GithubIcon, ExternalIcon } from './icons'
import { Reveal, SectionHead } from './ui'

function ProjectCard({ project, index }) {
  const tilt = useTilt(useReducedMotion() ? 0 : 6)
  const isDev = import.meta.env.DEV

  return (
    <Reveal
      as="article"
      delay={(index % 2) * 90}
      className={`card project-card tilt ${project.featured ? 'project-card--featured' : ''}`}
    >
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        {/* artwork */}
        <div className="project-card__art">
          {project.image ? (
            <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
          ) : (
            <div
              className="art-gen"
              style={{ '--from': project.art?.from || '#4d8dff', '--to': project.art?.to || '#8b5cf6' }}
              role="img"
              aria-label={`${project.name} — generated artwork placeholder`}
            >
              <span className="art-gen__ring" aria-hidden="true" />
              {project.showcase ? (
                <GithubIcon className="art-gen__logo" />
              ) : (
                <span className="art-gen__label">{project.art?.label || project.name.slice(0, 2).toUpperCase()}</span>
              )}
              {isDev && !project.image && !project.showcase && (
                <span className="art-tag">placeholder · add image in portfolio/projects.js</span>
              )}
            </div>
          )}
        </div>

        {/* body */}
        <div className="project-card__body">
          <div className="project-card__top">
            <h3>{project.name}</h3>
            <span className="status">{project.status}</span>
          </div>
          {project.tagline && <p className="tagline">“{project.tagline}”</p>}
          <p className="desc">{project.description}</p>

          {project.features?.length > 0 && (
            <ul className="feats">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}

          <div className="project-card__tech" aria-label="Technologies used">
            {project.tech.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div className="project-card__links">
            <a
              className="link-pill"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              {project.cta || 'Source'}
            </a>
            {project.demo && (
              <a
                className="link-pill"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalIcon />
                Live Demo
              </a>
            )}
            {project.year && (
              <span className="link-pill" style={{ cursor: 'default', opacity: 0.65 }}>
                {project.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          index={2}
          kicker="Projects"
          title={<>Things I've <span className="grad-text">designed, built & shipped</span></>}
          lead="Real, public repositories — every project below was built to solve an actual problem I saw around me."
        />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
