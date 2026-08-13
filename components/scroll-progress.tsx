"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        setProgress((scrollTop / scrollHeight) * 100);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    
    // Initial calculation
    updateProgress();
    
    // Fallback to ensure it's calculated after DOM mutations from route changes
    const timeout = setTimeout(updateProgress, 150);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none">
      <div 
        className="h-full bg-(--ink) transition-all duration-150 ease-out origin-left"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
