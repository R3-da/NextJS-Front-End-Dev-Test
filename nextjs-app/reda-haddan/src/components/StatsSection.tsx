import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-slate-800">
      <Image
        src="https://jets.partners/wp-content/uploads/2025/08/55557.jpg"
        alt="Background"
        fill
        className="object-cover opacity-20"
      />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <AnimatedCounter end={300} duration={2500} />
            <div className="text-white/80 text-lg">+</div>
            <div className="text-white/90 mt-2">Clients Served</div>
          </div>

          <div>
            <AnimatedCounter end={30000} duration={2500} />
            <div className="text-white/80 text-lg">+</div>
            <div className="text-white/90 mt-2">Aircraft</div>
          </div>

          <div>
            <AnimatedCounter end={10} duration={2000} />
            <div className="text-white/80 text-lg">+</div>
            <div className="text-white/90 mt-2">Lives Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}