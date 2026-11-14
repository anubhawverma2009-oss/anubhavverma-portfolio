import { skills } from '../data/portfolio'
import { iconByName, InfoIcon } from './icons'
import { Reveal, SectionHead } from './ui'

export default function Skills() {
  const dev = import.meta.env.DEV

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          index={3}
          kicker="Skills"
          title={<>My current <span className="grad-text">toolbox</span></>}
          lead="The skills I build with, the tools I create with, and the technologies I explore — growing with every project."        />

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = iconByName[group.icon] || iconByName.code
            return (
              <Reveal
                as="div"
                key={group.id}
                delay={i * 80}
                className="card skill-panel"
              >
                <div className="skill-panel__head">
                  <span className="skill-panel__icon">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <p className="skill-panel__blurb">{group.blurb}</p>
                <div className="skill-panel__chips">
                  {group.items.map((s) => (
                    <span className="chip chip--accent" key={s.name}>
                      {s.name}
                    </span>
                  ))}
                  {/* dashed "to learn" chips — visible in dev, hidden in prod */}
                  {dev &&
                    (group.placeholders || []).map((s) => (
                      <span className="chip chip--placeholder" key={`ph-${s}`} title="Unconfirmed — listed only in dev mode">
                        {s}
                      </span>
                    ))}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="skill-note">
            <InfoIcon />
            {dev
              ? 'A growing set of skills, shaped by hands-on projects, practical exploration, and continuous learning · dashed chips appear only in dev — edit src/data/portfolio.js to move a skill from “planned” to “confirmed”.'
              : 'A growing set of skills, shaped by hands-on projects, practical exploration, and continuous learning.'}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
