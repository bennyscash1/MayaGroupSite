import type { Metadata } from "next";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { SwHero } from "@/components/software/SwHero";
import { SwSteps } from "@/components/software/SwSteps";
import { CardGrid } from "@/components/software/CardGrid";
import { FlowDiagram } from "@/components/software/FlowDiagram";
import { TopicCards } from "@/components/software/TopicCards";
import { automationAi as p } from "@/content/software/automation-ai";
import { closing, otherTopics, topic, topicBack, topicBreadcrumb, topicMetadata } from "@/content/software/shared";

const SLUG = "automation-ai";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function AutomationAiPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} breadcrumb={topicBreadcrumb(SLUG)} back={topicBack} contact={p.contact} closing={closing}>
      <SwHero {...p.hero} variant="tab" />
      <CardGrid {...p.useCases} tone="surface" />
      <FlowDiagram {...p.howItWorks} tone="dark" />
      <CardGrid {...p.security} tone="paper" />
      <SwSteps id="process" title={p.process.title} steps={p.process.steps} tone="surface" />
      <TopicCards {...otherTopics(SLUG)} tone="paper" />
    </SoftwareShell>
  );
}
