"use client";

import { useState } from "react";
import { Button } from "./Button";
import { FilterTabs, type FilterTab } from "./FilterTabs";
import { MediaCard, type MediaCardData } from "./MediaCard";
import styles from "./CardSection.module.css";

export type CardItem = MediaCardData & { id: string; href?: string; filter?: string };

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  /** First tab must be the "all" tab (id "all") */
  filters?: readonly FilterTab[];
  items: readonly CardItem[];
  disclaimer?: string;
  action?: { label: string; href: string };
  subtitleMobileOnly?: boolean;
  /** When set, cards are buttons (e.g. open a modal) instead of links */
  onSelect?: (item: CardItem) => void;
  /** With onSelect: which cards are buttons (default: all). Others stay links. */
  isButton?: (item: CardItem) => boolean;
};

export function CardSection({ id, title, subtitle, filters, items, disclaimer, action, subtitleMobileOnly, onSelect, isButton }: Props) {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? items : items.filter((i) => i.filter === filter);

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headText}>
            <h2 id={`${id}-title`} className={styles.title}>
              {title}
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {filters && <FilterTabs tabs={filters} value={filter} onChange={setFilter} label={`סינון ${title}`} />}
          {action && (
            <Button href={action.href} variant="outline" className={styles.actionDesktop} block="never">
              {action.label}
            </Button>
          )}
        </div>

        <ul className={styles.grid} aria-live="polite">
          {visible.map((item) => (
            <li key={item.id}>
              <MediaCard
                {...item}
                subtitleMobileOnly={subtitleMobileOnly}
                onClick={onSelect && (isButton ? isButton(item) : true) ? () => onSelect(item) : undefined}
              />
            </li>
          ))}
        </ul>

        {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}

        {action && (
          <Button href={action.href} variant="outline" className={styles.actionMobile}>
            {action.label}
          </Button>
        )}
      </div>
    </section>
  );
}
