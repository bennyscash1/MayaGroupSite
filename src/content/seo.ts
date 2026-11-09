import type { Metadata } from "next";

/** Production URL — used for absolute links in link previews (WhatsApp, Facebook, LinkedIn…). */
export const SITE_URL = "https://maya-group-site.vercel.app";
export const SITE_NAME = "קבוצת האחים מאיה";

/** Main logo preview (src/app/opengraph-image.png). Listed explicitly: a page-level
 *  openGraph object replaces the one inherited from the root, image included. */
const OG_IMAGE = { url: "/opengraph-image.png", width: 1200, height: 630, alt: "האחים מאיה — בנייה ויזמות נדל״ן" };

/**
 * Per-page metadata with matching Open Graph / Twitter tags.
 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "he_IL",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
