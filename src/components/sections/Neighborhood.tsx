import { Eyebrow } from "../Eyebrow";
import { Button } from "../ui/Button";
import styles from "./Neighborhood.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  button: string;
  mapHref: string;
  image: string;
  imageAlt: string;
};

/** "סביבת הפרויקט": copy + map button right, wide photo left. */
export function Neighborhood({ id, eyebrow, title, subtitle, button, mapHref, image, imageAlt }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <Eyebrow label={eyebrow} />
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <Button href={mapHref} variant="outline" external className={styles.desktopButton} block="never">
            {button}
          </Button>
        </div>
        <span className={styles.divider} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} loading="lazy" className={styles.image} />
        <Button href={mapHref} variant="outline" external className={styles.mobileButton}>
          {button}
        </Button>
      </div>
    </section>
  );
}
