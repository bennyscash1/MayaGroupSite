import base from "./sw.module.css";

/** Band colour of a software section: light paper, lighter surface or dark navy. */
export type Tone = "paper" | "surface" | "dark";

export const toneClass = (tone: Tone) => `${base.section} ${tone === "dark" ? base.dark : tone === "surface" ? base.surface : ""}`;

type SectionProps = {
  id?: string;
  tone?: Tone;
  /** id of the heading that names the section */
  labelledBy?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
};

/** A software band: <section> + centred container. */
export function Section({ id, tone = "paper", labelledBy, label, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`${toneClass(tone)} ${className}`} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : label}>
      <div className="container">{children}</div>
    </section>
  );
}

type HeadProps = {
  id: string;
  /** Short plain label shown in the side column (formerly an eyebrow) */
  label?: string;
  title: string;
  subtitle?: string;
  wide?: boolean;
};

/** Section heading: the label sits in its own column on desktop, heading + lede beside it. */
export function SectionHead({ id, label, title, subtitle, wide }: HeadProps) {
  return (
    <header className={`${base.head} ${wide ? base.headWide : ""}`}>
      {label && <p className={base.label}>{label}</p>}
      <h2 id={id} className={base.title}>
        {title}
      </h2>
      {subtitle && <p className={base.lede}>{subtitle}</p>}
    </header>
  );
}

export { base };
