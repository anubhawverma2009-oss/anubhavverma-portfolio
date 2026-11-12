import { useReveal } from '../hooks'
import { InfoIcon } from './icons'

/* Shared UI primitives -----------------------------------------------------*/

/** Scroll-reveal wrapper. delay in ms. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Numbered section heading: "01 · About" + title + optional lead. */
export function SectionHead({ index, kicker, title, lead }) {
  return (
    <header className="section-head">
      <Reveal>
        <span className="kicker">
          {String(index).padStart(2, '0')} · {kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
    </header>
  )
}

/**
 * Dashed "to be added" slot — rendered only in dev mode (SHOW_PLACEHOLDERS)
 * so the public site never shows unfinished labels.
 */
export function Slot({ children }) {
  if (!import.meta.env.DEV) return null
  return (
    <span className="slot">
      <InfoIcon />
      {children}
    </span>
  )
}
