/* ============================================================
   Glasshouse Community Supports — Community Access Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, MapPin, Music, Bike, Coffee, Phone } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_community_v2-Hii9jP3p2kUuDR9BdeLTbo.webp";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = entry.target.querySelectorAll(".fade-up, .fade-in");
            animatables.forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

const ACTIVITIES = [
  { icon: Coffee, title: "Social Outings", desc: "Cafes, markets, restaurants, and community events" },
  { icon: Music, title: "Arts & Culture", desc: "Theatre, galleries, music, and creative workshops" },
  { icon: Bike, title: "Sport & Recreation", desc: "Swimming, walking groups, gym, and outdoor activities" },
  { icon: MapPin, title: "Appointments", desc: "Medical, allied health, and government appointments" },
];

export default function CommunityAccess() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B] via-[#1A2E3B]/50 to-transparent" />
        <div className="container relative z-10 pb-16 pt-32">
          <p className="text-[#9B8EC4] font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Community Access</h1>
          <p className="text-white/75 text-xl max-w-2xl">
            Get out, connect, and thrive. We support you to participate fully in your local community across SEQ, Northern Rivers, and Darling Downs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="fade-up text-[#9B8EC4] font-semibold text-sm uppercase tracking-widest mb-3">Connecting You to Life</p>
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B] mb-5" style={{ transitionDelay: "80ms" }}>
                Because Community is Everything
              </h2>
              <p className="fade-up text-[#1A2E3B]/65 leading-relaxed" style={{ transitionDelay: "160ms" }}>
                We believe that genuine participation in community life is fundamental to wellbeing. Our community access support helps you explore new interests, maintain social connections, and build the confidence to engage with the world on your terms.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ACTIVITIES.map((act, i) => {
              const Icon = act.icon;
              return (
                <AnimatedSection key={act.title}>
                  <div className="fade-up bg-white rounded-2xl p-6 border border-[#E0F9F9] shadow-sm text-center service-card" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-12 h-12 rounded-2xl bg-[#EEE9F8] flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-[#9B8EC4]" />
                    </div>
                    <h4 className="font-bold text-[#1A2E3B] mb-2">{act.title}</h4>
                    <p className="text-[#1A2E3B]/55 text-sm">{act.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="bg-white rounded-3xl p-10 border border-[#E0F9F9] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="fade-up text-2xl font-bold text-[#1A2E3B] mb-5">What's Included</h3>
                  <div className="fade-up space-y-3" style={{ transitionDelay: "80ms" }}>
                    {[
                      "Transport to and from activities",
                      "Support worker accompaniment",
                      "Social skills development",
                      "Recreational and leisure activities",
                      "Volunteering and work experience",
                      "Cultural and community events",
                      "Fitness and wellbeing programs",
                      "Shopping and errands",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-[#1A2E3B]/70 text-sm font-medium">
                        <CheckCircle size={15} className="text-[#9B8EC4] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="bg-[#EEE9F8] rounded-2xl p-8">
                    <h4 className="fade-up text-xl font-bold text-[#1A2E3B] mb-4">Our Service Areas</h4>
                    <p className="fade-up text-[#1A2E3B]/65 text-sm leading-relaxed mb-5" style={{ transitionDelay: "80ms" }}>
                      We provide community access support across a wide geographic area, ensuring participants throughout South East Queensland and beyond can access meaningful community participation.
                    </p>
                    <div className="fade-up space-y-2" style={{ transitionDelay: "160ms" }}>
                      {["Gold Coast & Tweed", "Brisbane Metro & SEQ", "Sunshine Coast", "Northern Rivers NSW", "Darling Downs & Toowoomba", "Ipswich & Logan"].map((area) => (
                        <div key={area} className="flex items-center gap-2 text-sm text-[#1A2E3B]/70 font-medium">
                          <MapPin size={13} className="text-[#9B8EC4]" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#9B8EC4] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Exploring Your Community</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's find the activities and connections that matter most to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a href="tel:+61731852490" className="btn-outline border-white text-white hover:bg-white hover:text-[#1A2E3B]">
              <Phone size={16} /> (07) 3185 2490
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
