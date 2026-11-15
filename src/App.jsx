import { useEffect } from 'react'
import { installRouter, linkTo } from './router'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  /* Path-based routing: back/forward + initial deep links (/about etc.) */
  useEffect(() => installRouter(), [])

  return (
    <>
      {/* fixed ambience layers */}
      <div className="page-bg" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <a
        {...linkTo('about')}
        className="link-pill"
        style={{
          position: 'absolute',
          left: -9999,
          top: 0,
        }}
        onFocus={(e) => Object.assign(e.currentTarget.style, { left: 16, top: 16, zIndex: 300, position: 'fixed', background: '#0b0e18' })}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        Skip to content
      </a>

      <Navbar />
      <Cursor />
      <ScrollProgress />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
