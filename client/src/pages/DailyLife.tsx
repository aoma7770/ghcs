/* ============================================================
   Glasshouse Community Supports — Assistance with Daily Life Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone, Utensils, Shirt, Pill, Home, Wrench } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_daily_life-jUtVkVPLN7SkVewP95c2pL.webp";

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

const SUPPORT_AREAS = [
  {
    icon: Home,
    title: "Personal Care",
    items: ["Showering & grooming", "Getting dressed", "Mobility & transfers", "Continence support"],
    colour: "#3ECFCF",
  },
  {
    icon: Utensils,
    title: "Meal Preparation",
    items: ["Meal planning & cooking", "Grocery shopping", "Dietary management", "Feeding assistance"],
    colour: "#9B8EC4",
  },
  {
    icon: Shirt,
    title: "Domestic Assistance",
    items: ["House cleaning & tidying", "Laundry & ironing", "Gardening & lawn care", "Minor home maintenance"],
    colour: "#F5A623",
  },
  {
    icon: Pill,
    title: "Health Support",
    items: ["Medication management", "Medical appointments", "Allied health coordination", "Health monitoring"],
    colour: "#3ECFCF",
  },
  {
    icon: Wrench,
    title: "Skills Development",
    items: ["Daily living skills", "Financial management", "Technology assistance", "Communication support"],
    colour: "#9B8EC4",
  },
  {
    icon: Home,
    title: "Home Safety",
    items: ["Home modifications advice", "Equipment setup", "Emergency planning", "Safe environment checks"],
    colour: "#F5A623",
  },
];

export default function DailyLife() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B] via-[#1A2E3B]/50 to-transparent" />
        <div className="container relative z-10 pb-16 pt-32">
          <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Assistance with Daily Life</h1>
          <p className="text-white/75 text-xl max-w-2xl">
            Personalised, dignified support for everyday activities — helping you live independently and confidently at home.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="fade-up text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-3">Everyday Support</p>
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B] mb-5" style={{ transitionDelay: "80ms" }}>
                Support That Fits Your Life
              </h2>
              <p className="fade-up text-[#1A2E3B]/65 leading-relaxed" style={{ transitionDelay: "160ms" }}>
                Whether you need a little help starting your day or more comprehensive support throughout the week, our dedicated team provides assistance that respects your choices, preserves your dignity, and builds your independence over time.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORT_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <AnimatedSection key={area.title}>
                  <div
                    className="fade-up bg-white rounded-2xl p-7 border border-[#E0F9F9] shadow-sm service-card"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${area.colour}20` }}
                    >
                      <Icon size={20} style={{ color: area.colour }} />
                    </div>
                    <h3 className="font-bold text-[#1A2E3B] text-lg mb-3">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-[#1A2E3B]/65 font-medium">
                          <CheckCircle size={13} style={{ color: area.colour }} className="flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#1A2E3B] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="fade-up text-3xl font-bold text-white mb-5">Our Approach to Daily Life Support</h2>
              <p className="fade-up text-white/65 leading-relaxed mb-8" style={{ transitionDelay: "80ms" }}>
                We believe support should build capacity, not create dependency. Our support workers work alongside you — not for you — helping you develop skills and confidence to achieve greater independence over time. Every support plan is reviewed regularly to ensure it continues to reflect your evolving goals.
              </p>
              <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ transitionDelay: "160ms" }}>
                {[
                  { label: "Dignity First", desc: "Respectful, person-centred care at all times" },
                  { label: "Skill Building", desc: "Support that builds independence, not dependency" },
                  { label: "Flexible Hours", desc: "Morning, evening, overnight, and weekend support" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <h4 className="text-[#3ECFCF] font-bold mb-2">{item.label}</h4>
                    <p className="text-white/55 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#F5A623] to-[#e09520] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Talk About Your Needs</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Our team will design a daily life support plan that works around your schedule and goals.
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
