import { closing as groupClosing, footer, logo as groupLogo, type Closing, type LinkItem, type Logo } from "@/content/site";
import { ArrowUpLeft } from "./Icons";
import styles from "./Footer.module.css";

type FooterProps = {
  logo?: Logo;
  logoHref?: string;
  closing?: Closing;
  /** Bottom-row link. Homepage: "חזרה למעלה"; division pages: "חזרה לכל החטיבות" */
  back?: LinkItem;
  disclaimer?: string;
  /** Anchor id of the closing band. Pages that have their own #contact form pass another id. */
  id?: string;
  /** "dark" = navy band (Fund page) */
  surface?: "light" | "dark";
};

/** Closing call-to-action + footer row (shared white band, as in the mobile designs). */
export function Footer({
  logo = groupLogo,
  logoHref = "#top",
  closing = groupClosing,
  back = { label: footer.backToTop, href: "#top" },
  disclaimer,
  id = "contact",
  surface = "light",
}: FooterProps) {
  const lines = typeof closing.title === "string" ? [closing.title] : closing.title;
  return (
    <footer id={id} className={`${styles.footer} ${surface === "dark" ? styles.dark : ""}`}>
      <div className={`container ${styles.cta}`}>
        <div className={styles.ctaText}>
          <h2 className={styles.title}>
            {lines.map((line, i) => (
              <span key={line} className={i === 1 ? styles.accent : undefined}>
                {line}{" "}
              </span>
            ))}
          </h2>
          {closing.text && <p className={styles.ctaLead}>{closing.text}</p>}
        </div>
        <a href={closing.href} className={styles.button}>
          {closing.button}
          <ArrowUpLeft size={18} />
        </a>
      </div>

      <div className={`container ${styles.bottom}`}>
        <a href={logoHref} className={`${styles.logo} ${logo.stacked ? styles.stacked : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} loading="lazy" />
        </a>
        <a href={back.href} className={styles.backToTop}>
          {back.label}
          <ArrowUpLeft size={16} />
        </a>
      </div>

      {disclaimer && (
        <div className="container">
          <p className={styles.disclaimer}>{disclaimer}</p>
        </div>
      )}
    </footer>
  );
}
