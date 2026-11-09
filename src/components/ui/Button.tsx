import { ArrowDown, ArrowUpLeft } from "../Icons";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "outline" | "outlineLight";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  /** ↖ (default, "forward" in RTL), ↓ or none */
  icon?: "forward" | "down" | "none";
  /** Full width on mobile only, or always */
  block?: "mobile" | "always" | "never";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = "forward",
  block = "mobile",
  className = "",
  external,
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[`block-${block}`]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {icon === "forward" && <ArrowUpLeft size={16} />}
      {icon === "down" && <ArrowDown size={16} />}
    </a>
  );
}
