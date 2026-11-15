"use client";

import { useState } from "react";
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";
import { certificates } from "@/data/certificates";

export function CertificatesDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeCert = certificates[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const handleCopyId = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      toast.success(`Copied Credential ID: ${id}`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === id ? null : curr));
      }, 2000);
    } catch {
      toast.error("Failed to copy Credential ID to clipboard");
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* ─── Main Certificate Card Deck ─── */}
      <div className="relative">
        {/* Certificate Display Card */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="card-textured relative w-full rounded-2xl border border-black/8 dark:border-white/10 p-5 sm:p-8 shadow-sm transition-all duration-300"
        >
          {/* Subtle Watermark (hidden on mobile for cleanliness) */}
          <div className="hidden sm:block absolute top-0 right-0 p-6 pointer-events-none opacity-5 dark:opacity-10 text-(--ink)">
            <Award size={140} strokeWidth={1} />
          </div>

          <div className="relative space-y-4 sm:space-y-5">
            {/* Top Bar: Issuer Eyebrow & Navigation Controls */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 min-w-0 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider text-(--ink-secondary)">
                <CheckCircle2 size={13} strokeWidth={2.25} className="text-(--apple-blue) shrink-0" />
                <span className="truncate">{activeCert.issuer}</span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous certificate"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 text-(--ink) flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft size={15} strokeWidth={2} />
                </button>
                <span className="text-[11px] sm:text-[12px] font-mono tabular-nums text-(--ink-secondary) px-1 select-none">
                  {activeIndex + 1}/{certificates.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next certificate"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 text-(--ink) flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight size={15} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Certificate Title & Skills */}
            <div className="space-y-1.5">
              <h3 className="font-sans text-lg sm:text-2xl font-semibold tracking-tight text-(--ink) leading-snug text-balance">
                {activeCert.title}
              </h3>
              <p className="font-mono text-[11px] sm:text-[11.5px] text-(--ink-tertiary) text-pretty">
                {activeCert.skills.join(" · ")}
              </p>
            </div>

            {/* Bottom Meta & Verify Action */}
            <div className="pt-3.5 sm:pt-4 border-t border-black/6 dark:border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-(--ink-secondary)">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-(--ink-tertiary)" />
                  <span>{activeCert.issueDate}</span>
                </div>
                {activeCert.credentialId && (
                  <button
                    type="button"
                    onClick={() => handleCopyId(activeCert.credentialId!)}
                    title="Click to copy Credential ID"
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-mono text-(--ink-secondary) hover:text-(--ink) transition-colors cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
                  >
                    <span className="text-(--ink-tertiary)">ID:</span>
                    <span className="text-(--ink)">{activeCert.credentialId}</span>
                    {copiedId === activeCert.credentialId ? (
                      <Check size={12} className="text-emerald-500" />
                    ) : (
                      <Copy size={12} className="text-(--ink-tertiary)" />
                    )}
                  </button>
                )}
              </div>

              <a
                href={activeCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white bg-black dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all shadow-xs w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
              >
                <span>Verify Credential</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Uniform Minimal Pagination Indicator ─── */}
        <div className="flex items-center justify-center gap-2 pt-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to certificate ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "w-7 bg-(--ink)"
                  : "w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
