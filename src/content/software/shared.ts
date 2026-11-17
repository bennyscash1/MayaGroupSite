/**
 * Software hub (/software + 4 topic pages) — shared content: logo, sub-tabs,
 * header nav, back links, contact form and per-page metadata.
 */
import type { Metadata } from "next";
import type { Logo, LinkItem } from "../site";
import type { LeadField } from "@/components/ui/LeadForm";
import type { SubTab } from "@/components/software/SubTabs";
import type { TopicCard } from "@/components/software/TopicCards";
import type { SwIconName } from "@/components/software/SwIcon";
import { pageMetadata } from "../seo";

export const SOFTWARE_HOME = "/software";

export const softwareLogo: Logo = {
  src: "/images/logos/logo-software.png",
  alt: "האחים מאיה טכנולוגיות",
  width: 900,
  height: 580,
  stacked: true,
};

export type TopicSlug = "business-systems" | "automation-ai" | "telephony" | "consulting";

type Topic = {
  slug: TopicSlug;
  href: string;
  /** Sub-tab label */
  tab: string;
  /** Full name (cards) */
  name: string;
  /** One-line summary for the hub cards */
  summary: string;
  icon: SwIconName;
  hero: { image: string; imageMobile: string; alt: string };
};

/** The four topic pages, in tab order. */
export const topics: readonly Topic[] = [
  {
    slug: "business-systems",
    href: "/software/business-systems",
    tab: "מערכות לבעלי עסקים",
    name: "מערכות לבעלי עסקים",
    summary: "מערכת ניהול שנבנית סביב העסק שלכם: לקוחות, מכירות, הצעות מחיר, סליקה, מלאי ודוחות — במקום אחד.",
    icon: "layers",
    hero: {
      image: "/images/software/business-systems/hero.webp",
      imageMobile: "/images/software/business-systems/hero-mobile.webp",
      alt: "שולחן עבודה משרדי עם מסך שמציג לוח בקרה עסקי, גרפים וטבלאות נתונים",
    },
  },
  {
    slug: "automation-ai",
    href: "/software/automation-ai",
    tab: "אוטומציות ו-AI",
    name: "אוטומציות עסקיות ו-AI",
    summary: "סוכני AI ואוטומציות שעובדים על המערכות הקיימות שלכם — פחות עבודה ידנית, יותר זמן לעבודה שחשובה.",
    icon: "bot",
    hero: {
      image: "/images/software/automation-ai/hero.webp",
      imageMobile: "/images/software/automation-ai/hero-mobile.webp",
      alt: "ארון שרתים בחוות נתונים, מואר בתאורה כחולה",
    },
  },
  {
    slug: "telephony",
    href: "/software/telephony",
    tab: "טלפוניה ו-IVR",
    name: "טלפוניה ו-IVR חכם",
    summary: "תפריטים קוליים, קווי מידע, תשלומים והרשמה בטלפון — נגישים מכל מכשיר, כולל טלפון כשר, ומחוברים ל-CRM.",
    icon: "headset",
    hero: {
      image: "/images/software/telephony/hero.webp",
      imageMobile: "/images/software/telephony/hero-mobile.webp",
      alt: "טלפון משרדי שולחני בחדר תקשורת מואר בכחול",
    },
  },
  {
    slug: "consulting",
    href: "/software/consulting",
    tab: "ייעוץ",
    name: "ייעוץ טכנולוגי",
    summary: "ייעוץ בסייבר, QA, ארכיטקטורה, פרטיות ונגישות — לעסקים, לרשויות מקומיות ולגופים ציבוריים.",
    icon: "compass",
    hero: {
      image: "/images/software/consulting/hero.webp",
      imageMobile: "/images/software/consulting/hero-mobile.webp",
      alt: "פגישת ייעוץ בחדר ישיבות: יועצת מציגה על לוח בפני צוות הנהלה",
    },
  },
];

export const topic = (slug: TopicSlug) => topics.find((t) => t.slug === slug)!;

/** Sticky sub-tab bar: overview + the four topics */
export const subTabs: readonly SubTab[] = [{ href: SOFTWARE_HOME, label: "סקירה" }, ...topics.map((t) => ({ href: t.href, label: t.tab }))];
export const subTabsLabel = "תחומי מאיה טכנולוגיות";

/** Header nav. On the hub the links are in-page anchors; on topic pages they lead back to the hub. */
export function headerNav(onHub: boolean): readonly LinkItem[] {
  const base = onHub ? "" : SOFTWARE_HOME;
  return [
    { label: "למה איתנו", href: `${base}#why` },
    { label: "התחומים שלנו", href: `${base}#areas` },
    { label: "פרויקטים", href: `${base}#projects` },
    { label: "השותפים", href: `${base}#partners` },
  ];
}
export const headerCta: LinkItem = { label: "בואו נדבר", href: "#contact" };

export const hubBack = { label: "חזרה לקבוצה", href: "/" };
export const topicBack = { label: "לסקירת מאיה טכנולוגיות", href: SOFTWARE_HOME };
export const footerBack = { label: "חזרה לכל החטיבות", href: "/#divisions" };

/** Hub cards (large) or the "other topics" row at the end of a topic page (compact). */
export function topicCards(exclude?: TopicSlug): TopicCard[] {
  return topics
    .map((t, i) => ({ t, number: String(i + 1).padStart(2, "0") }))
    .filter(({ t }) => t.slug !== exclude)
    .map(({ t, number }) => ({ href: t.href, number, title: t.name, text: t.summary, icon: t.icon, image: t.hero.imageMobile }));
}

export const otherTopics = (slug: TopicSlug) => ({
  id: "more-topics",
  eyebrow: "עוד במאיה טכנולוגיות",
  title: "תחומים נוספים שאפשר לעבוד איתנו עליהם",
  items: topicCards(slug),
  linkLabel: "למידע נוסף",
  variant: "compact" as const,
});

/** Lead form used at the end of every software page */
export const contactFields = [
  { name: "name", placeholder: "שם מלא", type: "text" },
  { name: "phone", placeholder: "טלפון", type: "tel" },
  { name: "email", placeholder: "דוא״ל (לא חובה)", type: "email", required: false },
] satisfies LeadField[];
export const contactConsent = "אני מאשר/ת שתיצרו איתי קשר בנוגע לפנייה";

export function contact(titleLines: readonly [string, string], subtitle: string, submit = "לתיאום שיחת היכרות") {
  return { titleLines, subtitle, fields: contactFields, consent: contactConsent, submit };
}

/** Closing band in the footer (topic pages) */
export const closing = {
  title: "בואו נדבר.",
  text: "שיחה אחת מספיקה כדי להבין אם אנחנו מתאימים. היא לא עולה כלום.",
  button: "להשארת פרטים",
  href: "#contact",
};

/** Page metadata; topic pages share their own hero photo as the link-preview image. */
export function softwareMetadata(title: string, description: string, path: string, image?: { url: string; alt: string }): Metadata {
  const meta = pageMetadata(title, description, path);
  if (!image) return meta;
  const og = { url: image.url, width: 1600, height: 900, alt: image.alt };
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [og] },
    twitter: { ...meta.twitter, images: [image.url] },
  };
}

export const topicMetadata = (slug: TopicSlug, title: string, description: string) => {
  const t = topic(slug);
  return softwareMetadata(title, description, t.href, { url: t.hero.image, alt: t.hero.alt });
};
