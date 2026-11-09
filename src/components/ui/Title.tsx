import styles from "./Title.module.css";

type Props = {
  /** One or two lines. The second line takes the accent colour. */
  lines: readonly string[];
  as?: "h1" | "h2" | "h3";
  size?: "display" | "h1" | "h2";
  /** Accent for line 2: blue on light, sky on navy, or none */
  accent?: "blue" | "sky" | "none";
  /** Line 1 colour */
  tone?: "dark" | "light";
  id?: string;
  className?: string;
};

export function Title({ lines, as: Tag = "h2", size = "h1", accent = "blue", tone = "dark", id, className = "" }: Props) {
  return (
    <Tag id={id} className={`${styles.title} ${styles[size]} ${styles[tone]} ${className}`}>
      {lines.map((line, i) => (
        <span key={line} className={i === 1 ? styles[`accent-${accent}`] : undefined}>
          {line}
        </span>
      ))}
    </Tag>
  );
}
