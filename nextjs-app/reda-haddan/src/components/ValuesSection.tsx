import { Users, Target, Eye } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-slate-600 mb-2 tracking-wide">What sets us apart</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">
            OUR VALUES
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-slate-900">Advisory</h3>
            <p className="text-slate-600 leading-relaxed">
              We operate with a mission-first mindset. Every recommendation we make is based on the client's mission.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-slate-900">Precision</h3>
            <p className="text-slate-600 leading-relaxed">
              From permits to dispatch, we manage each step with accuracy, clarity, and full control especially under pressure.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Eye className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light mb-4 text-slate-900">Transparency</h3>
            <p className="text-slate-600 leading-relaxed">
              We prioritize clear communication, honest pricing, and operational accountability across every mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}