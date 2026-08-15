"use client"

import Link from "next/link"

interface SiteLogoProps {
  className?: string
  showSubtitle?: boolean
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

export function SiteLogo({
  className = "",
  showSubtitle = true,
  onClick,
  size = "md",
}: SiteLogoProps) {
  const iconDimensions = size === "sm" ? "w-6 h-6" : size === "lg" ? "w-8 h-8" : "w-7 h-7"
  
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 select-none transition-colors ${className}`}
      aria-label="Jude - Home"
    >
      {/* Minimalist Geometric Monogram Badge */}
      <div 
        className={`relative shrink-0 flex items-center justify-center rounded-lg border border-(--gray-200) bg-(--gray-50) dark:bg-(--gray-100) text-(--ink) transition-all duration-300 ease-out group-hover:border-(--ink) group-hover:bg-(--gray-100) dark:group-hover:bg-(--gray-200) ${iconDimensions}`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-0.5 text-(--ink)"
          aria-hidden="true"
        >
          {/* Subtle Technical Corner Registration Dots */}
          <circle cx="6.5" cy="6.5" r="0.75" className="fill-(--gray-400) dark:fill-(--gray-500) opacity-60 group-hover:opacity-100 transition-opacity" />
          <circle cx="25.5" cy="6.5" r="0.75" className="fill-(--gray-400) dark:fill-(--gray-500) opacity-60 group-hover:opacity-100 transition-opacity" />
          <circle cx="6.5" cy="25.5" r="0.75" className="fill-(--gray-400) dark:fill-(--gray-500) opacity-60 group-hover:opacity-100 transition-opacity" />
          <circle cx="25.5" cy="25.5" r="0.75" className="fill-(--gray-400) dark:fill-(--gray-500) opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Left 'C' Framing Bracket (Geometric Node) */}
          <path
            d="M 14.5 9.5 H 11 C 9.61929 9.5 8.5 10.6193 8.5 12 V 15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-(--gray-400) dark:text-(--gray-500) group-hover:text-(--ink) transition-colors duration-300"
          />

          {/* Main 'J' Precision Geometry */}
          <path
            d="M 23.5 9.5 H 18.5 V 18 C 18.5 20.4853 16.4853 22.5 14 22.5 C 11.5147 22.5 9.5 20.4853 9.5 18"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-(--ink)"
          />

          {/* Engineering Terminal Dot */}
          <circle
            cx="23.5"
            cy="9.5"
            r="1.25"
            className="fill-(--ink)"
          />
        </svg>
      </div>

      {/* Wordmark and Micro Metadata */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-mono text-[13px] font-bold tracking-tight text-(--ink) uppercase transition-colors">
            Jude
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--gray-400) group-hover:bg-(--ink) transition-colors duration-300 animate-pulse-slow" />
        </div>
        {showSubtitle && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-(--gray-400) group-hover:text-(--gray-500) transition-colors mt-0.5 leading-none">
            ERALDO
          </span>
        )}
      </div>
    </Link>
  )
}
