import { contactInfo } from "@/content/site";
import styles from "./ContactMap.module.css";

/** Lazy Google Maps embed (no API key) of the office address. */
export function ContactMap({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.map} ${className}`}>
      <iframe
        src={contactInfo.map.src}
        title={contactInfo.map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
