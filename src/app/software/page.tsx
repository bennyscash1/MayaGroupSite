import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { Services } from "@/components/sections/Services";
import { Steps } from "@/components/sections/Steps";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Tracks } from "@/components/sections/Tracks";
import { Showcase } from "@/components/sections/Showcase";
import { Partners } from "@/components/sections/Partners";
import { software as s, softwareLogo } from "@/content/software";

export const metadata: Metadata = pageMetadata("בית תוכנה | האחים מאיה טכנולוגיה", "בית תוכנה עם גב — פיתוח, תחזוקה והקצאת מפתחים לארגונים.", "/software");

/**
 * Order follows the company deck: who we are → the problem → who it's for →
 * what we do → proof → how it works → why us → commitments → people → contact.
 * `theme-software` applies the deck's darker blues.
 */
export default function SoftwarePage() {
  return (
    <div className="theme-software">
      <div id="top" />
      <Header logo={softwareLogo} nav={s.nav} cta={s.cta} logoHref="/" variant="light" />
      <Breadcrumb items={s.breadcrumb} back={s.back} />
      <main>
        <PageHero {...s.hero} />
        <Intro id="about" {...s.about} />
        <FeatureGrid id="concerns" {...s.concerns} tone="dark" />
        <FeatureGrid id="clients" {...s.clients} />
        <Services id="services" {...s.services} />
        <Tracks id="tracks" {...s.tracks} />
        <Showcase id="projects" {...s.projects} />
        <Steps id="process" title={s.process.title} steps={s.process.steps} />
        <FeatureGrid id="reasons" {...s.reasons} columns={3} />
        <FeatureGrid id="commitments" {...s.commitments} />
        <Partners id="partners" {...s.partners} />
        <FeatureGrid id="onsite" {...s.onsite} tone="dark" />
      </main>
      <Footer logo={softwareLogo} logoHref="/" closing={s.closing} back={s.footerBack} />
    </div>
  );
}
