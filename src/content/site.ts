/**
 * All homepage copy lives here so text can be edited without touching components.
 * Sources: Figma mobile frame "01 · דף הבית" (real design, primary source for text)
 * and the desktop mockup image (layout only).
 */

export const logo = {
  src: "/images/logo-main.png", // TODO: replace with SVG from the designer
  alt: "האחים מאיה — בנייה ויזמות נדל״ן",
  width: 335,
  height: 95,
} as const;

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
    href: "#", // TODO: /construction
    image: "/images/card-1-construction.webp",
    thumb: "/images/thumb-1.webp",
  },
  {
    number: "02",
    brand: "האחים מאיה",
    title: "השקעות וטכנולוגיה",
    href: "#", // TODO: /investments
    image: "/images/card-2-investments.webp",
    thumb: "/images/thumb-2.webp",
  },
  {
    number: "03",
    brand: "האחים מאיה",
    title: "בית תוכנה",
    href: "#", // TODO: /software
    image: "/images/card-3-software.webp",
    thumb: "/images/thumb-3.webp",
  },
  {
    number: "04",
    brand: "קרן מאיה",
    title: "השקעות והזדמנויות",
    href: "#", // TODO: /fund
    image: "/images/card-4-fund.webp",
    thumb: "/images/thumb-4.webp",
  },
];

export const about = {
  eyebrowNumber: "02",
  eyebrow: "אודות הקבוצה",
  titleLines: ["הכול מתחיל", "בחיבור הנכון."],
  bodyLines: ["אנשים, רעיונות ועשייה.", "מחברים ניסיון עם מבט אל העתיד."],
  image: "/images/about.webp",
  imageMobile: "/images/about-mobile.webp",
} as const;

export const activities = {
  eyebrowNumber: "03",
  eyebrow: "הפעילות שלנו",
  titleLines: ["מחזון", "למציאות."],
  body: "שלושה תחומים, צוות אחד ותפיסה אחת: לבנות דברים שמחזיקים לאורך זמן.",
  items: [
    { label: "יזמות ובנייה", href: "#divisions" },
    { label: "חדשנות וטכנולוגיה", href: "#divisions" },
    { label: "חיבורים והשקעות", href: "#divisions" },
  ],
  image: "/images/activities.webp",
} as const;

export const closing = {
  title: "בואו נבנה את המחר.",
  button: "נדבר?",
  href: "#", // TODO: contact page / mailto / WhatsApp
} as const;

export const footer = {
  backToTop: "חזרה למעלה",
} as const;
