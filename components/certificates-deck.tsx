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
  Check,
  ShieldCheck
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
          className="relative w-full rounded-2xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-[#18181b]/70 backdrop-blur-xl p-5 sm:p-8 shadow-sm transition-all duration-300"
        >
          {/* Subtle Watermark (hidden on mobile for cleanliness) */}
          <div className="hidden sm:block absolute top-0 right-0 p-6 pointer-events-none opacity-5 dark:opacity-10 text-(--ink)">
            <Award size={140} strokeWidth={1} />
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Top Bar: Badge & Navigation Controls */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-(--apple-blue)/10 text-(--apple-blue) dark:bg-(--apple-blue)/15 text-[11px] sm:text-[12px] font-semibold tracking-wide shrink-0">
                  <CheckCircle2 size={12} strokeWidth={2.5} />
                  <span>{activeCert.badge}</span>
                </span>
                <span className="text-[11px] sm:text-[12px] text-(--ink-secondary) font-medium truncate hidden xs:inline">
                  {activeCert.category}
                </span>
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

            {/* Certificate Header Info */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-(--ink-tertiary)">
                {activeCert.issuer}
              </p>
              <h3 className="font-sans text-lg sm:text-2xl font-bold tracking-tight text-(--ink) leading-snug">
                {activeCert.title}
              </h3>
            </div>

            {/* Skills & Competencies */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {activeCert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-black/4 dark:bg-white/6 text-(--ink-secondary) text-[11px] sm:text-[12px] font-medium border border-black/4 dark:border-white/6"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Meta & Actions */}
            <div className="pt-3 sm:pt-4 border-t border-black/6 dark:border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center gap-3 text-[12px] sm:text-[13px] text-(--ink-secondary)">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-(--ink-tertiary)" />
                  <span>Issued {activeCert.issueDate}</span>
                </div>
                {activeCert.credentialId && (
                  <button
                    type="button"
                    onClick={() => handleCopyId(activeCert.credentialId!)}
                    title="Click to copy Credential ID"
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/10 text-[11px] font-mono transition-colors cursor-pointer text-(--ink)"
                  >
                    <span className="text-(--ink-tertiary)">ID:</span>
                    <span>{activeCert.credentialId}</span>
                    {copiedId === activeCert.credentialId ? (
                      <Check size={11} className="text-emerald-500" />
                    ) : (
                      <Copy size={11} className="text-(--ink-tertiary)" />
                    )}
                  </button>
                )}
              </div>

              {/* Action Buttons: Full-width on mobile for easy tap */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {activeCert.credentialId && (
                  <button
                    type="button"
                    onClick={() => handleCopyId(activeCert.credentialId!)}
                    className="apple-button-secondary text-[12px] py-1.5 px-3.5 gap-1.5 cursor-pointer flex-1 sm:flex-initial justify-center"
                  >
                    {copiedId === activeCert.credentialId ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span>Copied ID</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                )}

                <a
                  href={activeCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-primary text-[12px] py-1.5 px-3.5 gap-1.5 flex-1 sm:flex-initial justify-center text-center"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Anti-tamper & Verification Security Note */}
            <div className="pt-3 border-t border-black/5 dark:border-white/6 flex items-center justify-between text-[11px] text-(--ink-tertiary)">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Protected Credential · Direct registry verification</span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] tracking-wider text-(--ink-tertiary)/80 uppercase">
                {activeCert.organization} Verified
              </span>
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
                  ? "w-7 bg-(--apple-blue)"
                  : "w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
