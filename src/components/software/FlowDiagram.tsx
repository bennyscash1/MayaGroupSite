import { Section, SectionHead, type Tone } from "./Section";
import { SwIcon, type SwIconName } from "./SwIcon";
import styles from "./FlowDiagram.module.css";

export type FlowStep = { title: string; text: string; icon: SwIconName };

export type FlowDiagramProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: readonly FlowStep[];
  /** Systems the flow runs on, shown as a row under the diagram */
  systemsTitle?: string;
  systems?: readonly string[];
  tone?: Tone;
};

/** Step diagram: icon nodes on one connector (horizontal on desktop, vertical below 1100px). */
export function FlowDiagram({ id, eyebrow, title, subtitle, steps, systemsTitle, systems, tone = "dark" }: FlowDiagramProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />

      <ol className={styles.flow} style={{ "--steps": steps.length } as React.CSSProperties}>
        {steps.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.node} aria-hidden="true">
              <SwIcon name={s.icon} size={24} />
            </span>
            <div className={styles.body}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      {systems && (
        <div className={styles.systems}>
          {systemsTitle && <p className={styles.systemsTitle}>{systemsTitle}</p>}
          <ul className={styles.systemList}>
            {systems.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
