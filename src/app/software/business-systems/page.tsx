import type { Metadata } from "next";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { SwHero } from "@/components/software/SwHero";
import { SwSteps } from "@/components/software/SwSteps";
import { CardGrid } from "@/components/software/CardGrid";
import { ChipStrip } from "@/components/software/ChipStrip";
import { TopicCards } from "@/components/software/TopicCards";
import { businessSystems as p } from "@/content/software/business-systems";
import { closing, otherTopics, topic, topicBack, topicMetadata } from "@/content/software/shared";

const SLUG = "business-systems";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function BusinessSystemsPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} contact={p.contact} closing={closing}>
      <SwHero {...p.hero} back={topicBack} variant="tab" />
      <CardGrid {...p.features} tone="surface" />
      <CardGrid {...p.audience} tone="dark" />
      <ChipStrip {...p.integrations} tone="paper" />
      <SwSteps id="process" title={p.process.title} steps={p.process.steps} tone="surface" />
      <TopicCards {...otherTopics(SLUG)} tone="paper" />
    </SoftwareShell>
  );
}
