"use client";

import styles from "./FilterTabs.module.css";

export type FilterTab = { id: string; label: string };

type Props = {
  tabs: readonly FilterTab[];
  value: string;
  onChange: (id: string) => void;
  label: string;
};

/** Filter chips: mobile = outlined chips, desktop = text links with dividers + filled active pill. */
export function FilterTabs({ tabs, value, onChange, label }: Props) {
  return (
    <div className={styles.tabs} role="group" aria-label={label}>
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={styles.tab}
          aria-pressed={t.id === value}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
