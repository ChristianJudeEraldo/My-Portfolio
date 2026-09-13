"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const images = [
    { src: "/newprofile1.jpg", alt: "Christian Jude - Engineering Profile 1" },
    { src: "/newprofile2.jpg", alt: "Christian Jude - Engineering Profile 2" },
    { src: "/newprofile1.jpg", alt: "Christian Jude - Engineering Profile 3" },
    { src: "/newprofile2.jpg", alt: "Christian Jude - Engineering Profile 4" },
    { src: "/newprofile1.jpg", alt: "Christian Jude - Engineering Profile 5" },
  ];

  return (
    <div className="relative group">
      {/* Apple Frosted Navigation Button Left */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 backdrop-blur-xl bg-white/85 dark:bg-black/85 border border-black/8 dark:border-white/12 p-2.5 rounded-full text-(--ink) opacity-0 transition-all duration-200 hover:scale-105 group-hover:opacity-100 shadow-md cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-4/3 w-48 shrink-0 sm:w-56 md:w-64 snap-center rounded-2xl border border-black/6 dark:border-white/8 bg-white dark:bg-[#1c1c1e] p-1.5 shadow-xs transition-all duration-300 hover:shadow-md hover:scale-[1.02] group/card"
          >
            <div className="relative w-full h-full rounded-[14px] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Apple Frosted Navigation Button Right */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 backdrop-blur-xl bg-white/85 dark:bg-black/85 border border-black/8 dark:border-white/12 p-2.5 rounded-full text-(--ink) opacity-0 transition-all duration-200 hover:scale-105 group-hover:opacity-100 shadow-md cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}
