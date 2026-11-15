import { Icon } from "../Icons";
import { Section, SectionHead, base, type Tone } from "./Section";
import { SwIcon } from "./SwIcon";
import type { CardGridProps } from "./CardGrid";
import styles from "./Pillars.module.css";

type Props = Omit<CardGridProps, "tone" | "columns"> & { tone?: Tone };

/**
 * "Why us" pillars: numbered entries separated by hairlines (2 x 2 on desktop),
 * each with its icon, statement and a short checklist.
 */
export function Pillars({ id, eyebrow, title, subtitle, items, footnote, tone = "surface" }: Props) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} wide />
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item.title} className={styles.item}>
            <div className={styles.top}>
              <span className={base.num}>{String(i + 1).padStart(2, "0")}</span>
              {item.icon && (
                <span className={base.icon}>
                  <SwIcon name={item.icon} size={22} />
                </span>
              )}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            {item.points && (
              <ul className={styles.points}>
                {item.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} className={styles.check} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {footnote && <p className={base.footnote}>{footnote}</p>}
    </Section>
  );
}
