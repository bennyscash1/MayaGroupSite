import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Steps } from "@/components/sections/Steps";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { CardGrid } from "@/components/software/CardGrid";
import { ChipStrip } from "@/components/software/ChipStrip";
import { TopicCards } from "@/components/software/TopicCards";
import { businessSystems as p } from "@/content/software/business-systems";
import { closing, otherTopics, topic, topicBack, topicBreadcrumb, topicMetadata } from "@/content/software/shared";

const SLUG = "business-systems";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function BusinessSystemsPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} breadcrumb={topicBreadcrumb(SLUG)} back={topicBack} contact={p.contact} closing={closing}>
      <PageHero {...p.hero} />
      <CardGrid {...p.features} />
      <CardGrid {...p.audience} />
      <ChipStrip {...p.integrations} />
      <Steps id="process" title={p.process.title} steps={p.process.steps} />
      <TopicCards {...otherTopics(SLUG)} />
    </SoftwareShell>
  );
}
