
import { Linkedin, Instagram } from "lucide-react";


export default function ContactSection() {
  return (
    <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-slate-600 mb-2 tracking-wide">HAVE ANY QUESTIONS?</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-12">
                SPEAK WITH<br />OUR EXPERTS<br />TODAY
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-2 text-slate-900">ADDRESS</h3>
                  <p className="text-slate-600">15442 Ventura Blvd, Sherman Oaks, CA 91403</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-slate-900">PHONE</h3>
                  <p className="text-slate-600">+1 973 932 8950</p>
                  <p className="text-slate-600">+1 407 528 1226</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-slate-900">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-slate-900">EMAIL</h3>
                  <p className="text-slate-600 text-sm mb-1">Interested in our services?</p>
                  <p className="text-slate-600">hello@jets.partners</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-12">
              <h3 className="text-3xl font-light text-white mb-2">GET IN TOUCH</h3>
              <p className="text-white/70 mb-8">What better way to try out our reaction time?</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-white/90 mb-2 text-sm">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    placeholder="Your subject"
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Your@email.com"
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Phone</label>
                  <input
                    type="tel"
                    placeholder="+X(XXX)XXX-XXXX"
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Message</label>
                  <textarea
                    placeholder="Tell Us About Your Project"
                    rows={4}
                    className="w-full bg-slate-600/50 border-0 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-slate-900 py-4 hover:bg-stone-100 transition-colors font-light tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}