import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/layout/header";

import { Comparison } from "@/components/sections/comparison";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white/20">
      <div className="noise-bg" />
      
      <Header />
      <Hero />
      <CaseStudyGrid />
      <Marquee />
      <Comparison />
      <Process />
      <Capabilities />
      <Footer />
    </main>
  );
}
