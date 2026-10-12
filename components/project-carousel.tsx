"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-2.5">
      {/* Main Image Viewport */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-black/8 dark:border-white/10 bg-black/4 dark:bg-white/4 shadow-sm group">
        <Image
          src={currentImage.src}
          alt={currentImage.caption || `${title} screenshot ${currentIndex + 1}`}
          fill
          unoptimized
          className="object-cover transition-opacity duration-300"
          priority
        />

        {/* Carousel Navigation Buttons */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
            <ImageIcon size={12} className="opacity-80" />
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Caption & Placeholder Notice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[12px] text-(--ink-secondary) px-1">
        <p className="font-medium italic">
          {currentImage.caption || `Screenshot preview of ${title}`}
        </p>
        <span className="text-[11px] opacity-75">
          Temporary placeholder &middot; User image drop-in ready
        </span>
      </div>
    </div>
  );
}

