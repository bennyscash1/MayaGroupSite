import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Divisions } from "@/components/Divisions";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Divisions />
        <About />
        <Activities />
      </main>
      <Footer />
    </>
  );
}
