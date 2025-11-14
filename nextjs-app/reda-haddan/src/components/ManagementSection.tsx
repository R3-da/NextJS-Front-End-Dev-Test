"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, Linkedin } from "lucide-react";


const managementTeam = [
  {
    name: "Yassine El Moussi",
    role: "CEO",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9327-scaled-e1754902216185.jpg",
    description: "With over 15 years in private aviation, I lead our sales and executive teams with the same passion that sparked my career. My golden rule is to remember that operators are my key assets, and that you cannot survive in this wilderness by yourself.",
    contacts: ["phone", "mail", "linkedin"],
  },
  {
    name: "Younes Ezzaki",
    role: "Chief Marketing Officer",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9512-1-scaled-e1754902277991.jpg",
    description: "With a sharp eye for brand strategy refined in elite HNWI circles for 15 years, I ensure every team member reflects the company's vision, expertise, and legacy, moving in perfect harmony.",
    contacts: ["phone", "mail", "linkedin"],
  },
  {
    name: "Frederic Perez",
    role: "Chief Operations Manager",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9409-scaled-e1754903918680.jpg",
    description: "I try to let my 24-year track record speak for itself: spearheading FBO startups, driving significant revenue growth in private aviation, and consistently expanding operational capabilities through strategic partnerships and negotiation.",
    contacts: ["phone", "mail", "linkedin"],
  },
  {
    name: "Amine Boudguig",
    role: "Partner",
    image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9243-scaled-e1754902199933.jpg",
    description: "This industry is more than just a job for me. I see myself as a problem-solver, and help the world go-around.",
    contacts: ["phone", "mail", "linkedin"],
  },
];

export default function ManagementSection() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      const lastScrollY = Number(document.body.dataset.lastScrollY || 0);

      // hide navbar past hero when scrolling down
      setShowNavbar(scrollY < heroHeight || scrollY < lastScrollY);

      // store last scroll position
      document.body.dataset.lastScrollY = String(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // measure navbar height
    const navbar = document.querySelector("nav");
    if (navbar) setNavbarHeight(navbar.clientHeight);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // adjust sticky top dynamically
  const stickyTop = showNavbar ? navbarHeight + 24 : 24; // 24 = original top-24

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start lg:gap-12">

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-6 lg:w-1/2">
          {managementTeam.map((member) => (
            <div
              key={member.name}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-[4000ms] ease-[cubic-bezier(0.1,0.9,0,1)] group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/100 via-black/40 to-transparent">
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#77a9f9] text-sm sm:text-base mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    {member.contacts.includes("phone") && <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:scale-125 transition-transform" />}
                    {member.contacts.includes("mail") && <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:scale-125 transition-transform" />}
                    {member.contacts.includes("linkedin") && <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:scale-125 transition-transform" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Text Section */}
        <div
          className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-start text-left sticky transition-all duration-300"
          style={{ top: `${stickyTop}px` }}
        >
          <p className="text-slate-600 mb-2 tracking-wide uppercase text-sm">Meet our</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4">
            Management Team
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Our management team brings together decades of operational expertise across charter, medevac, cargo, and aircraft sales. Each leader combines deep industry knowledge with hands-on execution, ensuring that every mission is taken care of from first call to final clearance.
          </p>
        </div>

      </div>
    </section>
  );
}