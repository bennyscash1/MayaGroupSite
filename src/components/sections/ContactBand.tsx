import { LeadForm, type LeadField } from "../ui/LeadForm";
import { ContactDetails } from "../contact/ContactDetails";
import { ContactMap } from "../contact/ContactMap";
import styles from "./ContactBand.module.css";

type Props = {
  id?: string;
  titleLines: readonly string[];
  subtitle?: string;
  fields: readonly LeadField[];
  consent?: string;
  submit: string;
  surface?: "dark" | "light";
};

/** Lead-form band: title on top, form and map side by side, contact details underneath. */
export function ContactBand({ id = "contact", titleLines, subtitle, fields, consent, submit, surface = "dark" }: Props) {
  return (
    <section id={id} className={`${styles.band} ${surface === "light" ? styles.light : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={styles.text}>
          <h2 id={`${id}-title`} className={styles.title}>
            {titleLines.map((line, i) => (
              <span key={line} className={i === 1 ? styles.accent : undefined}>
                {line}
              </span>
            ))}
          </h2>
          {subtitle && (
            <>
              <span className={styles.rule} aria-hidden="true" />
              <p className={styles.subtitle}>{subtitle}</p>
            </>
          )}
        </div>
        <div className={styles.grid}>
          <LeadForm fields={fields} consent={consent} submit={submit} surface={surface} />
          <ContactMap />
        </div>
        <ContactDetails tone={surface} className={styles.details} />
      </div>
    </section>
  );
}
