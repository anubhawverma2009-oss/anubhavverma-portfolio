/* =========================================================================
   ★ PORTFOLIO CONTENT — CENTRAL IMPORT INTERFACE ★
   -------------------------------------------------------------------------
   Section data lives in its own file inside this folder:

     home.js          → site identity, hero, socials, contact compose link, nav
     about.js         → about copy, highlight pillars, quick facts
     projects.js      → project cards + GitHub showcase
     skills.js        → skill groups
     achievements.js  → achievements timeline
     certificates.js  → certificate summary + LinkedIn / Drive cards

   Components keep importing from '../data/portfolio' (this index) —
   edit the section files directly; nothing else needs to change.
   ========================================================================= */

export { SHOW_PLACEHOLDERS, site, socials, contactMailto, nav } from './home'
export { about } from './about'
export { projects } from './projects'
export { skills } from './skills'
export { achievements } from './achievements'
export { certificates } from './certificates'
