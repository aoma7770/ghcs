/* ============================================================
   Glasshouse Community Supports — Privacy Policy Page
   Compliant with: Australian Privacy Act 1988 (Cth),
   Australian Privacy Principles (APPs), NDIS Act 2013,
   and NDIS Quality and Safeguards Commission requirements.
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-up mb-10">
      <h2 className="text-xl font-bold text-[#1A2E3B] mb-4 pb-2 border-b border-[#E0F9F9]">{title}</h2>
      <div className="text-[#1A2E3B]/70 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = "8 June 2026";

  return (
    <div className="min-h-screen bg-[#F0FAFA]">
      {/* Hero */}
      <section className="bg-[#1A2E3B] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ECFCF]/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#3ECFCF]/20 flex items-center justify-center">
              <Shield size={22} className="text-[#3ECFCF]" />
            </div>
            <p className="text-[#3ECFCF] font-semibold text-sm uppercase tracking-widest">Legal</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E0F9F9]">

              {/* Intro */}
              <div className="bg-[#E0F9F9] rounded-2xl p-6 mb-10">
                <p className="text-[#1A2E3B] text-sm leading-relaxed">
                  Glasshouse Community Supports ("we", "us", "our") is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong>, the <strong>Australian Privacy Principles (APPs)</strong>, the <strong>NDIS Act 2013</strong>, and the requirements of the <strong>NDIS Quality and Safeguards Commission</strong>.
                </p>
              </div>

              <Section title="1. Who We Are">
                <p>
                  Glasshouse Community Supports is a registered NDIS provider operating in South East Queensland, Northern Rivers (NSW), and the Darling Downs. Our registered office is located at:
                </p>
                <div className="bg-[#F0FAFA] rounded-xl p-4 mt-3 flex items-start gap-3">
                  <MapPin size={16} className="text-[#3ECFCF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A2E3B]">Glasshouse Community Supports</p>
                    <p>2/465 Oxley Drive, Runaway Bay QLD 4216, Australia</p>
                    <p>Phone: (07) 3185 2490</p>
                    <p>Email: support@ghcommunitysupports.com.au</p>
                  </div>
                </div>
              </Section>

              <Section title="2. What Personal Information We Collect">
                <p>We may collect the following categories of personal information:</p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li><strong>Identity information:</strong> Full name, date of birth, gender, photograph</li>
                  <li><strong>Contact information:</strong> Address, phone number, email address</li>
                  <li><strong>NDIS information:</strong> NDIS participant number, plan details, funding categories, support goals</li>
                  <li><strong>Health and disability information:</strong> Diagnoses, medical history, support needs, medication details, allied health reports</li>
                  <li><strong>Financial information:</strong> Bank account details for billing, NDIS plan management details</li>
                  <li><strong>Emergency contact information:</strong> Name and contact details of nominated emergency contacts or guardians</li>
                  <li><strong>Employment information:</strong> For support workers — résumés, qualifications, Working with Children checks, NDIS Worker Screening checks</li>
                  <li><strong>Website usage data:</strong> IP address, browser type, pages visited, via cookies and analytics tools</li>
                </ul>
                <p className="mt-3">
                  We only collect sensitive information (including health information) with your consent, or where required or authorised by law.
                </p>
              </Section>

              <Section title="3. How We Collect Your Information">
                <p>We collect personal information in the following ways:</p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Directly from you via intake forms, phone calls, emails, or in-person meetings</li>
                  <li>From your nominated representative, guardian, or support coordinator (with your consent)</li>
                  <li>From the National Disability Insurance Agency (NDIA) or your plan manager</li>
                  <li>From allied health professionals, hospitals, or other service providers (with your consent)</li>
                  <li>Through our website contact forms and enquiry submissions</li>
                  <li>Through cookies and analytics on our website (see Section 10)</li>
                </ul>
              </Section>

              <Section title="4. Why We Collect and Use Your Information">
                <p>We use your personal information to:</p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Deliver NDIS support services to you under your service agreement</li>
                  <li>Develop, implement, and review your personalised support plan</li>
                  <li>Communicate with you, your family, and your support network</li>
                  <li>Process NDIS claims and manage billing with the NDIA or plan managers</li>
                  <li>Meet our obligations as a registered NDIS provider under the NDIS Practice Standards</li>
                  <li>Respond to enquiries, complaints, and feedback</li>
                  <li>Comply with legal and regulatory obligations, including mandatory reporting</li>
                  <li>Improve our services through de-identified data analysis</li>
                  <li>Recruit and manage support workers and staff</li>
                </ul>
              </Section>

              <Section title="5. Disclosure of Your Personal Information">
                <p>We may disclose your personal information to:</p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li><strong>NDIA and NDIS Commission:</strong> As required for service delivery, claims, audits, and compliance</li>
                  <li><strong>Plan managers and support coordinators:</strong> To coordinate your supports</li>
                  <li><strong>Allied health professionals and medical providers:</strong> With your consent, to support your care</li>
                  <li><strong>Our staff and contractors:</strong> On a need-to-know basis to deliver your supports</li>
                  <li><strong>Government agencies:</strong> Where required by law (e.g., mandatory reporting obligations)</li>
                  <li><strong>IT and software service providers:</strong> Who assist us in operating our systems (subject to confidentiality agreements)</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
                <p className="mt-2">
                  We will not disclose your personal information overseas unless you have consented or we are required to do so by law.
                </p>
              </Section>

              <Section title="6. Storage and Security of Your Information">
                <p>
                  We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Secure, password-protected electronic systems with access controls</li>
                  <li>Encrypted data transmission (SSL/TLS) on our website and digital platforms</li>
                  <li>Physical security measures for paper-based records</li>
                  <li>Staff training on privacy obligations and confidentiality</li>
                  <li>Regular review of our privacy and data security practices</li>
                </ul>
                <p className="mt-3">
                  We retain personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law. NDIS participant records are retained for a minimum of 7 years (or 25 years for records relating to children) in accordance with applicable legislation.
                </p>
              </Section>

              <Section title="7. Your Rights — Accessing and Correcting Your Information">
                <p>
                  Under the Australian Privacy Act 1988, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate, incomplete, or out-of-date information</li>
                  <li>Make a complaint about how we have handled your personal information</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact our Privacy Officer at <strong>support@ghcommunitysupports.com.au</strong> or call <strong>(07) 3185 2490</strong>. We will respond to your request within 30 days. In some circumstances, we may be unable to provide access (e.g., where it would unreasonably impact the privacy of another person), and we will explain our reasons in writing.
                </p>
              </Section>

              <Section title="8. Sensitive Information">
                <p>
                  Health and disability information is classified as "sensitive information" under the Privacy Act. We handle this information with the highest level of care and will only collect, use, or disclose it:
                </p>
                <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                  <li>With your explicit consent</li>
                  <li>Where necessary to provide the support services you have requested</li>
                  <li>Where required or authorised by law (including mandatory reporting obligations)</li>
                </ul>
              </Section>

              <Section title="9. Children and Young People">
                <p>
                  Where we provide services to children or young people under 18, we take additional steps to protect their privacy. We collect information from parents, guardians, or authorised representatives and apply heightened security and access controls to records relating to minors. Records relating to children are retained for a minimum of 25 years or until the person turns 25, whichever is longer.
                </p>
              </Section>

              <Section title="10. Cookies and Website Analytics">
                <p>
                  Our website uses cookies and analytics tools (including Umami Analytics) to understand how visitors use our site. This data is collected in aggregate and de-identified form and does not personally identify you. You can disable cookies in your browser settings, though this may affect the functionality of our website.
                </p>
                <p className="mt-2">
                  We do not use third-party advertising cookies or share website analytics data with advertisers.
                </p>
              </Section>

              <Section title="11. Complaints">
                <p>
                  If you believe we have breached the Australian Privacy Principles or mishandled your personal information, please contact us in the first instance:
                </p>
                <div className="bg-[#F0FAFA] rounded-xl p-4 mt-3 space-y-1">
                  <p><strong>Privacy Officer</strong> — Glasshouse Community Supports</p>
                  <p>Email: support@ghcommunitysupports.com.au</p>
                  <p>Phone: (07) 3185 2490</p>
                  <p>Post: 2/465 Oxley Drive, Runaway Bay QLD 4216</p>
                </div>
                <p className="mt-3">
                  We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days. If you are not satisfied with our response, you may lodge a complaint with the <strong>Office of the Australian Information Commissioner (OAIC)</strong> at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">www.oaic.gov.au</a> or call 1300 363 992.
                </p>
                <p className="mt-2">
                  Complaints relating to NDIS service delivery may also be directed to the <strong>NDIS Quality and Safeguards Commission</strong> at <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">www.ndiscommission.gov.au</a> or 1800 035 544.
                </p>
              </Section>

              <Section title="12. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. The current version will always be available on our website. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes your acceptance of the updated policy.
                </p>
              </Section>

              <div className="mt-10 pt-8 border-t border-[#E0F9F9] text-xs text-[#1A2E3B]/40 space-y-1">
                <p>This Privacy Policy was last reviewed and updated on {lastUpdated}.</p>
                <p>Glasshouse Community Supports | ABN available on request | Registered NDIS Provider</p>
                <p>2/465 Oxley Drive, Runaway Bay QLD 4216 | support@ghcommunitysupports.com.au | (07) 3185 2490</p>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8 text-center">
              <Link href="/" className="btn-outline text-sm py-2.5 px-6">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
