import { Eyebrow } from "../Eyebrow";
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
};

/** Simple step diagram: icon nodes joined by connectors (horizontal on desktop, vertical below 1100px). */
export function FlowDiagram({ id, eyebrow, title, subtitle, steps, systemsTitle, systems }: FlowDiagramProps) {
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

        <ol className={styles.flow} style={{ "--steps": steps.length } as React.CSSProperties}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.node} aria-hidden="true">
                <SwIcon name={s.icon} size={26} />
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
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
      </div>
    </section>
  );
}
