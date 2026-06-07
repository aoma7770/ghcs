/* ============================================================
   Glasshouse Community Supports — Blog Post Detail Page
   ============================================================ */

import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";

const DAILY_LIFE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486953469/fV65L5asShRof4pFFMJKuY/ghcs_daily_life_v2-kAKDV63A8ByZJZoitCuRau.webp";

const POSTS: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  img: string;
  content: string;
}> = {
  "understanding-ndis-2025": {
    title: "Understanding Your NDIS Plan in 2025–26: What's Changed and What It Means for You",
    category: "NDIS Guidance",
    readTime: "6 min read",
    date: "May 2025",
    img: DAILY_LIFE_IMG,
    content: `
The National Disability Insurance Scheme (NDIS) continues to evolve, and the 2025–26 price guide brings several important changes that participants and their families should be aware of.

## Key Changes in 2025–26

The NDIS Price Guide 2025–26 reflects the Australian Government's commitment to ensuring participants receive quality support at fair prices. Here are the most significant updates:

**Support Worker Rates**
Weekday daytime rates for standard support workers have been adjusted to reflect current award wages and cost of living increases. This ensures that providers can attract and retain quality staff — which ultimately benefits participants.

**New Support Categories**
Several new support line items have been introduced to better capture the range of supports participants need, particularly around assistive technology and specialist support coordination.

**Improved Flexibility**
The 2025–26 guide introduces greater flexibility in how participants can use their Core Supports budget, allowing for more responsive and personalised support arrangements.

## What This Means for You

If you're a current NDIS participant in South East Queensland, these changes may affect:

- The number of support hours you can access within your budget
- The types of supports you can claim under each budget category
- How your plan is reviewed and updated at your next planning meeting

## Getting the Most from Your Plan

At Glasshouse Community Supports, we work with participants to ensure their NDIS funding is used effectively and in line with their goals. If you have questions about your plan or how the 2025–26 changes affect you, please don't hesitate to reach out to our team.

Our support coordinators can help you navigate the NDIS system, understand your entitlements, and connect you with the right supports for your needs.
    `,
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = POSTS[params.slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0FAFA]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1A2E3B] mb-4">Article Not Found</h1>
          <p className="text-[#1A2E3B]/60 mb-6">This article doesn't exist or may have been moved.</p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0FAFA]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.img})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E3B] via-[#1A2E3B]/60 to-transparent" />
        <div className="container relative z-10 pb-12 pt-32">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-[#3ECFCF] px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-white/50 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
            <span className="text-white/50 text-xs">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E0F9F9]">
              <div
                className="prose prose-lg max-w-none text-[#1A2E3B]/75"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .trim()
                    .replace(/^## (.+)$/gm, '<h2 style="font-family: Playfair Display, serif; color: #1A2E3B; font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">$1</h2>')
                    .replace(/^\*\*(.+)\*\*$/gm, '<p><strong style="color: #1A2E3B; font-weight: 700;">$1</strong></p>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong style="color: #1A2E3B; font-weight: 600;">$1</strong>')
                    .replace(/\n\n/g, '</p><p style="line-height: 1.8; margin-bottom: 1rem;">')
                    .replace(/^/, '<p style="line-height: 1.8; margin-bottom: 1rem;">')
                    .replace(/$/, '</p>'),
                }}
              />
            </div>

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-[#3ECFCF] to-[#2AB5B5] rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Have Questions About Your NDIS Plan?</h3>
              <p className="text-white/80 mb-6">Our team is here to help you navigate the NDIS and get the support you need.</p>
              <Link href="/contact" className="btn-white">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
