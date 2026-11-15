import { ArrowUpLeft } from "../Icons";
import { Section, SectionHead, type Tone } from "./Section";
import styles from "./SwProjects.module.css";

type Project = {
  id: string;
  name: string;
  category: string;
  text: string;
  features: readonly string[];
  url: string;
  image: string;
  alt: string;
};

type Props = { id: string; eyebrow: string; title: string; items: readonly Project[]; linkLabel: string; tone?: Tone };

/**
 * Real projects as showcase cards: screenshot, name, one line, features and one
 * external link that covers the whole card.
 */
export function SwProjects({ id, eyebrow, title, items, linkLabel, tone = "dark" }: Props) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} />

      <ul className={styles.grid}>
        {items.map((p) => (
          <li key={p.id} id={`project-${p.id}`} className={styles.card}>
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.alt} loading="lazy" width={1440} height={720} />
            </div>
            <div className={styles.body}>
              <p className={styles.category}>{p.category}</p>
              <h3 className={styles.name} translate="no">{p.name}</h3>
              <p className={styles.text}>{p.text}</p>
              <ul className={styles.features} aria-label={`${p.name}: יכולות עיקריות`}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {linkLabel}
                <span className="sr-only">
                  {" "}
                  {p.name} (נפתח בחלון חדש)
                </span>
                <ArrowUpLeft size={16} className={styles.arrow} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
