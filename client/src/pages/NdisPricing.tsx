/* ============================================================
   Glasshouse Community Supports — NDIS Pricing Page
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone, Info, DollarSign, Clock, Shield } from "lucide-react";

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

const PRICE_TABLES = [
  {
    category: "Assistance with Daily Life",
    colour: "#3ECFCF",
    items: [
      { support: "Standard – Weekday Daytime", rate: "$67.56/hr", note: "Monday–Friday, 6am–8pm" },
      { support: "Standard – Weekday Evening", rate: "$74.32/hr", note: "Monday–Friday, 8pm–midnight" },
      { support: "Standard – Saturday", rate: "$94.60/hr", note: "All day Saturday" },
      { support: "Standard – Sunday", rate: "$121.64/hr", note: "All day Sunday" },
      { support: "Standard – Public Holiday", rate: "$148.68/hr", note: "All public holidays" },
      { support: "High Intensity – Weekday Daytime", rate: "$77.12/hr", note: "Complex support needs" },
    ],
  },
  {
    category: "Community Access",
    colour: "#9B8EC4",
    items: [
      { support: "Standard – Weekday Daytime", rate: "$67.56/hr", note: "Monday–Friday, 6am–8pm" },
      { support: "Standard – Weekday Evening", rate: "$74.32/hr", note: "Monday–Friday, 8pm–midnight" },
      { support: "Standard – Saturday", rate: "$94.60/hr", note: "All day Saturday" },
      { support: "Standard – Sunday", rate: "$121.64/hr", note: "All day Sunday" },
      { support: "Standard – Public Holiday", rate: "$148.68/hr", note: "All public holidays" },
      { support: "Group Activities (per person)", rate: "$27.20/hr", note: "Group community participation" },
    ],
  },
  {
    category: "Accommodation / SIL",
    colour: "#F5A623",
    items: [
      { support: "SIL – Standard Weekday", rate: "$67.56/hr", note: "Per participant, per hour" },
      { support: "SIL – Standard Weekend", rate: "$94.60/hr", note: "Saturday rates" },
      { support: "SIL – Overnight Support", rate: "$247.40/night", note: "Sleepover support" },
      { support: "SDA – Improved Liveability", rate: "Varies", note: "Based on dwelling type & location" },
      { support: "SDA – Fully Accessible", rate: "Varies", note: "Based on dwelling type & location" },
      { support: "Short-Term Accommodation", rate: "$1,759.84/day", note: "Includes all supports" },
    ],
  },
];

export default function NdisPricing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">NDIS Pricing Guide</h1>
            <p className="text-white/70 text-xl leading-relaxed">
              All our pricing is aligned with the 2025–26 NDIS Price Guide. No hidden fees, no surprises — just transparent, fair pricing for quality support.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-[#E0F9F9] py-8 border-b border-[#3ECFCF]/20">
        <div className="container">
          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            {[
              { icon: DollarSign, text: "Aligned with 2025–26 NDIS Price Guide" },
              { icon: Shield, text: "No hidden fees or surcharges" },
              { icon: Clock, text: "Flexible support hours available" },
              { icon: Info, text: "Prices inclusive of GST where applicable" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-[#1A2E3B] font-medium">
                  <Icon size={16} className="text-[#3ECFCF]" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="bg-[#F0FAFA] py-20">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="fade-up text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">2025–26 Rates</p>
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-[#1A2E3B] mb-4" style={{ transitionDelay: "80ms" }}>
                Support Pricing by Category
              </h2>
              <p className="fade-up text-[#1A2E3B]/60 max-w-2xl mx-auto" style={{ transitionDelay: "160ms" }}>
                Indicative rates based on the NDIS Support Catalogue. Actual rates may vary based on your plan, support intensity, and specific line items. Contact us for a personalised quote.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            {PRICE_TABLES.map((table, ti) => (
              <AnimatedSection key={table.category}>
                <div className="fade-up bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0F9F9]" style={{ transitionDelay: `${ti * 100}ms` }}>
                  <div className="px-8 py-5 flex items-center gap-3" style={{ backgroundColor: `${table.colour}15` }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: table.colour }} />
                    <h3 className="font-bold text-[#1A2E3B] text-lg">{table.category}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#E0F9F9]">
                          <th className="text-left px-8 py-4 text-xs font-semibold text-[#1A2E3B]/50 uppercase tracking-wider">Support Type</th>
                          <th className="text-left px-8 py-4 text-xs font-semibold text-[#1A2E3B]/50 uppercase tracking-wider">Rate</th>
                          <th className="text-left px-8 py-4 text-xs font-semibold text-[#1A2E3B]/50 uppercase tracking-wider hidden md:table-cell">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.items.map((item, i) => (
                          <tr key={i} className="border-b border-[#F0FAFA] hover:bg-[#F0FAFA] transition-colors">
                            <td className="px-8 py-4 text-sm text-[#1A2E3B] font-medium">{item.support}</td>
                            <td className="px-8 py-4">
                              <span className="font-bold text-sm" style={{ color: table.colour }}>{item.rate}</span>
                            </td>
                            <td className="px-8 py-4 text-sm text-[#1A2E3B]/50 hidden md:table-cell">{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Disclaimer */}
          <AnimatedSection>
            <div className="fade-up mt-10 bg-[#FFF8EC] border border-[#F5A623]/30 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Info size={18} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1A2E3B] mb-2">Important Disclaimer</h4>
                  <p className="text-[#1A2E3B]/65 text-sm leading-relaxed">
                    Prices shown are indicative rates based on the NDIS Support Catalogue 2025–26 and are subject to change. Actual pricing depends on your specific NDIS plan, support intensity, and agreed service arrangements. All prices are in Australian dollars (AUD). Please contact us for a personalised quote and to discuss your specific support needs.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How NDIS Funding Works */}
      <section className="bg-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="fade-up text-3xl font-bold text-[#1A2E3B] mb-4">How NDIS Funding Works</h2>
              <p className="fade-up text-[#1A2E3B]/60 max-w-2xl mx-auto" style={{ transitionDelay: "80ms" }}>
                Understanding your NDIS plan and how to use your funding effectively.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Supports",
                desc: "Funding for everyday activities and supports that help you live your life. This includes daily activities, community access, and transport.",
                colour: "#3ECFCF",
              },
              {
                title: "Capacity Building",
                desc: "Funding to help you build skills and independence. Includes support coordination, improved living arrangements, and social participation.",
                colour: "#9B8EC4",
              },
              {
                title: "Capital Supports",
                desc: "Funding for higher-cost items like assistive technology and home modifications, including Specialist Disability Accommodation (SDA).",
                colour: "#F5A623",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title}>
                <div className="fade-up bg-[#F0FAFA] rounded-2xl p-7 border border-[#E0F9F9]" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: item.colour }} />
                  <h3 className="font-bold text-[#1A2E3B] text-lg mb-3">{item.title}</h3>
                  <p className="text-[#1A2E3B]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Your NDIS Funding?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team can help you understand your plan and make the most of your NDIS funding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Talk to Us <ArrowRight size={16} />
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
