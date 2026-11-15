import { Section, SectionHead, type Tone } from "./Section";
import styles from "./SwPartners.module.css";

type Partner = { name: string; role: string; text: string };
type Props = { id: string; eyebrow: string; title: string; subtitle: string; items: readonly Partner[]; tone?: Tone };

/** Initials for the avatar, e.g. "אלכס מאיה" → "אמ". TODO: replace with partner photos. */
function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

/** The four partners, in a row divided by hairlines. */
export function SwPartners({ id, eyebrow, title, subtitle, items, tone = "paper" }: Props) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHead id={`${id}-title`} label={eyebrow} title={title} subtitle={subtitle} />
      <ul className={styles.grid}>
        {items.map((p) => (
          <li key={p.name} className={styles.person}>
            <span className={styles.avatar} aria-hidden="true">
              {initials(p.name)}
            </span>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.role}>{p.role}</p>
            <p className={styles.text}>{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
