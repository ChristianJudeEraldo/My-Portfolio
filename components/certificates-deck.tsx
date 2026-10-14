"use client";

import { useState, useEffect } from "react";
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Calendar 
} from "lucide-react";
import { certificates, Certificate } from "@/data/certificates";

export function CertificatesDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeCert = certificates[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
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

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewCert(null);
      }
    };
    if (previewCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [previewCert]);

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
                <span className="text-[11px] sm:text-[12px] font-mono text-(--ink-secondary) px-1 select-none">
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
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-(--ink-tertiary)">
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
              <div className="flex items-center gap-3 text-[12px] sm:text-[13px] text-(--ink-secondary)">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-(--ink-tertiary)" />
                  <span>Issued {activeCert.issueDate}</span>
                </div>
                {activeCert.credentialId && (
                  <div className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px]">
                    <span className="text-(--ink-tertiary)">ID:</span>
                    <span>{activeCert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Full-width on mobile for easy tap */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setPreviewCert(activeCert)}
                  className="apple-button-secondary text-[12px] py-1.5 px-3 gap-1.5 cursor-pointer flex-1 sm:flex-initial justify-center"
                >
                  <Maximize2 size={13} />
                  <span>Preview</span>
                </button>

                <a
                  href={activeCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-primary text-[12px] py-1.5 px-3.5 gap-1.5 flex-1 sm:flex-initial justify-center text-center"
                >
                  <span>Open PDF</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
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

      {/* ─── Lightbox PDF Viewer Modal ─── */}
      {previewCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-up"
          onClick={() => setPreviewCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl h-[85vh] sm:h-[82vh] rounded-2xl bg-white dark:bg-[#18181b] border border-black/10 dark:border-white/15 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-black/8 dark:border-white/10 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md">
              <div className="min-w-0 pr-3">
                <h4 className="font-sans font-semibold text-[14px] sm:text-[15px] text-(--ink) truncate">
                  {previewCert.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-(--ink-secondary) truncate">
                  {previewCert.issuer} · {previewCert.issueDate}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-secondary text-[11px] sm:text-[12px] py-1 px-2.5 gap-1"
                >
                  <span>Open Tab</span>
                  <ArrowUpRight size={12} />
                </a>

                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/8 text-(--ink) hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close certificate preview"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF Viewer Frame */}
            <div className="flex-1 w-full bg-black/4 dark:bg-white/2 relative">
              <iframe
                src={`${previewCert.pdfUrl}#toolbar=1`}
                title={`${previewCert.title} PDF Document`}
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
