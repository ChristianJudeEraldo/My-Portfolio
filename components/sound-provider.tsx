"use client"

import { createContext, useContext, useCallback, useEffect, useRef, useState, type ReactNode } from "react"

// ─── Sound Definitions (Cuelume-inspired synthesized UI sounds) ───
// Each sound is defined as layers of oscillators/noise, synthesized
// in real-time via the Web Audio API — no audio files needed.

type ToneLayer = {
  kind: "tone"
  waveform: OscillatorType
  frequency: number
  glideTo?: number
  glideTime?: number
  detune?: number
  offset?: number
  attack: number
  decay: number
  peak: number
}

type NoiseLayer = {
  kind: "noise"
  filterType: BiquadFilterType
  filterFrequency: number
  filterQ?: number
  offset?: number
  attack: number
  decay: number
  peak: number
}

type SoundLayer = ToneLayer | NoiseLayer

type ShimmerConfig = {
  delay: number
  feedback: number
  wet: number
  lowpass: number
}

type SoundDef = {
  masterGain: number
  layers: SoundLayer[]
  shimmer?: ShimmerConfig
}

const SOUNDS: Record<string, SoundDef> = {
  chime: {
    masterGain: 0.5,
    layers: [
      { kind: "tone", waveform: "sine", frequency: 1046.5, attack: 0.006, decay: 0.22, peak: 0.09 },
      { kind: "tone", waveform: "sine", frequency: 1568, offset: 0.09, attack: 0.006, decay: 0.26, peak: 0.08 },
    ],
    shimmer: { delay: 0.12, feedback: 0.25, wet: 0.18, lowpass: 4000 },
  },
  droplet: {
    masterGain: 0.55,
    layers: [
      { kind: "tone", waveform: "sine", frequency: 1200, glideTo: 550, glideTime: 0.14, attack: 0.004, decay: 0.2, peak: 0.075 },
    ],
    shimmer: { delay: 0.09, feedback: 0.2, wet: 0.15, lowpass: 3000 },
  },
  tick: {
    masterGain: 0.4,
    layers: [
      { kind: "noise", filterType: "bandpass", filterFrequency: 5400, filterQ: 1.8, attack: 0.001, decay: 0.018, peak: 0.14 },
      { kind: "tone", waveform: "sine", frequency: 2600, attack: 0.001, decay: 0.012, peak: 0.018 },
    ],
  },
  press: {
    masterGain: 0.4,
    layers: [
      { kind: "noise", filterType: "bandpass", filterFrequency: 1700, filterQ: 1.4, attack: 0.001, decay: 0.02, peak: 0.13 },
    ],
  },
  release: {
    masterGain: 0.4,
    layers: [
      { kind: "noise", filterType: "bandpass", filterFrequency: 4600, filterQ: 1.8, attack: 0.001, decay: 0.016, peak: 0.12 },
      { kind: "tone", waveform: "sine", frequency: 3200, offset: 0.006, attack: 0.001, decay: 0.05, peak: 0.02 },
    ],
  },
  toggle: {
    masterGain: 0.4,
    layers: [
      { kind: "noise", filterType: "bandpass", filterFrequency: 2200, filterQ: 1.6, attack: 0.001, decay: 0.016, peak: 0.12 },
      { kind: "noise", filterType: "bandpass", filterFrequency: 3800, filterQ: 1.6, offset: 0.024, attack: 0.001, decay: 0.02, peak: 0.1 },
    ],
  },
  success: {
    masterGain: 0.5,
    layers: [
      { kind: "tone", waveform: "sine", frequency: 880, attack: 0.004, decay: 0.09, peak: 0.06 },
      { kind: "tone", waveform: "sine", frequency: 1108.73, offset: 0.06, attack: 0.004, decay: 0.1, peak: 0.06 },
      { kind: "tone", waveform: "sine", frequency: 1318.51, offset: 0.12, attack: 0.004, decay: 0.18, peak: 0.07 },
    ],
    shimmer: { delay: 0.1, feedback: 0.22, wet: 0.16, lowpass: 4500 },
  },
}

