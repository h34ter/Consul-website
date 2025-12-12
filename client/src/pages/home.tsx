import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Process } from "@/components/sections/process";
import { Footer } from "@/components/sections/footer";
import logoWatermark from "@assets/Gemini_Generated_Image_ieztrmieztrmiezt_1765557177839.png";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden selection:bg-white/20 relative">
      <div className="noise-bg" />
      
      {/* 2. Logo Watermark Layer (Crucial) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: `url(${logoWatermark})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '60%', // Or 'contain' as requested, 60% might be safer for "massive" but contained
          opacity: 0.05,
        }}
      />

      {/* 3. Content Layer */}
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <BentoGrid />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
