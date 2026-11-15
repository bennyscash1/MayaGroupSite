import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SoftwareShell } from "@/components/software/SoftwareShell";
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
      <PageHero {...p.hero} />
      <CardGrid {...p.capabilities} />
      <CardGrid {...p.audience} />
      <ChipStrip {...p.crm} />
      <FlowCards {...p.flows} />
      <TopicCards {...otherTopics(SLUG)} />
    </SoftwareShell>
  );
}
