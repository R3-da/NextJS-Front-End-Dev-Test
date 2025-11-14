import Image from "next/image";
import { ChevronDown, Linkedin, Mail, Phone, Instagram, Users, Target, Eye } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://jets.partners/wp-content/uploads/2025/08/Firefly_Ultra-premium-private-jet-in-a-refined-cinematic-night-scene-_-inspired-by-Flexjet-b-278673XW-scaled-e1758720449553.png"
          alt="Private Jet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
            Private aviation,<br />redefined.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed">
            Our team brings decades of combined experience in global aviation, ensuring every mission is executed with precision, discretion, and trust.
          </p>
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-slate-900 transition-all">
            Our Values
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm">Scroll To Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">MANAGEMENT</h2>
            <p className="mt-6 text-slate-600 max-w-3xl text-lg">
              Our management team brings together decades of operational expertise across charter, medevac, cargo, and aircraft sales. Each leader combines deep industry knowledge with hands-on execution, ensuring that every mission is taken care of from first call to final clearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9327-scaled-e1754902216185.jpg"
                  alt="Yassine El Moussi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Yassine El Moussi</h3>
              <p className="text-slate-600 mb-4">Chief Executive Officer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 15 years in private aviation, I lead our sales and executive teams with the same passion that sparked my career. My golden rule is to remember that operators are my key assets, and that you cannot survive in this wilderness by yourself.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9512-1-scaled-e1754902277991.jpg"
                  alt="Younes Ezzaki"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Younes Ezzaki</h3>
              <p className="text-slate-600 mb-4">Chief Marketing Officer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With a sharp eye for brand strategy refined in elite HNWI circles for 15 years, I ensure every team member reflects the company's vision, expertise, and legacy, moving in perfect harmony.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9409-scaled-e1754903918680.jpg"
                  alt="Frederic Perez"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Frederic Perez</h3>
              <p className="text-slate-600 mb-4">Chief Operations Manager</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I try to let my 24-year track record speak for itself: spearheading FBO startups, driving significant revenue growth in private aviation, and consistently expanding operational capabilities through strategic partnerships and negotiation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9243-scaled-e1754902199933.jpg"
                  alt="Amine Boudguig"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Amine Boudguig</h3>
              <p className="text-slate-600 mb-4">Partner</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This industry is more than just a job for me. I see myself as a problem-solver, and help the world go-around.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">SALES</h2>
            <p className="mt-6 text-slate-600 max-w-3xl text-lg">
              Our sales team handles requests with speed, accuracy, and full market visibility. From sourcing to negotiation, they operate with discretion and control, managing complex acquisitions and placements across private, corporate, and government clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9375-scaled-e1754903997969.jpg"
                  alt="Samy Yemmas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Samy Yemmas</h3>
              <p className="text-slate-600 mb-4">Account Manager</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9983-1-scaled-e1754904042722.jpg"
                  alt="Youssef Fazazi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Youssef Fazazi</h3>
              <p className="text-slate-600 mb-4">Account Manager</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9578.jpg"
                  alt="Meriem Aboulouafa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Meriem Aboulouafa</h3>
              <p className="text-slate-600 mb-4">Account Manager</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
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
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/fuff.png"
                  alt="Mounir Rayan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Mounir Rayan</h3>
              <p className="text-slate-600 mb-4">Operations Director</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9340-scaled-e1754903890639.jpg"
                  alt="Rita Azerhouni"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Rita Azerhouni</h3>
              <p className="text-slate-600 mb-4">Operations Specialist</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="text-slate-600 mb-2 tracking-wide">Meet our</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">MARKETING</h2>
            <p className="mt-6 text-slate-600 max-w-3xl text-lg">
              Our marketing team drives visibility, positioning, and lead generation across all service lines. They understand the nuances of the private aviation market and build strategies that speak to the right audience, in the right place, at the right moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9457-scaled-e1754903971227.jpg"
                  alt="Fadwa Hamdaoui"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Fadwa Hamdaoui</h3>
              <p className="text-slate-600 mb-4">Digital Marketing Manager</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/MPCL9499-scaled-e1754903989764.jpg"
                  alt="Mehdi Maarak"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Mehdi Maarak</h3>
              <p className="text-slate-600 mb-4">Social Media Manager</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src="https://jets.partners/wp-content/uploads/2025/08/nouhialad-e1754904014231.png"
                  alt="Nouhaila Islah"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-slate-900">Nouhaila Islah</h3>
              <p className="text-slate-600 mb-4">Creative Director</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-slate-600 mb-2 tracking-wide">What sets us apart</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">OUR VALUES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light mb-4 text-slate-900">Advisory</h3>
              <p className="text-slate-600 leading-relaxed">
                We operate with a mission-first mindset. Every recommendation we make is based on the client's mission.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light mb-4 text-slate-900">Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                From permits to dispatch, we manage each step with accuracy, clarity, and full control especially under pressure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-12 h-12 text-slate-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light mb-4 text-slate-900">Transparency</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize clear communication, honest pricing, and operational accountability across every mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-slate-800">
        <Image
          src="https://jets.partners/wp-content/uploads/2025/08/55557.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <AnimatedCounter end={300} duration={2500} />
              <div className="text-white/80 text-lg">+</div>
              <div className="text-white/90 mt-2">Clients Served</div>
            </div>
            <div>
              <AnimatedCounter end={30000} duration={2500} />
              <div className="text-white/80 text-lg">+</div>
              <div className="text-white/90 mt-2">Aircraft</div>
            </div>
            <div>
              <AnimatedCounter end={10} duration={2000} />
              <div className="text-white/80 text-lg">+</div>
              <div className="text-white/90 mt-2">Lives Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
}
