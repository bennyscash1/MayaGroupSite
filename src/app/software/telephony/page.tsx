import type { Metadata } from "next";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { SwHero } from "@/components/software/SwHero";
import { CardGrid } from "@/components/software/CardGrid";
import { ChipStrip } from "@/components/software/ChipStrip";
import { FlowCards } from "@/components/software/FlowCards";
import { TopicCards } from "@/components/software/TopicCards";
import { telephony as p } from "@/content/software/telephony";
import { closing, otherTopics, topic, topicBack, topicBreadcrumb, topicMetadata } from "@/content/software/shared";

const SLUG = "telephony";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function TelephonyPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} breadcrumb={topicBreadcrumb(SLUG)} back={topicBack} contact={p.contact} closing={closing}>
      <SwHero {...p.hero} variant="tab" />
      <CardGrid {...p.capabilities} tone="surface" />
      <CardGrid {...p.audience} tone="dark" />
      <ChipStrip {...p.crm} tone="paper" />
      <FlowCards {...p.flows} tone="surface" />
      <TopicCards {...otherTopics(SLUG)} tone="paper" />
    </SoftwareShell>
  );
}
