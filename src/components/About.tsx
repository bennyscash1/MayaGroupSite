import { about } from "@/content/site";
import { Eyebrow } from "./Eyebrow";
import { BuildingMark } from "./Icons";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Eyebrow number={about.eyebrowNumber} label={about.eyebrow} />
          <h2 id="about-title" className={styles.title}>
            <span>{about.titleLines[0]}</span>
            <span className={styles.accent}>{about.titleLines[1]}</span>
          </h2>
          <p className={styles.body}>
            {about.bodyLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </p>
        </div>

        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={about.image} alt="" width={about.imageWidth} height={about.imageHeight} loading="lazy" />
          <span className={styles.badge} aria-hidden="true">
            <BuildingMark />
          </span>
        </div>
      </div>
    </section>
  );
}
