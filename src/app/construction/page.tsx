import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { CardSection } from "@/components/ui/CardSection";
import { NavyBand } from "@/components/ui/NavyBand";
import { construction as c, constructionLogo } from "@/content/construction";

export const metadata: Metadata = {
  title: "בנייה ויזמות נדל״ן | האחים מאיה",
  description: c.hero.body,
};

export default function ConstructionPage() {
  return (
    <>
      <div id="top" />
      <Header logo={constructionLogo} nav={c.nav} cta={c.cta} logoHref="/" variant="light" />
      <Breadcrumb items={c.breadcrumb} back={c.back} />
      <main>
        <PageHero {...c.hero} />
        <Intro id="about" {...c.about} />
        <CardSection id="projects" {...c.projects} />
        <NavyBand id="renewal" {...c.renewal} />
      </main>
      <Footer logo={constructionLogo} logoHref="/" closing={c.closing} back={c.footerBack} />
    </>
  );
}
