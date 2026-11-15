import { Section, SectionHead, base, type Tone } from "./Section";
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
  tone?: Tone;
};

/** Example flows: one panel per scenario with a numbered step track. */
export function FlowCards({ id, eyebrow, title, subtitle, items, footnote, tone = "surface" }: FlowCardsProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />

      <ul className={styles.grid}>
        {items.map((f) => (
          <li key={f.title} className={styles.card}>
            <div className={styles.head}>
              <span className={base.icon}>
                <SwIcon name={f.icon} size={22} />
              </span>
              <h3 className={styles.title}>{f.title}</h3>
            </div>
            <p className={styles.text}>{f.text}</p>
            <ol className={styles.steps}>
              {f.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>

      {footnote && <p className={base.footnote}>{footnote}</p>}
    </Section>
  );
}
