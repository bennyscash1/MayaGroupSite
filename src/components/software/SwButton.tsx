import { ArrowDown, ArrowUpLeft } from "../Icons";
import styles from "./SwButton.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  /** Surface the button sits on */
  on?: "dark" | "light";
  icon?: "forward" | "down" | "none";
};

/** Software-section button (the shared Button keeps its look on the other pages). */
export function SwButton({ href, children, variant = "primary", on = "dark", icon = "forward" }: Props) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]} ${styles[on]}`}>
      <span>{children}</span>
      {icon === "forward" && <ArrowUpLeft size={16} className={styles.icon} />}
      {icon === "down" && <ArrowDown size={16} className={styles.icon} />}
    </a>
  );
}
