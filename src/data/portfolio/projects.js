/* =========================================================================
   PROJECTS  (all entries below are real public repositories — verified)
   -------------------------------------------------------------------------
   • image: null → a designed generated artwork is shown. To use a real
     screenshot, drop the file in  public/images/projects/  and set e.g.
     image: '/images/projects/nawabi-safar.png'.
   • demo: null  → no "Live Demo" button is rendered.
   • featured: true → the card spans the full row width.
   • showcase: true → GitHub-logo art + CTA pill (used by the profile card).
   ========================================================================= */
import { socials } from './home'

export const projects = [
  {
    id: 'krishx',
    name: 'KrishiX',
    tagline: 'AI-powered agriculture network.',
    description:
      'An AI-powered agriculture network connecting farmers, students and experts — built to make agricultural knowledge and support easier to reach.',
    tech: ['TypeScript', 'React', 'Vite'],
    features: [
      'Connects farmers, students and agriculture experts',
      'AI-assisted insights for farming communities',
    ],
    github: 'https://github.com/anubhawverma2009-oss/KrishX',
    demo: null,
    status: 'AI for agriculture',
    year: '2026',
    image: null,
    art: { from: '#14b178', to: '#22d3ee', label: 'KX' },
    featured: false,
  },
  {
    id: 'ara-ai',
    name: 'ARA-AI',
    tagline: 'Personal AI assistant for Windows.',
    description:
      'A personal AI assistant for Windows with voice control, automation, memory and multi-AI provider support.',
    tech: ['TypeScript', 'Windows', 'AI APIs'],
    features: ['Voice-first interaction', 'Automation + memory', 'Multi-AI provider support'],
    github: 'https://github.com/anubhawverma2009-oss/ARA-AI',
    demo: null,
    status: 'Desktop · AI',
    year: '2026',
    image: null,
    art: { from: '#8b5cf6', to: '#ec4899', label: 'AR' },
    featured: false,
  },
  {
    id: 'nawabi-safar',
    name: 'Nawabi Safar',
    tagline: 'Discover Lucknow. Find Your Vibe. Experience the City.',
    description:
      'A digital tourism and heritage-discovery platform for Lucknow — cataloguing monuments, food spots, artisans and emergency helplines, with an admin CMS for content management.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Leaflet Maps', 'Supabase', 'Motion'],
    features: [
      'Vibe-based exploration (Royal, Street Food, Spiritual, Artisans)',
      '"Build My Day" itinerary planner + interactive maps',
      'Admin dashboard with real-time multi-device sync',
    ],
    github: 'https://github.com/anubhawverma2009-oss/Navabi-Safar',
    demo: 'https://nawabi-safar.ai.studio/',
    status: 'Flagship project',
    year: '2026',
    image: null,
    art: { from: '#2255ff', to: '#8b5cf6', label: 'NS' },
    featured: false,
  },
  {
    id: 'github-more',
    name: 'More Projects on GitHub',
    description:
      'These highlights are just the beginning — my GitHub profile hosts more public repositories, experiments and work-in-progress builds. Explore them to see everything I am learning and building.',
    tech: [],
    features: [],
    github: socials[0].url,
    cta: 'Explore My GitHub',
    demo: null, 
    status: 'Public repositories',
    image: null,
    showcase: true,
    featured: false,
  },

  /* ── TEMPLATE — copy, uncomment and fill to add another project ─────────
  {
    id: 'my-new-project',
    name: 'Project Name',
    tagline: 'One-line pitch.',
    description: 'Two or three sentences about the problem it solves.',
    tech: ['React', 'TypeScript'],
    features: ['Feature one', 'Feature two'],
    github: 'https://github.com/anubhawverma2009-oss/REPO-NAME',
    demo: null,                          // or 'https://…' when live
    status: 'Web app',
    year: '2026',
    image: null,                         // or '/images/projects/xxx.png'
    art: { from: '#4d8dff', to: '#8b5cf6', label: 'PN' },
    featured: false,
  },
  ----------------------------------------------------------------------- */
]
