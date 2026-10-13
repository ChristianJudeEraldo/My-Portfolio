"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/newprofile1.jpg", alt: "Christian Jude - Engineering Profile 1" },
    { src: "/newprofile2.jpg", alt: "Christian Jude - Engineering Profile 2" },
    { src: "/newprofile3.jpg", alt: "Christian Jude - Academic & Engineering Graduation" },
  ];

  const count = images.length;
  const half = Math.floor(count / 2);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // If clicking the current center card, cycle to the next photo
      setActiveIndex((prev) => (prev + 1) % count);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="photo-stack flex flex-col items-center py-6 sm:py-8 space-y-4 select-none [--step:34px] sm:[--step:54px] md:[--step:62px] overflow-hidden sm:overflow-visible">
      {/* ─── Fanned Cards Deck ─── */}
      <div
        className="relative w-full h-72.5 sm:h-90 md:h-97.5 flex items-center justify-center"
        role="region"
        aria-label="Photo Stack Gallery"
      >
        {images.map((image, index) => {
          // Circular relative distance from activeIndex
          const d = ((index - activeIndex + half + count) % count) - half;
          const a = Math.abs(d);
          const zIndex = 10 - a;
          const isCurrent = d === 0;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleCardClick(index)}
              aria-label={`Photo ${index + 1} of ${count}`}
              aria-current={isCurrent}
              style={{
                zIndex,
                transform: `translateX(calc(${d} * var(--step))) translateY(calc(${a} * 6px)) rotate(calc(${d} * 4.5deg)) scale(calc(1 - ${a} * 0.065))`,
                boxShadow: isCurrent
                  ? "0 10px 30px -5px rgba(0, 0, 0, 0.22), 0 4px 12px -2px rgba(0, 0, 0, 0.12)"
                  : `0 calc(10px - ${a} * 2px) calc(24px - ${a} * 4px) rgba(0, 0, 0, calc(0.18 - ${a} * 0.03))`,
              }}
              className="absolute top-0 left-1/2 -ml-25 sm:-ml-32.5 md:-ml-36.25 w-50 h-66.25 sm:w-65 sm:h-83.75 md:w-72.5 md:h-91.25 rounded-[22px] border-[3.5px] border-white/90 dark:border-[#242428] bg-[#e4e4e1] dark:bg-[#1c1c20] overflow-hidden cursor-pointer will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-105 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 200px, 290px"
                className="object-cover object-top pointer-events-none select-none"
                priority={isCurrent}
              />
            </button>
          );
        })}
      </div>

      {/* ─── Pagination Dots ─── */}
      <div className="flex items-center gap-1.5 pt-1" aria-hidden="true">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to photo ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
              index === activeIndex
                ? "w-5 bg-(--ink)"
                : "w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ─── Interaction Hint ─── */}
      <p className="text-[12px] text-(--ink-secondary) tracking-tight flex items-center gap-1.5">
        <Sparkles size={13} className="text-(--apple-blue)" />
        <span>Click the stack to shuffle</span>
      </p>
    </div>
  );
}
