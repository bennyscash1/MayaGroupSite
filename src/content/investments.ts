/** Page 04 · השקעות וטכנולוגיה + modal 05 (NIVAT) — text from the Figma mobile frames (authoritative). */
import type { Logo } from "./site";

export const investmentsLogo: Logo = {
  src: "/images/logos/logo-investments.png",
  alt: "האחים מאיה — השקעות וטכנולוגיה",
  width: 900,
  height: 537,
  stacked: true,
};

export type VentureModal = {
  tag: string;
  subtitle: string;
  lead: string;
  aboutTitle: string;
  about: string;
  chips: readonly string[];
  cta: string;
  disclaimer: string;
  imageCaption: string;
};

export type Venture = {
  id: string;
  title: string;
  subtitle: string;
  filter: string;
  image: string;
  alt: string;
  modal?: VentureModal;
};

export const investments = {
  nav: [
    { label: "אודות החטיבה", href: "#about" },
    { label: "המיזמים שלנו", href: "#ventures" },
    { label: "שיתופי פעולה", href: "#partnerships" },
  ],
  cta: { label: "בואו נדבר", href: "#contact" },
  breadcrumb: [{ label: "האחים מאיה", href: "/" }, { label: "השקעות וטכנולוגיה" }],
  back: { label: "חזרה לקבוצה", href: "/" },
  hero: {
    overline: "האחים מאיה | השקעות וטכנולוגיה",
    titleLines: ["מזהים פוטנציאל.", "מקדמים את המחר."],
    body: "מחברים יזמות, טכנולוגיה והזדמנויות.",
    button: { label: "להכיר את המיזמים", href: "#ventures", icon: "down" as const },
    image: "/images/investments/hero.webp",
    caption: "תמונת אווירה להמחשה",
  },
  about: {
    eyebrow: "אודות החטיבה",
    titleLines: ["מחברים בין רעיונות,", "אנשים והזדמנויות."],
    body: "חטיבת ההשקעות והטכנולוגיה של קבוצת האחים מאיה מחברת בין יזמים, משקיעים ושותפים אסטרטגיים, ומתמקדת במיזמים בתחומי הרפואה, האנרגיה והמערכות החכמות.",
    image: {
      src: "/images/investments/about.webp",
      alt: "יזם וחוקרת בוחנים אב-טיפוס של מכשור רפואי במעבדה",
      caption: "יזמות. חדשנות. שותפות.",
    },
    values: ["חשיבה יזמית", "חיבור לאנשים", "מבט לטווח ארוך"],
  },
  ventures: {
    title: "המיזמים שלנו",
    filters: [
      { id: "all", label: "הכל" },
      { id: "medical", label: "רפואה" },
      { id: "energy", label: "אנרגיה" },
      { id: "smart", label: "מערכות חכמות" },
    ],
    disclaimer: "תמונות המיזמים להמחשה בלבד",
    items: [
      {
        id: "nivat",
        title: "NIVAT",
        subtitle: "טכנולוגיה רפואית",
        filter: "medical",
        image: "/images/investments/venture-nivat.webp",
        alt: "הדמיה של מסתם לב היברידי",
        modal: {
          tag: "טכנולוגיה רפואית",
          subtitle: "הדור הבא של מסתם הלב",
          lead: "מיזם לפיתוח מסתם לב היברידי, המחבר בין הנדסה רפואית וחשיבה חדשנית.",
          aboutTitle: "על המיזם",
          about: "להיכרות עם הטכנולוגיה, שלבי הפיתוח והאפשרויות לשיתוף פעולה.",
          chips: ["מכשור רפואי", "חדשנות טכנולוגית"],
          cta: "לקבלת פרטים ותיאום פגישה",
          disclaimer: "המידע כללי ואינו מהווה הצעה להשקעה.",
          imageCaption: "הדמיה להמחשה בלבד",
        },
      },
      {
        id: "sem-energy",
        title: "SEM ENERGY",
        subtitle: "טכנולוגיית אנרגיה",
        filter: "energy",
        image: "/images/investments/venture-sem-energy.webp",
        alt: "הדמיה של מנוע חשמלי במעבדה",
        // TODO: no modal content designed — card links to #contact
      },
      {
        id: "aicerv",
        title: "AiCerv",
        subtitle: "מערכות מזיגה חכמות",
        filter: "smart",
        image: "/images/investments/venture-aicerv.webp",
        alt: "הדמיה של ברזי מזיגה חכמים",
        // TODO: no modal content designed — card links to #contact
      },
    ] satisfies Venture[],
  },
  partnerships: {
    eyebrow: "שיתופי פעולה",
    titleLines: ["החיבור הבא", "יכול להתחיל כאן."],
    body: "מפתחים טכנולוגיה? מחפשים שותף לדרך?",
    button: { label: "נדבר על המיזם שלכם", href: "#contact" },
    image: "/images/investments/cta.webp",
  },
  closing: { title: "חדשנות מתחילה בשיחה.", button: "ליצירת קשר", href: "#contact" },
  footerBack: { label: "חזרה לכל החטיבות", href: "/#divisions" },
  disclaimer: "המידע באתר כללי ואינו מהווה הצעה להשקעה או הבטחת תשואה.",
};
