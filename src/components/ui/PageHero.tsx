import type { ButtonVariant } from "./Button";
import { Button } from "./Button";
import styles from "./PageHero.module.css";

export type PageHeroProps = {
  overline?: string;
  titleLines: readonly string[];
  /** Accent for the 2nd title line */
  accent?: "sky" | "none";
  body?: string;
  button?: { label: string; href: string; icon?: "forward" | "down"; variant?: ButtonVariant };
  image: string;
  imageMobile?: string;
  imageAlt?: string;
  /** e.g. "הדמיה להמחשה בלבד" */
  caption?: string;
  children?: React.ReactNode;
};

/**
 * Division / project hero.
 * Desktop: photo on the left, navy panel with copy on the right (gradient blend).
 * Mobile (Figma): photo on top fading into navy, copy below.
 */
export function PageHero({
  overline,
  titleLines,
  accent = "sky",
  body,
  button,
  image,
  imageMobile,
  imageAlt = "",
  caption,
  children,
}: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className={styles.media}>
        <picture>
          {imageMobile && <source media="(max-width: 900px)" srcSet={imageMobile} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} fetchPriority="high" />
        </picture>
        {caption && <span className={styles.caption}>{caption}</span>}
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {overline && <p className={styles.overline}>{overline}</p>}
          <h1 id="page-title" className={styles.title}>
            {titleLines.map((line, i) => (
              <span key={line} className={i === 1 ? styles[`accent-${accent}`] : undefined}>
                {line}
              </span>
            ))}
          </h1>
          {body && <p className={styles.body}>{body}</p>}
          {button && (
            <Button
              href={button.href}
              icon={button.icon}
              variant={button.variant ?? "outlineLight"}
              className={styles.button}
            >
              {button.label}
            </Button>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
