import { contactInfo, type ContactIcon } from "@/content/site";
import styles from "./ContactDetails.module.css";

type Props = {
  /** "dark" = on a navy band */
  tone?: "light" | "dark";
  /** Adds a visually hidden h2 above the column titles (footer) */
  withHeading?: boolean;
  className?: string;
};

/** The four contact columns (call, write, follow, visit), read from contactInfo in content/site.ts. */
export function ContactDetails({ tone = "light", withHeading = false, className = "" }: Props) {
  return (
    <div className={`${styles.details} ${tone === "dark" ? styles.dark : ""} ${className}`}>
      {withHeading && <h2 className="sr-only">{contactInfo.heading}</h2>}
      {contactInfo.groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <h3 className={styles.title}>{group.title}</h3>
          <ul className={styles.list}>
            {group.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <ContactGlyph name={link.icon} />
                  <span dir={"ltr" in link && link.ltr ? "ltr" : undefined}>{link.label}</span>
                  {"external" in link && link.external && <span className="sr-only">{contactInfo.newWindow}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Small icons for the contact links (decorative: the link text carries the meaning). */
export function ContactGlyph({ name, size = 20 }: { name: ContactIcon; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false, className: styles.icon } as const;
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  switch (name) {
    case "phone":
      return (
        <svg {...common} {...stroke}>
          <path d="M5 3h3.5l1.5 4.5-2 1.5a12 12 0 0 0 7 7l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 7 8.5-7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} {...stroke}>
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "waze":
      return (
        <svg {...common} {...stroke}>
          <path d="M4.5 14.5c-.9-.4-1.5-1.2-1.5-2.3C3 7.6 7 4 12 4s9 3.6 9 8.2c0 3.6-3 6.3-6.6 6.8" />
          <path d="M9.8 19c-1.4.1-3-.4-4-1.4" />
          <circle cx="8" cy="19.2" r="1.6" />
          <circle cx="16.2" cy="19.2" r="1.6" />
          <path d="M9.5 10.2h.01M14.5 10.2h.01" strokeWidth={2.4} />
          <path d="M9.5 13.2c1.3 1.2 3.7 1.2 5 0" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} {...stroke}>
          <path d="M3.5 20.5 5 16.3A8.5 8.5 0 1 1 8 19.2l-4.5 1.3Z" />
          <path d="M9 8.5c0 3.5 2.6 6.5 6.4 6.6l.9-1.5-1.8-.9-.8.8c-1.2-.5-2.2-1.5-2.7-2.7l.8-.8-.9-1.8-1.5.9" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} {...stroke}>
          <path d="M14.5 8H16V4.8h-2.2c-2.4 0-3.6 1.5-3.6 3.8V11H8v3.2h2.2V21h3.3v-6.8h2.2l.5-3.2h-2.7V9.1c0-.7.3-1.1 1-1.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} {...stroke}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.3 6.7h.01" strokeWidth={2.4} />
        </svg>
      );
  }
}
