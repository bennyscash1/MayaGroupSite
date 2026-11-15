import { Section, base, type Tone } from "./Section";
import styles from "./SwIntro.module.css";

type Props = {
  id: string;
  eyebrow?: string;
  titleLines: readonly string[];
  /** Mobile shows one paragraph; desktop may split into several */
  body: string;
  bodyDesktop?: readonly string[];
  image: { src: string; alt: string };
  values?: readonly { title: string; text: string }[];
  tone?: Tone;
};

/** "Who we are": photo beside the statement, three values along a hairline below. */
export function SwIntro({ id, eyebrow, titleLines, body, bodyDesktop, image, values, tone = "paper" }: Props) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <div className={styles.grid}>
        <figure className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} loading="lazy" width={1200} height={900} />
        </figure>
        <div className={styles.copy}>
          {eyebrow && <p className={base.label}>{eyebrow}</p>}
          <h2 id={`${id}-title`} className={styles.title}>
            {titleLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          {bodyDesktop ? (
            <>
              <p className={`${styles.body} ${styles.mobileOnly}`}>{body}</p>
              {bodyDesktop.map((p) => (
                <p key={p} className={`${styles.body} ${styles.desktopOnly}`}>
                  {p}
                </p>
              ))}
            </>
          ) : (
            <p className={styles.body}>{body}</p>
          )}
        </div>
      </div>

      {values && (
        <ul className={styles.values}>
          {values.map((v) => (
            <li key={v.title}>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueText}>{v.text}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
