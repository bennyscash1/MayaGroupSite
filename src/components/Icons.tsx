type IconProps = { size?: number; className?: string };

/** Up-left arrow (↖) — the "forward" direction in an RTL layout. */
export function ArrowUpLeft({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M18 18 6.5 6.5" />
      <path d="M6 15V6h9" />
    </svg>
  );
}

export function ArrowDown({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M12 3v17" />
      <path d="m5 13 7 7 7-7" />
    </svg>
  );
}

export function MenuIcon({ open, size = 28 }: { open: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6l16 16" />
          <path d="M22 6 6 22" />
        </>
      ) : (
        <>
          <path d="M3 6h22" />
          <path d="M3 14h22" />
          <path d="M3 22h22" />
        </>
      )}
    </svg>
  );
}

/**
 * Maya building mark (towers + "M"), rebuilt as vectors from the
 * "האחים מאיה – בנייה ויזמות נדל"ן" logo. Single colour via currentColor.
 */
export function BuildingMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 330"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d="M117 0v87L60 115v70l22 27v-83l35-17v142l11 13 11-13V37l35 17v158l23-28V39z" />
      <path d="M256 189l-30-9-98 115-98-115-30 9v141h75v-21l-14-14-8 3v13H18V205l5-3 6 3 99 115 99-115 6-3 5 3v106h-35v-13l-8-3-14 14v21h75z" />
    </svg>
  );
}

/* ---------- Line icons (24px grid, stroke 1.5) used on the inner pages ---------- */
type LineIconProps = { size?: number; className?: string };

function Line({ size = 24, className, children }: LineIconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ICON_PATHS = {
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 16.5 9 5 9-5" />
    </>
  ),
  home: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6" />
    </>
  ),
  phone: (
    <path d="M5 3h3.5l1.5 4.5-2 1.5a12 12 0 0 0 7 7l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </>
  ),
  expand: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-7 7" />
      <path d="M10 20H4v-6" />
      <path d="M4 20l7-7" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>
  ),
  stack: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 4-4 4 2 3-2 7 5" />
      <path d="m7 13 4 4c.8.8 2 .8 2.8 0l4.2-4" />
      <path d="M3 11l4 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.9-3.4 3.4-5 6.5-5s5.6 1.6 6.5 5" />
      <path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4" />
      <path d="M18 15.3c1.7.7 2.9 2.3 3.5 4.7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 8h8v13" />
      <path d="M2.5 21h19" />
      <path d="M7.5 8h1.5M7.5 12h1.5M7.5 16h1.5M15.5 12h1.5M15.5 16h1.5" />
    </>
  ),
  docSearch: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21H11" />
      <path d="M14 3l5 5v3" />
      <path d="M14 3v5h5" />
      <path d="M8 9h3M8 12.5h5" />
      <circle cx="16.5" cy="16.5" r="3" />
      <path d="m18.7 18.7 2.3 2.3" />
    </>
  ),
  pause: (
    <>
      <path d="M9 5v14" />
      <path d="M15 5v14" />
    </>
  ),
  play: <path d="M7 4.5v15l12-7.5-12-7.5Z" />,
  arrowUpRight: (
    <>
      <path d="M6 18 17.5 6.5" />
      <path d="M9 6h9v9" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICON_PATHS;

/** Generic line icon: <Icon name="pin" /> */
export function Icon({ name, size, className }: LineIconProps & { name: IconName }) {
  return (
    <Line size={size} className={className}>
      {ICON_PATHS[name]}
    </Line>
  );
}
