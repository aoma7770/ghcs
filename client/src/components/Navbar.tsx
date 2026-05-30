/* ============================================================
   Glasshouse Community Supports — Navbar
   Design: Organic Modernism — Queensland Coastal Warmth
   Sticky nav with blur backdrop, teal accents, mobile drawer
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Accommodation Services", href: "/services/accommodation" },
      { label: "Community Access", href: "/services/community-access" },
      { label: "Assistance with Daily Life", href: "/services/daily-life" },
    ],
  },
  { label: "NDIS Pricing", href: "/ndis-pricing" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "nav-blur bg-white/90 shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/ghcs_logo_7e841896.webp"
              alt="Glasshouse Community Supports"
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-[#3ECFCF] bg-[#E0F9F9]"
                        : scrolled
                        ? "text-[#1A2E3B] hover:text-[#3ECFCF] hover:bg-[#E0F9F9]"
                        : "text-white hover:text-[#3ECFCF] hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E0F9F9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-[#1A2E3B] hover:bg-[#E0F9F9] hover:text-[#3ECFCF] transition-colors duration-150 font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#3ECFCF] bg-[#E0F9F9]"
                      : scrolled
                      ? "text-[#1A2E3B] hover:text-[#3ECFCF] hover:bg-[#E0F9F9]"
                      : "text-white hover:text-[#3ECFCF] hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+61731852490"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-[#1A2E3B]" : "text-white"
              } hover:text-[#3ECFCF]`}
            >
              <Phone size={15} />
              (07) 3185 2490
            </a>
            <Link href="/contact" className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5">
              Get Support
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
                scrolled ? "text-[#1A2E3B] hover:bg-[#E0F9F9]" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1A2E3B]/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#E0F9F9]">
            <img
              src="/manus-storage/ghcs_logo_7e841896.webp"
              alt="Glasshouse Community Supports"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-xl text-[#1A2E3B] hover:bg-[#E0F9F9]"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6 space-y-1 overflow-y-auto h-full pb-24">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#1A2E3B] font-medium hover:bg-[#E0F9F9] hover:text-[#3ECFCF] transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 rounded-xl text-sm text-[#1A2E3B] hover:bg-[#E0F9F9] hover:text-[#3ECFCF] transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#3ECFCF] bg-[#E0F9F9]"
                      : "text-[#1A2E3B] hover:bg-[#E0F9F9] hover:text-[#3ECFCF]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-[#E0F9F9] space-y-3">
              <a
                href="tel:+61731852490"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1A2E3B] font-medium hover:bg-[#E0F9F9] transition-colors"
              >
                <Phone size={16} className="text-[#3ECFCF]" />
                (07) 3185 2490
              </a>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get Support Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
