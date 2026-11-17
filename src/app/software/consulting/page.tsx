import type { Metadata } from "next";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { SwHero } from "@/components/software/SwHero";
import { SwSteps } from "@/components/software/SwSteps";
import { CardGrid } from "@/components/software/CardGrid";
import { TopicCards } from "@/components/software/TopicCards";
import { consulting as p } from "@/content/software/consulting";
import { closing, otherTopics, topic, topicBack, topicMetadata } from "@/content/software/shared";

const SLUG = "consulting";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function ConsultingPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} contact={p.contact} closing={closing}>
      <SwHero {...p.hero} back={topicBack} variant="tab" />
      <CardGrid {...p.areas} tone="surface" />
      <CardGrid {...p.audiences} tone="dark" />
      <CardGrid {...p.engagement} tone="paper" />
      <SwSteps id="process" title={p.process.title} steps={p.process.steps} tone="surface" />
      <TopicCards {...otherTopics(SLUG)} tone="paper" />
    </SoftwareShell>
  );
}
