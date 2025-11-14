import { ChevronDown } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-slate-600/20 backdrop-blur-sm"></div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-white/50 text-white hover:bg-white/10 transition-colors">
            CONTACT
          </button>
          <button className="p-2 border border-white/50 text-white hover:bg-white/10 transition-colors">
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}