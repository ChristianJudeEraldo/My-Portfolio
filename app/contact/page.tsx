import { Mail, Globe, GitBranch, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20 pt-6 md:pt-10">
      <section className="space-y-4 border-b border-(--border-subtle) pb-8">
        <p className="linear-eyebrow">
          Contact
        </p>
        <h1 className="max-w-3xl text-[40px] font-[510] tracking-[-0.04em] md:text-[56px]">
          Let&apos;s build something meaningful.
        </h1>
        <p className="max-w-3xl text-[16px] leading-relaxed linear-muted md:text-[18px]">
          If you&apos;re hiring, collaborating, or discussing a project, I&apos;m open to
          conversations around full-stack web development, AI-integrated systems, and
          product-focused engineering.
        </p>
      </section>

      <section className="grid gap-12 pt-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-[20px] font-[590] tracking-[-0.012em]">Reach Me Directly</h2>
            <p className="text-[15px] leading-relaxed linear-muted">
              I usually respond within 24-48 hours. For faster coordination, email is the
              best channel.
            </p>
          </div>

          <ul className="linear-card overflow-hidden">
            <li>
              <a
                href="mailto:christian.eraldo@lpunetwork.edu.ph"
                className="group flex items-center justify-between gap-4 border-b border-(--border-subtle) px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-(--accent)" />
                  <span className="text-[14px] font-[510]">Email</span>
                </div>
                <span className="text-[12px] text-(--text-tertiary) group-hover:text-(--text-secondary)">
                  christian.eraldo@lpunetwork.edu.ph
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-(--border-subtle) px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-(--accent)" />
                  <span className="text-[14px] font-[510]">LinkedIn</span>
                </div>
                <span className="text-[12px] text-(--text-tertiary) group-hover:text-(--text-secondary)">
                  christian-jude-eraldo-012718251
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristianJudeEraldo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-(--border-subtle) px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <GitBranch size={18} className="text-(--accent)" />
                  <span className="text-[14px] font-[510]">GitHub</span>
                </div>
                <span className="text-[12px] text-(--text-tertiary) group-hover:text-(--text-secondary)">
                  @ChristianJudeEraldo
                </span>
              </a>
            </li>
            <li className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-(--accent)" />
                <span className="text-[14px] font-[510]">Location</span>
              </div>
              <span className="text-[12px] text-(--text-tertiary)">Philippines</span>
            </li>
          </ul>
        </div>

        <form className="linear-card space-y-5 p-6 md:p-8">
          <h2 className="text-[20px] font-[590] tracking-[-0.012em]">Send a Message</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full rounded-md border border-(--border-standard) bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] text-(--text-secondary) outline-none focus:border-(--accent)"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-md border border-(--border-standard) bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] text-(--text-secondary) outline-none focus:border-(--accent)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me briefly about your project or opportunity."
              className="w-full resize-none rounded-md border border-(--border-standard) bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] leading-relaxed text-(--text-secondary) outline-none focus:border-(--accent)"
            />
          </div>

          <button
            type="button"
            className="linear-button linear-button-primary w-full gap-2"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}