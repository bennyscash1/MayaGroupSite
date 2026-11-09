import { ArrowUpLeft } from "../Icons";
import styles from "./MediaCard.module.css";

export type MediaCardData = {
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
  /** Latin names (NIVAT, AiCerv…) render LTR */
  latin?: boolean;
};

type Props = MediaCardData & {
  href?: string;
  onClick?: () => void;
  /** Hide the subtitle on desktop (some desktop mockups show title only) */
  subtitleMobileOnly?: boolean;
  className?: string;
  imagePosition?: string;
};

/** Photo card with a frosted info panel and a circular ↖ button (division pages). */
export function MediaCard({ title, subtitle, image, alt = "", latin, href, onClick, subtitleMobileOnly, className = "", imagePosition }: Props) {
  const content = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} loading="lazy" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      <span className={styles.panel}>
        <span className={styles.text}>
          <span className={styles.title} dir={latin ? "ltr" : undefined}>
            {title}
          </span>
          {subtitle && <span className={`${styles.subtitle} ${subtitleMobileOnly ? styles.mobileOnly : ""}`}>{subtitle}</span>}
        </span>
        <span className={styles.arrow} aria-hidden="true">
          <ArrowUpLeft size={14} />
        </span>
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={`${styles.card} ${className}`} onClick={onClick} aria-haspopup="dialog">
        {content}
      </button>
    );
  }
  return (
    <a href={href ?? "#"} className={`${styles.card} ${className}`}>
      {content}
    </a>
  );
}
