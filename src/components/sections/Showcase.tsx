import { Eyebrow } from "../Eyebrow";
import { ArrowUpLeft } from "../Icons";
import styles from "./Showcase.module.css";

type Project = {
  id: string;
  name: string;
  category: string;
  text: string;
  features: readonly string[];
  url: string;
  image: string;
  alt: string;
};

type Props = { id: string; eyebrow: string; title: string; items: readonly Project[]; linkLabel: string };

/** Real projects: screenshot in a browser frame + short description + external link. */
export function Showcase({ id, eyebrow, title, items, linkLabel }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          <Eyebrow label={eyebrow} />
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        </header>

        <ul className={styles.list}>
          {items.map((p) => (
            <li key={p.id} className={styles.project}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.frame} aria-label={`${p.name} — ${linkLabel}`}>
                <span className={styles.bar} aria-hidden="true">
                  <span className={styles.dots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={styles.url} dir="ltr">
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.alt} loading="lazy" width={1440} height={720} />
              </a>

              <div className={styles.body}>
                <p className={styles.category}>{p.category}</p>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.text}>{p.text}</p>
                <ul className={styles.features}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {linkLabel}
                  <ArrowUpLeft size={16} />
                  <span className="sr-only">(נפתח בחלון חדש)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
