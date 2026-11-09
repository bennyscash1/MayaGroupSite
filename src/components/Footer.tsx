import { closing, footer, logo } from "@/content/site";
import { ArrowUpLeft } from "./Icons";
import styles from "./Footer.module.css";

/** Closing call-to-action + footer (shared white band, as in the mobile design). */
export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <h2 className={styles.title}>{closing.title}</h2>
        <a href={closing.href} className={styles.button}>
          {closing.button}
          <ArrowUpLeft size={18} />
        </a>
      </div>

      <div className={`container ${styles.bottom}`}>
        <a href="#top" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} loading="lazy" />
        </a>
        <a href="#top" className={styles.backToTop}>
          {footer.backToTop}
          <ArrowUpLeft size={16} />
        </a>
      </div>
    </footer>
  );
}
