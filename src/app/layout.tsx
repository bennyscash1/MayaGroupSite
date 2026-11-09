import type { Metadata, Viewport } from "next";
import { Heebo, Inter } from "next/font/google";
import { pageMetadata, SITE_URL } from "@/content/seo";
import { RevealOnScroll, revealBootScript } from "@/components/RevealOnScroll";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("האחים מאיה | רואים רחוק. בונים אחרת.", "קבוצת האחים מאיה — נדל״ן, טכנולוגיה והשקעות.", "/"),
};

export const viewport: Viewport = {
  themeColor: "#0f2c4c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        {/* Runs before the page paints: hides text until the scroll-reveal is ready */}
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
