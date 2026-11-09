import styles from "./Eyebrow.module.css";

type Props = { number?: string; label: string; tone?: "dark" | "light"; className?: string };

/** Section label: "—— 02 / אודות הקבוצה" (number optional: "—— אודות החטיבה") */
export function Eyebrow({ number, label, tone = "dark", className = "" }: Props) {
  return (
    <p className={`${styles.eyebrow} ${tone !== "dark" ? styles[tone] : ""} ${className}`}>
      <span className={styles.line} aria-hidden="true" />
      {number && (
        <>
          <span className={styles.num}>{number}</span>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span>{label}</span>
    </p>
  );
}
