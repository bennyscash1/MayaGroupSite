import { Eyebrow } from "../Eyebrow";
import { Title } from "./Title";
import styles from "./Intro.module.css";

type Props = {
  id?: string;
  eyebrow?: string;
  titleLines: readonly string[];
  /** Mobile shows one paragraph; desktop may split into several */
  body: string;
  bodyDesktop?: readonly string[];
  image?: { src: string; alt: string; caption?: string };
  /** Three short value labels (or label + one-line text) in a bordered row under the block */
  values?: readonly (string | { title: string; text: string })[];
};

/**
 * "אודות החטיבה" block used on every division page.
 * With an image: text right / photo left. Without: title right, divider, body left.
 */
export function Intro({ id, eyebrow, titleLines, body, bodyDesktop, image, values }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container">
        <div className={`${styles.grid} ${image ? styles.withImage : styles.split}`}>
          <div className={styles.head}>
            {eyebrow && <Eyebrow label={eyebrow} />}
            <Title id={id ? `${id}-title` : undefined} lines={titleLines} />
            {image && <Body body={body} bodyDesktop={bodyDesktop} />}
          </div>

          {!image && (
            <>
              <span className={styles.divider} aria-hidden="true" />
              <Body body={body} bodyDesktop={bodyDesktop} />
            </>
          )}

          {image && (
            <figure className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} loading="lazy" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          )}
        </div>

        {values && (
          <ul className={styles.values}>
            {values.map((v) =>
              typeof v === "string" ? (
                <li key={v}>{v}</li>
              ) : (
                <li key={v.title} className={styles.valueRich}>
                  <strong>{v.title}</strong>
                  <span>{v.text}</span>
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    </section>
  );
}

function Body({ body, bodyDesktop }: { body: string; bodyDesktop?: readonly string[] }) {
  if (!bodyDesktop) return <p className={styles.body}>{body}</p>;
  return (
    <div className={styles.bodyWrap}>
      <p className={`${styles.body} ${styles.mobileOnly}`}>{body}</p>
      {bodyDesktop.map((p) => (
        <p key={p} className={`${styles.body} ${styles.desktopOnly}`}>
          {p}
        </p>
      ))}
    </div>
  );
}
