"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ChevronRight, 
  ChevronLeft, 
  Activity, 
  Maximize2, 
  X,
  ExternalLink 
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extract top tech items across categories for clean preview chips
  const keyTech = project.techStack
    .flatMap((cat) => cat.items)
    .slice(0, 5);

  const images = project.images && project.images.length > 0 
    ? project.images 
    : [{ src: project.thumbnail, caption: project.title }];

  const currentImage = images[currentImgIndex] || images[0];
  const previewImage = project.images?.[0]?.src || project.thumbnail;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation & scroll lock for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
    <article className="group rounded-2xl sm:rounded-3xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-[#1c1c1e]/70 backdrop-blur-xl p-4 sm:p-6 md:p-7 shadow-xs hover:shadow-md transition-all duration-300 hover:border-black/15 dark:hover:border-white/20">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-between">
        
        {/* Left / Main Details & Telemetry */}
        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0 w-full">
          
          {/* Tag, Badge, and Title */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-(--apple-blue)/10 text-(--apple-blue)">
                <Activity size={11} className="animate-pulse-slow" />
                <span>{project.tag}</span>
              </span>

              {project.badge && (
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/8 text-(--ink-secondary)">
                  {project.badge}
                </span>
              )}
            </div>

            <Link href={`/projects/${project.slug}`}>
              <h3 className="font-sans font-bold text-lg sm:text-2xl text-(--ink) group-hover:text-(--apple-blue) transition-colors leading-snug">
                {project.title}
              </h3>
            </Link>
          </div>

          {/* Summary */}
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--ink-secondary) font-normal">
            {project.summary}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {keyTech.map((tech, idx) => (
              <span
                key={idx}
                className={`text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/4 dark:bg-white/6 border border-black/4 dark:border-white/8 text-(--ink-secondary) ${
                  idx >= 3 ? "hidden sm:inline-block" : ""
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Actions: Live Demo + Deep Dive Link */}
          <div className="flex flex-row items-center gap-2 pt-2 w-full">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary px-2.5! sm:px-3.5! py-2! sm:py-1.5! text-[12px]! sm:text-[13px]! h-auto! min-h-9.5 justify-center flex-1 sm:flex-initial text-center whitespace-nowrap gap-1 sm:gap-1.5"
              >
                <span className="sm:hidden">Live Demo</span>
                <span className="hidden sm:inline">Live System Demo</span>
                <ArrowUpRight size={13} className="shrink-0" />
              </a>
            )}

            <Link
              href={`/projects/${project.slug}`}
              className="apple-button-secondary px-2.5! sm:px-3.5! py-2! sm:py-1.5! text-[12px]! sm:text-[13px]! h-auto! min-h-9.5 justify-center flex-1 sm:flex-initial text-center whitespace-nowrap gap-1 sm:gap-1.5"
            >
              <span className="min-[380px]:inline hidden">Architecture & Details</span>
              <span className="min-[380px]:hidden inline">Architecture</span>
              <ChevronRight size={13} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Right: Visual Telemetry / Screenshot Preview (Click opens Lightbox Modal with NO scrolling needed) */}
        <div className="w-full lg:w-72 xl:w-80 shrink-0 self-center lg:self-start">
          <button
            type="button"
            onClick={() => {
              setCurrentImgIndex(0);
              setIsLightboxOpen(true);
            }}
            aria-label={`Open full uncropped screenshots for ${project.title}`}
            className="w-full text-left block relative aspect-video sm:aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden border border-black/8 dark:border-white/12 bg-black/4 dark:bg-black/40 group/img shadow-sm cursor-zoom-in"
          >
            <Image
              src={previewImage}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            />
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover/img:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-medium shadow-md">
                <Maximize2 size={12} />
                <span>Full Screenshot</span>
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* ─── Fullscreen Lightbox Modal (Portal to body so it covers sidebar & entire viewport with zero scrolling) ─── */}
      {mounted && isLightboxOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot full view`}
          className="fixed inset-0 z-100 h-screen w-screen flex flex-col justify-between overflow-hidden p-3 sm:p-6 bg-black/95 backdrop-blur-2xl select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar - Fixed height */}
          <div 
            className="shrink-0 flex items-center justify-between gap-3 text-white max-w-7xl mx-auto w-full px-2 py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0 pr-2">
              <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-white truncate">
                {project.title}
              </h4>
              <p className="text-[11px] sm:text-[12px] text-white/70 truncate">
                Full Uncropped Screenshot · {currentImgIndex + 1} of {images.length}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-block text-[11px] font-mono text-white/50 px-2">
                ESC to close · Arrows to navigate
              </span>

              <Link
                href={`/projects/${project.slug}`}
                className="hidden xs:inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <span>Architecture</span>
                <ChevronRight size={11} />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xs:inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-(--apple-blue) text-white hover:opacity-90 transition-opacity"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={11} />
                </a>
              )}

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
              alt={currentImage.caption || `${project.title} full screenshot`}
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
    </article>
  );
}
