import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const salesTeam = [
  {
    name: "Samy Yemmas",
    role: "Account Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9375-scaled-e1754903997969.jpg",
  },
  {
    name: "Youssef Fazazi",
    role: "Account Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9983-1-scaled-e1754904042722.jpg",
  },
  {
    name: "Meriem Aboulouafa",
    role: "Account Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9578.jpg",
  },
];

export default function SalesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">SALES</h2>
          <p className="mt-6 text-slate-600 max-w-3xl text-lg">
            Our sales team handles requests with speed, accuracy, and full market visibility. From sourcing to negotiation, they operate with discretion and control, managing complex acquisitions and placements across private, corporate, and government clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {salesTeam.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">{member.name}</h3>
              <p className="text-slate-600 mb-4">{member.role}</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}