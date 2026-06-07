/* ============================================================
   Glasshouse Community Supports — Contact Page
   Email: support@ghcommunitysupports.com.au
   Address: 2/465 Oxley Drive, Runaway Bay QLD 4216
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Navigation } from "lucide-react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    ndis: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">We'd Love to Hear From You</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Whether you're ready to start your NDIS journey or just want to learn more, our friendly team is here to help. Reach out by phone, email, or visit us in person.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-[#F0FAFA] py-12 border-b border-[#E0F9F9]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "(07) 3185 2490",
                sub: "Mon–Fri, 9am–5pm",
                href: "tel:+61731852490",
                colour: "#3ECFCF",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "support@ghcommunitysupports.com.au",
                sub: "We reply within 1 business day",
                href: "mailto:support@ghcommunitysupports.com.au",
                colour: "#9B8EC4",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "2/465 Oxley Drive",
                sub: "Runaway Bay QLD 4216",
                href: "https://maps.google.com/?q=2/465+Oxley+Drive+Runaway+Bay+QLD+4216",
                colour: "#F5A623",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "Mon–Fri: 9:00 AM – 5:00 PM",
                sub: "Closed weekends & public holidays",
                href: null,
                colour: "#3ECFCF",
              },
            ].map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="bg-white rounded-2xl p-6 border border-[#E0F9F9] shadow-sm hover:border-[#3ECFCF]/30 hover:shadow-md transition-all duration-200 h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.colour}20` }}>
                    <Icon size={20} style={{ color: item.colour }} />
                  </div>
                  <p className="text-xs font-semibold text-[#1A2E3B]/40 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold text-[#1A2E3B] text-sm leading-snug">{item.value}</p>
                  <p className="text-[#1A2E3B]/50 text-xs mt-1">{item.sub}</p>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="bg-[#F0FAFA] py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="fade-up bg-white rounded-3xl p-8 md:p-10 border border-[#E0F9F9] shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#E0F9F9] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={36} className="text-[#3ECFCF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A2E3B] mb-3">Message Sent!</h3>
                    <p className="text-[#1A2E3B]/60 max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will be in touch within 1 business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "", ndis: "" }); }}
                      className="btn-outline mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#1A2E3B] mb-2">Send Us a Message</h2>
                    <p className="text-[#1A2E3B]/55 text-sm mb-8">
                      Fill in the form below and we'll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/30 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/30 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="0400 000 000"
                            className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/30 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">NDIS Number (optional)</label>
                          <input
                            type="text"
                            name="ndis"
                            value={form.ndis}
                            onChange={handleChange}
                            placeholder="43XXXXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/30 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">Service of Interest</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors"
                        >
                          <option value="">Select a service...</option>
                          <option value="accommodation">Accommodation Services</option>
                          <option value="community-access">Community Access</option>
                          <option value="daily-life">Assistance with Daily Life</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="general">General Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1A2E3B]/60 uppercase tracking-wider mb-2">Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your needs, goals, or any questions you have..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E0F9F9] bg-[#F0FAFA] text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/30 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30 focus:border-[#3ECFCF] transition-colors resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                        <Send size={17} />
                        Send Message
                      </button>

                      <p className="text-xs text-[#1A2E3B]/40 text-center">
                        Your information is kept strictly confidential in accordance with our{" "}
                        <a href="/privacy" className="text-[#3ECFCF] hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar: Visit Us + Map */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-6">
                {/* Visit Us card */}
                <div className="fade-up bg-white rounded-2xl p-7 border border-[#E0F9F9] shadow-sm">
                  <h3 className="font-bold text-[#1A2E3B] text-lg mb-5">Visit Our Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E0F9F9] flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-[#3ECFCF]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A2E3B] text-sm">Address</p>
                        <p className="text-[#1A2E3B]/60 text-sm mt-0.5">
                          Unit 2/465 Oxley Drive<br />
                          Runaway Bay QLD 4216<br />
                          <span className="text-xs text-[#1A2E3B]/40">Located in Runaway Oasis Shopping Centre</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EEE9F8] flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[#9B8EC4]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A2E3B] text-sm">Email</p>
                        <a href="mailto:support@ghcommunitysupports.com.au" className="text-[#9B8EC4] text-sm hover:underline mt-0.5 block break-all">
                          support@ghcommunitysupports.com.au
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF3DC] flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A2E3B] text-sm">Office Hours</p>
                        <p className="text-[#1A2E3B]/60 text-sm mt-0.5">
                          Monday – Friday<br />9:00 AM – 5:00 PM AEST
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=2/465+Oxley+Drive+Runaway+Bay+QLD+4216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center mt-6 text-sm py-2.5"
                  >
                    <Navigation size={15} /> Get Directions
                  </a>
                </div>

                {/* Embedded Map */}
                <div className="fade-up rounded-2xl overflow-hidden border border-[#E0F9F9] shadow-sm" style={{ transitionDelay: "120ms" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.1!2d153.3987!3d-27.9185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910d5e4e3f0001%3A0x2f4e8b7c3a1d5e6f!2s465%20Oxley%20Dr%2C%20Runaway%20Bay%20QLD%204216!5e0!3m2!1sen!2sau!4v1234567890"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Glasshouse Community Supports Office Location"
                  />
                </div>

                {/* Service Areas */}
                <div className="fade-up bg-white rounded-2xl p-6 border border-[#E0F9F9] shadow-sm" style={{ transitionDelay: "200ms" }}>
                  <h4 className="font-bold text-[#1A2E3B] mb-4 text-sm">Our Service Areas</h4>
                  <div className="space-y-2">
                    {["Gold Coast & Surrounds", "Brisbane & SEQ", "Sunshine Coast", "Northern Rivers NSW", "Darling Downs", "Ipswich & Logan"].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-sm text-[#1A2E3B]/65 font-medium">
                        <MapPin size={12} className="text-[#3ECFCF]" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
