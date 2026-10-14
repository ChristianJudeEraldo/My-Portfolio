# Portfolio UI Cleanup Plan (Agent Instructions)

## Goal
Make the portfolio UI cleaner, calmer, and more scannable by removing redundant labels, filler copy, and duplicate controls—while **strictly preserving** the existing functionality (Lenis smooth scroll, Web Audio sound effects, circular theme reveal, contact server action, and project routing) and the Apple HIG / Bryl-minimal vibe.

---

## Core UI Principles to Follow
1. **One Header Per Section:** Never stack a micro-label (`bryl-label`), a large `<h2>`, a right-aligned pill badge, and an instructional subtitle all on the same section. Use a single clean section header.
2. **Cut Self-Evident Copy:** Do not explain how to use basic UI (e.g., *"Click any project below to inspect..."*) or what well-known tools do (e.g., *"HTML5 — Semantic Markup & a11y"*).
3. **One Primary Action Per Resource:** Avoid duplicate links pointing to the same destination in the same view (e.g., two Resume buttons in the hero, or two Live App CTAs on project pages).
4. **Preserve All Interactive Hooks:** Keep all `id` attributes (`#intro`, `#about`, `#skills`, `#projects`, `#gallery`, `#contact`), `data-theme-toggle`, `data-sound-toggle`, and component imports intact.

---

## File-by-File Execution Tasks

### 1. `app/page.tsx`

#### A. Hero Section (`#intro`)
- **Tighten Bio Copy:** Keep the `<h1>` as-is (`Hi, I am Jude. I build fast, reliable web systems and applied AI.`). Shorten the `<p>` subtitle to a single crisp line:
  > *"Computer Engineering graduate focused on full-stack web applications and applied machine learning."*
- **Deduplicate Action Buttons:**
  - Keep **Explore Work ↓** (`apple-button-primary`).
  - Keep **Resume ↗** (`apple-button-secondary` opening `/resume.pdf` in a new tab).
  - **Remove** the duplicate `PDF ↓` download button and the fourth `Contact ↗` text button (Contact is already visible in the sidebar/navbar).

#### B. Background & Credentials (`#about`)
- **Clean Section Header:** Keep `<p className="bryl-label">Background & Credentials</p>`. Remove the redundant `Profile & Education` pill badge on the right.
- **Simplify Left Card (Education & Certifications):**
  - Keep the degree title (`B.S. in Computer Engineering`) and the two `Pearson VUE Certified` rows (`Python Programming`, `Database Management`).
  - **Remove** the filler paragraph (*"Software-focused engineer building high-performance systems, backed by a BSCPE foundation..."*) and the redundant `"Graduate"` sub-label.
- **Simplify Right Card (Core Focus):**
  - Replace the three verbose text blocks (`Specialization`, `Experience & Focus`, `Collaboration`) and the bottom block-quote with 3 concise, scannable bullet/row items:
    1. **Full-Stack Systems** — Next.js, React, TypeScript & relational databases
    2. **Applied AI / ML** — Computer vision (CNN) & LLM data pipelines
    3. **Experience** — 3+ years building academic research & production web apps
  - **Remove** the italic quote footer (`"Refining how ideas move from prototype to reliable product."`).

#### C. Tech Stack Header (`#skills`)
- Keep `<p className="bryl-label">Tech Stack</p>`.
- **Remove** the redundant `<h2>Core Technologies & Toolchain</h2>` below it so the filter bar sits cleanly under the section label.

#### D. Contact Section (`#contact`)
- **Clean Header:** Keep `<p className="bryl-label">Contact</p>` and `<h2>Let's build something meaningful.</h2>`. **Remove** the long paragraph underneath (`"If you're hiring, collaborating..."`).
- **Left Column Cleanup:**
  - **Remove** the `<h3>Reach Me Directly</h3>` sub-heading (the contact list is self-explanatory).
  - **Remove** the `"Technical Write-ups — Coming Soon"` status box at the bottom of the contact links.
- **Right Column Cleanup:**
  - **Remove** the `<h3>Send a Quick Message</h3>` heading inside the `<form>` so the form inputs start cleanly at the top of the card.

---

### 2. `components/tech-stack.tsx`
- **Remove Role Subtitles:** Inside the tech grid cards, display only the **Icon**, the **Tech Name** (`tech.name`), and the **Certified badge** (if `tech.certified` is true).
- **Remove** the `<p>{tech.role}</p>` line (*"Component Architecture"*, *"Semantic Markup & a11y"*, etc.) from the JSX render. This immediately cuts visual text density in half and makes the pills look sleek and compact.

---

### 3. `components/projects-section.tsx` & `components/project-row.tsx`
- **In `components/projects-section.tsx`:**
  - Keep `<p className="bryl-label">Selected Work</p>` (or `Featured Work`).
  - **Remove** the `3 Engineering Projects` count pill, the `<h2>Production Systems & Research</h2>` sub-heading, and the instructional `<p>Click any project below to inspect...</p>`.
- **In `components/project-row.tsx`:**
  - Keep the Squircle Thumbnail, `project.shortTitle`, 1-line `project.summary` (`line-clamp-1`), `project.tag` pill on the right, and the `ChevronRight` icon.
  - **Remove** `project.badge` from the row title so each row only has one pill tag on the right instead of competing badges on both sides.

---

### 4. `components/project-carousel.tsx` & `components/project-detail-content.tsx`
- **In `components/project-carousel.tsx`:**
  - **Remove** the `<span>Temporary placeholder · User image drop-in ready</span>` notice under the image caption.
- **In `components/project-detail-content.tsx`:**
  - Keep the top `Visit Live` button in the header.
  - **Remove** the duplicate bottom CTA banner (`"Experience {project.shortTitle} in Production"`).
  - Combine or trim `Overview` to show only the first paragraph (`project.overview[0]`) or keep paragraphs concise, and limit `features` to the top 3–4 items so the detail page reads like an executive summary rather than a wall of text.

---

## Verification Checklist
- [ ] Run `npm run build` or `npm run lint` to ensure no unused imports (e.g., unused Lucide icons after removing elements) break TypeScript or ESLint.
- [ ] Verify sidebar navigation links (`#about`, `#skills`, `#projects`, `#gallery`, `#contact`) still scroll smoothly to their sections.
- [ ] Verify dark/light mode circular reveal and UI sound toggles work identically.