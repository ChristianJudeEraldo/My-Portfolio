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
        className={`relative shrink-0 flex items-center justify-center rounded-[10px] border border-black/8 dark:border-white/12 bg-white dark:bg-[#0c0c0e] text-(--ink) shadow-xs transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-sm ${iconDimensions}`}
      >
        <svg
          viewBox="420 420 1208 1208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5 text-(--ink)"
          aria-hidden="true"
        >
          {/* Precision Corner Brackets */}
          <path
            d="M 508 622 V 508 H 622 M 1426 508 H 1540 V 622 M 508 1426 V 1540 H 622 M 1426 1540 H 1540 V 1426"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="opacity-40 group-hover:opacity-75 transition-opacity duration-300"
          />

          {/* Top Bar of J */}
          <rect x="748" y="615" width="185" height="102" fill="currentColor" />

          {/* Bottom Bar of E */}
          <polygon points="1087,1332 1466,1332 1466,1461 958,1461" fill="currentColor" />

          {/* Bottom-Left Circular Accent Dot */}
          <circle cx="581" cy="1465.5" r="34.5" fill="currentColor" />

          {/* Precision JE Monogram Geometry */}
          <path
            d="M 973 615 H 1448 V 717 H 1074 V 972 H 1431 V 1074 H 1074 V 1274 L 887 1461 H 647 A 66 66 0 0 0 615 1409 V 1152 H 721 V 1333 H 871 L 973 1231 Z"
            fill="currentColor"
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
