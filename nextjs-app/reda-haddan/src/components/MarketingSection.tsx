"use client";

import { useState, useEffect } from "react";
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-1/2">
          {marketingTeam.map((member) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/100 via-black/40 to-transparent">
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-6 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
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

        {/* Sticky Text Section */}
        <div
          className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-start text-left sticky transition-all duration-300"
          style={{ top: `${stickyTop}px` }}
        >
          <p className="text-slate-600 mb-2 tracking-wide uppercase text-sm">Meet our</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4">
            Marketing Team
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Our marketing team drives visibility, positioning, and lead generation across all service lines.
            They understand the nuances of the private aviation market and build strategies that speak to the
            right audience, in the right place, at the right moment.
          </p>
        </div>

      </div>
    </section>
  );
}