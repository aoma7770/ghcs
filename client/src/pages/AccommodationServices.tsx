/* ============================================================
   Glasshouse Community Supports — Accommodation Services Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Home, Shield, Users, Star, Phone } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_accommodation_v2-bNVFJePPPgYGHME26pevKm.webp";

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
            entry.target.classList.add("visible");
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

export default function AccommodationServices() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B] via-[#1A2E3B]/50 to-transparent" />
        <div className="container relative z-10 pb-16 pt-32">
          <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Accommodation Services</h1>
          <p className="text-white/75 text-xl max-w-2xl">
            Quality SIL and SDA housing options across South East Queensland — purpose-built for comfort, independence, and community.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
                <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B] mb-6" style={{ transitionDelay: "80ms" }}>
                  A Home That Supports Your Independence
                </h2>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-5" style={{ transitionDelay: "160ms" }}>
                  Our accommodation services provide safe, accessible, and welcoming homes for people with disability across South East Queensland. Whether you need Supported Independent Living (SIL) or Specialist Disability Accommodation (SDA), we work with you to find the right fit.
                </p>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-8" style={{ transitionDelay: "240ms" }}>
                  Every home is designed with accessibility at its core — wide doorways, modern fittings, and on-call support — so you can live with dignity and independence in a genuine community setting.
                </p>
                <div className="fade-up space-y-3" style={{ transitionDelay: "320ms" }}>
                  {[
                    "Supported Independent Living (SIL)",
                    "Specialist Disability Accommodation (SDA)",
                    "Short-Term Accommodation & Respite",
                    "24-hour on-call support available",
                    "Purpose-built accessible homes",
                    "Personalised support plans",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[#1A2E3B]/70 text-sm font-medium">
                      <CheckCircle size={16} className="text-[#3ECFCF] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="fade-in grid grid-cols-2 gap-4">
                {[
                  { icon: Home, title: "Accessible Homes", desc: "Purpose-built with wide doorways, ramps, and modern fittings" },
                  { icon: Shield, title: "Safe & Secure", desc: "24-hour support and emergency response available" },
                  { icon: Users, title: "Community Living", desc: "Shared and individual options to suit your lifestyle" },
                  { icon: Star, title: "Quality Standards", desc: "NDIS Quality and Safeguards Commission registered" },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E0F9F9] shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-[#E0F9F9] flex items-center justify-center mb-3">
                        <Icon size={20} className="text-[#3ECFCF]" />
                      </div>
                      <h4 className="font-bold text-[#1A2E3B] text-sm mb-1">{card.title}</h4>
                      <p className="text-[#1A2E3B]/55 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team will work with you to find accommodation that truly fits your needs and goals.
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
