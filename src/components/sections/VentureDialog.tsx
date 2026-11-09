"use client";

import { useEffect, useRef } from "react";
import type { Venture } from "@/content/investments";
import { ArrowUpLeft, Icon } from "../Icons";
import styles from "./VentureDialog.module.css";

type Props = { venture: Venture; contactHref: string; onClose: () => void };

/**
 * Venture details (Figma 05 · NIVAT).
 * Mobile: bottom sheet. Desktop: centred glass modal, image on the right.
 * Native <dialog> gives focus trapping, Escape-to-close and inert background.
 */
export function VentureDialog({ venture, contactHref, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const m = venture.modal!;
  const titleId = `${venture.id}-title`;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const opener = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      opener?.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself, outside the panel) closes it
        if (e.target === e.currentTarget) ref.current?.close();
      }}
    >
      <div className={styles.panel}>
        <div className={styles.topRow}>
          <span className={`${styles.chip} ${styles.tagMobile}`}>{m.tag}</span>
          <span className={styles.handle} aria-hidden="true" />
          <button type="button" className={styles.close} aria-label="סגירה" onClick={() => ref.current?.close()}>
            <Icon name="close" size={18} />
          </button>
        </div>

        <figure className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={venture.image} alt={venture.alt} />
          <figcaption>{m.imageCaption}</figcaption>
        </figure>

        <div className={styles.content}>
          <span className={`${styles.chip} ${styles.tagDesktop}`}>{m.tag}</span>
          <h2 id={titleId} className={styles.title} dir="ltr">
            {venture.title}
          </h2>
          <p className={styles.subtitle}>{m.subtitle}</p>
          <hr className={styles.rule} />
          <p className={styles.lead}>{m.lead}</p>
          <h3 className={styles.h3}>{m.aboutTitle}</h3>
          <p className={styles.text}>{m.about}</p>
          <ul className={styles.chips}>
            {m.chips.map((c) => (
              <li key={c} className={styles.chip}>
                {c}
              </li>
            ))}
          </ul>
          <a href={contactHref} className={styles.cta} onClick={() => ref.current?.close()}>
            {m.cta}
            <ArrowUpLeft size={16} />
          </a>
          <p className={styles.disclaimer}>{m.disclaimer}</p>
        </div>
      </div>
    </dialog>
  );
}
