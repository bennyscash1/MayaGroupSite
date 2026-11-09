import styles from "./Eyebrow.module.css";

type Props = { number: string; label: string; tone?: "dark" | "light" };

/** Section label: "—— 02 / אודות הקבוצה" */
export function Eyebrow({ number, label, tone = "dark" }: Props) {
  return (
    <p className={`${styles.eyebrow} ${tone === "light" ? styles.light : ""}`}>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.num}>{number}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  );
}
