import { projects } from '../data/portfolio'

/** Slow marquee strip between hero and about — highlights focus areas. */
export default function Marquee() {
  const words = [
    'Web Development',
    'AI-Powered Apps',
    'Hackathons',
    'Civic Tech',
    'Creative Coding',
    'Continuous Learning',
  ]
  /* duplicated once for the seamless -50% loop */
  const track = [...words, ...words]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  )
}
