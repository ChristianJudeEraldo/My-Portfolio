"use client";

import { useState } from "react";
import { Mail, Globe, GitBranch, MapPin, Send, Loader2 } from "lucide-react";
import { sendEmail } from "../actions/sendEmail";
import { Toaster, toast } from "sonner";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Message sent successfully! I'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }

    setIsPending(false);
  }

  return (
    <div className="pb-20 pt-6 md:pt-10">
      <Toaster position="bottom-right" theme="dark" />
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

        <form onSubmit={handleSubmit} className="linear-card space-y-5 p-6 md:p-8">
          <h2 className="text-[20px] font-[590] tracking-[-0.012em]">Send a Message</h2>
          
          {/* Honeypot field: Hidden from users, bots will try to fill it. */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[12px] font-[510] uppercase tracking-[0.14em] text-(--text-tertiary)">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
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
                name="email"
                required
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
              name="message"
              required
              rows={5}
              placeholder="Tell me briefly about your project or opportunity."
              className="w-full resize-none rounded-md border border-(--border-standard) bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] leading-relaxed text-(--text-secondary) outline-none focus:border-(--accent)"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="linear-button linear-button-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}