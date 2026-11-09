import { Eyebrow } from "../Eyebrow";
import styles from "./Partners.module.css";

type Partner = { name: string; role: string; text: string };
type Props = { id: string; eyebrow: string; title: string; subtitle: string; items: readonly Partner[] };

/** Initials for the avatar, e.g. "אלכס מאיה" → "אמ". TODO: replace with partner photos (deck: one shoot for all four). */
function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

/** Deck slide 7: the four partners. */
export function Partners({ id, eyebrow, title, subtitle, items }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          <Eyebrow label={eyebrow} />
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>
        <ul className={styles.grid}>
          {items.map((p) => (
            <li key={p.name} className={styles.card}>
              <span className={styles.avatar} aria-hidden="true">
                {initials(p.name)}
              </span>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.role}>{p.role}</p>
              <p className={styles.text}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
