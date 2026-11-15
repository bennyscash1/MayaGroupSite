import { Eyebrow } from "../Eyebrow";
import { ArrowUpLeft } from "../Icons";
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
  /** "large" = hub home (image cards, 2×2); "compact" = "other topics" row at the end of a tab */
  variant?: "large" | "compact";
};

/** Cards linking to the software hub's topic pages. */
export function TopicCards({ id, eyebrow, title, subtitle, items, linkLabel, variant = "large" }: TopicCardsProps) {
  const large = variant === "large";
  return (
    <section id={id} className={`${styles.section} ${large ? styles.large : styles.compact}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          {eyebrow && <Eyebrow label={eyebrow} />}
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <ul className={styles.grid}>
          {items.map((t) => (
            <li key={t.href}>
              <a href={t.href} className={styles.card}>
                {large && t.image && (
                  <div className={styles.media}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt="" width={800} height={450} loading="lazy" decoding="async" />
                    <span className={styles.number} aria-hidden="true">
                      {t.number}
                    </span>
                  </div>
                )}
                <div className={styles.body}>
                  <span className={styles.icon}>
                    <SwIcon name={t.icon} size={22} />
                  </span>
                  <h3 className={styles.cardTitle}>{t.title}</h3>
                  <p className={styles.cardText}>{t.text}</p>
                  <span className={styles.more}>
                    {linkLabel}
                    <ArrowUpLeft size={14} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
