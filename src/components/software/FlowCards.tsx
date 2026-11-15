import { Eyebrow } from "../Eyebrow";
import { SwIcon, type SwIconName } from "./SwIcon";
import styles from "./FlowCards.module.css";

export type ExampleFlow = { title: string; text: string; icon: SwIconName; steps: readonly string[] };

export type FlowCardsProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: readonly ExampleFlow[];
  footnote?: string;
};

/** Example flows: one card per scenario with a numbered vertical step list. */
export function FlowCards({ id, eyebrow, title, subtitle, items, footnote }: FlowCardsProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          {eyebrow && <Eyebrow label={eyebrow} />}
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <ul className={styles.grid}>
          {items.map((f) => (
            <li key={f.title} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>
                  <SwIcon name={f.icon} size={22} />
                </span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
              </div>
              <p className={styles.cardText}>{f.text}</p>
              <ol className={styles.steps}>
                {f.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>

        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </section>
  );
}
