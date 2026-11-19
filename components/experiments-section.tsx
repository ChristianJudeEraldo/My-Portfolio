"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Maximize2, Play, Volume2, X } from "lucide-react";
import { experiments, type Experiment } from "@/data/experiments";

interface LenisHandle {
  stop?: () => void;
  start?: () => void;
}

function getLenis(): LenisHandle | undefined {
  return (window as unknown as { __lenis?: LenisHandle }).__lenis;
}

function syncVideoTime(video: HTMLVideoElement, targetTime: number) {
  if (targetTime <= 0) return;
  if (video.readyState >= 1) {
    video.currentTime = targetTime;
    return;
  }
  const onLoadedMetadata = () => {
    video.currentTime = targetTime;
  };
  video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
}

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const [mediaReady, setMediaReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTheaterOpen, setIsTheaterOpen] = useState(false);

  const inlineVideoRef = useRef<HTMLVideoElement | null>(null);
  const theaterVideoRef = useRef<HTMLVideoElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const theaterTitleId = useId();

  // Feature-detect native <video loading="lazy">; fall back to IntersectionObserver in Safari/Firefox
  useEffect(() => {
    const supportsLazyMedia =
      typeof HTMLMediaElement !== "undefined" &&
      Object.hasOwn(HTMLMediaElement.prototype, "loading");

    if (supportsLazyMedia) {
      setMediaReady(true);
      return;
    }

    const video = inlineVideoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") {
      setMediaReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMediaReady(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Light-dismiss fallback for browsers without <dialog closedby="any"> (e.g. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof HTMLDialogElement !== "undefined" && "closedBy" in HTMLDialogElement.prototype) {
      return;
    }

    const isOutside = (e: PointerEvent) => {
      const rect = dialog.getBoundingClientRect();
      return (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      );
    };

    let pressedOutside = false;

    const handlePointerDown = (e: PointerEvent) => {
      if (!dialog.open) return;
      pressedOutside = isOutside(e);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!dialog.open) return;
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("pointerdown", handlePointerDown);
    dialog.addEventListener("pointerup", handlePointerUp);
    return () => {
      dialog.removeEventListener("pointerdown", handlePointerDown);
      dialog.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  // Ensure Lenis resumes if component unmounts while theater modal is open
  useEffect(() => {
    return () => {
      getLenis()?.start?.();
    };
  }, []);

  const handleStartInline = () => {
    setMediaReady(true);
    setHasStarted(true);
    const video = inlineVideoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play().catch(() => {
      // User can trigger playback via native controls if browser rejects play()
    });
  };

  const handleOpenTheater = () => {
    const inline = inlineVideoRef.current;
    const syncTime = inline ? inline.currentTime : 0;
    const syncMuted = inline ? inline.muted : false;
    const syncVolume = inline ? inline.volume : 1;

    inline?.pause();
    setIsTheaterOpen(true);

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    getLenis()?.stop?.();

    const theaterVideo = theaterVideoRef.current;
    if (theaterVideo) {
      theaterVideo.muted = syncMuted;
      theaterVideo.volume = syncVolume;
      syncVideoTime(theaterVideo, syncTime);
      void theaterVideo.play().catch(() => {
        // Native controls remain available inside the theater dialog
      });
    }
  };

  const handleTheaterClosed = useCallback(() => {
    const theaterVideo = theaterVideoRef.current;
    const closeTime = theaterVideo ? theaterVideo.currentTime : 0;
    const closeMuted = theaterVideo ? theaterVideo.muted : false;
    const closeVolume = theaterVideo ? theaterVideo.volume : 1;

    theaterVideo?.pause();
    setIsTheaterOpen(false);
    getLenis()?.start?.();

    const inline = inlineVideoRef.current;
    if (inline && closeTime > 0) {
      setMediaReady(true);
      setHasStarted(true);
      inline.muted = closeMuted;
      inline.volume = closeVolume;
      inline.pause();
      if (inline.readyState >= 1) {
        inline.currentTime = closeTime;
      } else {
        inline.preload = "metadata";
        syncVideoTime(inline, closeTime);
        inline.load();
      }
    }
  }, []);

  return (
    <>
      <article className="card-textured rounded-2xl border border-black/8 dark:border-white/10 overflow-hidden shadow-sm">
        {/* Top Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-5 py-3.5 border-b border-black/6 dark:border-white/8">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-(--ink-tertiary) shrink-0">
              {experiment.indexLabel}
            </span>
            <span className="text-(--ink-tertiary)/50" aria-hidden="true">
              /
            </span>
            <h3 className="font-sans text-[15px] sm:text-[16px] font-semibold tracking-tight text-(--ink) truncate">
              {experiment.title}
            </h3>
          </div>

          <span className="font-mono text-[11px] tabular-nums text-(--ink-secondary) shrink-0">
            {experiment.specs.resolution} · {experiment.specs.fps} FPS · {experiment.specs.duration}
          </span>
        </div>

        {/* Pure 16:9 Cinema Stage (zero corner overlays during playback) */}
        <div className="relative w-full aspect-video bg-[#0a0a0c] overflow-hidden" data-sound-silent>
          <video
            ref={inlineVideoRef}
            width={experiment.specs.width}
            height={experiment.specs.height}
            {...({ loading: "lazy" } as Record<string, string>)}
            preload="none"
            playsInline
            controls={hasStarted}
            poster={mediaReady ? experiment.posterSrc : undefined}
            aria-label={experiment.title}
            className="h-full w-full object-contain bg-[#0a0a0c] block"
          >
            <source src={experiment.videoSrc} type="video/mp4" />
            <track
              kind="captions"
              src={experiment.captionsSrc}
              srcLang="en"
              label="English"
            />
            Your browser does not support HTML5 video playback.
          </video>

          {!hasStarted && (
            <button
              type="button"
              onClick={handleStartInline}
              data-sound-silent
              aria-label={`Play ${experiment.title} with sound (${experiment.specs.duration})`}
              className="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--apple-blue)"
            >
              <Image
                src={experiment.posterSrc}
                alt={experiment.posterAlt}
                fill
                sizes="(max-width: 768px) 100vw, 704px"
                unoptimized
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-trom-black/55 via-black/20 to-black/10 transition-opacity duration-300 group-hover:opacity-90"
              />
              <span className="relative z-10 flex flex-col items-center gap-2.5">
                <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/18 backdrop-blur-xl border border-white/28 text-white shadow-xl flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-active:scale-95">
                  <Play size={22} className="translate-x-0.5 fill-current" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1 font-mono text-[11px] font-medium text-white/95 shadow-sm">
                  <Volume2 size={12} aria-hidden="true" />
                  <span>Play with sound · {experiment.specs.duration}</span>
                </span>
              </span>
            </button>
          )}
        </div>

        {/* Workflow Metadata, Stack Pills & Theater Action */}
        <div className="p-4 sm:p-5 space-y-3.5 border-t border-black/6 dark:border-white/8">
          <p className="text-[13.5px] leading-relaxed text-(--ink-secondary) text-pretty">
            {experiment.summary}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <ul className="flex flex-wrap items-center gap-1.5" aria-label="Technologies used">
              {experiment.stack.map((tech) => (
                <li key={tech} className="bryl-pill">
                  {tech}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handleOpenTheater}
              data-sound-silent
              className="apple-button-secondary gap-1.5 min-h-11 sm:min-h-9 shrink-0 whitespace-nowrap"
            >
              <Maximize2 size={13} aria-hidden="true" />
              <span>Theater View</span>
            </button>
          </div>

          {/* Collapsible Scene Breakdown */}
          <details className="group border-t border-black/6 dark:border-white/8 pt-3">
            <summary className="flex items-center justify-between gap-2 text-[12px] font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none min-h-9 py-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)">
              <span>
                Scene Breakdown ({experiment.scenes.length} scenes · {experiment.specs.bpm} BPM)
              </span>
              <ChevronDown
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 group-open:rotate-180 shrink-0"
              />
            </summary>

            <ol className="mt-2.5 divide-y divide-black/6 dark:divide-white/8 border-t border-black/6 dark:border-white/8">
              {experiment.scenes.map((scene) => (
                <li
                  key={scene.index}
                  className="py-2.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-[12.5px]"
                >
                  <div className="flex items-center gap-2 shrink-0 sm:w-44">
                    <span className="font-mono text-[10.5px] tabular-nums text-(--ink-tertiary)">
                      {scene.index}
                    </span>
                    <span className="font-medium text-(--ink)">{scene.label}</span>
                    <span className="font-mono text-[10.5px] tabular-nums text-(--ink-tertiary) ml-auto sm:ml-0">
                      {scene.timestamp}
                    </span>
                  </div>
                  <p className="text-(--ink-secondary) leading-relaxed">{scene.description}</p>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </article>

      {/* Native Top-Layer Theater Dialog */}
      <dialog
        ref={dialogRef}
        {...({ closedby: "any" } as Record<string, string>)}
        aria-labelledby={theaterTitleId}
        data-lenis-prevent
        onClose={handleTheaterClosed}
        className="video-theater-dialog w-[min(94vw,1360px)] max-w-none max-h-[92dvh] m-auto p-0 rounded-2xl border border-white/12 bg-[#0c0c0e] text-white shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-white/10 bg-[#141416] shrink-0">
          <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
            <h2
              id={theaterTitleId}
              className="font-sans text-[14px] sm:text-[15px] font-semibold text-white truncate"
            >
              {experiment.title}
            </h2>
            <span className="font-mono text-[11px] tabular-nums text-white/60 shrink-0">
              {experiment.specs.width}×{experiment.specs.height} · {experiment.specs.fps} FPS · Lossless
            </span>
          </div>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close theater view"
            data-sound-silent
            className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--apple-blue)"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="bg-black flex items-center justify-center min-h-0" data-sound-silent>
          <video
            ref={theaterVideoRef}
            width={experiment.specs.width}
            height={experiment.specs.height}
            controls
            playsInline
            preload={isTheaterOpen ? "metadata" : "none"}
            poster={isTheaterOpen ? experiment.posterSrc : undefined}
            aria-label={`${experiment.title} theater playback`}
            className="w-full max-h-[calc(92dvh-4.5rem)] aspect-video object-contain bg-black block"
          >
            <source src={experiment.videoSrc} type="video/mp4" />
            <track
              kind="captions"
              src={experiment.captionsSrc}
              srcLang="en"
              label="English"
            />
            Your browser does not support HTML5 video playback.
          </video>
        </div>
      </dialog>
    </>
  );
}

export function ExperimentsSection() {
  return (
    <section id="lab" className="animate-fade-up stagger-5 space-y-5">
      <div>
        <h2 className="bryl-label">Agentic Lab</h2>
        <p className="text-[13.5px] sm:text-[14px] text-(--ink-secondary) mt-1.5">
          Experiments and programmatic media built through agentic workflows.
        </p>
      </div>

      <div className="space-y-5">
        {experiments.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </section>
  );
}
