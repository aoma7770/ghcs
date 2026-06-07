/* ============================================================
   Glasshouse Community Supports — Footer
   Design: Organic Modernism — Queensland Coastal Warmth
   Dark navy background with teal accents
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2E3B] text-white">
      {/* Wave top */}
      <div className="wave-divider -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 48C1200 40 1320 24 1380 16L1440 8V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F0FAFA"/>
        </svg>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/manus-storage/ghcs_logo_7e841896.webp"
              alt="Glasshouse Community Supports"
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Empowering people with disability to live the life they choose — with dignity, independence, and community connection.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/glasshousecommunitysupports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3ECFCF] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/ghcommunitysupports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3ECFCF] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/glasshouse-community-supports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3ECFCF] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Accommodation Services", href: "/services/accommodation" },
                { label: "Community Access", href: "/services/community-access" },
                { label: "Assistance with Daily Life", href: "/services/daily-life" },
                { label: "NDIS Pricing", href: "/ndis-pricing" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#3ECFCF] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3ECFCF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#3ECFCF] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3ECFCF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-4 mt-7">Service Areas</h4>
            <ul className="space-y-1.5 text-white/70 text-sm">
              <li>Gold Coast & Surrounds</li>
              <li>Brisbane & SEQ</li>
              <li>Sunshine Coast</li>
              <li>Northern Rivers NSW</li>
              <li>Darling Downs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+61731852490"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3ECFCF] transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#3ECFCF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3ECFCF]/40 transition-colors">
                    <Phone size={14} className="text-[#3ECFCF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">(07) 3185 2490</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ghcommunitysupports.com.au"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3ECFCF] transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#3ECFCF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3ECFCF]/40 transition-colors">
                    <Mail size={14} className="text-[#3ECFCF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Email</p>
                    <p className="text-sm font-medium break-all">support@ghcommunitysupports.com.au</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#3ECFCF]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#3ECFCF]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Office</p>
                    <p className="text-sm font-medium">2/465 Oxley Dr,<br />Runaway Bay QLD 4216</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Glasshouse Community Supports. All rights reserved.
            <span className="mx-2">·</span>
            Registered NDIS Provider
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Made with <Heart size={13} className="text-[#3ECFCF] fill-[#3ECFCF]" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
