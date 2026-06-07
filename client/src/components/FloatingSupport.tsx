/* ============================================================
   Glasshouse Community Supports — Floating "Get Support Now" Button
   Site-wide floating button that opens the Wufoo intake form popup
   ============================================================ */

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import WufooModal from "./WufooModal";

const SUPPORT_FORM_URL = "https://abnab.wufoo.com/forms/ghcs-disability-support-service/";

export default function FloatingSupport() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 bg-[#3ECFCF] text-white font-semibold text-sm px-5 py-3.5 rounded-full shadow-lg hover:bg-[#2AB5B5] hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-200"
        aria-label="Get Support Now"
        style={{ boxShadow: "0 8px 32px rgba(62, 207, 207, 0.45)" }}
      >
        <MessageCircle size={18} />
        Get Support Now
      </button>

      {/* Wufoo Modal */}
      <WufooModal
        isOpen={open}
        onClose={() => setOpen(false)}
        formUrl={SUPPORT_FORM_URL}
        title="Get Support Now"
        subtitle="Fill in your details and our team will be in touch shortly."
      />
    </>
  );
}
