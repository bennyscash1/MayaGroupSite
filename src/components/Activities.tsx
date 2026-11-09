import { activities } from "@/content/site";
import { Eyebrow } from "./Eyebrow";
import { ArrowUpLeft } from "./Icons";
import styles from "./Activities.module.css";

export function Activities() {
  return (
    <section id="activities" className={styles.section} aria-labelledby="activities-title">
      <div className={styles.media} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={activities.image} alt="" loading="lazy" />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Eyebrow number={activities.eyebrowNumber} label={activities.eyebrow} tone="light" />
          <h2 id="activities-title" className={styles.title}>
            <span>{activities.titleLines[0]}</span>
            <span className={styles.accent}>{activities.titleLines[1]}</span>
          </h2>
          <p className={styles.body}>{activities.body}</p>

          <ul className={styles.list}>
            {activities.items.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  <span>{item.label}</span>
                  <ArrowUpLeft size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
