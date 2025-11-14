import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const operationsTeam = [
  {
    name: "Mounir Rayan",
    role: "Operations Director",
    image: "https://jets.partners/wp-content/uploads/2025/08/fuff.png",
    contacts: ["Mail"],
  },
  {
    name: "Rita Azerhouni",
    role: "Operations Specialist",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9340-scaled-e1754903890639.jpg",
    contacts: ["Linkedin", "Mail"],
  },
];

export default function OperationsSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">OPERATIONS</h2>
          <p className="mt-6 text-slate-600 max-w-3xl text-lg">
            Our operations team is the backbone of every mission. They coordinate flights from start to finish, handle permits, aircraft positioning, crew logistics, and last-minute changes with full control and zero shortcuts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {operationsTeam.map((member) => (
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
                {member.contacts.includes("Mail") && (
                  <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {member.contacts.includes("Linkedin") && (
                  <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}