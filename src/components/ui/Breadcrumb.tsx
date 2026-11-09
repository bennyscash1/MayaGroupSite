import { ArrowUpLeft } from "../Icons";
import styles from "./Breadcrumb.module.css";

export type Crumb = { label: string; href?: string; mobileLabel?: string; desktopOnly?: boolean };

type Props = { items: readonly Crumb[]; back: { label: string; href: string } };

/** Row under the header: "קבוצת האחים מאיה / בית תוכנה" … "חזרה לקבוצה ↖" */
export function Breadcrumb({ items, back }: Props) {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <nav aria-label="פירורי לחם">
          <ol className={styles.list}>
            {items.map((c, i) => {
              const last = i === items.length - 1;
              const label = c.mobileLabel ? (
                <>
                  <span className={styles.desktopLabel}>{c.label}</span>
                  <span className={styles.mobileLabel}>{c.mobileLabel}</span>
                </>
              ) : (
                c.label
              );
              return (
                <li key={c.label} className={c.desktopOnly ? styles.desktopOnly : undefined}>
                  {c.href && !last ? <a href={c.href}>{label}</a> : <span aria-current={last ? "page" : undefined}>{label}</span>}
                </li>
              );
            })}
          </ol>
        </nav>
        <a href={back.href} className={styles.back}>
          {back.label}
          <ArrowUpLeft size={14} />
        </a>
      </div>
    </div>
  );
}
