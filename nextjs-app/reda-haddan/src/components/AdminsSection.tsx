"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const salesTeam = [
  {
    name: "Salim El Bouzidi",
    role: "Account Manager",
    image: "https://jets.partners/wp-content/uploads/2025/09/MPCL9925.jpg",
  },
  {
    name: "Ismail Nouamani",
    role: "HR & Admin Director",
    image: "https://jets.partners/wp-content/uploads/2025/09/MPCL0053-3-scaled-e1759159993275-680x1024.jpg",
  },
  {
    name: "Mohamed Ali Ourihi",
    role: "Full Stack Developer",
    image: "https://jets.partners/wp-content/uploads/2025/10/kpdkzpd-scaled.jpg",
  },
];

export default function AdminsSection() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setShowNavbar(scrollY < heroHeight || scrollY < lastScrollY);

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const navbar = document.querySelector("nav");
    if (navbar) setNavbarHeight(navbar.clientHeight);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickyTop = showNavbar ? navbarHeight + 24 : 24;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start lg:gap-12">

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-6 lg:w-1/2 relative">
          {salesTeam.map((member, index) => {
            if (index === 1) {
              // second person
              return (
                <div
                  key={member.name}
                  className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer row-span-2 self-center -translate-y-6"
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
                        <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125" aria-label={`LinkedIn of ${member.name}`}>
                          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125" aria-label={`Email ${member.name}`}>
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // first and third person
            return (
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
                      <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125" aria-label={`LinkedIn of ${member.name}`}>
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                      <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125" aria-label={`Email ${member.name}`}>
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky Text Section */}
        <div
          className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-start text-left sticky transition-all duration-300"
          style={{ top: `${stickyTop}px` }}
        >
          <p className="text-slate-600 mb-2 tracking-wide uppercase text-sm">Meet our</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4">
            ADMINS
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            They provide the backbone of our daily execution and the infrastructure that keeps it running. Our administrative team safeguards compliance, coordinates documentation and schedules, and maintains clear communication across departments. Alongside them, our full-stack developer builds and maintains the internal tools and client-facing systems that streamline workflows, protect data, and keep information flowing in real time. Together, they deliver the structure, reliability, and technology every mission depends on.
          </p>
        </div>

      </div>
    </section>
  );
}