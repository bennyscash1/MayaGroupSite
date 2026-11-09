import { divisions, divisionsSection } from "@/content/site";
import { Eyebrow } from "./Eyebrow";
import { ArrowUpLeft } from "./Icons";
import styles from "./Divisions.module.css";

export function Divisions() {
  return (
    <section id="divisions" className={styles.section} aria-labelledby="divisions-title">
      <div className="container">
        {/* Heading is shown on mobile only — the desktop design opens with the cards */}
        <div className={styles.heading}>
          <Eyebrow number={divisionsSection.eyebrowNumber} label={divisionsSection.eyebrow} />
          <h2 id="divisions-title" className={styles.title}>
            <span>{divisionsSection.titleLines[0]}</span>
            <span className={styles.accent}>{divisionsSection.titleLines[1]}</span>
          </h2>
        </div>

        <ul className={styles.grid}>
          {divisions.map((d) => (
            <li key={d.number}>
              <a href={d.href} className={styles.card}>
                <picture className={styles.media}>
                  <source media="(max-width: 900px)" srcSet={d.thumb} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.image} alt="" loading="lazy" />
                </picture>

                {/* Desktop: number overlaid on the image */}
                <span className={styles.number} aria-hidden="true">
                  <span>{d.number}</span>
                  <span className={styles.numberRule} />
                </span>

                <span className={styles.text}>
                  <span className={styles.textNumber}>{d.number}</span>
                  <span className={styles.cardTitle}>{d.title}</span>
                  <span className={styles.brand}>{d.brand}</span>
                </span>

                <span className={styles.arrow} aria-hidden="true">
                  <ArrowUpLeft size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
