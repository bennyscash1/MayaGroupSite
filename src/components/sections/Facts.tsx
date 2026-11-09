import { Icon, type IconName } from "../Icons";
import styles from "./Facts.module.css";

type Props = { items: readonly { icon: IconName; label: string; value: string }[] };

/** Project facts: list on mobile, glass card overlapping the hero on desktop. */
export function Facts({ items }: Props) {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <dl className={styles.card}>
          {items.map((f) => (
            <div key={f.label} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={f.icon} size={22} />
              </span>
              <div>
                <dt className={styles.label}>{f.label}</dt>
                <dd className={styles.value}>{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
