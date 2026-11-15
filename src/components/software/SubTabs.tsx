"use client";

import { useEffect, useRef } from "react";
import styles from "./SubTabs.module.css";

export type SubTab = { href: string; label: string };

type Props = { tabs: readonly SubTab[]; active: string; label: string };

/**
 * Sticky sub-navigation of the software hub ("סקירה" + four topic pages).
 * Plain links (real routes), the current one marked with aria-current="page".
 * On narrow screens the row scrolls horizontally; the active tab is scrolled into view.
 */
export function SubTabs({ tabs, active, label }: Props) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const current = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !current || list.scrollWidth <= list.clientWidth) return;
    // Centre the active tab horizontally without moving the page vertically
    const delta = current.getBoundingClientRect().left + current.offsetWidth / 2 - (list.getBoundingClientRect().left + list.clientWidth / 2);
    list.scrollLeft += delta;
  }, [active]);

  return (
    <nav className={styles.bar} aria-label={label}>
      <div className={`container ${styles.inner}`}>
        <ul ref={listRef} className={styles.list}>
          {tabs.map((t) => (
            <li key={t.href}>
              <a href={t.href} className={styles.tab} aria-current={t.href === active ? "page" : undefined}>
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
