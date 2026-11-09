/** Page 07 · קרן מאיה — text copied from the Figma mobile frame (authoritative). */
import type { LeadField } from "@/components/ui/LeadForm";
import type { Logo } from "./site";

export const fundLogo: Logo = {
  // Gold on transparent, keyed from the original fund logo (navy background removed)
  src: "/images/fund/logo-fund-gold.png",
  alt: "קרן מאיה",
  width: 480,
  height: 481,
  stacked: true,
};

export const fund = {
  nav: [
    { label: "אודות הקרן", href: "#about" },
    { label: "תחומי הפעילות", href: "#activities" },
    { label: "הדרך להשקעה", href: "#process" },
  ],
  cta: { label: "לתיאום פגישה", href: "#contact" },
  breadcrumb: [{ label: "האחים מאיה", href: "/" }, { label: "קרן מאיה" }],
  back: { label: "חזרה לקבוצה", href: "/" },
  hero: {
    overline: "קרן מאיה | מקבוצת האחים מאיה",
    titleLines: ["אנשים. הזדמנויות.", "חיבורים עם ערך."],
    body: "מחברים משקיעים להזדמנויות בנדל״ן ובטכנולוגיה.",
    button: { label: "להכיר את האפשרויות", href: "#activities", icon: "down" as const, variant: "primary" as const },
    image: "/images/fund/hero-mobile.webp",
    caption: "תמונת אווירה להמחשה",
  },
  about: {
    eyebrow: "אודות קרן מאיה",
    titleLines: ["החיבור הנכון.", "הדרך מתחילה כאן."],
    body: "קרן מאיה מחברת בין משקיעים, יזמים והזדמנויות בתחומי הנדל״ן והטכנולוגיה. באמצעות תיווך, חיבורים עסקיים ושיתופי פעולה, אנו יוצרים מרחב להיכרות ולבחינת עסקאות.",
    bodyDesktop: [
      "קרן מאיה מחברת בין משקיעים, יזמים והזדמנויות בתחומי הנדל״ן והטכנולוגיה.",
      "באמצעות תיווך, חיבורים עסקיים ושיתופי פעולה, אנו יוצרים מרחב להיכרות ולבחינת עסקאות.",
    ],
    image: { src: "/images/fund/about-office.webp", alt: "חדר ישיבות של קרן מאיה עם נוף לעיר" },
    values: ["קשר אישי", "בחינה מעמיקה", "מבט לטווח ארוך"],
  },
  activities: {
    title: "תחומי הפעילות שלנו",
    subtitle: "כמה דרכים ליצור חיבורים חדשים.",
    items: [
      { id: "real-estate", title: "סל פרויקטים בנדל״ן", subtitle: "היכרות עם מגוון פרויקטים", image: "/images/fund/card-real-estate.webp", href: "#contact" },
      { id: "startups", title: "השקעות בסטארטאפים", subtitle: "רעיונות, יזמים וטכנולוגיה", image: "/images/fund/card-startups.webp", href: "#contact" },
      { id: "deal-flow", title: "תיווך עסקאות", subtitle: "חיבורים לעסקאות משמעותיות", image: "/images/fund/card-deal-flow.webp", href: "#contact" },
    ],
    disclaimer: "התמונות להמחשה בלבד",
  },
  process: {
    title: "היכרות טובה מתחילה בשיחה.",
    steps: [
      { number: "01", label: "היכרות עם הצרכים", icon: "users" as const },
      { number: "02", label: "בחינת האפשרויות", icon: "docSearch" as const },
      { number: "03", label: "בדיקת פרטי העסקה", icon: "handshake" as const },
    ],
  },
  contact: {
    titleLines: ["בואו נדבר על", "ההזדמנות הבאה שלכם."],
    fields: [
      { name: "name", placeholder: "שם מלא", type: "text" },
      { name: "phone", placeholder: "טלפון", type: "tel" },
    ] satisfies LeadField[],
    submit: "לתיאום שיחת היכרות",
  },
  closing: { title: "ההזדמנות הבאה מתחילה כאן.", button: "לתיאום שיחת היכרות", href: "#contact" },
  footerBack: { label: "חזרה לכל החטיבות", href: "/#divisions" },
  disclaimer: "המידע באתר כללי ואינו מהווה הצעה להשקעה או הבטחת תשואה. כל השקעה כפופה לבדיקה ולמסמכי העסקה.",
};
