/** Page 02 · בנייה ויזמות נדל״ן — text copied from the Figma mobile frame (authoritative). */
import type { Logo } from "./site";

export const constructionLogo: Logo = {
  // The design shows the horizontal lockup of the construction logo = the group header logo
  src: "/images/logo-main.png",
  alt: "האחים מאיה — בנייה ויזמות נדל״ן",
  width: 335,
  height: 95,
};

export const construction = {
  nav: [
    { label: "אודות החטיבה", href: "#about" },
    { label: "הפרויקטים שלנו", href: "#projects" },
    { label: "התחדשות עירונית", href: "#renewal" },
  ],
  cta: { label: "בואו נדבר", href: "#contact" },
  breadcrumb: [{ label: "האחים מאיה", href: "/" }, { label: "בנייה ויזמות" }],
  back: { label: "חזרה לקבוצה", href: "/" },
  hero: {
    overline: "האחים מאיה | בנייה ויזמות נדל״ן",
    titleLines: ["בונים בתים.", "יוצרים שייכות."],
    body: "יזמות, בנייה והתחדשות עירונית. ליווי אישי, חשיבה לטווח ארוך.",
    button: { label: "לפרויקטים שלנו", href: "#projects", icon: "down" as const },
    image: "/images/construction/hero-mobile.webp",
    caption: "תמונות אווירה להמחשה",
  },
  about: {
    eyebrow: "אודות החטיבה",
    titleLines: ["בית טוב מתחיל", "באנשים טובים."],
    body: "חברת בנייה ויזמות משפחתית, המחברת ניסיון מקצועי עם יחס אישי. מקדמים פרויקטים למגורים ולהתחדשות עירונית, מתוך מחשבה על איכות החיים של הדיירים.",
    bodyDesktop: [
      "חברת בנייה ויזמות משפחתית, המחברת ניסיון מקצועי עם יחס אישי.",
      "מקדמים פרויקטים למגורים ולהתחדשות עירונית, מתוך מחשבה על איכות החיים של הדיירים.",
    ],
  },
  projects: {
    title: "הפרויקטים שלנו",
    filters: [
      { id: "all", label: "הכל" },
      { id: "residential", label: "מגורים" },
      { id: "urban-renewal", label: "התחדשות עירונית" },
    ],
    items: [
      {
        id: "kish-23",
        title: "קיש 23",
        subtitle: "פתח תקווה",
        image: "/images/construction/project-kish-23.webp",
        href: "/construction/kish-23",
        filter: "residential",
      },
      {
        id: "hatzanchanim-16",
        title: "הצנחנים 16",
        subtitle: "פתח תקווה",
        image: "/images/construction/project-hatzanchanim-16.webp",
        href: "#contact", // TODO: project page not designed yet
        filter: "urban-renewal", // TODO: confirm category with the client
      },
      {
        id: "hafetz-haim-47",
        title: "חפץ חיים 47",
        subtitle: "פתח תקווה",
        image: "/images/construction/project-hafetz-haim-47.webp",
        href: "#contact", // TODO: project page not designed yet
        filter: "urban-renewal", // TODO: confirm category with the client
      },
    ],
    disclaimer: "התמונות להמחשה בלבד",
    action: { label: "לכל הפרויקטים", href: "#projects" }, // TODO: no projects index page yet
  },
  renewal: {
    eyebrow: "התחדשות עירונית",
    titleLines: ["הבניין שלכם.", "הפרק הבא."],
    body: "בוחנים אפשרות להתחדשות בבניין שלכם?",
    button: { label: "בואו נבחן את האפשרויות", href: "#contact" },
    image: "/images/construction/renewal-desktop.webp",
    imageMobile: "/images/construction/renewal-mobile.webp",
  },
  closing: { title: "הדרך לבית מתחילה בשיחה.", button: "לתיאום פגישה", href: "#contact" },
  footerBack: { label: "חזרה לכל החטיבות", href: "/#divisions" },
};
