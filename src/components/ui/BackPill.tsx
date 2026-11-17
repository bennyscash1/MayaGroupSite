import type { LinkItem } from "@/content/site";
import styles from "./BackPill.module.css";

/**
 * Small "back" link at the top of a division hero (e.g. "→ חזרה לקבוצה").
 * Sits on the dark hero background; the arrow points right = back/start in RTL.
 */
export function BackPill({ label, href }: LinkItem) {
  return (
    <a href={href} className={styles.pill}>
      <svg className={styles.arrow} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </a>
  );
}
