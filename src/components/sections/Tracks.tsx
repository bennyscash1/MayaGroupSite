import { Eyebrow } from "../Eyebrow";
import styles from "./Tracks.module.css";

type Track = {
  number: string;
  title: string;
  text: string;
  tag: string;
  details: readonly { title: string; text: string }[];
  fit: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: readonly Track[];
  engagementTitle: string;
  engagement: readonly { title: string; text: string }[];
};

/** Deck slides 5 + 13: three service tracks with expandable details, then engagement models. */
export function Tracks({ id, eyebrow, title, subtitle, items, engagementTitle, engagement }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          <Eyebrow label={eyebrow} />
          <h2 id={`${id}-title`} className={styles.title}>
            <span>{title}</span> <span className={styles.accent}>{subtitle}</span>
          </h2>
        </header>

        <ol className={styles.grid}>
          {items.map((t) => (
            <li key={t.number} className={styles.card}>
              <span className={styles.number}>{t.number}</span>
              <h3 className={styles.cardTitle}>{t.title}</h3>
              <p className={styles.text}>{t.text}</p>
              <p className={styles.tag}>{t.tag}</p>

              <details className={styles.details}>
                <summary>פירוט המסלול</summary>
                <ul>
                  {t.details.map((d) => (
                    <li key={d.title}>
                      <strong>{d.title}</strong>
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.fit}>{t.fit}</p>
              </details>
            </li>
          ))}
        </ol>

        <div className={styles.engagement}>
          <h3 className={styles.engagementTitle}>{engagementTitle}</h3>
          <ul>
            {engagement.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong>
                <span>{e.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
