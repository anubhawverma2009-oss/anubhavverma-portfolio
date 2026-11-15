/* =========================================================================
   ACHIEVEMENTS TIMELINE
   -------------------------------------------------------------------------
   type: 'win' | 'participation' | 'build' | custom   (controls badge styling)
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
