"use client";

import { useEffect, useState } from "react";
import type { FilterTab } from "../ui/FilterTabs";
import { CardSection, type CardItem } from "../ui/CardSection";
import type { Venture } from "@/content/investments";
import { VentureDialog } from "./VentureDialog";

type Props = {
  id: string;
  title: string;
  filters: readonly FilterTab[];
  items: readonly Venture[];
  disclaimer?: string;
  contactHref: string;
};

/** Ventures grid with filters; a venture that has modal content opens it (NIVAT, Figma 05). */
export function Ventures({ id, title, filters, items, disclaimer, contactHref }: Props) {
  const [open, setOpen] = useState<Venture | null>(null);

  // Deep link: /investments#nivat opens that venture's dialog
  useEffect(() => {
    const fromHash = () => {
      const v = items.find((x) => `#${x.id}` === window.location.hash);
      if (v?.modal) setOpen(v);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  const cards: CardItem[] = items.map((v) => ({
    id: v.id,
    title: v.title,
    subtitle: v.subtitle,
    image: v.image,
    alt: v.alt,
    filter: v.filter,
    latin: true,
    href: v.modal ? undefined : contactHref,
  }));

  const hasModal = (item: CardItem) => items.find((v) => v.id === item.id)?.modal;

  return (
    <>
      <CardSection
        id={id}
        title={title}
        filters={filters}
        items={cards}
        disclaimer={disclaimer}
        onSelect={(item) => {
          const v = items.find((x) => x.id === item.id);
          if (v?.modal) setOpen(v);
        }}
        isButton={(item) => Boolean(hasModal(item))}
      />
      {open && <VentureDialog venture={open} contactHref={contactHref} onClose={() => setOpen(null)} />}
    </>
  );
}
