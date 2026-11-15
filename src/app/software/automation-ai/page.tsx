import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Steps } from "@/components/sections/Steps";
import { SoftwareShell } from "@/components/software/SoftwareShell";
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
      <PageHero {...p.hero} />
      <CardGrid {...p.useCases} />
      <FlowDiagram {...p.howItWorks} />
      <CardGrid {...p.security} />
      <Steps id="process" title={p.process.title} steps={p.process.steps} />
      <TopicCards {...otherTopics(SLUG)} />
    </SoftwareShell>
  );
}
