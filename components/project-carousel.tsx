"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Lightbox keyboard controls & scroll lock
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen, images.length]);

  return (
    <div className="space-y-2.5">
      {/* Main Image Viewport (Click to open full uncropped screenshot) */}
      <div 
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/4 shadow-sm group cursor-zoom-in"
      >
        <Image
          src={currentImage.src}
          alt={currentImage.caption || `${title} screenshot ${currentIndex + 1}`}
          fill
          unoptimized
          className="object-cover transition-opacity duration-300"
          priority
        />

        {/* Hover Fullscreen Hint Badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium shadow-md">
            <Maximize2 size={12} />
            <span>Click for Full View</span>
          </span>
        </div>

        {/* Carousel Navigation Buttons */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/15 text-(--ink) flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/15 text-(--ink) flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* Counter Pill */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-sm z-10">
            <ImageIcon size={12} className="opacity-80" />
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Caption & Full-view toggle trigger */}
      <div className="flex items-center justify-between gap-2 text-[12px] text-(--ink-secondary) px-1">
        <p className="font-medium italic truncate">
          {currentImage.caption || `Screenshot preview of ${title}`}
        </p>
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-(--apple-blue) hover:underline cursor-pointer"
        >
          <Maximize2 size={11} />
          <span>Show Full Screenshot</span>
        </button>
      </div>

      {/* ─── Fullscreen Lightbox Modal (Portal to body so it covers sidebar & entire viewport with zero scrolling) ─── */}
      {mounted && isLightboxOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot full view`}
          className="fixed inset-0 z-[100] h-screen w-screen flex flex-col justify-between overflow-hidden p-3 sm:p-6 bg-black/95 backdrop-blur-2xl select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar - Fixed height */}
          <div 
            className="shrink-0 flex items-center justify-between gap-3 text-white max-w-7xl mx-auto w-full px-2 py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0 pr-2">
              <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-white truncate">
                {title}
              </h4>
              <p className="text-[11px] sm:text-[12px] text-white/70">
                Full Uncropped View · {currentIndex + 1} of {images.length}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-block text-[11px] font-mono text-white/50 px-2">
                ESC to close · Arrows to navigate
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close full view"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Uncropped Viewport - Centered, scaled by aspect-ratio, zero scroll */}
          <div 
            className="flex-1 min-h-0 w-full max-w-7xl mx-auto flex items-center justify-center relative p-2 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Native img with max constraints guarantees 100% visible, centered, uncropped, zero scroll */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.src}
              alt={currentImage.caption || `${title} full view`}
              className="max-h-[76vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl select-none mx-auto block"
            />

            {/* Navigation Overlay Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
                >
                  <ChevronLeft size={24} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
                >
                  <ChevronRight size={24} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Caption Bar - Fixed height */}
          <div 
            className="shrink-0 max-w-4xl mx-auto w-full px-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage.caption && (
              <p className="text-[12px] sm:text-[13px] text-white/90 leading-relaxed font-normal bg-white/10 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 truncate sm:whitespace-normal">
                {currentImage.caption}
              </p>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
