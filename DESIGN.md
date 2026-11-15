# Design System: Apple macOS Sonoma & Glass Craft

## 1. Visual Theme & Atmosphere

The design system is grounded in Apple Human Interface Guidelines (HIG) with macOS Sonoma glass aesthetics — a clean, translucent desktop medium where precision engineering, high-contrast typography, and telemetry data take center stage.

In light mode, the canvas is an airy, neutral surface (`#fbfbfd` to `#f5f5f7`) where translucent frosted cards (`rgba(255, 255, 255, 0.75)`) float over soft hairline borders (`rgba(0, 0, 0, 0.06)`). In dark mode, the canvas deepens to `#0c0c0e`, elevated by frosted dark slate surfaces (`rgba(28, 28, 30, 0.75)` / `#1c1c1e`) and whisper-thin white borders (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.12)`).

Information density is balanced with generous whitespace and 20px–28px continuous squircle geometry. Interactive controls convey tactile feedback through subtle scale transforms (`active:scale-[0.98]`) and synthesized Web Audio micro-interactions.

**Key Characteristics:**
- macOS Sonoma Glass: `backdrop-blur-xl` (16px–24px) paired with semi-transparent card fills.
- Squircles & Smooth Curves: 20px–28px rounded corners mimicking macOS windows and iPadOS widgets.
- Apple Palette: Canonical Apple Blue (`#0071e3` / `#0077ed`) for interactive CTAs, Apple Green (`#34c759`) for active status indicators, and cool system grays.
- Restrained Motion: Lenis momentum-based smooth scrolling, exponential ease-outs (`cubic-bezier(0.22, 1, 0.36, 1)`), zero bouncy or cartoonish physics.
- Micro-interaction Audio: Synthesized oscillator-based sound clicks for subtle tactile feedback with an instant sidebar mute toggle.

---

## 2. Color Palette & Semantic Tokens

### Canvas & Surfaces
| Token | Light Theme | Dark Theme | Role |
| :--- | :--- | :--- | :--- |
| `--page-bg` | `#fbfbfd` | `#0c0c0e` | Deepest viewport canvas |
| `--surface-card` | `rgba(255, 255, 255, 0.75)` | `rgba(28, 28, 30, 0.75)` | Primary card and showcase containers |
| `--surface-glass` | `rgba(255, 255, 255, 0.85)` | `rgba(22, 22, 24, 0.85)` | Sticky navigation and modal backdrops |
| `--surface-elevated`| `#ffffff` | `#2c2c2e` | Active segmented pills, tooltips |

### Text & Ink
| Token | Light Theme | Dark Theme | Role |
| :--- | :--- | :--- | :--- |
| `--ink` | `#1d1d1f` | `#f5f5f7` | High-contrast headings and primary labels |
| `--ink-secondary` | `#6e6e73` | `#86868b` | Body prose, descriptions, and feature lists |
| `--ink-tertiary` | `#86868b` | `#636366` | Timestamps, counter labels, meta tags |

### System Accents
| Token | Value | Role |
| :--- | :--- | :--- |
| `--apple-blue` | `#0071e3` (hover: `#0077ed`) | Primary CTA buttons, active links, focused rings |
| `--apple-green` | `#34c759` | Status telemetry, "Available for Roles" pulse dot |
| `--border-hairline` | `rgba(0,0,0,0.06)` / `rgba(255,255,255,0.08)` | Standard 1px divider and container borders |

---

## 3. Typography & Hierarchy

### Typefaces
- **Primary / UI (`--font-sans`)**: `Onest` (variable, loaded via `next/font/google`), `-apple-system`, `BlinkMacSystemFont`, `ui-sans-serif`, `system-ui`, sans-serif.
- **Editorial Accent (`--font-serif`)**: `Fraunces Italic` (soft variable serif with `"SOFT" 100`, weight 400), `Georgia`, serif. Used exclusively via `.type-accent` (tinted in `--apple-blue`) on at most one keyword per display heading—never in body prose or literal project names.
- **Telemetry / Mono (`--font-mono`)**: `JetBrains Mono`, `SF Mono`, `ui-monospace`, monospace. Powers `.bryl-label` section eyebrows, metric chips, and status counters.

### Type Scale
| Role | Size | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| Hero Display | 40px–48px | Semibold (600) | `-0.025em` | Main hero introduction headline (with single `.type-accent` word) |
| Section Title | 24px–30px | Semibold (600) | `-0.025em` | Major display headings (e.g. Contact, Projects page) |
| Card Headline | 18px–24px | Semibold (600) | `-0.015em` | Project showcase titles, credential headers |
| Body Prose | 15px–16px | Regular (400) | `-0.005em` | Overviews, project summaries, bios |
| Section Eyebrow (`.bryl-label`) | 11px | Medium (500) | `+0.08em` | Uppercase mono section labels (`PROJECTS`, `CONTACT`) |
| Telemetry Chip | 11px–12px | Medium (500) | `+0.02em` | Metric badges, tech stack tags, status flags |

---

## 4. Components & Interactive Patterns

### Project Showcase Cards
- **Container**: `rounded-3xl border border-black/8 dark:border-white/10 bg-white/70 dark:bg-[#1c1c1e]/70 backdrop-blur-xl p-6 sm:p-7`.
- **Telemetry Badge**: Pill badge with `Activity` icon in `--apple-blue` tint.
- **Direct Actions**: Primary action pill (`apple-button-primary`) linking directly to live deployment + secondary button (`apple-button-secondary`) for technical architecture.
- **Media Preview**: `aspect-16/10` squircle screenshot container with subtle hover scale (`scale-[1.02]`).

### Action Buttons & Progress Indicators
- **Primary (`apple-button-primary`)**:
  - Monochrome high-contrast fill (`--btn-primary-bg`: `#18181b` in light, `#f5f5f7` in dark) with inverse text (`#ffffff` in light, `#09090b` in dark).
  - Fully rounded (`rounded-full`), `13px font-medium`, neutral shadow, and `outline: 2px solid var(--ink)` on `:focus-visible`.
  - Subtle hover lift (`scale(1.01)`) and active scale down (`scale(0.98)`), with `@media (forced-colors: active)` system fallbacks.
- **Secondary (`apple-button-secondary`)**:
  - Subtle translucent background (`--fill`), hairline border (`--border`), `--ink` text, and crisper neutral border on hover.
- **Scroll Progress & Deck Indicators**:
  - Top scroll progress bar uses `--progress-fill` (`#18181b` light / `#f5f5f7` dark) over a faint `--progress-track`, and carousel active pills use `--ink` to stay cohesive with the black-and-white aesthetic.
---

## 5. Do's and Don'ts

### Do
- Use continuous squircles (`rounded-2xl` to `rounded-3xl`) for all cards and elevated surfaces.
- Pair translucent background fills with `backdrop-blur-xl` and hairline borders.
- Keep accent colors strictly semantic: Apple Blue for interactions, Apple Green for status telemetry.
- Ground project cards in quantitative engineering metrics (e.g. "60 FPS", "94.8% accuracy", "17 regions").
- Ensure all interactive elements have visible focus rings (`focus-visible:ring-2 focus-visible:ring-(--apple-blue)`).

### Don't
- Don't use harsh pure-black solid cards in dark mode; use translucent `#1c1c1e` with backdrop blur.
- Don't bury live demos and source code behind subpage navigations; surface direct external links on primary cards.
- Don't introduce arbitrary neon colors or inconsistent gradient text.
- Don't use bouncy or cartoonish animation curves.
