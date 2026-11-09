import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { Facts } from "@/components/sections/Facts";
import { Gallery } from "@/components/sections/Gallery";
import { Neighborhood } from "@/components/sections/Neighborhood";
import { ContactBand } from "@/components/sections/ContactBand";
import { constructionLogo } from "@/content/construction";
import { kish23 as k } from "@/content/kish23";

export const metadata: Metadata = pageMetadata("קיש 23, פתח תקווה | האחים מאיה", k.hero.body, "/construction/kish-23");

export default function Kish23Page() {
  return (
    <>
      <div id="top" />
      <Header logo={constructionLogo} nav={k.nav} cta={k.cta} logoHref="/" variant="light" />
      <Breadcrumb items={k.breadcrumb} back={k.back} />
      <main>
        <PageHero {...k.hero} />
        <Facts items={k.facts} />
        <Intro id="about" {...k.intro} />
        <Gallery id="gallery" {...k.gallery} />
        <Neighborhood id="neighborhood" {...k.neighborhood} />
        <ContactBand id="contact" {...k.contact} />
      </main>
      <Footer
        id="closing"
        logo={constructionLogo}
        logoHref="/"
        closing={k.closing}
        back={k.footerBack}
      />
    </>
  );
}
