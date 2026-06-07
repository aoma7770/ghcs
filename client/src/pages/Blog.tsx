/* ============================================================
   Glasshouse Community Supports — Blog Page
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_community_v2-Hii9jP3p2kUuDR9BdeLTbo.webp";
const DAILY_LIFE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_daily_life_v2-kAKDV63A8ByZJZoitCuRau.webp";
const ACCOMMODATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_accommodation_v2-bNVFJePPPgYGHME26pevKm.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_team_v2-88vUtTSTvg79mr69mdtifY.webp";

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

const POSTS = [
  {
    slug: "understanding-ndis-2025",
    title: "Understanding Your NDIS Plan in 2025–26: What's Changed and What It Means for You",
    excerpt: "The NDIS has undergone significant changes in 2025–26. We break down the key updates to the price guide, support categories, and what they mean for participants in South East Queensland.",
    category: "NDIS Guidance",
    readTime: "6 min read",
    date: "May 2025",
    img: DAILY_LIFE_IMG,
    colour: "#3ECFCF",
    featured: true,
  },
  {
    slug: "community-access-gold-coast",
    title: "Top 10 Community Activities for NDIS Participants on the Gold Coast",
    excerpt: "From the Broadwater Parklands to the Currumbin Wildlife Sanctuary, the Gold Coast offers incredible opportunities for community participation. Here are our favourites.",
    category: "Community Life",
    readTime: "4 min read",
    date: "April 2025",
    img: COMMUNITY_IMG,
    colour: "#9B8EC4",
    featured: false,
  },
  {
    slug: "sil-vs-sda-explained",
    title: "SIL vs SDA: What's the Difference and Which Is Right for You?",
    excerpt: "Supported Independent Living and Specialist Disability Accommodation are often confused. We explain the key differences and how to determine which option suits your needs.",
    category: "Accommodation",
    readTime: "5 min read",
    date: "March 2025",
    img: ACCOMMODATION_IMG,
    colour: "#F5A623",
    featured: false,
  },
  {
    slug: "person-centred-care",
    title: "What Does Person-Centred Care Actually Mean? A Practical Guide",
    excerpt: "Person-centred care is more than a buzzword — it's a fundamental approach to disability support. We explain what it means in practice and how to recognise it in your provider.",
    category: "Support Tips",
    readTime: "5 min read",
    date: "February 2025",
    img: ABOUT_IMG,
    colour: "#3ECFCF",
    featured: false,
  },
  {
    slug: "darling-downs-ndis",
    title: "NDIS Support in the Darling Downs: What You Need to Know",
    excerpt: "Access to quality disability support in regional Queensland can be challenging. We explore the NDIS landscape in the Darling Downs and how Glasshouse Community Supports is bridging the gap.",
    category: "Regional QLD",
    readTime: "4 min read",
    date: "January 2025",
    img: COMMUNITY_IMG,
    colour: "#9B8EC4",
    featured: false,
  },
  {
    slug: "daily-living-independence",
    title: "Building Independence Through Daily Life Support: A Participant's Perspective",
    excerpt: "True independence isn't about doing everything alone — it's about having the right support to make your own choices. We share stories of participants who've transformed their daily lives.",
    category: "Stories",
    readTime: "7 min read",
    date: "December 2024",
    img: DAILY_LIFE_IMG,
    colour: "#F5A623",
    featured: false,
  },
];

const CATEGORIES = ["All", "NDIS Guidance", "Community Life", "Accommodation", "Support Tips", "Regional QLD", "Stories"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = POSTS.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = POSTS.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All" || search !== "");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest mb-3">Resources & Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Blog & Resources</h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Practical guides, community stories, and NDIS insights to help you navigate the disability support landscape in Queensland.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-[#F0FAFA] py-8 border-b border-[#E0F9F9] sticky top-[72px] z-30">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2E3B]/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E0F9F9] bg-white text-sm text-[#1A2E3B] placeholder-[#1A2E3B]/40 focus:outline-none focus:ring-2 focus:ring-[#3ECFCF]/30"
              />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#3ECFCF] text-white shadow-sm"
                      : "bg-white text-[#1A2E3B]/60 border border-[#E0F9F9] hover:border-[#3ECFCF] hover:text-[#3ECFCF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0FAFA] py-16">
        <div className="container">
          {/* Featured Post */}
          {featured && activeCategory === "All" && search === "" && (
            <AnimatedSection>
              <div className="fade-up mb-12">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0F9F9] grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A2E3B]/20" />
                    <div className="absolute top-4 left-4 bg-[#3ECFCF] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-[#3ECFCF] bg-[#E0F9F9] px-3 py-1 rounded-full">{featured.category}</span>
                      <span className="text-xs text-[#1A2E3B]/40 flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A2E3B] mb-4 leading-snug">{featured.title}</h2>
                    <p className="text-[#1A2E3B]/60 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#1A2E3B]/40">{featured.date}</span>
                      <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#3ECFCF] hover:gap-3 transition-all">
                        Read Article <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Post Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#1A2E3B]/40">
              <p className="text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === "All" && search === "" ? rest : filtered).map((post, i) => (
                <AnimatedSection key={post.slug}>
                  <div className="fade-up bg-white rounded-2xl overflow-hidden border border-[#E0F9F9] shadow-sm service-card" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                      <div className="absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: post.colour }}>
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-[#1A2E3B]/40">
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-bold text-[#1A2E3B] text-base mb-2 leading-snug line-clamp-2">{post.title}</h3>
                      <p className="text-[#1A2E3B]/55 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: post.colour }}>
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
