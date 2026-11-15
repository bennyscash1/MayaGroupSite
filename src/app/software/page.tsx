import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { Steps } from "@/components/sections/Steps";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Tracks } from "@/components/sections/Tracks";
import { Showcase } from "@/components/sections/Showcase";
import { Partners } from "@/components/sections/Partners";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { CardGrid } from "@/components/software/CardGrid";
import { ChipStrip } from "@/components/software/ChipStrip";
import { TopicCards } from "@/components/software/TopicCards";
import { hub as s } from "@/content/software/hub";
import { hubBack, hubBreadcrumb, SOFTWARE_HOME, softwareMetadata } from "@/content/software/shared";

export const metadata: Metadata = softwareMetadata(s.meta.title, s.meta.description, SOFTWARE_HOME);

/**
 * Hub home of the software house. Opens with "why us" (the group behind us),
 * the standards strip and the four topic cards; then the deck-driven story:
 * who we are → the problem → who it's for → tracks → proof → process → why us →
 * commitments → people → onsite → contact. `theme-software` applies the deck's darker blues.
 */
export default function SoftwarePage() {
  return (
    <SoftwareShell path={SOFTWARE_HOME} breadcrumb={hubBreadcrumb} back={hubBack} contact={s.contact} contactSurface="light" closing={s.closing}>
      <PageHero {...s.hero} />
      <CardGrid {...s.why} />
      <ChipStrip {...s.standards} />
      <TopicCards {...s.areas} />
      <Intro id="about" {...s.about} />
      <FeatureGrid id="concerns" {...s.concerns} tone="dark" />
      <FeatureGrid id="clients" {...s.clients} />
      <Tracks id="tracks" {...s.tracks} />
      <Showcase id="projects" {...s.projects} />
      <Steps id="process" title={s.process.title} steps={s.process.steps} />
      <FeatureGrid id="reasons" {...s.reasons} columns={3} />
      <FeatureGrid id="commitments" {...s.commitments} />
      <Partners id="partners" {...s.partners} />
      <FeatureGrid id="onsite" {...s.onsite} tone="dark" />
    </SoftwareShell>
  );
}
