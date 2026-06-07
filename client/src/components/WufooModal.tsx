/* ============================================================
   Glasshouse Community Supports — Wufoo Popup Modal
   Used for: Get Support Now (floating) + Search Vacancies (accommodation)
   ============================================================ */

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface WufooModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
  title: string;
  subtitle?: string;
}

export default function WufooModal({ isOpen, onClose, formUrl, title, subtitle }: WufooModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1A2E3B]/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-[modalIn_0.25s_cubic-bezier(0.23,1,0.32,1)_both]">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#E0F9F9] flex-shrink-0">
          <div>
            <h3 className="text-lg font-bold text-[#1A2E3B]">{title}</h3>
            {subtitle && <p className="text-sm text-[#1A2E3B]/55 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F0FAFA] flex items-center justify-center text-[#1A2E3B]/60 hover:bg-[#E0F9F9] hover:text-[#1A2E3B] transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={formUrl}
            title={title}
            className="w-full h-full min-h-[500px] border-0"
            allow="payment"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
