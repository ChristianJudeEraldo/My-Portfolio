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
    { src: "/profile.jpg", alt: "Gallery Image 1" },
    { src: "/profile2.jpg", alt: "Gallery Image 2" },
    { src: "/profile.jpg", alt: "Gallery Image 3" },
    { src: "/profile2.jpg", alt: "Gallery Image 4" },
    { src: "/profile.jpg", alt: "Gallery Image 5" },
  ];

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-(--background) border border-(--gray-200) p-2 rounded-full text-(--ink) opacity-0 transition-opacity hover:bg-(--gray-50) group-hover:opacity-100 shadow-sm"
        aria-label="Scroll left"
      >
        <ChevronLeft size={16} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-4/3 w-56 shrink-0 sm:w-64 md:w-80 snap-center rounded-xl border border-(--gray-200) bryl-card p-1"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 group-hover/img:scale-[1.04] group/img">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover bryl-image-hover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--background) to-transparent pointer-events-none opacity-50" />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-(--background) border border-(--gray-200) p-2 rounded-full text-(--ink) opacity-0 transition-opacity hover:bg-(--gray-50) group-hover:opacity-100 shadow-sm"
        aria-label="Scroll right"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
