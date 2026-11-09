"use client";

import { useEffect, useRef, useState } from "react";
import { FilterTabs, type FilterTab } from "../ui/FilterTabs";
import { ArrowUpLeft, Icon } from "../Icons";
import styles from "./Gallery.module.css";

type Item = { tab: string; title: string; subtitle: string; image: string };
type Props = { id: string; title: string; tabs: readonly FilterTab[]; items: readonly Item[]; disclaimer: string };

/**
 * "מבט מקרוב". The selected tab's image takes the large slot; the others fill the
 * small slots (the design shows 1 image per tab). Each tile opens a lightbox.
 */
export function Gallery({ id, title, tabs, items, disclaimer }: Props) {
  const [tab, setTab] = useState(tabs[0].id);
  const [zoom, setZoom] = useState<Item | null>(null);
  const ordered = [...items.filter((i) => i.tab === tab), ...items.filter((i) => i.tab !== tab)];

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={styles.head}>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <FilterTabs tabs={tabs} value={tab} onChange={setTab} label={`סינון ${title}`} />
        </div>

        <ul className={styles.grid}>
          {ordered.map((item, i) => (
            <li key={item.image} className={i === 0 ? styles.large : styles.small}>
              <button type="button" className={styles.tile} onClick={() => setZoom(item)} aria-haspopup="dialog">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className={styles.expand} aria-hidden="true">
                  <Icon name="expand" size={14} />
                </span>
                <span className={styles.panel}>
                  <span className={styles.text}>
                    <span className={styles.tileTitle}>{item.title}</span>
                    <span className={styles.tileSub}>{item.subtitle}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    <ArrowUpLeft size={14} />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{disclaimer}</p>
      </div>

      {zoom && <Lightbox item={zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}

function Lightbox({ item, onClose }: { item: Item; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    ref.current?.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      className={styles.lightbox}
      aria-label={item.title}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt={item.title} />
      <button type="button" className={styles.lightboxClose} aria-label="סגירה" onClick={() => ref.current?.close()}>
        <Icon name="close" size={18} />
      </button>
      <p className={styles.lightboxCaption}>
        {item.title} · {item.subtitle}
      </p>
    </dialog>
  );
}
