import { Button } from "./Button";
import styles from "./NavyBand.module.css";

type Props = {
  id?: string;
  eyebrow?: string;
  titleLines: readonly string[];
  body?: string;
  button: { label: string; href: string };
  image: string;
  imageMobile?: string;
  imageAlt?: string;
  /** "display" on mobile renders at hero size (as in the Figma frames) */
  titleSize?: "display" | "h1";
};

/** Full-bleed navy band: photo left fading into navy, copy + outline button right. Mobile: photo on top. */
export function NavyBand({ id, eyebrow, titleLines, body, button, image, imageMobile, imageAlt = "", titleSize = "display" }: Props) {
  return (
    <section id={id} className={styles.band} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className={styles.media}>
        <picture>
          {imageMobile && <source media="(max-width: 900px)" srcSet={imageMobile} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} loading="lazy" />
        </picture>
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {eyebrow && (
            <p className={styles.eyebrow}>
              <span className={styles.line} aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h2 id={id ? `${id}-title` : undefined} className={`${styles.title} ${styles[titleSize]}`}>
            {titleLines.map((line, i) => (
              <span key={line} className={i === 1 ? styles.accent : undefined}>
                {line}
              </span>
            ))}
          </h2>
          {body && <p className={styles.body}>{body}</p>}
          <Button href={button.href} variant="outlineLight" className={styles.button}>
            {button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
