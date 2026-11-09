import { Icon, type IconName } from "../Icons";
import styles from "./Steps.module.css";

type Step = { number: string; label: string; text?: string; icon?: IconName };
type Props = { id?: string; title: string; steps: readonly Step[] };

/** Navy strip with numbered steps (software "דרך ברורה", fund "היכרות טובה מתחילה בשיחה."). */
export function Steps({ id, title, steps }: Props) {
  const cols = { "--cols": steps.length } as React.CSSProperties;
  return (
    <section id={id} className={styles.band} aria-label={title}>
      <div className="container">
        <h2 className={styles.title}>
          <span>{title}</span>
        </h2>
        <ol className={styles.list} style={cols}>
          {steps.map((s) => (
            <li key={s.number} className={styles.step}>
              {s.icon && <Icon name={s.icon} size={28} className={styles.icon} />}
              <span className={styles.number}>{s.number}</span>
              <span className={styles.body}>
                <span className={styles.label}>{s.label}</span>
                {s.text && <span className={styles.text}>{s.text}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
