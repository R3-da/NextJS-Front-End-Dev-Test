import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-16">
      {/* Background Image */}
      <Image
        src="https://jets.partners/wp-content/uploads/2025/08/Firefly_Ultra-premium-private-jet-in-a-refined-cinematic-night-scene-_-inspired-by-Flexjet-b-278673XW-scaled-e1758720449553.png"
        alt="Private Jet"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col gap-12">
        {/* Row 1: Heading (left) */}
        <div className="w-full max-w-6xl text-left">
          <h1 className="text-8xl md:text-9xl lg:text-[9.5rem] font-light font-kinetica leading-tight text-white">
            Private<br />
            aviation,<br />
            redefined.
          </h1>
        </div>

        {/* Row 2: Paragraph + Button (full width) */}
        <div className="w-full flex justify-end">
          <div className="flex flex-col items-start gap-6 max-w-lg">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed text-left">
              Our team brings decades of combined experience in global aviation, ensuring every mission is executed with precision, discretion, and trust.
            </p>
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-slate-900 transition-all">
              Our Values
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">
        <span className="text-sm">Scroll To Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}