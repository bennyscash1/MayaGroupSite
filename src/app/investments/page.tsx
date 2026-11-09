import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Intro } from "@/components/ui/Intro";
import { NavyBand } from "@/components/ui/NavyBand";
import { Ventures } from "@/components/sections/Ventures";
import { investments as v, investmentsLogo } from "@/content/investments";

export const metadata: Metadata = {
  title: "השקעות וטכנולוגיה | האחים מאיה",
  description: v.hero.body,
};

export default function InvestmentsPage() {
  return (
    <>
      <div id="top" />
      <Header logo={investmentsLogo} nav={v.nav} cta={v.cta} logoHref="/" variant="light" />
      <Breadcrumb items={v.breadcrumb} back={v.back} />
      <main>
        <PageHero {...v.hero} />
        <Intro id="about" {...v.about} />
        <Ventures id="ventures" {...v.ventures} contactHref="#contact" />
        <NavyBand id="partnerships" {...v.partnerships} />
      </main>
      <Footer
        logo={investmentsLogo}
        logoHref="/"
        closing={v.closing}
        back={v.footerBack}
        disclaimer={v.disclaimer}
      />
    </>
  );
}
