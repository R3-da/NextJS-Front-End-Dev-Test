import Image from "next/image";
import { Phone, Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "Yassine El Moussi",
    role: "CEO",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9327-scaled-e1754902216185.jpg",
    contacts: ["phone", "mail", "linkedin"],
  },
  // Add the other members...
];

export default function ManagementSection() {
  return (
    <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">MANAGEMENT</h2>
            <p className="mt-6 text-slate-600 max-w-3xl text-lg">
              Our management team brings together decades of operational expertise across charter, medevac, cargo, and aircraft sales. Each leader combines deep industry knowledge with hands-on execution, ensuring that every mission is taken care of from first call to final clearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9327-scaled-e1754902216185.jpg"
                  alt="Yassine El Moussi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Yassine El Moussi</h3>
              <p className="text-slate-600 mb-4">Chief Executive Officer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 15 years in private aviation, I lead our sales and executive teams with the same passion that sparked my career. My golden rule is to remember that operators are my key assets, and that you cannot survive in this wilderness by yourself.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9512-1-scaled-e1754902277991.jpg"
                  alt="Younes Ezzaki"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Younes Ezzaki</h3>
              <p className="text-slate-600 mb-4">Chief Marketing Officer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With a sharp eye for brand strategy refined in elite HNWI circles for 15 years, I ensure every team member reflects the company's vision, expertise, and legacy, moving in perfect harmony.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9409-scaled-e1754903918680.jpg"
                  alt="Frederic Perez"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Frederic Perez</h3>
              <p className="text-slate-600 mb-4">Chief Operations Manager</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I try to let my 24-year track record speak for itself: spearheading FBO startups, driving significant revenue growth in private aviation, and consistently expanding operational capabilities through strategic partnerships and negotiation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9243-scaled-e1754902199933.jpg"
                  alt="Amine Boudguig"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Amine Boudguig</h3>
              <p className="text-slate-600 mb-4">Partner</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This industry is more than just a job for me. I see myself as a problem-solver, and help the world go-around.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}