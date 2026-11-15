import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Steps } from "@/components/sections/Steps";
import { SoftwareShell } from "@/components/software/SoftwareShell";
import { CardGrid } from "@/components/software/CardGrid";
import { TopicCards } from "@/components/software/TopicCards";
import { consulting as p } from "@/content/software/consulting";
import { closing, otherTopics, topic, topicBack, topicBreadcrumb, topicMetadata } from "@/content/software/shared";

const SLUG = "consulting";

export const metadata: Metadata = topicMetadata(SLUG, p.meta.title, p.meta.description);

export default function ConsultingPage() {
  return (
    <SoftwareShell path={topic(SLUG).href} breadcrumb={topicBreadcrumb(SLUG)} back={topicBack} contact={p.contact} closing={closing}>
      <PageHero {...p.hero} />
      <CardGrid {...p.areas} />
      <CardGrid {...p.audiences} />
      <CardGrid {...p.engagement} />
      <Steps id="process" title={p.process.title} steps={p.process.steps} />
      <TopicCards {...otherTopics(SLUG)} />
    </SoftwareShell>
  );
}