type SoundName = keyof typeof SOUNDS

// ─── Web Audio synthesis engine ───

const TAIL = 0.05
const EPSILON = 0.001

function playTone(ctx: AudioContext, dest: AudioNode, layer: ToneLayer, startTime: number) {
  const osc = ctx.createOscillator()
  osc.type = layer.waveform
  osc.frequency.setValueAtTime(layer.frequency, startTime)
  if (layer.detune) osc.detune.value = layer.detune
  if (layer.glideTo !== undefined) {
    const glideTime = layer.glideTime ?? layer.attack + layer.decay
    osc.frequency.exponentialRampToValueAtTime(layer.glideTo, startTime + glideTime)
  }
  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.0001, startTime)
  gain.gain.exponentialRampToValueAtTime(layer.peak, startTime + layer.attack)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + layer.attack + layer.decay)
  osc.connect(gain).connect(dest)
  osc.start(startTime)
  osc.stop(startTime + layer.attack + layer.decay + TAIL)
}

function playNoise(ctx: AudioContext, dest: AudioNode, layer: NoiseLayer, startTime: number) {
  const duration = layer.attack + layer.decay + TAIL
  const sampleCount = Math.max(1, Math.floor(duration * ctx.sampleRate))
  const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < sampleCount; i++) data[i] = 2 * Math.random() - 1

  const source = ctx.createBufferSource()
  source.buffer = buffer

  const filter = ctx.createBiquadFilter()
  filter.type = layer.filterType
  filter.frequency.value = layer.filterFrequency
  if (layer.filterQ !== undefined) filter.Q.value = layer.filterQ

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.0001, startTime)
  gain.gain.exponentialRampToValueAtTime(layer.peak, startTime + layer.attack)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + layer.attack + layer.decay)

  source.connect(filter).connect(gain).connect(dest)
  source.start(startTime)
  source.stop(startTime + duration)
}

function addShimmer(
  ctx: AudioContext,
  source: AudioNode,
  dest: AudioNode,
  shimmer: ShimmerConfig,
) {
  const delay = ctx.createDelay(1)
  delay.delayTime.value = shimmer.delay
  const lp = ctx.createBiquadFilter()
  lp.type = "lowpass"
  lp.frequency.value = shimmer.lowpass
  const fb = ctx.createGain()
  fb.gain.value = shimmer.feedback
  const wet = ctx.createGain()
  wet.gain.value = shimmer.wet

  source.connect(delay)
  delay.connect(lp)
  lp.connect(fb)
  fb.connect(delay) // feedback loop
  lp.connect(wet)
  wet.connect(dest)

  return [delay, lp, fb, wet]
}

function synthesize(ctx: AudioContext, def: SoundDef) {
  const now = ctx.currentTime
  const master = ctx.createGain()
  master.gain.value = def.masterGain
  master.connect(ctx.destination)

  const shimmerNodes = def.shimmer
    ? addShimmer(ctx, master, ctx.destination, def.shimmer)
    : []

  for (const layer of def.layers) {
    const t = now + (layer.offset ?? 0)
    if (layer.kind === "tone") playTone(ctx, master, layer, t)
    else playNoise(ctx, master, layer, t)
  }

  // Calculate total duration for cleanup
  const maxLayerDur = Math.max(...def.layers.map((l) => (l.offset ?? 0) + l.attack + l.decay + TAIL))
  const shimmerTail = def.shimmer
    ? def.shimmer.feedback >= 1
      ? def.shimmer.delay
      : def.shimmer.delay * (1 + Math.ceil(Math.log(EPSILON) / Math.log(def.shimmer.feedback)))
    : 0
  const totalMs = (maxLayerDur + shimmerTail + TAIL) * 1000

  setTimeout(() => {
    master.disconnect()
    for (const node of shimmerNodes) node.disconnect()
  }, totalMs)
}

