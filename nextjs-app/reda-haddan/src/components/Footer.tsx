export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-light mb-4">Jets & Partners</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Experience isn't claimed — it's proven. At Jets & Partners, we've assembled a handpicked team of private aviation top performers who consistently rise above the rest.
            </p>
          </div>
          <div>
            <h4 className="text-white font-light mb-4">Sitemap</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fleet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-light mb-4">Office</h4>
            <p className="text-white/60 text-sm mb-4">15442 Ventura Blvd, Sherman Oaks, CA 91403</p>
            <p className="text-white/60 text-sm mb-2">+1 973 932 8950</p>
            <p className="text-white/60 text-sm mb-4">+1 407 528 1226</p>
            <p className="text-white/60 text-sm">HELLO@JETS.PARTNERS</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm">© 2025 Jets & Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}