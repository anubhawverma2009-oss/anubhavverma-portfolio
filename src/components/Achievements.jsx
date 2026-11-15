import { achievements } from '../data/portfolio'
import { TrophyIcon, AwardIcon, CodeIcon, CalendarIcon } from './icons'
import { Reveal, SectionHead, Slot } from './ui'

const TYPE_META = {
  win: { cls: 'tl-item--win', badge: 'badge--win', Icon: TrophyIcon },
  participation: { cls: '', badge: 'badge--participation', Icon: AwardIcon },
  build: { cls: '', badge: 'badge--build', Icon: CodeIcon },
}

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt" aria-labelledby="achievements-title">
      <div className="container">
        <SectionHead
          index={4}
          kicker="Achievements"
          title={<>Milestones & <span className="grad-text">moments that count</span></>}
          lead="Competition wins are clearly separated from participation certificates — every entry below is genuine."
        />

        <div className="timeline">
          {achievements.map((a, i) => {
            const meta = TYPE_META[a.type] || TYPE_META.participation
            return (
              <Reveal as="article" key={a.title} delay={i * 90} className={`tl-item ${meta.cls}`}>
                <span className="tl-item__node" aria-hidden="true" />
                <div className="tl-item__badges">
                  <span className={`badge ${meta.badge}`}>{a.badge}</span>
                  {a.date ? (
                    <span className="badge" style={{ color: 'var(--text-3)', borderColor: 'var(--stroke)' }}>
                      <CalendarIcon style={{ width: 12, height: 12, marginRight: 6, verticalAlign: '-2px' }} />
                      {a.date}
                    </span>
                  ) : (
                    <Slot>add year in portfolio.js</Slot>
                  )}
                </div>
                <h3>{a.title}</h3>
                <p className="org">{a.org}</p>
                <p>{a.description}</p>
                {a.team?.length > 0 && (
                <p>{a.team.join(', ')}</p>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
