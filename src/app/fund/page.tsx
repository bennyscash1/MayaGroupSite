import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { CardSection } from "@/components/ui/CardSection";
import { Steps } from "@/components/sections/Steps";
import { ContactBand } from "@/components/sections/ContactBand";
import { fund as f, fundLogo } from "@/content/fund";

export const metadata: Metadata = pageMetadata("קרן מאיה | האחים מאיה", f.hero.body, "/fund");

/** Fund mode: the `theme-fund` wrapper re-maps the design tokens (navy / cream / gold). */
export default function FundPage() {
  return (
    <div className="theme-fund">
      <div id="top" />
      <Header logo={fundLogo} nav={f.nav} cta={f.cta} logoHref="/fund" variant="dark" />
      <Breadcrumb items={f.breadcrumb} back={f.back} />
      <main>
        <PageHero {...f.hero} />
        <Intro id="about" {...f.about} />
        <CardSection id="activities" {...f.activities} />
        <Steps id="process" title={f.process.title} steps={f.process.steps} />
        <ContactBand id="contact" {...f.contact} surface="light" />
      </main>
      <Footer
        id="closing"
        logo={fundLogo}
        logoHref="/fund"
        closing={f.closing}
        back={f.footerBack}
        disclaimer={f.disclaimer}
        surface="dark"
      />
    </div>
  );
}