// ─── React Context ───

type SoundContextValue = {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
  play: (name: string) => void
}

const SoundContext = createContext<SoundContextValue>({
  enabled: false,
  setEnabled: () => {},
  play: () => {},
})

export const useSound = () => useContext(SoundContext)

const STORAGE_KEY = "site-sounds-enabled"

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false)
  const enabledRef = useRef(false)
  const ctxRef = useRef<AudioContext | null>(null)

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === "true") {
        setEnabledState(true)
        enabledRef.current = true
      }
    } catch {}
  }, [])

  const getAudioContext = useCallback(() => {
    if (ctxRef.current) return ctxRef.current
    if (typeof window === "undefined") return null
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AudioCtx) return null
    try {
      ctxRef.current = new AudioCtx()
      return ctxRef.current
    } catch {
      return null
    }
  }, [])

  const play = useCallback(
    (name: string) => {
      if (!enabledRef.current) return
      const def = SOUNDS[name as SoundName]
      if (!def) return
      const ctx = getAudioContext()
      if (!ctx) return

      if (ctx.state === "running") {
        synthesize(ctx, def)
      } else {
        try {
          ctx.resume().then(() => {
            if (ctx.state === "running") synthesize(ctx, def)
          })
        } catch {}
      }
    },
    [getAudioContext],
  )

  const setEnabled = useCallback(
    (value: boolean) => {
      setEnabledState(value)
      enabledRef.current = value
      try {
        localStorage.setItem(STORAGE_KEY, String(value))
      } catch {}
    },
    [],
  )

  // Expose globally for non-React code
  useEffect(() => {
    ;(window as unknown as { siteSound: { play: typeof play; setEnabled: typeof setEnabled; isEnabled: () => boolean } }).siteSound = {
      play,
      setEnabled,
      isEnabled: () => enabled,
    }
  }, [play, setEnabled, enabled])

  // ─── Auto-wire interactive elements with hover/press/release sounds ───
  useEffect(() => {
    if (!enabled) return

    const HOVER_THROTTLE = 150
    let lastHoverTime = -Infinity

    function handlePointerEnter(e: PointerEvent) {
      if (e.pointerType !== "mouse") return
      const target = (e.target as Element)?.closest?.("a[href], button:not([disabled]), [role='button'], [role='tab'], summary")
      if (!target) return
      if (target.closest("[data-sound-silent]")) return
      const now = performance.now()
      if (now - lastHoverTime < HOVER_THROTTLE) return
      lastHoverTime = now
      play("tick")
    }

    function handlePointerDown(e: PointerEvent) {
      if (e.pointerType !== "mouse") return
      const target = (e.target as Element)?.closest?.("a[href], button:not([disabled]), [role='button']")
      if (!target) return
      if (target.closest("[data-sound-silent]") || target.closest("[data-sound-toggle]")) return
      play("press")
    }

    function handlePointerUp(e: PointerEvent) {
      if (e.pointerType !== "mouse") return
      const target = (e.target as Element)?.closest?.("a[href], button:not([disabled]), [role='button']")
      if (!target) return
      if (target.closest("[data-sound-silent]") || target.closest("[data-sound-toggle]")) return
      play("release")
    }

    document.addEventListener("pointerenter", handlePointerEnter, true)
    document.addEventListener("pointerdown", handlePointerDown, true)
    document.addEventListener("pointerup", handlePointerUp, true)

    return () => {
      document.removeEventListener("pointerenter", handlePointerEnter, true)
      document.removeEventListener("pointerdown", handlePointerDown, true)
      document.removeEventListener("pointerup", handlePointerUp, true)
    }
  }, [enabled, play])

  return (
    <SoundContext value={{ enabled, setEnabled, play }}>
      {children}
    </SoundContext>
  )
}
