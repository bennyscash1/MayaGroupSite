import { Icon, type IconName } from "../Icons";
import styles from "./Services.module.css";

type Props = { id: string; title: string; items: readonly { icon: IconName; title: string; text: string }[] };

/** "תחומי הפיתוח" — rows on mobile, 3 centred columns on desktop. */
export function Services({ id, title, items }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className={styles.title}>
          <span>{title}</span>
        </h2>
        <ul className={styles.list}>
          {items.map((s) => (
            <li key={s.title} className={styles.item}>
              <Icon name={s.icon} size={32} className={styles.icon} />
              <div>
                <h3 className={styles.itemTitle}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
