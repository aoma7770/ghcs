/* ============================================================
   Glasshouse Community Supports — Home Page
   Design: Organic Modernism — Queensland Coastal Warmth
   Sections: Hero, Services, Stats, About, Testimonials, CTA
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Home as HomeIcon,
  Users,
  Heart,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  ChevronRight,
} from "lucide-react";

// Image URLs from generated assets
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_hero_banner-bGN3UKTPaYzvgfQtYjMD5H.webp";
const ACCOMMODATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_accommodation-LPdqGxFDHzxnjtS2SHvTJB.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_community_access-9uaRSiBz3vBKkNH3naiRCD.webp";
const DAILY_LIFE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_daily_life-jUtVkVPLN7SkVewP95c2pL.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_about_team-LEZYzBXPwY8apGhCKFj85r.webp";

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
            animatables.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function StatCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(start).toLocaleString() + suffix;
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="text-center">
      <div className="stat-number mb-2">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="text-white/70 text-sm font-medium leading-snug">{label}</p>
    </div>
  );
}

const SERVICES = [
  {
    title: "Accommodation Services",
    description:
      "Quality SIL and SDA housing options across South East Queensland. Purpose-built, accessible homes designed for comfort, independence, and genuine community connection.",
    href: "/services/accommodation",
    img: ACCOMMODATION_IMG,
    icon: HomeIcon,
    colour: "#3ECFCF",
  },
  {
    title: "Community Access",
    description:
      "Get out, connect, and thrive. We support you to participate in social activities, local events, and community programs across SEQ, Northern Rivers, and Darling Downs.",
    href: "/services/community-access",
    img: COMMUNITY_IMG,
    icon: Users,
    colour: "#9B8EC4",
  },
  {
    title: "Assistance with Daily Life",
    description:
      "Personalised support for everyday activities — from personal care and meal preparation to domestic assistance and medication management, tailored to your goals.",
    href: "/services/daily-life",
    img: DAILY_LIFE_IMG,
    icon: Heart,
    colour: "#F5A623",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Glasshouse Community Supports has completely changed my life. The team genuinely cares about my independence and wellbeing. I finally feel like I belong in my community.",
    name: "Sarah M.",
    location: "Gold Coast, QLD",
    stars: 5,
  },
  {
    quote:
      "Finding GHCS was the best decision for our family. They truly understand our son's needs and go above and beyond every single day. We couldn't be more grateful.",
    name: "David & Karen T.",
    location: "Tweed Heads, NSW",
    stars: 5,
  },
  {
    quote:
      "The community access support has opened so many doors for me. I've made new friends, discovered new hobbies, and feel more confident than ever before.",
    name: "Michael R.",
    location: "Toowoomba, QLD",
    stars: 5,
  },
];

const AREAS = [
  "Gold Coast & Surrounds",
  "Brisbane & SEQ",
  "Sunshine Coast",
  "Northern Rivers NSW",
  "Darling Downs",
  "Ipswich & Logan",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E3B]/85 via-[#1A2E3B]/60 to-transparent" />
        {/* Animated teal orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3ECFCF]/10 rounded-full blur-3xl animate-pulse" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3ECFCF]/20 border border-[#3ECFCF]/40 rounded-full px-4 py-2 mb-6 animate-[fadeSlideUp_0.6s_ease-out_0.1s_both]">
              <MapPin size={14} className="text-[#3ECFCF]" />
              <span className="text-[#3ECFCF] text-sm font-semibold">
                South East QLD · Northern Rivers · Darling Downs
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-[fadeSlideUp_0.7s_ease-out_0.2s_both]">
              Your Life,{" "}
              <span className="text-[#3ECFCF]">Your Way.</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-normal italic text-white/90">
                We're Here for You.
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl animate-[fadeSlideUp_0.7s_ease-out_0.35s_both]">
              Glasshouse Community Supports delivers compassionate, person-centred NDIS disability support services across Queensland and Northern Rivers — empowering you to live independently and thrive in your community.
            </p>

            <div className="flex flex-wrap gap-4 animate-[fadeSlideUp_0.7s_ease-out_0.5s_both]">
              <Link href="/contact" className="btn-primary text-base py-3.5 px-7">
                Get Support Today <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-[#1A2E3B] text-base py-3.5 px-7">
                Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10 animate-[fadeSlideUp_0.7s_ease-out_0.65s_both]">
              {["Registered NDIS Provider", "Person-Centred Care", "Local Queensland Team"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle size={15} className="text-[#3ECFCF]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L60 36.7C120 33.3 240 26.7 360 30C480 33.3 600 46.7 720 50C840 53.3 960 46.7 1080 40C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F0FAFA"/>
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#F0FAFA] py-20 md:py-28">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#1A2E3B] mb-4" style={{ transitionDelay: "80ms" }}>
                Our Core Services
              </h2>
              <p className="fade-up text-[#1A2E3B]/60 text-lg max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: "160ms" }}>
                Three pillars of support designed to empower you to live independently, connect with your community, and achieve your goals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title}>
                  <div
                    className="fade-up service-card bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0F9F9] group"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B]/50 to-transparent" />
                      <div
                        className="absolute top-4 left-4 w-10 h-10 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: service.colour }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-[#1A2E3B] mb-3">{service.title}</h3>
                      <p className="text-[#1A2E3B]/60 text-sm leading-relaxed mb-5">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                        style={{ color: service.colour }}
                      >
                        Learn More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1A2E3B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3ECFCF] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B8EC4] rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                The NDIS Sector in Australia
              </p>
              <h2 className="fade-up text-4xl md:text-5xl font-bold text-white mb-4" style={{ transitionDelay: "80ms" }}>
                Why NDIS Support Matters
              </h2>
              <p className="fade-up text-white/60 text-lg max-w-2xl mx-auto" style={{ transitionDelay: "160ms" }}>
                The National Disability Insurance Scheme is transforming lives across Australia. Here's the scale of the sector we're proud to serve.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter target={660000} suffix="+" label="Australians supported by the NDIS" />
            <StatCounter target={4.4} suffix="M" label="Australians living with disability" />
            <StatCounter target={42} suffix="B" label="Annual NDIS investment (AUD)" />
            <StatCounter target={19} suffix="%" label="Of Australians have a disability" />
          </div>

          <AnimatedSection>
            <p className="fade-up text-center text-white/40 text-xs mt-10">
              Sources: NDIS Quarterly Report 2024–25 · ABS Survey of Disability, Ageing and Carers · NDIA Annual Report
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="fade-in relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={ABOUT_IMG}
                    alt="Glasshouse Community Supports team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B]/30 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#3ECFCF] rounded-2xl p-5 shadow-xl">
                  <p className="text-white font-bold text-2xl leading-none">100%</p>
                  <p className="text-white/80 text-xs mt-1">Person-Centred</p>
                </div>
                {/* Lavender accent */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#9B8EC4]/20 rounded-full blur-xl" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              <div>
                <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                  About Us
                </p>
                <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#1A2E3B] mb-6 leading-tight" style={{ transitionDelay: "80ms" }}>
                  Rooted in Community,{" "}
                  <span className="text-gradient">Driven by Purpose</span>
                </h2>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-5" style={{ transitionDelay: "160ms" }}>
                  Glasshouse Community Supports was founded with a simple but powerful belief: every person with a disability deserves the freedom to live the life they choose, in the community they call home.
                </p>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-8" style={{ transitionDelay: "240ms" }}>
                  Based in Runaway Bay on the Gold Coast, we deliver registered NDIS support services across South East Queensland, the Northern Rivers of NSW, and the Darling Downs. Our team is local, experienced, and deeply committed to person-centred care.
                </p>

                <div className="fade-up grid grid-cols-2 gap-4 mb-8" style={{ transitionDelay: "320ms" }}>
                  {[
                    "Registered NDIS Provider",
                    "Local Queensland Team",
                    "Person-Centred Approach",
                    "Transparent NDIS Pricing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[#1A2E3B]/70 font-medium">
                      <CheckCircle size={16} className="text-[#3ECFCF] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "400ms" }}>
                  <Link href="/about" className="btn-primary">
                    Our Story <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-[#F0FAFA] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                Where We Serve
              </p>
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B]" style={{ transitionDelay: "80ms" }}>
                Proudly Local, Broadly Connected
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="fade-up flex flex-wrap justify-center gap-3">
              {AREAS.map((area, i) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-white border border-[#E0F9F9] rounded-full px-5 py-2.5 text-sm font-medium text-[#1A2E3B] shadow-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <MapPin size={13} className="text-[#3ECFCF]" />
                  {area}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                Stories of Impact
              </p>
              <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#1A2E3B]" style={{ transitionDelay: "80ms" }}>
                What Our Community Says
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i}>
                <div
                  className="fade-up bg-[#F0FAFA] rounded-3xl p-8 border border-[#E0F9F9] relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Quote mark */}
                  <div className="text-6xl text-[#3ECFCF]/30 font-serif leading-none mb-4">"</div>
                  <div className="flex mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={15} className="text-[#F5A623] fill-[#F5A623]" />
                    ))}
                  </div>
                  <p className="text-[#1A2E3B]/70 leading-relaxed mb-6 text-sm italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3ECFCF] to-[#9B8EC4] flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A2E3B] text-sm">{t.name}</p>
                      <p className="text-[#1A2E3B]/50 text-xs flex items-center gap-1">
                        <MapPin size={10} /> {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#1A2E3B] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">
                Getting Started
              </p>
              <h2 className="fade-up text-4xl md:text-5xl font-bold text-white" style={{ transitionDelay: "80ms" }}>
                How It Works
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#3ECFCF]/30 via-[#9B8EC4]/50 to-[#3ECFCF]/30" />

            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Contact our friendly team by phone or email. We'll have a no-obligation chat about your needs, goals, and NDIS plan.",
                colour: "#3ECFCF",
              },
              {
                step: "02",
                title: "Create Your Plan",
                desc: "We work with you to design a personalised support plan that aligns with your NDIS goals and reflects what matters most to you.",
                colour: "#9B8EC4",
              },
              {
                step: "03",
                title: "Begin Your Journey",
                desc: "Your dedicated support team gets started. We check in regularly and adapt as your needs evolve — you're always in control.",
                colour: "#F5A623",
              },
            ].map((step, i) => (
              <AnimatedSection key={step.step}>
                <div
                  className="fade-up text-center"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl relative z-10"
                    style={{ backgroundColor: step.colour }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-lg">
                Call us today or send a message — we'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <a href="tel:+61731852490" className="btn-white">
                <Phone size={16} />
                (07) 3185 2490
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#1A2E3B]">
                Send a Message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
