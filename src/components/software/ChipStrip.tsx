import { Section, SectionHead, type Tone } from "./Section";
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
  tone?: Tone;
};

/** Typographic row of labelled chips (standards, integrations), no logos. */
export function ChipStrip({ id, eyebrow, title, text, items, note, tone = "surface" }: ChipStripProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`} className={styles.section}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={text} wide />
      <ul className={styles.chips}>
        {items.map((c) => (
          <li key={c.label} className={styles.chip}>
            {c.icon && <SwIcon name={c.icon} size={18} className={styles.icon} />}
            <span className={styles.label}>{c.label}</span>
            {c.note && <span className={styles.note}>{c.note}</span>}
          </li>
        ))}
      </ul>
      {note && <p className={styles.small}>{note}</p>}
    </Section>
  );
}
