/* ============================================================
   Glasshouse Community Supports — About Us Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Heart, Shield, Users, Star, MapPin } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_team_v2-88vUtTSTvg79mr69mdtifY.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_community_v2-Hii9jP3p2kUuDR9BdeLTbo.webp";

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

const VALUES = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We lead with empathy and genuine care in every interaction, treating each person as a valued individual with unique strengths and aspirations.",
    colour: "#3ECFCF",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with honesty, transparency, and accountability — in our pricing, our practices, and our promises to participants and families.",
    colour: "#9B8EC4",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We believe in the power of belonging. Our work is rooted in building genuine connections between participants and the communities they call home.",
    colour: "#F5A623",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards of care, continuously improving our services to deliver the best possible outcomes for every participant.",
    colour: "#3ECFCF",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B8EC4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#9B8EC4] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">About Glasshouse Community Supports</h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We're a registered NDIS provider rooted in the communities of South East Queensland — built on the belief that everyone deserves to live a full, connected, and independent life.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="fade-in relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={ABOUT_IMG} alt="GHCS Team" className="w-full h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#3ECFCF] rounded-2xl p-5 shadow-xl">
                  <p className="text-white font-bold text-xl leading-none">Registered</p>
                  <p className="text-white/80 text-xs mt-1">NDIS Provider</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
                <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B] mb-6" style={{ transitionDelay: "80ms" }}>
                  Local Roots, Lasting Impact
                </h2>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-5" style={{ transitionDelay: "160ms" }}>
                  Glasshouse Community Supports was founded with a clear purpose: to provide disability support services that truly make a difference in people's lives. Based in Runaway Bay on the Gold Coast, we serve participants across South East Queensland, the Northern Rivers of NSW, and the Darling Downs.
                </p>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-5" style={{ transitionDelay: "240ms" }}>
                  Our name reflects our commitment to transparency — like glass, we operate openly, honestly, and with nothing to hide. And like a glasshouse, we create a nurturing environment where people can grow, flourish, and thrive.
                </p>
                <p className="fade-up text-[#1A2E3B]/65 leading-relaxed mb-8" style={{ transitionDelay: "320ms" }}>
                  We are a registered NDIS provider committed to the NDIS Quality and Safeguards Framework. Our team is experienced, trained, and deeply passionate about person-centred support.
                </p>
                <div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "400ms" }}>
                  <Link href="/contact" className="btn-primary">
                    Meet Our Team <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B]" style={{ transitionDelay: "80ms" }}>
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title}>
                  <div className="fade-up bg-[#F0FAFA] rounded-2xl p-7 border border-[#E0F9F9] service-card text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${value.colour}20` }}>
                      <Icon size={24} style={{ color: value.colour }} />
                    </div>
                    <h3 className="font-bold text-[#1A2E3B] text-lg mb-3">{value.title}</h3>
                    <p className="text-[#1A2E3B]/60 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community photo */}
      <section className="bg-[#1A2E3B] py-20 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">Our Reach</p>
                <h2 className="fade-up text-3xl md:text-4xl font-bold text-white mb-6" style={{ transitionDelay: "80ms" }}>
                  Serving Queensland & Beyond
                </h2>
                <p className="fade-up text-white/65 leading-relaxed mb-8" style={{ transitionDelay: "160ms" }}>
                  We're proud to deliver support services across a broad geographic area, ensuring that people with disability in regional and coastal Queensland have access to quality, local support.
                </p>
                <div className="fade-up grid grid-cols-2 gap-3" style={{ transitionDelay: "240ms" }}>
                  {["Gold Coast & Surrounds", "Brisbane & SEQ", "Sunshine Coast", "Northern Rivers NSW", "Darling Downs", "Ipswich & Logan"].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                      <MapPin size={13} className="text-[#3ECFCF]" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="fade-in rounded-3xl overflow-hidden shadow-2xl">
                <img src={COMMUNITY_IMG} alt="Community Access in Queensland" className="w-full h-[400px] object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Glasshouse Community</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We'd love to hear about your goals and how we can support you.
          </p>
          <Link href="/contact" className="btn-white">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
