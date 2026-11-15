import { Section, SectionHead, type Tone } from "./Section";
import styles from "./SwTracks.module.css";

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
  tone?: Tone;
};

/** Three service tracks side by side, every detail on show; engagement models below. */
export function SwTracks({ id, eyebrow, title, subtitle, items, engagementTitle, engagement, tone = "paper" }: Props) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />

      <ol className={styles.grid}>
        {items.map((t) => (
          <li key={t.number} className={styles.track}>
            <div className={styles.head}>
              <span className={styles.number}>{t.number}</span>
              <h3 className={styles.title}>{t.title}</h3>
              <p className={styles.text}>{t.text}</p>
              <p className={styles.tag}>{t.tag}</p>
            </div>
            <ul className={styles.details}>
              {t.details.map((d) => (
                <li key={d.title}>
                  <strong>{d.title}</strong>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
            <p className={styles.fit}>{t.fit}</p>
          </li>
        ))}
      </ol>

      <div className={styles.engagement}>
        <h3 className={styles.engagementTitle}>{engagementTitle}</h3>
        <ul className={styles.models}>
          {engagement.map((e) => (
            <li key={e.title}>
              <strong>{e.title}</strong>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
