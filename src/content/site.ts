/**
 * All homepage copy lives here so text can be edited without touching components.
 * Sources: Figma mobile frame "01 · דף הבית" (real design, primary source for text)
 * and the desktop mockup image (layout only).
 */

export type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Stacked lockup (mark above text): rendered taller so the wordmark stays legible */
  stacked?: boolean;
};
export type LinkItem = { label: string; href: string };
export type Closing = {
  /** One sentence, or two lines (2nd line takes the accent colour on desktop) */
  title: string | readonly string[];
  /** Optional line under the title */
  text?: string;
  button: string;
  href: string;
};

export const logo: Logo = {
  src: "/images/logo-main.png", // PNG only: no vector logo exists in the Figma file
  alt: "האחים מאיה — בנייה ויזמות נדל״ן",
  width: 335,
  height: 95,
};

export const nav = [
  { label: "הקבוצה", href: "#about" },
  { label: "החטיבות שלנו", href: "#divisions" },
  { label: "הפעילות שלנו", href: "#activities" },
] as const;

export const contactCta = { label: "בואו נדבר", href: "#contact" } as const;

export const hero = {
  groupName: "קבוצת האחים מאיה",
  titleLines: ["רואים רחוק.", "בונים אחרת."],
  tagline: "נדל״ן. טכנולוגיה. השקעות.",
  sideLabel: "MAYA GROUP / A SHARED VISION",
  mobileCta: "גלו את החטיבות",
  image: "/images/hero.webp",
  /** Figma mobile hero layer (390×250 @2x) */
  imageMobile: "/images/hero-mobile.webp",
} as const;

export type Division = {
  number: string;
  brand: string;
  title: string;
  href: string;
  /** Desktop card image (logo baked in — placeholder until clean photos are exported) */
  image: string;
  /** Mobile thumbnail */
  thumb: string;
};

export const divisionsSection = {
  eyebrowNumber: "01",
  eyebrow: "החטיבות שלנו",
  titleLines: ["ארבע חטיבות.", "חזון אחד."],
} as const;

export const divisions: Division[] = [
  {
    number: "01",
    brand: "האחים מאיה",
    title: "בנייה ויזמות נדל״ן",
    href: "/construction",
    image: "/images/card-1-construction.webp",
    thumb: "/images/thumb-1.webp",
  },
  {
    number: "02",
    brand: "האחים מאיה",
    title: "השקעות וטכנולוגיה",
    href: "/investments",
    image: "/images/card-2-investments.webp",
    thumb: "/images/thumb-2.webp",
  },
  {
    number: "03",
    brand: "האחים מאיה",
    title: "בית תוכנה",
    href: "/software",
    image: "/images/card-3-software.webp",
    thumb: "/images/thumb-3.webp",
  },
  {
    number: "04",
    brand: "קרן מאיה",
    title: "השקעות והזדמנויות",
    href: "/fund",
    image: "/images/card-4-fund.webp",
    thumb: "/images/thumb-4.webp",
  },
];

export const about = {
  eyebrowNumber: "02",
  eyebrow: "אודות הקבוצה",
  titleLines: ["הכול מתחיל", "בחיבור הנכון."],
  bodyLines: ["אנשים, רעיונות ועשייה.", "מחברים ניסיון עם מבט אל העתיד."],
  /** Clean photo (Figma "About image"); the logo badge is rendered in code */
  image: "/images/about.webp",
  imageWidth: 684,
  imageHeight: 384,
} as const;

export const activities = {
  eyebrowNumber: "03",
  eyebrow: "הפעילות שלנו",
  titleLines: ["מחזון", "למציאות."],
  body: "שלושה תחומים, צוות אחד ותפיסה אחת: לבנות דברים שמחזיקים לאורך זמן.",
  items: [
    { label: "יזמות ובנייה", href: "/construction" },
    { label: "חדשנות וטכנולוגיה", href: "/investments" },
    { label: "חיבורים והשקעות", href: "/fund" },
  ],
  image: "/images/activities.webp",
} as const;

export const closing: Closing = {
  title: "בואו נבנה את המחר.",
  button: "נדבר?",
  href: "#contact", // TODO: contact page / mailto / WhatsApp
};

export const footer = {
  backToTop: "חזרה למעלה",
} as const;
