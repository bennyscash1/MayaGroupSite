import { Section, type Tone } from "./Section";
import base from "./sw.module.css";
import styles from "./SwSteps.module.css";

type Step = { number: string; label: string; text?: string };
type Props = { id: string; title: string; steps: readonly Step[]; tone?: Tone };

/** Process as a timeline: numbered nodes on one line (vertical on narrow screens). */
export function SwSteps({ id, title, steps, tone = "surface" }: Props) {
  const cols = { "--steps": steps.length } as React.CSSProperties;
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <h2 id={`${id}-title`} className={`${base.title} ${styles.title}`}>
        {title}
      </h2>
      <ol className={styles.list} style={cols}>
        {steps.map((s) => (
          <li key={s.number} className={styles.step}>
            <span className={styles.node} aria-hidden="true">
              {s.number}
            </span>
            <div className={styles.body}>
              <h3 className={styles.label}>{s.label}</h3>
              {s.text && <p className={styles.text}>{s.text}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
