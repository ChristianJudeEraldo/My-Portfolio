import { Mail, Globe, GitBranch, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl pb-20 pt-6 md:pt-10">
      <section className="space-y-4 border-b border-foreground/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Let&apos;s build something meaningful.
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
          If you&apos;re hiring, collaborating, or discussing a project, I&apos;m open to
          conversations around full-stack web development, AI-integrated systems, and
          product-focused engineering.
        </p>
      </section>

      <section className="grid gap-12 pt-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">Reach Me Directly</h2>
            <p className="text-sm leading-relaxed text-foreground/65">
              I usually respond within 24-48 hours. For faster coordination, email is the
              best channel.
            </p>
          </div>

          <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
            <li>
              <a
                href="mailto:christian.eraldo@lpunetwork.edu.ph"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">Email</span>
                </div>
                <span className="text-xs text-foreground/60 group-hover:text-foreground/80">
                  christian.eraldo@lpunetwork.edu.ph
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <span className="text-xs text-foreground/60 group-hover:text-foreground/80">
                  christian-jude-eraldo-012718251
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristianJudeEraldo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <GitBranch size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <span className="text-xs text-foreground/60 group-hover:text-foreground/80">
                  @ChristianJudeEraldo
                </span>
              </a>
            </li>
            <li className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Location</span>
              </div>
              <span className="text-xs text-foreground/60">Philippines</span>
            </li>
          </ul>
        </div>

        <form className="space-y-5 border border-foreground/10 p-6 md:p-8">
          <h2 className="text-lg font-semibold tracking-tight">Send a Message</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full border border-foreground/15 bg-background px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full border border-foreground/15 bg-background px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me briefly about your project or opportunity."
              className="w-full resize-none border border-foreground/15 bg-background px-4 py-3 text-sm leading-relaxed focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}