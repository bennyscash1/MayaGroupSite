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
  alt: "האחים מאיה | בנייה ויזמות נדל״ן",
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
  /** Desktop card image (logo baked in; placeholder until clean photos are exported) */
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
    title: "מאיה טכנולוגיות",
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

/* ---------- Contact details ----------
   Single source for the footer and every contact section.
   Source: the contact page of the construction site, https://mbr.co.il/צור-קשר/
   (hrefs copied from its HTML). Google Maps link is a plain search URL for the address. */
export type ContactIcon = "phone" | "mail" | "whatsapp" | "facebook" | "instagram" | "pin" | "waze";
export type ContactLink = {
  label: string;
  href: string;
  icon: ContactIcon;
  /** Opens in a new tab (adds target, rel and screen reader text) */
  external?: boolean;
  /** Render the label left to right (phone numbers, email) */
  ltr?: boolean;
};
export type ContactGroup = { title: string; links: readonly ContactLink[] };

const ADDRESS = "השחם 30, פתח תקווה";
const ADDRESS_Q = encodeURIComponent(ADDRESS);

export const contactInfo = {
  heading: "פרטי התקשרות",
  address: ADDRESS,
  groups: [
    {
      title: "חייגו אלינו",
      links: [
        { label: "*5059", href: "tel:*5059", icon: "phone", ltr: true },
        { label: "054-7520524", href: "tel:0547520524", icon: "phone", ltr: true },
      ],
    },
    {
      title: "כתבו לנו",
      links: [
        { label: "bar@mbr.co.il", href: "mailto:bar@mbr.co.il", icon: "mail", ltr: true },
        {
          label: "WhatsApp",
          href: "https://api.whatsapp.com/send?phone=972542451458&text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%90%D7%95%D7%93%D7%95%D7%AA%20%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98",
          icon: "whatsapp",
          external: true,
        },
      ],
    },
    {
      title: "עקבו אחרינו",
      links: [
        { label: "Facebook", href: "http://www.facebook.com/MayaBrother", icon: "facebook", external: true },
        { label: "Instagram", href: "http://www.instagram.com/maya.brothers", icon: "instagram", external: true },
      ],
    },
    {
      title: "בואו לבקר",
      links: [
        {
          label: ADDRESS,
          href: `https://www.google.com/maps/search/?api=1&query=${ADDRESS_Q}`,
          icon: "pin",
          external: true,
        },
        { label: "ניווט ב-Waze", href: "https://waze.com/ul/hsv8y91r99", icon: "waze", external: true },
      ],
    },
  ] satisfies ContactGroup[],
  map: {
    src: `https://maps.google.com/maps?q=${ADDRESS_Q}&t=m&z=16&output=embed&iwloc=near`,
    title: `מפה: משרדי האחים מאיה, ${ADDRESS}`,
  },
  newWindow: "(נפתח בחלון חדש)",
  consent: "אני מאשר/ת שהפרטים שמסרתי נכונים, ומסכים/ה לקבל פניות ומידע מהאחים מאיה בטלפון, בדוא\"ל ובמסרונים.",
} as const;
