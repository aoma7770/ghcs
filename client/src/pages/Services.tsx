/* ============================================================
   Glasshouse Community Supports — Services Landing Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Home, Users, Heart } from "lucide-react";

const ACCOMMODATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_accommodation_v2-bNVFJePPPgYGHME26pevKm.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_community_v2-Hii9jP3p2kUuDR9BdeLTbo.webp";
const DAILY_LIFE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_daily_life_v2-kAKDV63A8ByZJZoitCuRau.webp";

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

const SERVICES = [
  {
    title: "Accommodation Services",
    subtitle: "SIL & SDA Housing",
    description:
      "Quality Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA) options across South East Queensland. Purpose-built, accessible homes designed for comfort, independence, and genuine community connection. Our accommodation team works with you to find the right fit — whether you prefer shared living, individual housing, or short-term respite.",
    href: "/services/accommodation",
    img: ACCOMMODATION_IMG,
    icon: Home,
    colour: "#3ECFCF",
    features: ["Supported Independent Living (SIL)", "Specialist Disability Accommodation (SDA)", "Short-Term Accommodation & Respite", "24-hour on-call support", "Accessible, purpose-built homes"],
  },
  {
    title: "Community Access",
    subtitle: "Social & Community Participation",
    description:
      "Get out, connect, and thrive. We support you to participate in social activities, local events, appointments, and community programs that matter to you. From the Gold Coast to the Darling Downs, our support workers are passionate about helping you build meaningful connections and explore everything your community has to offer.",
    href: "/services/community-access",
    img: COMMUNITY_IMG,
    icon: Users,
    colour: "#9B8EC4",
    features: ["Social outings & events", "Transport & appointments", "Sport & recreation", "Arts & cultural activities", "Volunteering & skill building"],
  },
  {
    title: "Assistance with Daily Life",
    subtitle: "Personal & Domestic Support",
    description:
      "Personalised, dignified support for everyday activities — from personal care and meal preparation to domestic assistance and medication management. Our support workers work alongside you to build independence and confidence, ensuring you have the help you need, when you need it, in a way that respects your choices and preferences.",
    href: "/services/daily-life",
    img: DAILY_LIFE_IMG,
    icon: Heart,
    colour: "#F5A623",
    features: ["Personal care & grooming", "Meal preparation & nutrition", "Domestic assistance", "Medication management", "Skills development"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Our Services</h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Three core services designed to empower you to live independently, connect with your community, and achieve your goals — all aligned with your NDIS plan.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection key={service.title}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`fade-in ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <img src={service.img} alt={service.title} className="w-full h-80 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B]/40 to-transparent" />
                        <div
                          className="absolute top-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: service.colour }}
                        >
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className={`${!isEven ? "lg:order-1" : ""}`}>
                      <p className="fade-up font-semibold text-xs uppercase tracking-widest mb-2" style={{ color: service.colour }}>
                        {service.subtitle}
                      </p>
                      <h2 className="fade-up text-3xl font-bold text-[#1A2E3B] mb-4" style={{ transitionDelay: "80ms" }}>
                        {service.title}
                      </h2>
                      <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-6" style={{ transitionDelay: "160ms" }}>
                        {service.description}
                      </p>
                      <div className="fade-up space-y-2.5 mb-7" style={{ transitionDelay: "240ms" }}>
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-3 text-sm text-[#1A2E3B]/70 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.colour }} />
                            {f}
                          </div>
                        ))}
                      </div>
                      <div className="fade-up" style={{ transitionDelay: "320ms" }}>
                        <Link href={service.href} className="btn-primary" style={{ backgroundColor: service.colour }}>
                          Learn More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team will help you understand your options and design a support plan that works for your life.
          </p>
          <Link href="/contact" className="btn-white">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
