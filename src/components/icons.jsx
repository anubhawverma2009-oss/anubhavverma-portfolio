/* Minimal hand-drawn icon set (Lucide-style strokes) — zero dependencies. */

const I = ({ children, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
)

/* Brand / social */
export const GithubIcon = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

export const LinkedinIcon = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export const InstagramIcon = (p) => (
  <I {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
  </I>
)

export const UnstopIcon = (p) => (
  <I {...p}>
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    <path d="M12 22V12" />
    <path d="M2 7l10 5 10-5" />
    <path d="M2 17l10-5 10 5" />
    <path d="M7.5 9.5l1.5-1.5" />
    <path d="M15 9.5l-1.5-1.5" />
    <path d="M12 17v-4" />
  </I>
)

export const HackerRankIcon = (p) => (
  <I {...p}>
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.092-.12-.127-.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494z" />
  </I>
)

export const socialIcon = (id) =>
  ({
    github: GithubIcon,
    linkedin: LinkedinIcon,
    instagram: InstagramIcon,
    unstop: UnstopIcon,
    email: MailIcon,
    hackerrank: HackerRankIcon,
  }[id] || LinkIcon)

/* General UI */
export const LinkIcon = (p) => (
  <I {...p}>
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11.5 4.4" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.47" />
  </I>
)
export const ExternalIcon = (p) => (
  <I {...p}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </I>
)
export const MailIcon = (p) => (
  <I {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3.5 7l7.6 5.4a1.6 1.6 0 0 0 1.8 0L20.5 7" />
  </I>
)
export const DownloadIcon = (p) => (
  <I {...p}>
    <path d="M12 4v11" />
    <path d="M7.5 10.5L12 15l4.5-4.5" />
    <path d="M4.5 19.5h15" />
  </I>
)
export const ArrowUpIcon = (p) => (
  <I {...p}>
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </I>
)
export const ArrowRightIcon = (p) => (
  <I {...p}>
    <path d="M4 12h16" />
    <path d="M13 5l7 7-7 7" />
  </I>
)
export const ArrowUpRightIcon = (p) => (
  <I {...p}>
    <path d="M7 17L17 7" />
    <path d="M8.5 7H17v8.5" />
  </I>
)
export const MenuIcon = (p) => (
  <I {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </I>
)
export const CloseIcon = (p) => (
  <I {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </I>
)
export const MapPinIcon = (p) => (
  <I {...p}>
    <path d="M12 21s-6.5-5.1-6.5-10a6.5 6.5 0 0 1 13 0c0 4.9-6.5 10-6.5 10z" />
    <circle cx="12" cy="11" r="2.4" />
  </I>
)
export const SparkIcon = (p) => (
  <I {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
  </I>
)
export const CodeIcon = (p) => (
  <I {...p}>
    <path d="M8.5 7L4 12l4.5 5" />
    <path d="M15.5 7L20 12l-4.5 5" />
    <path d="M13.2 4.5l-2.4 15" />
  </I>
)
export const LightbulbIcon = (p) => (
  <I {...p}>
    <path d="M9.5 18h5" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.4 10.9c.6.5.9 1.1.9 1.8v.8h5v-.8c0-.7.3-1.3.9-1.8A6 6 0 0 0 12 3z" />
  </I>
)
export const UsersIcon = (p) => (
  <I {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.6a3.2 3.2 0 0 1 0 5.8" />
    <path d="M17.5 15.4c1.9.7 3 2.3 3 4.6" />
  </I>
)
export const CompassIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </I>
)
export const GlobeIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3z" />
  </I>
)
export const WrenchIcon = (p) => (
  <I {...p}>
    <path d="M14.5 6.5a4 4 0 0 0-5.4 5L4 16.6V20h3.4l5.1-5.1a4 4 0 0 0 5-5.4l-2.8 2.8-2.6-.7-.7-2.6z" />
  </I>
)
export const PaletteIcon = (p) => (
  <I {...p}>
    <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2s-1-2-1-3 .9-2 2.2-2H18a3.5 3.5 0 0 0 3-3.6C20.7 6.3 16.7 3 12 3z" />
    <circle cx="7.8" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="10.5" cy="7.8" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="8.2" r="0.8" fill="currentColor" stroke="none" />
  </I>
)
export const CpuIcon = (p) => (
  <I {...p}>
    <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
    <rect x="10" y="10" width="4" height="4" rx="1" />
    <path d="M9.5 3.5V6M14.5 3.5V6M9.5 18v2.5M14.5 18v2.5M3.5 9.5H6M3.5 14.5H6M18 9.5h2.5M18 14.5h2.5" />
  </I>
)
export const TrophyIcon = (p) => (
  <I {...p}>
    <path d="M8 4h8v5.5a4 4 0 0 1-8 0z" />
    <path d="M8 5.5H5a3 3 0 0 0 3 4M16 5.5h3a3 3 0 0 1-3 4" />
    <path d="M12 13.5V17" />
    <path d="M8.5 20.5h7M10 20.5c0-1.8.7-3.5 2-3.5s2 1.7 2 3.5" />
  </I>
)
export const AwardIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M9 13.9L7.5 21l4.5-2.6L16.5 21 15 13.9" />
  </I>
)
export const DocIcon = (p) => (
  <I {...p}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 15.5h6" />
  </I>
)
export const EyeIcon = (p) => (
  <I {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </I>
)
export const HeartIcon = (p) => (
  <I {...p}>
    <path d="M12 20.5s-7.5-4.6-9.3-9C1.4 8 3.6 4.9 6.9 4.9c2 0 3.7 1.1 5.1 3 1.4-1.9 3.1-3 5.1-3 3.3 0 5.5 3.1 4.2 6.6-1.8 4.4-9.3 9-9.3 9z" />
  </I>
)
export const CalendarIcon = (p) => (
  <I {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </I>
)
export const FingerIcon = (p) => (
  <I {...p}>
    <path d="M12 11v6" />
    <path d="M8.5 13.5V12a3.5 3.5 0 0 1 7 0v4" />
    <path d="M6 14v-2a6 6 0 0 1 12 0v5.5" />
    <path d="M9.5 21h6" />
  </I>
)
export const InfoIcon = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none" />
  </I>
)
export const LogoMark = ({ size = 38, ...p }) => (
  <span className="brand__mark" style={{ width: size, height: size }} {...p}>
    AV
  </span>
)

export const iconByName = {
  sparkle: SparkIcon,
  code: CodeIcon,
  lightbulb: LightbulbIcon,
  users: UsersIcon,
  compass: CompassIcon,
  globe: GlobeIcon,
  wrench: WrenchIcon,
  palette: PaletteIcon,
  cpu: CpuIcon,
}
