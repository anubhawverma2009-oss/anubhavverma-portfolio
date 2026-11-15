/* =========================================================================
   HOME · SITE & IDENTITY
   -------------------------------------------------------------------------
   Site-wide identity, hero copy, photo, contact details, social profiles,
   the "Say Hello" compose link and the navigation map.
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

  roles: ['Student', 'Technology Enthusiast', 'Entrepreneurship Enthusiast', 'Creative Learner',],

  /* Hero heading + supporting copy */
  heading: "Hi, I'm Anubhav Verma.",
  tagline: 'Learning Technology · Building Projects · Solving Problems',
  intro:
   "I'm a curious student exploring technology through hands-on projects, AI-assisted development, and creative problem-solving — turning ideas into meaningful digital experiences.",

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
