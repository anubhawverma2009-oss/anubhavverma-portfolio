# Anubhav Verma — 3D Personal Portfolio

Premium, production-ready personal portfolio for **Anubhav Verma** (aka *Mr. Experience*).
Deep-black futuristic design, an interactive Three.js hero, and **all editable content in one file**.

- **Domain:** https://anubhavverma.xyz
- **Stack:** React 19 · Vite · Three.js (React Three Fiber) · hand-crafted CSS (zero UI libraries)

---

## 🚀 Running the project

```bash
npm install        # first time only
npm run dev        # development → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build → http://localhost:4173
```

Requires Node.js 18+ (built and tested on Node 24).

> **Dev vs production:** in `npm run dev`, dashed "to add" placeholder hints are
> visible so you can see what still needs filling in. They are automatically
> hidden in `npm run build` — the public site never shows unfinished labels.

---

## ✏️ Editing your content — ONE file

**Everything lives in [`src/data/portfolio.js`](src/data/portfolio.js).**
Name, intro, photo, social links, projects, skills, achievements, certificates,
resume path and contact info. Commented templates inside the file show how to
add more entries. No other file needs to change.

| What you want to change | Where in `portfolio.js` |
| --- | --- |
| Name, tagline, intro, roles, location | `site` |
| Profile photo | `site.profileImage` (drop the file in `public/images/`) |
| Email | `site.email` (hidden until you set it) |
| Social links | `socials` |
| About text & highlight pillars | `about` |
| Projects (add / edit / reorder) | `projects` (+ template block) |
| Skills (confirm new ones) | `skills` |
| Achievements timeline | `achievements` (+ template block) |
| Certificates | `certificates` (+ template block) |
| Resume | replace `public/resume/Anubhav_Verma_Resume.pdf` |

**Recommended next fills:** profile photo, email, resume PDF, certificate
image/link, achievement years, project screenshots
(`image: '/images/projects/xxx.png'` replaces the generated artwork).

---

## 📁 Project structure

```
├── index.html                  # SEO, Open Graph, fonts, JSON-LD
├── public/
│   ├── favicon.svg · icons/    # branding (AV monogram)
│   ├── og-image.png            # social share card (1200×630)
│   └── resume/                 # ← replace with your real resume PDF
├── src/
│   ├── data/portfolio.js       # ★ ALL editable content
│   ├── styles/global.css       # design system (tokens → components)
│   ├── hooks.js                # reveal, active-section, tilt, media queries
│   ├── three/HeroScene.jsx     # WebGL scene (lazy-loaded chunk)
│   └── components/             # Navbar, Hero, sections, Cursor, …
└── scripts/generate-assets.mjs # regenerates og-image + favicons (node scripts/…)
```

---

## 🌐 Deploying + connecting anubhavverma.xyz

The site is a static bundle (`dist/`) — any static host works.

### Option A — Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo → **Deploy**
   (Vite is auto-detected; no settings needed).
3. Connect the domain: **Project → Settings → Domains → Add `anubhavverma.xyz`**
   and follow the DNS instructions Vercel shows.

### Option B — Netlify
1. Repo → [app.netlify.com](https://app.netlify.com) → **Add new site → Import**.
   Build command `npm run build`, publish directory `dist`.
2. **Domain management → Add custom domain** → follow DNS instructions.

### Option C — GitHub Pages
Set base path in `vite.config.js` (`base: '/<repo-name>/'`), build, and publish
`dist/` with the official *deploy-static* GitHub Action, then add your CNAME.

### Pointing the domain (at your registrar, e.g. GoDaddy/Namecheap)
- **Apex domain `anubhavverma.xyz`** → add `A` records Vercel/Netlify give you,
  **or** an `ALIAS`/`CNAME` to `cname.vercel-dns.com` / `<site>.netlify.app`.
- **www subdomain** → `CNAME` → the value your host provides.
- DNS can take 10 min – 24 h to propagate. Enable HTTPS (automatic on both hosts).

---

## ⚡ Performance & accessibility notes

- Three.js is code-split; first paint never waits for WebGL (~44 kB app + lazy 3D chunk).
- The 3D scene **pauses when scrolled off-screen**, halves particles on weak GPUs,
  and falls back to a CSS orb on mobile / reduced-motion / no-WebGL.
- `prefers-reduced-motion` disables marquee, reveals, cursor and 3D animation.
- Keyboard-navigable, skip-link, ARIA labels, focus rings, semantic landmarks.
- Zero fake data: every project/achievement/certificate is real or clearly a placeholder.

---

Designed & built with curiosity by **Anubhav Verma**.
