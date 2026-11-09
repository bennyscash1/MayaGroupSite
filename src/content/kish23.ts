/** Page 03 · פרויקט קיש 23 — text from the Figma mobile frame (authoritative). */
import type { LeadField } from "@/components/ui/LeadForm";

export const kish23 = {
  nav: [
    { label: "אודות הפרויקט", href: "#about" },
    { label: "גלריה", href: "#gallery" },
    { label: "סביבת הפרויקט", href: "#neighborhood" },
  ],
  cta: { label: "לתיאום פגישה", href: "#contact" },
  breadcrumb: [
    { label: "דף הבית", href: "/", desktopOnly: true },
    { label: "בנייה ויזמות נדל״ן", mobileLabel: "בנייה ויזמות", href: "/construction" },
    { label: "קיש 23" },
  ],
  back: { label: "חזרה לפרויקטים", href: "/construction#projects" },
  hero: {
    overline: "פתח תקווה | שכונת אחדות",
    titleLines: ["קיש 23", "בית חדש. פרק חדש."],
    body: "פרויקט מגורים חדש, 4 חדרים, שתי דירות בקומה.",
    button: { label: "לתיאום פגישה", href: "#contact" },
    image: "/images/kish-23/hero-building-mobile.webp",
    caption: "הדמיה להמחשה בלבד",
  },
  facts: [
    { icon: "pin" as const, label: "מיקום", value: "שכונת אחדות, פתח תקווה" },
    { icon: "layers" as const, label: "סוג הפרויקט", value: "בנייה חדשה למגורים" },
    { icon: "home" as const, label: "דירות", value: "4 חדרים" },
  ],
  intro: {
    titleLines: ["הבית שלכם,", "בקצב של השכונה."],
    body: "פרויקט מגורים ברחוב קיש 23, בשכונת אחדות בפתח תקווה. דירות 4 חדרים, שתי דירות בקומה ושלושה כיווני אוויר. תכנון שמחבר בין הבית, הרחוב והחיים שביניהם.",
    bodyDesktop: [
      "פרויקט מגורים ברחוב קיש 23, בשכונת אחדות בפתח תקווה.",
      "דירות 4 חדרים, שתי דירות בקומה ושלושה כיווני אוויר.",
      "תכנון שמחבר בין הבית, הרחוב והחיים שביניהם.",
    ],
  },
  gallery: {
    title: "מבט מקרוב",
    tabs: [
      { id: "building", label: "הבניין" },
      { id: "common", label: "חללים משותפים" },
      { id: "apartments", label: "הדירות" },
    ],
    items: [
      { tab: "building", title: "חזית הבניין", subtitle: "הדמיה", image: "/images/kish-23/gallery-building.webp" },
      { tab: "common", title: "חללים משותפים", subtitle: "הדמיה", image: "/images/kish-23/gallery-common-areas.webp" },
      { tab: "apartments", title: "הדמיית דירה", subtitle: "הדמיה", image: "/images/kish-23/gallery-apartment.webp" },
    ],
    disclaimer: "כל ההדמיות להמחשה בלבד",
  },
  neighborhood: {
    eyebrow: "סביבת הפרויקט",
    title: "השכונה היא חלק מהבית.",
    subtitle: "קיש 23, שכונת אחדות, פתח תקווה",
    button: "לפתיחה במפה",
    mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("קיש 23 פתח תקווה"),
    image: "/images/kish-23/neighborhood-street.webp",
    imageAlt: "רחוב מגורים ירוק בשכונת אחדות",
  },
  contact: {
    titleLines: ["נעים להכיר.", "נשמח להיפגש."],
    subtitle: "השאירו פרטים לקבלת מידע על הפרויקט",
    fields: [
      { name: "name", placeholder: "שם מלא", type: "text", icon: "user" },
      { name: "phone", placeholder: "טלפון", type: "tel", icon: "phone" },
      { name: "email", placeholder: "אימייל", type: "email", icon: "mail" },
    ] satisfies LeadField[],
    consent: "אני מאשר/ת יצירת קשר בנוגע לפרויקט",
    submit: "שליחת פרטים",
  },
  closing: { title: "הבית הבא שלכם מחכה.", button: "לתיאום פגישה", href: "#contact" },
  footerBack: { label: "חזרה לכל הפרויקטים", href: "/construction#projects" },
};
