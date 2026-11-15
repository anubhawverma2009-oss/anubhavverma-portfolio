/* =========================================================================
   ★ PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH ★
   -------------------------------------------------------------------------
   EVERYTHING you may want to change lives in this one file:
   name, intro, photo, social links, projects, skills, achievements,
   certificates, resume and contact info.

   HOW TO EDIT:
   • Text in quotes   → replace with your own text.
   • `null`           → means "not provided yet". The website handles nulls
                        gracefully (dev mode shows dashed "to add" slots,
                        production simply hides them).
   • Commented blocks → ready-made templates. Uncomment and fill them in
                        to add more projects / certificates / achievements.

   NOTHING here needs a code change anywhere else in the project.
   ========================================================================= */

/* Set to false before a public deploy if you want placeholder hints hidden.
   In `npm run dev` placeholders are visible (dashed outlines) so you can
   see exactly what still needs filling in. */
export const SHOW_PLACEHOLDERS = import.meta.env ? import.meta.env.DEV : false

/* =========================================================================
   1 · SITE & IDENTITY
   ========================================================================= */
export const site = {
  name: 'Anubhav Verma',
  firstName: 'Anubhav',
  /* Creator identity shown as a small tag in the hero */
  alias: 'Mr. Experience',

  roles: ['Student', 'Technology Enthusiast', 'Aspiring Developer', 'Creative Learner'],

  /* Hero heading + supporting copy */
  heading: "Hi, I'm Anubhav Verma.",
  tagline: 'Exploring Technology. Building Ideas. Creating Experiences.',
  intro:
    "I'm a curious learner passionate about technology, creativity, problem-solving, and building meaningful digital experiences.",

  /* ── YOUR PHOTO ─────────────────────────────────────────────────────────
     Drop a picture at  public/images/profile.jpg  (square, ≥ 500×500 works
     best) and set the path below. While it is null, an elegant monogram
     avatar is shown instead.                                            */
  profileImage:'/images/profile.png',

  location: 'Lucknow, Uttar Pradesh, India',
  domain: 'anubhavverma.xyz',

  /* ── CONTACT EMAIL ───────────────────────────────────────────────────────
     Replace with your real address. Shown only when set.                  */
  email: 'mr.experienceanubhav@gmail.com',
  /* ── RESUME ──────────────────────────────────────────────────────────────
     Put your PDF at  public/resume/Anubhav_Verma_Resume.pdf  (a clearly
     marked placeholder PDF ships there now, so the button never breaks). */
  resume: {
    label: 'Download Resume',
    url: '/resume/Anubhav_Verma_Resume.pdf',
  },

  /* Short line used in the contact section invitation */
  collaborationNote:
    'I love collaborating on ideas, hackathons and learning-driven projects. If you are building something interesting or want to team up, my inbox is always open.',
}

/* =========================================================================
   "SAY HELLO" COMPOSE LINK  (used by the Contact section button)
   -------------------------------------------------------------------------
   Opens the visitor's email app with the recipient, subject and a short
   pre-filled message. Edit the text below — it stays properly URL-encoded.
   ========================================================================= */

