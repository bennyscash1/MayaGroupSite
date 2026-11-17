import { LeadForm, type LeadField } from "../ui/LeadForm";
import { ContactDetails } from "../contact/ContactDetails";
import { ContactMap } from "../contact/ContactMap";
import { toneClass } from "./Section";
import styles from "./SwContact.module.css";

type Props = {
  id?: string;
  titleLines: readonly string[];
  subtitle?: string;
  fields: readonly LeadField[];
  consent?: string;
  submit: string;
  surface?: "dark" | "light";
};

/** Lead form band: the invitation on top, the form panel and the map side by side, contact details underneath. */
export function SwContact({ id = "contact", titleLines, subtitle, fields, consent, submit, surface = "dark" }: Props) {
  const dark = surface === "dark";
  return (
    <section id={id} className={`${toneClass(dark ? "dark" : "paper")} ${styles.band} ${dark ? styles.ink : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={styles.copy}>
          <h2 id={`${id}-title`} className={styles.title}>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.grid}>
          <div className={styles.panel}>
            <LeadForm fields={fields} consent={consent} submit={submit} surface={surface} />
          </div>
          <ContactMap className={styles.map} />
        </div>
        <ContactDetails tone={surface} className={styles.details} />
      </div>
    </section>
  );
}
