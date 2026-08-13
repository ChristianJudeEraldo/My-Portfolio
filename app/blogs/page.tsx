import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs — Jude",
  description: "Thoughts, write-ups, and technical deep-dives by Jude. Coming soon.",
};

export default function BlogsPage() {
  return (
    <div className="pb-20 pt-8 animate-fade-up stagger-1">
      <section className="space-y-8">
        <div className="space-y-6">
          <p className="bryl-label">01 &mdash; BLOGS</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-4xl text-(--ink)">
            blogs coming soon!
          </h1>
          <p className="max-w-xl text-[17px] font-serif leading-relaxed text-(--gray-500)">
            I&apos;m working on something here. Check back soon for write-ups,
            technical deep-dives, and notes from the field.
          </p>
        </div>

        <div className="bryl-hairline animate-fade-up stagger-2" />

        <div className="animate-fade-up stagger-3 flex items-center gap-4 text-(--gray-400)">
          <span className="font-mono text-[11px] uppercase tracking-widest">
            Under Construction
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-(--gray-300) animate-pulse" />
        </div>
      </section>
    </div>
  );
}