export const contactMailto = (() => {
  if (!site.email) return null

  const subject = "Let's Connect | Anubhav Verma"

  const body = `Hi Anubhav,

I came across your portfolio, Mr. Experience, and would love to connect with you.

I'm interested in exchanging ideas, exploring opportunities, and building meaningful connections.

Looking forward to connecting!

Best regards,
[Your Name]`

return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`})()

/* =========================================================================
   2 · SOCIAL PROFILES  (verified links — edit only if they change)
   ========================================================================= */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@anubhawverma2009-oss',
    url: 'https://github.com/anubhawverma2009-oss',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@mr.experience.in',
    url: 'https://www.instagram.com/mr.experience.in/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Anubhav Verma',
    url: 'https://www.linkedin.com/in/anbhav-verma-b80142289/',
  },
  {
    id: 'unstop',
    label: 'Unstop',
    handle: '@anubhver6483',
    url: 'https://unstop.com/u/anubhver6483',
  },
  {
  id: 'email',
  label: 'Email',
  handle: 'mr.experienceanubhav@gmail.com',
  url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mr.experienceanubhav@gmail.com',
  },
]

/* =========================================================================
   3 · ABOUT
   ========================================================================= */
export const about = {
  paragraphs: [
    "I'm a student and technology enthusiast from Lucknow, India, driven by an appetite for learning and a love for turning ideas into working products. Right now I'm exploring modern web development and AI-powered applications by actually building things — tourism platforms, civic-tech tools, agriculture networks and personal AI assistants.",
    'For me, every project is a classroom: I pick a real problem, learn what the problem demands, ship a prototype, and iterate. Hackathons and challenges are where I sharpen this — tight deadlines force creative problem-solving and clean priorities.',
    "Beyond code, I enjoy the creative side of technology — designing experiences that feel good to use. I'm actively looking for opportunities to collaborate, contribute and keep growing.",
  ],

  /* The four/five highlight pillars of the About section */
  highlights: [
    {
      icon: 'sparkle',
      title: 'Curiosity & Continuous Learning',
      text: 'Always exploring new technologies, frameworks and ideas — learning by building rather than only reading.',
    },
    {
      icon: 'code',
      title: 'Technology & Development',
      text: 'Hands-on with modern web development — React, TypeScript and the tooling around them.',
    },
    {
      icon: 'lightbulb',
      title: 'Creative Problem-Solving',
      text: 'Approaching problems from first principles and crafting practical, human-friendly solutions.',
    },
    {
      icon: 'users',
      title: 'Collaboration & Teamwork',
      text: 'Comfortable working in teams, sharing knowledge and building together on hackathon floors.',
    },
    {
      icon: 'compass',
      title: 'Exploring New Opportunities',
      text: 'Open to internships, open-source, events and collaborations that stretch what I know.',
    },
  ],

  /* Quick facts row — all entries below are real/neutral. Add yours freely. */
  quickFacts: [
    { label: 'Based in', value: 'Lucknow, India' },
    { label: 'Focus', value: 'Web · AI-powered apps' },
    { label: 'Status', value: 'Learning & building' },
    { label: 'Open to', value: 'Collaborations' },
  ],
}

/* =========================================================================
   4 · PROJECTS  (all entries below are real public repositories — verified)
   -------------------------------------------------------------------------
   • image: null → a designed generated artwork is shown. To use a real
     screenshot, drop the file in  public/images/projects/  and set e.g.
     image: '/images/projects/nawabi-safar.png'.
   • demo: null  → no "Live Demo" button is rendered.
   • featured: true → the card spans the full row width.
   ========================================================================= */
export const projects = [
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
    demo: null,
    status: 'Flagship project',
    year: '2026',
    image: null,
    art: { from: '#2255ff', to: '#8b5cf6', label: 'NS' },
    featured: true,
  },
  {
    id: 'civic-pulse',
    name: 'Civic Pulse AI',
    tagline: 'Community Hero — hyperlocal problem solver.',
    description:
      'A civic-engagement platform where citizens report local infrastructure problems with photos, an on-device intelligence layer triages them, and the community verifies issues through voting and peer evidence.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet', 'Motion'],
    features: [
      'Photo-based issue reporting with auto triage & severity heatmaps',
      'DrishtiBot — conversational assistant for civic info',
      'Community voting + gamified Civic Coins rewards',
    ],
    github: 'https://github.com/anubhawverma2009-oss/CivicPulse',
    demo: 'https://civicpulse.ai.studio',
    status: 'Hackathon · Vibe2Ship 2026',
    year: '2026',
    image: null,
    art: { from: '#00c6ff', to: '#4d8dff', label: 'CP' },
    featured: false,
  },
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
    id: 'studyflow',
    name: 'StudyFlow',
    tagline: 'AI-powered study workspace.',
    description:
      'An AI-powered study workspace combining PDF tools, AI tutoring and intelligent note-taking in one place.',
    tech: ['TypeScript', 'React', 'Vite'],
    features: ['PDF study tools', 'AI tutoring', 'Intelligent note-taking'],
    github: 'https://github.com/anubhawverma2009-oss/StudyFlow',
    demo: null,
    status: 'Productivity · AI',
    year: '2026',
    image: null,
    art: { from: '#f59e0b', to: '#8b5cf6', label: 'SF' },
    featured: false,
  },
  {
    id: 'marriage-lawn',
    name: 'Marrige-Lawn',
    tagline: 'Luxury wedding-venue explorer.',
    description:
      'A web experience for a luxury Indian wedding venue — interactive customiser, curated gallery and venue storytelling.',
    tech: ['TypeScript', 'React', 'Vite'],
    features: ['Interactive venue customiser', 'Curated gallery'],
    github: 'https://github.com/anubhawverma2009-oss/Marrige-Lawn',
    demo: null,
    status: 'Client-style web app',
    year: '2026',
    image: null,
    art: { from: '#f472b6', to: '#fb923c', label: 'ML' },
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

/* =========================================================================
   5 · SKILLS
   -------------------------------------------------------------------------
   Only CONFIRMED skills are listed below (evidence: public repositories &
   profiles). Unconfirmed ones are provided as commented placeholders —
   uncomment, verify and move them into `items` when they become true.
   ========================================================================= */
export const skills = [
  {
    id: 'core',
    icon: 'brain',
    title: 'Core Skills',
    blurb: 'Turning ideas into practical digital solutions.',
    items: [
      { name: 'Problem Solving' },
      { name: 'AI-assisted Development' },
      { name: 'Prompt Engineering' },
      { name: 'Debugging & Troubleshooting' },
      { name: 'Code Understanding & Customization' },
      { name: 'Vibe Coding' },
    
    ],
  },
  {
  id: 'programming',
  icon: 'code',
  title: 'Programming Foundations',
  blurb: 'Building my understanding of programming and logic.',
  items: [
    { name: 'C Programming' },
    { name: 'Python Fundamentals' },
    { name: 'Programming Logic' },
    { name: 'Arrays & Data Structures (Learning)' },
  ],
  },
{
  id: 'tools',
  icon: 'wrench',
  title: 'Tools & Platforms',
  blurb: 'Digital tools and platforms I use for development and productivity.',
  items: [
    { name: 'Google AI Studio, Antigravity' },
    { name: 'AI Assistants (ChatGPT, Claude)' },
    { name: 'Visual Studio Code' },
    { name: 'Version Control (Git & GitHub)' },
    { name: 'Supabase' },
    { name: 'Vercel' },
  ],
},

  {
    id: 'technical',
    icon: 'cpu',
    title: 'Technology & Innovation',
    blurb: 'Exploring emerging technologies through ideas and projects.',
    items: [
      { name: 'Large Language Models (LLMs)' },
      { name: 'AI-powered Applications' },
      { name: 'AI Tool Integration' },
      { name: 'Voice Assistants' },
      { name: 'Civic Tech' },
      { name: 'Tourism & Heritage Tech' },
    ],
  },
  {
    id: 'web',
    icon: 'globe',
    title: 'Web Development',
    blurb: 'Building and customizing modern web experiences.',
    items: [
      { name: 'HTML5 & CSS3' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'Responsive Web Design' },
      { name: 'Leaflet Maps' },
    ],
  },
  {
    id: 'business',
    icon: 'briefcase',
    title: 'Business & Management Interests',
    blurb: 'Exploring entrepreneurship, management and digital growth.',
    items: [
      { name: 'Entrepreneurship' },
      { name: 'Business Development' },
      { name: 'Project Management' },
      { name: 'Team Coordination' },
      { name: 'Networking & Communication' },
      { name: 'Social Media Management' },
      { name: 'Instagram & LinkedIn Management' },
      { name: 'Content Strategy & Planning' },
    ],
  },
]

/* =========================================================================
   6 · ACHIEVEMENTS TIMELINE
   -------------------------------------------------------------------------
   type: 'win' | 'participation' | 'build'   (controls the badge & styling)
   date: null → hidden until you add it (never invent dates).
   ========================================================================= */

export const achievements = [
  {
    type: 'achievement',
    title: 'U-19 AI Olympics — 7th Position',
    org: 'TENSOR SCHOOL OF CS & AI',
    date: 'JULY 2026',
    description:
      'Secured 7th position in the U-19 AI Olympics organized by TENSOR SCHOOL OF CS & AI.',
    badge: '7th Position',
  },
  {
  type: 'achievement',
  title: 'Smart India Hackathon — 2nd Position',
  org: 'Lucknow Public College of Professional Studies',
  date: 'AUGUST 2026',
  description:
  'Secured 2nd position in the college-level round of Smart India Hackathon as Team Chakravyuh.',
teamName: 'Chakravyuh',
team: [
  'Anubhav Verma',
  'Aadarsh Yadav',
  'Aanya Srivastava',
  'Ankita Chaurasia',
  'Aviral Omar',
  'Devansh Singh',
],
  badge: '2nd Position · College Level',
  },
  {
    type: 'learning',
    title: 'Continuous Learning & Skill Development',
    org: 'Workshops · Competitions · Learning Experiences',
    date: null,
    description:
      'Actively exploring new technologies, participating in workshops and learning opportunities, and continuously developing practical skills through hands-on experiences.',
    badge: 'Always Learning',
  },

  /* ── TEMPLATES — uncomment & fill as they happen ────────────────────────
  {
    type: 'participation',
    title: 'Hackathon Name — Participant',
    org: 'Organizer',
    date: '2026',
    description: 'What you built / your role in the team.',
    badge: 'Hackathon · Participant',
  },
  {
    type: 'win',
    title: 'Competition Name — Position',
    org: 'Organizer',
    date: null,
    description: 'What the win was for.',
    teamName: 'Chakravyuh',
   team: [
  'Anubhav Verma',
  'Aadarsh Yadav',
  'Ananya Srivastava',
  'Ankita Chaurasia',
  'Aviral Omar',
  'Devansh Singh',
   ],

    badge: 'Winner',
  },
  ----------------------------------------------------------------------- */
]

/* =========================================================================
   7 · CERTIFICATES
   -------------------------------------------------------------------------
   featured: each entry renders its own clickable card. Add entries here —
   no JSX changes needed. Template:
     { title: 'Certificate title', issuer: 'Organization', date: '2025',
       url: 'https://…' }        (date is optional; omit the key entirely)
   drive.url: keep null to hide the Drive card; a valid URL shows it.
   ========================================================================= */
export const certificates = {
  description:
    'Every certificate represents a step forward — from exploring new technologies to participating in competitions, workshops and learning experiences.',
  featured: [],
  linkedin: {
    title: 'My Certifications on LinkedIn',
    subtitle: 'Explore my certificates, achievements and latest learning updates.',
    label: 'Click to Explore All My Certificates & Latest Updates ↗',
    url: 'https://www.linkedin.com/in/anbhav-verma-b80142289/details/certifications/',
  },
  drive: {
    title: 'View All My Certificates on Google Drive ↗',
    subtitle: 'Access the complete certificate collection.',
    url: 'https://drive.google.com/drive/folders/1eZaCixmay7AKzs7Jgf-DFIIRP2IqZMiw?usp=drive_link',
  },
}

/* =========================================================================
   8 · NAVIGATION  (section ids — keep in sync with section components)
   ========================================================================= */
export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
