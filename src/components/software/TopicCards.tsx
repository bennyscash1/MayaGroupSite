import { ArrowUpLeft } from "../Icons";
import { Section, SectionHead, base, type Tone } from "./Section";
import { SwIcon, type SwIconName } from "./SwIcon";
import styles from "./TopicCards.module.css";

export type TopicCard = {
  href: string;
  number: string;
  title: string;
  text: string;
  icon: SwIconName;
  image?: string;
};

export type TopicCardsProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: readonly TopicCard[];
  linkLabel: string;
  /** "large" = hub bento (photo tiles); "compact" = "other topics" row at the end of a tab */
  variant?: "large" | "compact";
  tone?: Tone;
};

/**
 * Links to the four topic pages. Hub: an asymmetric bento of photo tiles, each a
 * single link. Topic pages: a compact row of the other three.
 */
export function TopicCards({ id, eyebrow, title, subtitle, items, linkLabel, variant = "large", tone }: TopicCardsProps) {
  const large = variant === "large";
  return (
    <Section id={id} tone={tone ?? (large ? "dark" : "paper")} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />

      <ul className={large ? styles.bento : styles.row}>
        {items.map((t) => (
          <li key={t.href} className={styles.cell}>
            <a href={t.href} className={large ? styles.tile : styles.card}>
              {large && t.image && (
                <span className={styles.media} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt="" width={800} height={600} loading="lazy" decoding="async" />
                </span>
              )}
              <span className={styles.top}>
                <span className={styles.number} aria-hidden="true">
                  {t.number}
                </span>
                <span className={`${base.icon} ${styles.icon}`}>
                  <SwIcon name={t.icon} size={22} />
                </span>
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{t.title}</h3>
                <p className={styles.text}>{t.text}</p>
                <span className={styles.more}>
                  {linkLabel}
                  <ArrowUpLeft size={14} className={styles.arrow} />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
