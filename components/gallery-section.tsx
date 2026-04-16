"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

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
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <Camera className="text-(--accent)" size={28} />
        <h2 className="text-[32px] font-[510] tracking-[-0.022em]">Gallery</h2>
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/75 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-4/3 w-56 shrink-0 sm:w-64 md:w-80 snap-center overflow-hidden rounded-xl border border-(--border-subtle) bg-[rgba(113,112,255,0.05)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/75 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
