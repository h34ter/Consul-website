import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white/20">
      <div className="noise-bg" />
      
      <Header />
      <Hero />
      <Marquee />
      <BentoGrid />
      <Process />
      <Capabilities />
      <Footer />
    </main>
  );
}
