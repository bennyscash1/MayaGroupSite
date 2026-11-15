import { Icon, type IconName } from "../Icons";

/**
 * Extra line icons for the software hub (same 24px grid / 1.5 stroke as the shared
 * set in Icons.tsx). <SwIcon> renders one of these or falls back to the shared <Icon>.
 */
const SW_PATHS = {
  funnel: <path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8l-6.5-8Z" />,
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21V3Z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 15h4" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </>
  ),
  portal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="9" cy="14" r="2" />
      <path d="M13.5 13h4M13.5 16h3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8.5-8.5" />
      <path d="m16.5 6.5 2.5 2.5" />
      <path d="m14 9 2 2" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4" />
      <path d="M6.5 7h11v3.5a5.5 5.5 0 0 1-11 0V7Z" />
      <path d="M12 16v5" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 4v4" />
      <circle cx="12" cy="3.5" r="1" />
      <circle cx="9" cy="13.5" r="1" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1" fill="currentColor" />
      <path d="M2 12.5v3M22 12.5v3" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 12.5h7M8.5 16h5" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <path d="M6 10h1M9.5 10h1M13 10h1M16.5 10h1M6 14h1M9 14h6M17 14h1" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3.5" width="6" height="5" rx="1" />
      <rect x="15" y="15.5" width="6" height="5" rx="1" />
      <path d="M6 8.5V12a2 2 0 0 0 2 2h8a2 2 0 0 1 2 2" />
      <path d="M15 6h6M18 3v6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 20a2 2 0 0 0 2 1h13v-3" />
      <path d="M9 7.5h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="13.5" width="4" height="6" rx="1.5" />
      <rect x="17" y="13.5" width="4" height="6" rx="1.5" />
      <path d="M19 19.5c0 1.2-1.5 2-4 2h-2" />
    </>
  ),
  menu: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r="1" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" />
      <circle cx="4.5" cy="18" r="1" fill="currentColor" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r="0.8" fill="currentColor" />
    </>
  ),
  callback: (
    <>
      <path d="M5 3h3.5l1.5 4.5-2 1.5a12 12 0 0 0 7 7l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
      <path d="M15 3.5h5.5V9" />
      <path d="m20.5 3.5-6 6" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10v4h3l8 4.5v-13l-8 4.5h-3Z" />
      <path d="M7 14.5 8.5 20h2.5l-1-4.5" />
      <path d="M18 9a4 4 0 0 1 0 6" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5.5" ry="2.5" />
      <path d="M3.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7" />
      <path d="M3.5 11v4c0 1.4 2.5 2.5 5.5 2.5 1 0 2-.1 2.8-.4" />
      <circle cx="16.5" cy="16" r="4.5" />
    </>
  ),
  route: (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M7 12h4M11 12c2 0 2-7 6-7M11 12c2 0 2 7 6 7" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21" />
    </>
  ),
  wave: <path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10M21 12h0" />,
  bug: (
    <>
      <rect x="7" y="8" width="10" height="12" rx="5" />
      <path d="M9 8a3 3 0 0 1 6 0" />
      <path d="M3.5 13H7M17 13h3.5M4.5 8.5 7.5 10M19.5 8.5 16.5 10M4.5 18.5 7.5 17M19.5 18.5 16.5 17" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15c4-3 7-7 7-12-5 0-9 3-12 7l5 5Z" />
      <path d="M7 10H4l2.5-3.5H10M14 17v3l3.5-2.5V14" />
      <path d="M7.5 16.5 4 20" />
      <circle cx="14.5" cy="8" r="1.3" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  access: (
    <>
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M4.5 8.5 12 10l7.5-1.5" />
      <path d="M12 10v4.5l-3 6.5M12 14.5l3 6.5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7.5 21h9" />
      <path d="M4.5 7h15" />
      <path d="m4.5 7-2.5 6a2.8 2.8 0 0 0 5 0L4.5 7ZM19.5 7 17 13a2.8 2.8 0 0 0 5 0l-2.5-6Z" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <circle cx="12" cy="13" r="1.6" />
      <path d="M12 7.2v4.2M10.7 14l-4 2.5M13.3 14l4 2.5M7.2 18h9.6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.6A3.8 3.8 0 0 1 17.5 18.5H7Z" />
      <path d="m10 14 1.7 1.7L15 12.5" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" />
      <path d="m13.5 4.5-3 15" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5V20h16V9.5" />
      <path d="M3 9.5 4.5 4h15L21 9.5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v10h-11z" />
      <path d="M13.5 9.5h4l3 3.5V16h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  heart: <path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20Z" />,
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-7.5 7.5a2.1 2.1 0 0 1-3-3L18 10l-1.5-1.5a4 4 0 0 1-5-5l2.5 2.5 2-.5.5-2-2.5-2.5Z" />
  ),
  sparkle: (
    <>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
      <path d="M19 16c.3 1.6 1 2.4 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.1 2.2-.9 2.5-2.5Z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" />
      <path d="M3 12.5h18M10.5 12.5v1.5h3v-1.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M7.5 13.5h2M11 13.5h2M14.5 13.5h2M7.5 17h2M11 17h2" />
    </>
  ),
} as const;

export type SwIconName = IconName | keyof typeof SW_PATHS;

export function SwIcon({ name, size = 24, className }: { name: SwIconName; size?: number; className?: string }) {
  if (!(name in SW_PATHS)) return <Icon name={name as IconName} size={size} className={className} />;
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
      {SW_PATHS[name as keyof typeof SW_PATHS]}
    </svg>
  );
}
