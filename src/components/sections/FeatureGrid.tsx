import { Eyebrow } from "../Eyebrow";
import { Icon, type IconName } from "../Icons";
import styles from "./FeatureGrid.module.css";

export type Feature = { title: string; text: string; marker?: string; icon?: IconName };

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: readonly Feature[];
  /** Closing line under the grid (e.g. the deck's "›" transition lines) */
  footnote?: string;
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
};

/** Heading + grid of numbered / iconed cards. Used for the deck-driven sections. */
export function FeatureGrid({ id, eyebrow, title, subtitle, items, footnote, tone = "light", columns = 4 }: Props) {
  const cols = { "--cols": columns } as React.CSSProperties;
  return (
    <section id={id} className={`${styles.section} ${tone === "dark" ? styles.dark : ""}`} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container">
        <header className={styles.head}>
          {eyebrow && <Eyebrow label={eyebrow} tone={tone === "dark" ? "light" : "dark"} />}
          <h2 id={id ? `${id}-title` : undefined} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <ul className={styles.grid} style={cols}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              {item.marker && <span className={styles.marker}>{item.marker}</span>}
              {item.icon && (
                <span className={styles.icon}>
                  <Icon name={item.icon} size={22} />
                </span>
              )}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>

        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </section>
  );
}
