"use client"

import Link from "next/link"

interface SiteLogoProps {
  className?: string
  showSubtitle?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  size?: "sm" | "md" | "lg"
}

export function SiteLogo({
  className = "",
  showSubtitle = true,
  onClick,
  size = "md",
}: SiteLogoProps) {
  const iconDimensions = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-9 h-9" : "w-8 h-8"
  
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 select-none transition-all ${className}`}
      aria-label="Christian Jude - Home"
    >
      {/* Apple App Icon Squircle Container */}
      <div 
        className={`relative shrink-0 flex items-center justify-center rounded-[10px] border border-black/8 dark:border-white/12 bg-white dark:bg-[#1c1c1e] text-(--ink) shadow-xs transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-sm ${iconDimensions}`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5 text-(--ink)"
          aria-hidden="true"
        >
          {/* Subtle Corner Markers */}
          <circle cx="7" cy="7" r="0.75" className="fill-(--ink-tertiary) opacity-50" />
          <circle cx="25" cy="7" r="0.75" className="fill-(--ink-tertiary) opacity-50" />
          <circle cx="7" cy="25" r="0.75" className="fill-(--ink-tertiary) opacity-50" />
          <circle cx="25" cy="25" r="0.75" className="fill-(--ink-tertiary) opacity-50" />

          {/* Precision Monogram Architecture */}
          <path
            d="M 14 9.5 H 10.5 C 9.1 9.5 8 10.6 8 12 V 15"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-(--ink-tertiary) group-hover:text-(--apple-blue) transition-colors duration-300"
          />

          <path
            d="M 23 9.5 H 18 V 18.5 C 18 20.8 16.2 22.5 13.8 22.5 C 11.5 22.5 9.8 20.8 9.8 18.5"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-(--ink)"
          />

          {/* Accent dot in Apple Blue */}
          <circle
            cx="23"
            cy="9.5"
            r="1.4"
            className="fill-(--apple-blue)"
          />
        </svg>
      </div>

      {/* SF Pro Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-tight">
          <span className="font-sans text-[14px] font-bold tracking-tight text-(--ink)">
            Jude
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--apple-green)" />
        </div>
        {showSubtitle && (
          <span className="font-sans text-[10px] font-medium uppercase tracking-widest text-(--ink-secondary) leading-none mt-0.5">
            ERALDO
          </span>
        )}
      </div>
    </Link>
  )
}
