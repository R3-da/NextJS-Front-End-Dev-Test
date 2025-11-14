"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 w-full bg-black/20 backdrop-blur-md transition-colors duration-500">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://jets.partners/wp-content/uploads/2025/08/hgffh.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:flex">
          <button className="px-6 py-2 border border-white/50 text-white hover:bg-white/10 transition-colors">
            CONTACT
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-white/50 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown (glass effect, sits below navbar) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/20 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-4 gap-4 z-40">
          <button className="px-6 py-2 border border-white/50 text-white hover:bg-white/10 transition-colors w-full max-w-xs text-center">
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
}