import type { Metadata } from "next";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { SwHero } from "@/components/software/SwHero";
import { Pillars } from "@/components/software/Pillars";
import { CardGrid } from "@/components/software/CardGrid";
import { ChipStrip } from "@/components/software/ChipStrip";
import { TopicCards } from "@/components/software/TopicCards";
import { SwIntro } from "@/components/software/SwIntro";
import { SwTracks } from "@/components/software/SwTracks";
import { SwProjects } from "@/components/software/SwProjects";
import { SwSteps } from "@/components/software/SwSteps";
import { SwPartners } from "@/components/software/SwPartners";
import { hub as s } from "@/content/software/hub";
import { hubBack, SOFTWARE_HOME, softwareMetadata } from "@/content/software/shared";

export const metadata: Metadata = softwareMetadata(s.meta.title, s.meta.description, SOFTWARE_HOME);

/**
 * Hub home of מאיה טכנולוגיות (Maya Technologies). Opens with "why us" (the group
 * behind us), the standards row and the four-area bento; then the deck-driven story:
 * who we are → the problem → who it's for → tracks → proof → process → why us →
 * commitments → people → onsite → contact. Bands alternate light / dark for pacing.
 */
export default function SoftwarePage() {
  return (
    <SoftwareShell path={SOFTWARE_HOME} contact={s.contact} contactSurface="light" closing={s.closing}>
      <SwHero {...s.hero} back={hubBack} variant="hub" />
      <Pillars {...s.why} tone="surface" />
      <ChipStrip {...s.standards} tone="paper" />
      <TopicCards {...s.areas} tone="dark" />
      <SwIntro id="about" {...s.about} tone="surface" />
      <CardGrid id="concerns" {...s.concerns} tone="dark" columns={4} variant="numbered" />
      <CardGrid id="clients" {...s.clients} tone="paper" columns={4} />
      <SwTracks id="tracks" {...s.tracks} tone="surface" />
      <SwProjects id="projects" {...s.projects} tone="dark" />
      <SwSteps id="process" title={s.process.title} steps={s.process.steps} tone="surface" />
      <CardGrid id="reasons" {...s.reasons} tone="paper" columns={3} variant="numbered" />
      <CardGrid id="commitments" {...s.commitments} tone="surface" columns={4} />
      <SwPartners id="partners" {...s.partners} tone="paper" />
      <CardGrid id="onsite" {...s.onsite} tone="dark" columns={4} />
    </SoftwareShell>
  );
}
