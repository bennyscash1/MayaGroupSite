import { hero } from "@/content/site";
import { ArrowDown, ArrowUpLeft } from "./Icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <picture>
          <source media="(max-width: 900px)" srcSet={hero.imageMobile} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt="" fetchPriority="high" />
        </picture>
      </div>

      <p className={styles.sideLabel} aria-hidden="true">
        {hero.sideLabel}
      </p>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            <span>{hero.titleLines[0]}</span>
            <span className={styles.accent}>{hero.titleLines[1]}</span>
          </h1>
          <p className={styles.groupName}>
            {hero.groupName}
            <span className={styles.rule} aria-hidden="true" />
          </p>
          <p className={styles.tagline}>{hero.tagline}</p>

          <a href="#divisions" className={styles.circle} aria-label={hero.mobileCta}>
            <ArrowUpLeft size={26} />
          </a>
          <a href="#divisions" className={styles.mobileCta}>
            {hero.mobileCta}
            <ArrowDown size={18} />
          </a>
        </div>
      </div>

      <a href="#divisions" className={styles.scroll} aria-label={hero.mobileCta}>
        <ArrowDown size={34} />
      </a>
    </section>
  );
}
