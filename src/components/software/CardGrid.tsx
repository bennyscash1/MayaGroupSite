import { Eyebrow } from "../Eyebrow";
import { Icon } from "../Icons";
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
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  children?: React.ReactNode;
};

/**
 * Software-hub card grid. Same look as the shared FeatureGrid, plus the hub's
 * extra icons and an optional checklist per card.
 */
export function CardGrid({ id, eyebrow, title, subtitle, items, footnote, tone = "light", columns = 3, children }: CardGridProps) {
  const cols = { "--cols": columns } as React.CSSProperties;
  return (
    <section id={id} className={`${styles.section} ${tone === "dark" ? styles.dark : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          {eyebrow && <Eyebrow label={eyebrow} tone={tone === "dark" ? "light" : "dark"} />}
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <ul className={styles.grid} style={cols} data-cols={columns}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              {item.marker && <span className={styles.marker}>{item.marker}</span>}
              {item.icon && (
                <span className={styles.icon}>
                  <SwIcon name={item.icon} size={22} />
                </span>
              )}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
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

        {footnote && <p className={styles.footnote}>{footnote}</p>}
        {children}
      </div>
    </section>
  );
}
