"use client";

import { useState } from "react";
import { ArrowUpLeft, Icon, type IconName } from "../Icons";
import styles from "./LeadForm.module.css";

export type LeadField = {
  name: string;
  placeholder: string;
  type: "text" | "tel" | "email";
  icon?: IconName;
  required?: boolean;
  autoComplete?: string;
};

type Props = {
  fields: readonly LeadField[];
  consent?: string;
  submit: string;
  /** Form sits on a navy band (default) or a light section */
  surface?: "dark" | "light";
};

/**
 * Lead form. Static site with no backend yet: submitting only shows a
 * confirmation. TODO: connect to a form service / CRM endpoint.
 */
export function LeadForm({ fields, consent, submit, surface = "dark" }: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className={styles.sent} role="status">
        <Icon name="check" size={20} />
        הפרטים נשלחו. נחזור אליכם בהקדם.
      </p>
    );
  }

  return (
    <form
      className={`${styles.form} ${surface === "light" ? styles.light : styles.dark}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {fields.map((f) => (
        <label key={f.name} className={styles.field}>
          <span className="sr-only">{f.placeholder}</span>
          {f.icon && <Icon name={f.icon} size={18} className={styles.icon} />}
          <input
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            required={f.required ?? f.type !== "email"}
            autoComplete={f.autoComplete ?? (f.type === "tel" ? "tel" : f.type === "email" ? "email" : "name")}
          />
        </label>
      ))}

      {consent && (
        <label className={styles.consent}>
          <input type="checkbox" name="consent" required />
          <span>{consent}</span>
        </label>
      )}

      <button type="submit" className={styles.submit}>
        {submit}
        <ArrowUpLeft size={16} />
      </button>
    </form>
  );
}
