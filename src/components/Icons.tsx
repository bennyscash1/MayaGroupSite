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
