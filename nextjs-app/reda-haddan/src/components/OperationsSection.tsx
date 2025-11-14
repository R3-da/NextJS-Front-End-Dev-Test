"use client";

import { useState, useEffect } from "react";
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
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Hide navbar past hero when scrolling down, show when scrolling up
      setShowNavbar(scrollY < heroHeight || scrollY < lastScrollY);

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // measure navbar height
    const navbar = document.querySelector("nav");
    if (navbar) setNavbarHeight(navbar.clientHeight);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // adjust sticky top dynamically
  const stickyTop = showNavbar ? navbarHeight + 24 : 24;

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start lg:gap-12">

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-6 lg:w-1/2">
          {operationsTeam.map((member) => (
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

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/100 via-black/40 to-transparent">
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#77a9f9] text-sm sm:text-base mb-4">{member.role}</p>

                  <div className="flex gap-4">
                    {member.contacts.includes("Mail") && (
                      <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                    {member.contacts.includes("Linkedin") && (
                      <a href="#" className="text-slate-300 transition-transform duration-300 transform hover:scale-125">
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
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
            Operations Team
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Our operations team is the backbone of every mission. They coordinate flights from start to finish, handle permits, aircraft positioning, crew logistics, and last-minute changes with full control and zero shortcuts.
          </p>
        </div>

      </div>
    </section>
  );
}