import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const marketingTeam = [
  {
    name: "Fadwa Hamdaoui",
    role: "Digital Marketing Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9457-scaled-e1754903971227.jpg",
  },
  {
    name: "Mehdi Maarak",
    role: "Social Media Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9499-scaled-e1754903989764.jpg",
  },
  {
    name: "Nouhaila Islah",
    role: "Creative Director",
    image: "https://jets.partners/wp-content/uploads/2025/08/nouhialad-e1754904014231.png",
  },
  {
    name: "Lina Ibrahimi",
    role: "Social Media Manager",
    image: "https://jets.partners/wp-content/uploads/2025/09/right-one.jpg",
  },
];

export default function MarketingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-slate-600 mb-2 tracking-wide uppercase text-sm">Meet our</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
            Marketing Team
          </h2>
          <p className="mt-6 text-slate-600 text-lg sm:text-xl leading-relaxed">
            Our marketing team drives visibility, positioning, and lead generation across all service lines.
            They understand the nuances of the private aviation market and build strategies that speak to the
            right audience, in the right place, at the right moment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {marketingTeam.map((member) => (
            <div
              key={member.name}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              
              {/* Image */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-[4000ms]
                    ease-[cubic-bezier(0.1,0.9,0,1)]
                    group-hover:scale-110
                  "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-t from-black/100 via-black/40 to-transparent
                "
              >
                <div
                  className="
                    absolute inset-0
                    flex flex-col justify-end items-center text-center px-4 pb-6
                    translate-y-10 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                  "
                >
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#77a9f9] text-sm sm:text-base mb-4">{member.role}</p>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-slate-300 transition-transform duration-300 transform hover:scale-125"
                      aria-label={`LinkedIn of ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>

                    <a
                      href="#"
                      className="text-slate-300 transition-transform duration-300 transform hover:scale-125"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}