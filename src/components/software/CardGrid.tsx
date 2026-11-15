import { Icon } from "../Icons";
import { Section, SectionHead, base, type Tone } from "./Section";
import { SwIcon, type SwIconName } from "./SwIcon";
import styles from "./CardGrid.module.css";

export type SwCard = { title: string; text: string; icon?: SwIconName; marker?: string; points?: readonly string[] };

export type CardGridProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: readonly SwCard[];
  footnote?: string;
  /** "light" (content files) maps to the paper band */
  tone?: "light" | Tone;
  columns?: 2 | 3 | 4;
  /** "grid" = entries divided by hairlines; "numbered" = large numerals (markers) */
  variant?: "grid" | "numbered";
  children?: React.ReactNode;
};

/**
 * Software card grid, drawn as a spec sheet: entries sit on a shared grid,
 * divided by hairlines instead of boxed in identical cards.
 */
export function CardGrid({ id, eyebrow, title, subtitle, items, footnote, tone = "paper", columns = 3, variant = "grid", children }: CardGridProps) {
  const band: Tone = tone === "light" ? "paper" : tone;
  const cols = { "--cols": columns } as React.CSSProperties;
  return (
    <Section id={id} tone={band} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />

      <ul className={`${styles.grid} ${variant === "numbered" ? styles.numbered : ""}`} style={cols}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            {item.marker && <span className={styles.marker}>{item.marker}</span>}
            {item.icon && (
              <span className={base.icon}>
                <SwIcon name={item.icon} size={22} />
              </span>
            )}
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
      </ul>

      {footnote && <p className={base.footnote}>{footnote}</p>}
      {children}
    </Section>
  );
}
