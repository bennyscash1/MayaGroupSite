import { SwButton } from "./SwButton";
import { BackPill } from "../ui/BackPill";
import styles from "./SwHero.module.css";

type Action = { label: string; href: string };

export type SwHeroProps = {
  /** Small back link at the top of the hero (e.g. "חזרה לקבוצה") */
  back?: Action;
  /** Small plain label above the headline (section or tab name) */
  overline?: string;
  titleLines: readonly string[];
  body?: string;
  button?: Action;
  secondary?: Action;
  image: string;
  imageMobile?: string;
  imageAlt?: string;
  caption?: string;
  /** "hub" = full first screen; "tab" = compact topic-page hero */
  variant?: "hub" | "tab";
};

/**
 * Dark hero of the Maya Technologies pages: a faint grid with one slow light
 * drifting across it (CSS only, still under reduced motion), the headline, one
 * sentence, the actions and a framed photo.
 */
export function SwHero({ back, overline, titleLines, body, button, secondary, image, imageMobile, imageAlt = "", caption, variant = "tab" }: SwHeroProps) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-labelledby="page-title">
      <div className={styles.ground} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.light} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          {back && (
            <div className={styles.back}>
              <BackPill {...back} />
            </div>
          )}
          {overline && <p className={styles.overline}>{overline}</p>}
          <h1 id="page-title" className={styles.title}>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          {body && <p className={styles.body}>{body}</p>}
          {(button || secondary) && (
            <div className={styles.actions}>
              {button && <SwButton href={button.href}>{button.label}</SwButton>}
              {secondary && (
                <SwButton href={secondary.href} variant="ghost" icon="down">
                  {secondary.label}
                </SwButton>
              )}
            </div>
          )}
        </div>

        <figure className={styles.media}>
          <picture>
            {imageMobile && imageMobile !== image && <source media="(max-width: 900px)" srcSet={imageMobile} />}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt} fetchPriority="high" width={1200} height={900} />
          </picture>
          {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
