import { Eyebrow } from "../Eyebrow";
import { SwIcon, type SwIconName } from "./SwIcon";
import styles from "./ChipStrip.module.css";

export type Chip = { label: string; note?: string; icon?: SwIconName };

export type ChipStripProps = {
  id: string;
  eyebrow?: string;
  title: string;
  text?: string;
  items: readonly Chip[];
  /** Small print under the chips (e.g. "not a formal certification") */
  note?: string;
};

/** Compact panel with a heading and a wrap of labelled chips (standards, integrations). */
export function ChipStrip({ id, eyebrow, title, text, items, note }: ChipStripProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={styles.panel}>
          <header className={styles.head}>
            {eyebrow && <Eyebrow label={eyebrow} />}
            <h2 id={`${id}-title`} className={styles.title}>
              {title}
            </h2>
            {text && <p className={styles.text}>{text}</p>}
          </header>
          <ul className={styles.chips}>
            {items.map((c) => (
              <li key={c.label} className={styles.chip}>
                {c.icon && <SwIcon name={c.icon} size={20} className={styles.icon} />}
                <span className={styles.chipText}>
                  <span className={styles.label}>{c.label}</span>
                  {c.note && <span className={styles.note}>{c.note}</span>}
                </span>
              </li>
            ))}
          </ul>
          {note && <p className={styles.small}>{note}</p>}
        </div>
      </div>
    </section>
  );
}
